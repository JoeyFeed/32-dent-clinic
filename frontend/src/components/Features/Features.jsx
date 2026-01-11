import { FaRegClock, FaMapMarkerAlt, FaHeadset, FaShieldAlt, FaUserMd, FaStar } from 'react-icons/fa'
import styles from './Features.module.css'

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className={styles.card}>
            <div className={styles.iconWrapper}>{icon}</div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDescription}>{description}</p>
        </div>
    )
}

const Features = () => {
    return (
        <div className={styles.section}>
            <div className={`container ${styles.grid}`}>
                <FeatureCard
                    icon={<FaShieldAlt size={28} />}
                    title="Безопасность"
                    description="100% стерильность инструментов. Мы используем системы АнтиСпид и АнтиГепатит."
                />
                <FeatureCard
                    icon={<FaUserMd size={28} />}
                    title="Экспертность"
                    description="Врачи высшей категории. Постоянное повышение квалификации в России и за рубежом."
                />
                <FeatureCard
                    icon={<FaStar size={28} />}
                    title="Технологии"
                    description="Современное диагностическое оборудование и качественные материалы."
                />
                <FeatureCard
                    icon={<FaRegClock size={28} />}
                    title="Комфорт"
                    description="Удобный график, отсутствие очередей и безболезненное лечение."
                />
            </div>
        </div>
    )
}

export default Features
