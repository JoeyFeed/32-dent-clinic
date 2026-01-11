import React from 'react';
import styles from './Reviews.module.css';

const Reviews = () => {
    return (
        <section className={styles.reviews} id="reviews">
            <div className={styles.container}>
                <h2 className={styles.title}>Отзывы наших пациентов</h2>
                <div className={styles.widgetWrapper}>
                    <div style={{ width: '100%', height: '800px', overflow: 'hidden', position: 'relative', margin: '0 auto', maxWidth: '560px' }}>
                        <iframe
                            style={{ width: '100%', height: '100%', border: '1px solid #e6e6e6', borderRadius: '8px', boxSizing: 'border-box' }}
                            src="https://yandex.ru/maps-reviews-widget/65149081290?comments"
                            title="Отзывы Яндекс Карты"
                        ></iframe>
                        <a
                            href="https://yandex.ru/maps/org/32_dent_kotovsk/65149081290/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ boxSizing: 'border-box', textDecoration: 'none', color: '#b3b3b3', fontSize: '10px', fontFamily: 'YS Text,sans-serif', padding: '0 20px', position: 'absolute', bottom: '8px', width: '100%', textAlign: 'center', left: '0', overflow: 'hidden', textOverflow: 'ellipsis', display: 'block', maxHeight: '14px', whiteSpace: 'nowrap' }}
                        >
                            32 Дент котовск на карте Котовска — Яндекс Карты
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
