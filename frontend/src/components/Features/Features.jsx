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
                    icon={<FaRegClock size={24} />}
                    title="Удобный график"
                    description="Мы работаем без выходных с 9:00 до 21:00. Найдем время даже для самых занятых пациентов."
                />
                <FeatureCard
                    icon={<FaUserMd size={24} />}
                    title="Врачи-эксперты"
                    description="Команда специалистов высшей категории с опытом более 10 лет. Постоянное повышение квалификации."
                />
                <FeatureCard
                    icon={<FaMapMarkerAlt size={24} />}
                    title="Наш адрес"
                    description="г. Котовск, ул. Солнечная 6в. Удобный подъезд и парковка."
                />
            </div>
        </div>
    )
}

export default Features
