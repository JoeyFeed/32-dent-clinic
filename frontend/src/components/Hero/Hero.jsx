import styles from './Hero.module.css'
import { FaTooth } from 'react-icons/fa'

const Hero = ({ onBookingClick }) => {
    return (
        <div className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <span className={styles.label}>Стоматология высоких стандартов</span>
                    <h1 className={styles.title}>
                        Ваша улыбка — <br />
                        <span>наш приоритет</span>
                    </h1>
                    <p className={styles.description}>
                        Комплексное лечение зубов с использованием передовых технологий.
                        Без боли, стерильно и профессионально.
                    </p>
                    <div className={styles.buttonGroup}>
                        <button onClick={onBookingClick} className={styles.primaryButton}>
                            Записаться на прием
                        </button>
                        <a href="#services" className={styles.secondaryButton}>
                            Узнать больше
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
