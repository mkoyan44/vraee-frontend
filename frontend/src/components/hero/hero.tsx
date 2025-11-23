import React from 'react';
import styles from "@/assets/styles/client/components/hero.module.scss";

const Hero: React.FC = ()=> {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.hero_bg}></div>
                <div className={styles.hero_wrapper}>
                    <div className={styles.hero_content}>
                        <h1 className={styles.hero_title}>Transform Your Jewelry Ideas into 3D Reality</h1>
                        <div className={styles.hero_desc}>
                            <p>Professional 3D jewelry modeling and creative content production.
                               From concept to creation-ready designs with cutting-edge technology.</p>
                        </div>
                        <a href="#" className="btn-primary">Create Order</a>
                    </div>
                    <div className={styles.hero_image}>
                        <img src="/hero-image.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
