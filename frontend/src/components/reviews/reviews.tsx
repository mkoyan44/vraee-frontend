"use client"
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import styles from "@/assets/styles/client/components/reviews.module.scss";
import Icon from "@/components/icon/icon";

const Reviews: React.FC = () => {
    const reviews = [
        {
            id: 1,
            image: '/review-image.png',
            stars: 5,
            name: 'User name',
            title: 'Great Service and Professionalism!',
            description: 'I had an excellent experience with this service. The team was professional, responsive, and very knowledgeable. They handled everything efficiently and exceeded my expectations. I highly recommend them!',
        },
        {
            id: 2,
            image: '/review-image.png',
            stars: 4,
            name: 'User name',
            title: 'Great Service and Professionalism!',
            description: 'I had an excellent experience with this service. The team was professional, responsive, and very knowledgeable. They handled everything efficiently and exceeded my expectations. I highly recommend them!',
        },
        {
            id: 3,
            image: '/review-image.png',
            stars: 4,
            name: 'User name',
            title: 'Great Service and Professionalism!',
            description: 'I had an excellent experience with this service. The team was professional, responsive, and very knowledgeable. They handled everything efficiently and exceeded my expectations. I highly recommend them!',
        },
        {
            id: 4,
            image: '/review-image.png',
            stars: 5,
            name: 'User name',
            title: 'Great Service and Professionalism!',
            description: 'I had an excellent experience with this service. The team was professional, responsive, and very knowledgeable. They handled everything efficiently and exceeded my expectations. I highly recommend them!',
        },
        {
            id: 5,
            image: '/review-image.png',
            stars: 3,
            name: 'User name',
            title: 'Great Service and Professionalism!',
            description: 'I had an excellent experience with this service. The team was professional, responsive, and very knowledgeable. They handled everything efficiently and exceeded my expectations. I highly recommend them!',
        },
    ]
    return (
        <section className={styles.reviews}>
            <div className={`container`}>
                <h2>Reviews from our clients</h2>
                <div className={styles.wrapper}>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={24}
                        slidesPerView={3}
                        navigation
                        pagination={{clickable: true}}
                    >
                        {reviews.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className={styles.review_card}>
                                    <div className={styles.review_header}>
                                        <div className={styles.review_img}>
                                            <img src={item.image} alt={item.name} className={styles.image}/>
                                        </div>
                                        <div className={styles.review_info}>
                                            <div className={`${styles.name} font-semibold`}>{item.name}</div>
                                            <div className={styles.stars}>
                                                {Array.from({length: item.stars}).map((_, index) => (
                                                    <Icon key={`filled-${index}`} icon="star" fill="#FFC933"/>
                                                ))}
                                                {Array.from({length: 5 - item.stars}).map((_, index) => (
                                                    <Icon key={`empty-${index}`} icon="star" fill="#ECECEC"/>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.content}>
                                        <h3 className="h6">{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Reviews;