
import { useState, useEffect } from 'react'
import { supabase } from '../../supabaseClient'
import styles from './Admin.module.css'

const Dashboard = ({ session }) => {
    const [appointments, setAppointments] = useState([])
    const [loading, setLoading] = useState(true)
    const [loadingAction, setLoadingAction] = useState(null)

    useEffect(() => {
        fetchAppointments()
    }, [])

    const fetchAppointments = async () => {
        setLoading(true)
        try {
            const { data, error } = await supabase
                .from('appointments')
                .select('*')
                .order('appointment_date', { ascending: true })
                .order('appointment_time', { ascending: true })

            if (error) throw error
            setAppointments(data)
        } catch (error) {
            console.error('Error fetching appointments:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleLogout = async () => {
        await supabase.auth.signOut()
    }

    const deleteAppointment = async (id) => {
        if (!window.confirm('Вы уверены, что хотите удалить эту запись?')) return

        const { error } = await supabase
            .from('appointments')
            .delete()
            .eq('id', id)

        if (error) {
            alert('Ошибка при удалении')
            console.error(error)
        } else {
            fetchAppointments()
        }
    }

    const updateStatus = async (id, newStatus) => {
        setLoadingAction(id)
        const { error } = await supabase
            .from('appointments')
            .update({ status: newStatus })
            .eq('id', id)

        if (error) {
            console.error('Error updating status:', error)
            alert('Ошибка обновления статуса')
        } else {
            fetchAppointments()
        }
        setLoadingAction(null)
    }

    // Helper to group appointments by date
    const groupedAppointments = appointments.reduce((groups, appointment) => {
        const date = appointment.appointment_date
        if (!groups[date]) {
            groups[date] = []
        }
        groups[date].push(appointment)
        return groups
    }, {})

    // Sort dates
    const sortedDates = Object.keys(groupedAppointments).sort()

    const getStatusLabel = (status) => {
        switch (status) {
            case 'confirmed': return <span className={styles.badgeConfirmed}>Подтверждено</span>
            case 'rejected': return <span className={styles.badgeRejected}>Отменено</span>
            default: return <span className={styles.badgePending}>Ожидает</span>
        }
    }

    // Format phone for links (remove non-digits)
    const formatPhoneForLink = (phone) => {
        return phone ? phone.replace(/\D/g, '') : ''
    }

    return (
        <div className={styles.dashboard}>
            <header className={styles.header}>
                <h1>Админ-панель</h1>
                <button onClick={handleLogout} className={styles.logoutButton}>Выйти</button>
            </header>

            <div className={styles.content}>
                {loading ? (
                    <p>Загрузка записей...</p>
                ) : appointments.length === 0 ? (
                    <p>Записей пока нет.</p>
                ) : (
                    <div className={styles.tableWrapper}>
                        {sortedDates.map(date => (
                            <div key={date} className={styles.dateGroup}>
                                <h3 className={styles.dateHeader}>
                                    {new Date(date).toLocaleDateString('ru-RU', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </h3>
                                <table className={styles.table}>
                                    <thead>
                                        <tr>
                                            <th>Время</th>
                                            <th>Имя</th>
                                            <th>Телефон</th>
                                            <th>Связь</th>
                                            <th>Статус</th>
                                            <th>Действия</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {groupedAppointments[date].map(app => (
                                            <tr key={app.id} className={app.status === 'rejected' ? styles.rowRejected : ''}>
                                                <td className={styles.timeCell}>{app.appointment_time.slice(0, 5)}</td>
                                                <td>{app.patient_name}</td>
                                                <td>{app.patient_phone}</td>
                                                <td className={styles.messengers}>
                                                    <a
                                                        href={`https://wa.me/${formatPhoneForLink(app.patient_phone)}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        title="WhatsApp"
                                                        className={styles.messengerLink}
                                                    >
                                                        WA
                                                    </a>
                                                    <a
                                                        href={`https://t.me/+${formatPhoneForLink(app.patient_phone)}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        title="Telegram"
                                                        className={styles.messengerLink}
                                                    >
                                                        TG
                                                    </a>
                                                    <a
                                                        href={`tel:${app.patient_phone}`}
                                                        title="Позвонить"
                                                        className={styles.messengerLink}
                                                    >
                                                        📞
                                                    </a>
                                                </td>
                                                <td>{getStatusLabel(app.status)}</td>
                                                <td className={styles.actionsCell}>
                                                    {loadingAction === app.id ? (
                                                        <span>...</span>
                                                    ) : (
                                                        <>
                                                            {app.status !== 'confirmed' && (
                                                                <button
                                                                    onClick={() => updateStatus(app.id, 'confirmed')}
                                                                    className={styles.btnConfirm}
                                                                    title="Подтвердить"
                                                                >
                                                                    ✓
                                                                </button>
                                                            )}
                                                            {app.status !== 'rejected' && (
                                                                <button
                                                                    onClick={() => updateStatus(app.id, 'rejected')}
                                                                    className={styles.btnReject}
                                                                    title="Отклонить"
                                                                >
                                                                    ✕
                                                                </button>
                                                            )}
                                                            <button
                                                                onClick={() => deleteAppointment(app.id)}
                                                                className={styles.deleteButton}
                                                                title="Удалить"
                                                            >
                                                                🗑️
                                                            </button>
                                                        </>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Dashboard
