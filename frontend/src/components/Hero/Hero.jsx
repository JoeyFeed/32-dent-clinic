import styles from './Hero.module.css'
import { FaTooth } from 'react-icons/fa'

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <span className={styles.label}>Стоматология нового поколения</span>
                    <h1 className={styles.title}>
                        Ваша улыбка — <br />
                        <span>наш приоритет</span>
                    </h1>
                    <p className={styles.description}>
                        Используем передовые технологии для лечения и восстановления зубов.
                        Профессиональный подход, стерильность и комфорт.
                    </p>
                    <div className={styles.buttonGroup}>
                        <a href="#appointment" className={styles.primaryButton}>
                            Записаться
                        </a>
                        <a href="#services" className={styles.secondaryButton}>
                            Услуги
                        </a>
                    </div>
                </div>

                <div className={styles.visual}>
                    {/* Abstract visual representation - normally would be a photo */}
                    <FaTooth size={150} color="white" style={{ opacity: 0.5, filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))' }} />
                </div>
            </div>
        </div>
    )
}

export default Hero
