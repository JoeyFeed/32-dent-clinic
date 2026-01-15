import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaTooth, FaBars, FaTimes } from 'react-icons/fa'
import styles from './Header.module.css'

const Header = ({ onBookingClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Handle scroll when URL hash changes (e.g. navigation from another page)
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    const scrollToSection = (id) => {
        setIsMenuOpen(false);

        if (location.pathname === '/') {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', `/#${id}`);
            }
        } else {
            navigate(`/#${id}`);
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
                    {isMenuOpen ? <FaTimes size={32} /> : <FaBars size={32} />}
                </div>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <a href="#services" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Услуги</a>
                    <a href="#doctors" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection('doctors'); }}>Врачи</a>
                    <a href="#reviews" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection('reviews'); }}>Отзывы</a>
                    <a href="#contacts" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection('contacts'); }}>Контакты</a>

                    {/* Mobile only actions in menu */}
                    <div className={styles.mobileActions}>
                        <div className={styles.phone}>
                            <span>+7 (902) 730-40-50</span>
                        </div>
                        <button className={styles.button} onClick={() => { setIsMenuOpen(false); onBookingClick(); }}>
                            Запись на прием
                        </button>
                    </div>
                </nav>

                <div className={styles.desktopActions}>
                    <div className={styles.phone}>
                        <span className={styles.phoneLabel}>Пн-Пт 10:00 - 18:00</span>
                        <span>+7 (902) 730-40-50</span>
                    </div>
                    <button className={styles.button} onClick={onBookingClick}>
                        Запись на прием
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
