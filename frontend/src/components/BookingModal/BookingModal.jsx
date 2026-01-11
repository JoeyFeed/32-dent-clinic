
import { useState, useEffect } from 'react'
import { supabase } from '../../supabaseClient'
import styles from './BookingModal.module.css'
import { FaTimes } from 'react-icons/fa'
import { generateTimeSlots } from '../../utils'

import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { ru } from 'date-fns/locale';
registerLocale('ru', ru)

const BookingModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: ''
    })
    const [status, setStatus] = useState('idle') // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('')
    const [bookedSlots, setBookedSlots] = useState([])
    const [isLoadingSlots, setIsLoadingSlots] = useState(false)
    const [selectedDate, setSelectedDate] = useState(null)

    const timeSlots = generateTimeSlots()

    // Fetch booked slots when date changes
    useEffect(() => {
        if (!selectedDate || !isOpen) return;

        // Convert Date object to YYYY-MM-DD string for DB query
        // Adjust for timezone offset to avoid "yesterday" issues
        const offset = selectedDate.getTimezoneOffset()
        const date = new Date(selectedDate.getTime() - (offset * 60 * 1000))
        const dateString = date.toISOString().split('T')[0]

        // Update formData.date with the string
        setFormData(prev => ({ ...prev, date: dateString }))

        const fetchBookedSlots = async () => {
            setIsLoadingSlots(true)
            setBookedSlots([]) // Clear previous slots while loading
            try {
                const { data, error } = await supabase
                    .from('appointments')
                    .select('appointment_time')
                    .eq('appointment_date', dateString)

                if (error) throw error

                // Extract times from the result and normalize to HH:MM
                const taken = data.map(app => app.appointment_time.slice(0, 5))
                setBookedSlots(taken)
            } catch (error) {
                console.error('Error fetching slots:', error)
            } finally {
                setIsLoadingSlots(false)
            }
        }

        fetchBookedSlots()
    }, [selectedDate, isOpen])

    if (!isOpen) return null

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setFormData(prev => ({ ...prev, time: '' })) // Reset time when date changes
    }

    const selectTime = (time) => {
        setFormData({ ...formData, time })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!formData.time || !formData.date) return
        setStatus('loading')

        try {
            const { error } = await supabase
                .from('appointments')
                .insert([
                    {
                        patient_name: formData.name,
                        patient_phone: formData.phone,
                        appointment_date: formData.date,
                        appointment_time: formData.time
                    }
                ])

            if (error) throw error

            setStatus('success')
        } catch (error) {
            console.error('Error booking:', error)
            setStatus('error')
            setErrorMessage(error.message || 'Неизвестная ошибка')
        }
    }

    const handleClose = () => {
        onClose()
        setTimeout(() => {
            setStatus('idle')
            setFormData({ name: '', phone: '', date: '', time: '' })
            setSelectedDate(null)
            setBookedSlots([])
            setErrorMessage('')
        }, 300)
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={handleClose}>
                    <FaTimes />
                </button>

                {status === 'success' ? (
                    <div className={styles.successMessage}>
                        <h3>Спасибо за заявку!</h3>
                        <p>Вы записаны на {formData.date} в {formData.time}.</p>
                        <p>Мы свяжемся с вами в ближайшее время для подтверждения.</p>
                        <button className={styles.submitButton} onClick={handleClose} style={{ marginTop: '1rem' }}>
                            Отлично
                        </button>
                    </div>
                ) : (
                    <>
                        <h2 className={styles.title}>Запись на прием</h2>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.field}>
                                <label>Ваше имя</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Иван Иванов"
                                />
                            </div>
                            <div className={styles.field}>
                                <label>Телефон</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+7 (999) 000-00-00"
                                />
                            </div>

                            <div className={styles.field}>
                                <label>Дата приема</label>
                                <div className={styles.datePickerWrapper}>
                                    <DatePicker
                                        selected={selectedDate}
                                        onChange={handleDateChange}
                                        dateFormat="dd.MM.yyyy"
                                        minDate={new Date()}
                                        locale="ru"
                                        placeholderText="Выберите дату"
                                        className={styles.dateInput}
                                        wrapperClassName={styles.fullWidth}
                                    />
                                </div>
                            </div>

                            {selectedDate && (
                                <div className={styles.field}>
                                    <label>Выберите время {isLoadingSlots && <span style={{ fontSize: '0.8em', fontWeight: 'normal' }}>(проверяем...)</span>}</label>
                                    <div className={styles.timeGrid}>
                                        {timeSlots.map(slot => {
                                            const isTaken = bookedSlots.includes(slot)
                                            // If taken, do not render anything
                                            if (isTaken) return null;

                                            const isSelected = formData.time === slot
                                            return (
                                                <button
                                                    key={slot}
                                                    type="button"
                                                    className={`${styles.timeSlot} ${isSelected ? styles.selected : ''}`}
                                                    onClick={() => selectTime(slot)}
                                                >
                                                    {slot}
                                                </button>
                                            )
                                        })}
                                        {/* Show message if all slots are taken */}
                                        {bookedSlots.length >= timeSlots.length && (
                                            <p className={styles.noSlots}>Нет свободного времени на эту дату</p>
                                        )}
                                    </div>
                                    {formData.time && <input type="hidden" name="time" value={formData.time} required />}
                                </div>
                            )}

                            <button
                                type="submit"
                                className={styles.submitButton}
                                disabled={status === 'loading' || !formData.time}
                            >
                                {status === 'loading' ? 'Отправка...' : 'Записаться'}
                            </button>

                            <div className={styles.separator}>
                                <span>или позвоните нам</span>
                            </div>

                            <a href="tel:+79204482024" className={styles.callButton}>
                                Позвонить
                            </a>

                            {status === 'error' && (
                                <div className={styles.error}>
                                    <p>Ошибка: {errorMessage}</p>
                                    <p style={{ fontSize: '0.8em', marginTop: '0.5rem' }}>Проверьте консоль или пришлите скриншот этого сообщения разработчику.</p>
                                </div>
                            )}
                        </form>
                    </>
                )}
            </div>
        </div>
    )
}

export default BookingModal
