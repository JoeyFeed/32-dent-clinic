import { FaTooth, FaMagic, FaSyringe, FaChild, FaXRay } from 'react-icons/fa'
import styles from './Services.module.css'

const ServiceCard = ({ icon, title, notes, items }) => (
    <div className={styles.card}>
        <div className={styles.cardIcon}>{icon}</div>
        <h3 className={styles.cardTitle}>{title}</h3>
        {notes && <p className={styles.cardNotes}>{notes}</p>}
        <ul className={styles.cardList}>
            {items.map((item, index) => (
                <li key={index} className={styles.cardListItem}>
                    <span className={styles.itemName}>{item.name}</span>
                    {item.price && <span className={styles.itemPrice}>{item.price}</span>}
                </li>
            ))}
        </ul>
    </div>
)

const Services = ({ onBookingClick }) => {
    return (
        <section id="services" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Наши услуги</h2>
                    <p className={styles.subtitle}>
                        Мы предлагаем полный спектр стоматологических услуг.
                        От простой чистки до сложной имплантации.
                    </p>
                </div>

                <div className={styles.grid}>
                    <ServiceCard
                        icon={<FaTooth size={32} />}
                        title="Терапия"
                        items={[
                            { name: 'Лечение кариеса', price: 'от 5 000 ₽' },
                            { name: 'Лечение пульпита', price: 'от 7 000 ₽' },
                            { name: 'Пломбирование каналов', price: 'от 4 000 ₽' },
                            { name: 'Лечение периодонтита', price: 'от 8 000 ₽' }
                        ]}
                    />
                    <ServiceCard
                        icon={<FaMagic size={32} />}
                        title="Ортопедия"
                        items={[
                            { name: 'Коронки и мосты', price: 'от 12 000 ₽' },
                            { name: 'Виниры', price: 'от 25 000 ₽' },
                            { name: 'Протезирование на имплантах', price: 'от 30 000 ₽' },
                            { name: 'Съёмные протезы', price: 'от 20 000 ₽' }
                        ]}
                    />
                    <ServiceCard
                        icon={<FaSyringe size={32} />}
                        title="Хирургия"
                        items={[
                            { name: 'Удаление зубов', price: 'от 3 000 ₽' },
                            { name: 'Имплантация', price: 'от 35 000 ₽' },
                            { name: 'Пластика десны', price: 'от 8 000 ₽' },
                            { name: 'Синус-лифтинг', price: 'от 25 000 ₽' }
                        ]}
                    />
                    <ServiceCard
                        icon={<FaChild size={32} />}
                        title="Детский осмотр"
                        notes="Лечение не проводим. Прием только по предварительной записи."
                        items={[
                            { name: 'Осмотр и консультация', price: '1 000 ₽' },
                            { name: 'Адаптация ребенка', price: 'Бесплатно' }
                        ]}
                    />
                </div>

                {/* Clinical Case Section */}
                <div className={styles.casesSection}>
                    <div className={styles.casesGrid}>
                        <div className={styles.imagesWrapper}>
                            <div>
                                <img src="/images/cases/case1.jpg" alt="До лечения" className={styles.caseImage} />
                                <div className={styles.imageLabel}>До</div>
                            </div>
                            <div>
                                <img src="/images/cases/case2.jpg" alt="После лечения" className={styles.caseImage} />
                                <div className={styles.imageLabel}>После</div>
                            </div>
                        </div>

                        <div className={styles.caseInfo}>
                            <span className={styles.caseTag}>Клинический случай</span>
                            <h3 className={styles.caseTitle}>Эстетическая реставрация</h3>
                            <p className={styles.caseDescription}>
                                Восстановление анатомической формы и цвета зубов с использованием
                                современных композитных материалов. Работа выполнена за одно посещение.
                                Минимальное вмешательство с максимальным эстетическим результатом.
                            </p>
                        </div>
                        <button className={styles.caseButton} onClick={onBookingClick}>
                            Хочу так же
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Services
