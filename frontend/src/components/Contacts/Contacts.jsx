
import styles from './Contacts.module.css'
import { YMaps, Map, Placemark, FullscreenControl, ZoomControl } from '@pbe/react-yandex-maps';

const Contacts = () => {
    const mapState = {
        center: [52.576401, 41.519477],
        zoom: 16
    };

    return (
        <section id="contacts" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Контакты</h2>
                    <p className={styles.subtitle}>
                        Мы всегда рады видеть вас в нашей клинике
                    </p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.photoSection}>
                        <div className={styles.photoWrapper}>
                            <img
                                src="/images/clinic_exterior.png"
                                alt="Стоматология 32"
                                className={styles.clinicPhoto}
                            />
                        </div>
                    </div>

                    <div className={styles.info}>
                        <div className={styles.infoItem}>
                            <h3>Адрес</h3>
                            <p>г. Котовск, ул. Солнечная 6в</p>
                        </div>
                        <div className={styles.infoItem}>
                            <h3>Телефон</h3>
                            <p>+7 (902) 730-40-50</p>
                        </div>
                        <div className={styles.infoItem}>
                            <h3>Режим работы</h3>
                            <p>Пн-Пт: 10:00 - 18:00</p>
                        </div>
                    </div>

                    <div className={styles.mapContainer}>
                        <YMaps query={{ apikey: '656e5b10-d377-4fa6-914e-67d23433b597' }}>
                            <Map
                                defaultState={mapState}
                                width="100%"
                                height="100%"
                                className={styles.map}
                            >
                                <Placemark geometry={[52.576401, 41.519477]} />
                                <FullscreenControl />
                                <ZoomControl options={{ float: 'right' }} />
                            </Map>
                        </YMaps>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts
