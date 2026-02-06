import React from 'react';
import styles from "@/assets/styles/client/components/hero.module.scss";

const Hero: React.FC = ()=> {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.hero_bg}></div>
                <div className={styles.hero_wrapper}>
                    <div className={styles.hero_content}>
                        <h1 className={styles.hero_title}>Professional 3D Jewelry Visualization & Product Rendering Services</h1>
                        <div className={styles.hero_desc}>
                            <p>We are a premier 3D rendering studio dedicated to the e-commerce and business sectors, specializing in photorealistic jewelry visualizations, dynamic product renders, and professional 3D animations. With transparent pricing, fast delivery, and global service, we empower your brand to shine in the digital marketplace.</p>
                        </div>
                        <a href="/contact" className="btn-primary">Get Your Quote Today</a>
                    </div>
                    <div className={styles.hero_image}>
                        <img src="/hero-image.png" alt="Professional 3D jewelry visualization and product rendering services"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
