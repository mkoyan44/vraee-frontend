import React from 'react';
import styles from "@/assets/styles/client/components/hero.module.scss";

const Hero: React.FC = ()=> {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.hero_bg}></div>
                <div className={styles.hero_wrapper}>
                    <div className={styles.hero_content}>
                        <h1 className={styles.hero_title}>Professional 3D Architectural Visualization & Product Rendering Services</h1>
                        <div className={styles.hero_desc}>
                            <p>Expert 3D rendering studio for architects and businesses. Photorealistic architectural visualizations,
                               product renders, and professional animations. Transparent pricing, fast delivery, global service.</p>
                        </div>
                        <a href="/contact" className="btn-primary">Get Your Quote Today</a>
                    </div>
                    <div className={styles.hero_image}>
                        <img src="/portfolio/photo_2025-11-15_18-07-41.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
