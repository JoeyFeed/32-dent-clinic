import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTooth, FaBars, FaTimes } from 'react-icons/fa'
import styles from './Header.module.css'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const scrollToSection = (id) => {
        setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={styles.header}>
            <div className={`container ${styles.headerContainer}`}>
                <Link to="/" className={styles.logo}>
                    <FaTooth size={28} color="var(--accent)" />
                    <span>32 Дент</span>
                </Link>

                <div className={styles.mobileToggle} onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </div>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <a href="#services" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Услуги</a>
                    <a href="#doctors" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection('doctors'); }}>Врачи</a>
                    <a href="#prices" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection('prices'); }}>Прайс</a>
                    <a href="#contacts" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection('contacts'); }}>Контакты</a>

                    {/* Mobile only actions in menu */}
                    <div className={styles.mobileActions}>
                        <div className={styles.phone}>
                            <span>+7 (902) 730-40-50</span>
                        </div>
                        <button className={styles.button}>
                            Запись на прием
                        </button>
                    </div>
                </nav>

                <div className={styles.desktopActions}>
                    <div className={styles.phone}>
                        <span className={styles.phoneLabel}>Ежедневно 9:00 - 21:00</span>
                        <span>+7 (902) 730-40-50</span>
                    </div>
                    <button className={styles.button}>
                        Запись на прием
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
