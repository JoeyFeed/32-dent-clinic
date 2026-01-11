import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.links}>
                    <a href="#services" className={styles.link}>Услуги</a>
                    <a href="#doctors" className={styles.link}>Врачи</a>
                    <a href="#reviews" className={styles.link}>Отзывы</a>
                    <a href="#contacts" className={styles.link}>Контакты</a>
                </div>
                <div>
                    <p className={styles.legal}>ООО "32 Дент" | ЛО-68-01-000000 | ИНН 6825005723 | ОГРН 1126820001219</p>
                    <p className={styles.footerText}>&copy; {new Date().getFullYear()} Стоматология "32 Дент". Все права защищены.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
