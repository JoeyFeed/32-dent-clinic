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

                <div className={styles.grid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 400px))', justifyContent: 'center' }}>
                    <DoctorCard
                        name="Саградян Валерий Сергеевич"
                        specialty="Главный врач | Стоматолог-ортопед, Терапевт, Хирург-имплантолог"
                        experience="20 лет"
                        image="/images/doctor.webp"
                    />
                </div>
            </div>
        </section>
    )
}

export default Doctors
