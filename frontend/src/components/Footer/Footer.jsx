import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container" style={{ textAlign: 'center' }}>
                <p style={{ marginBottom: '1rem', fontSize: '1rem', opacity: 0.9 }}>г. Котовск, ул. Солнечная 6в</p>
                <p style={{ marginBottom: '0.5rem', fontSize: '0.8rem', opacity: 0.6 }}>ООО "32 Дент" | ОГРН 1126820001219</p>
                <p className={styles.footerText}>&copy; 2025 Стоматологическая клиника "32 Дент". Все права защищены.</p>
            </div>
        </footer>
    )
}

export default Footer
