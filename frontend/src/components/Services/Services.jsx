import { FaTooth, FaMagic, FaSyringe, FaChild, FaXRay } from 'react-icons/fa'
import styles from './Services.module.css'

const ServiceCard = ({ icon, title, items }) => (
    <div className={styles.card}>
        <div className={styles.cardIcon}>{icon}</div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <ul className={styles.cardList}>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
)

const Services = () => {
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
                        items={['Лечение кариеса', 'Лечение пульпита', 'Пломбирование каналов', 'Лечение периодонтита']}
                    />
                    <ServiceCard
                        icon={<FaMagic size={32} />}
                        title="Ортопедия"
                        items={['Коронки и мосты', 'Виниры', 'Протезирование на имплантах', 'Съёмные протезы']}
                    />
                    <ServiceCard
                        icon={<FaSyringe size={32} />}
                        title="Хирургия"
                        items={['Удаление зубов', 'Имплантация', 'Пластика десны', 'Синус-лифтинг']}
                    />
                    <ServiceCard
                        icon={<FaChild size={32} />}
                        title="Детская стоматология"
                        items={['Лечение молочных зубов', 'Герметизация фиссур', 'Уроки гигиены', 'Исправление прикуса']}
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
                            <button className="primaryButton" style={{ backgroundColor: 'var(--primary)', color: 'white', border: 'none', padding: '1rem 2rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                                Хочу так же
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Services
