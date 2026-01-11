import { FaUserMd } from 'react-icons/fa'
import styles from './Doctors.module.css'

const DoctorCard = ({ name, specialty, experience, image }) => (
    <div className={styles.card}>
        <div className={styles.imageContainer}>
            {image ? (
                <img src={image} alt={name} className={styles.image} />
            ) : (
                <FaUserMd size={64} />
            )}
        </div>
        <div className={styles.content}>
            <h3 className={styles.name}>{name}</h3>
            <div className={styles.specialty}>{specialty}</div>
            <div className={styles.experience}>Стаж {experience}</div>
        </div>
    </div>
)

const Doctors = () => {
    return (
        <section id="doctors" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Наши специалисты</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        Профессионалы своего дела, которым можно доверить здоровье зубов
                    </p>
                </div>

                <div className={styles.grid}>
                    <DoctorCard
                        name="Саградян Валерий Сергеевич"
                        specialty="Генеральный директор клиники | Главный врач, Стоматолог-ортопед, Терапевт, Хирург-имплантолог"
                        experience="20 лет"
                        image="/images/doctors/doctor.jpg"
                    />
                    <DoctorCard
                        name="Смирнова Елена Александровна"
                        specialty="Ассистент стоматолога"
                        experience="7 лет"
                    />
                    <DoctorCard
                        name="Волкова Мария Дмитриевна"
                        specialty="Старшая медицинская сестра"
                        experience="12 лет"
                    />
                </div>
            </div>
        </section>
    )
}

export default Doctors
