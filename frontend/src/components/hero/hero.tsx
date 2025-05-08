import React from 'react';
import styles from "@/assets/styles/client/components/hero.module.scss";

const Hero: React.FC = ()=> {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.hero_bg}></div>
                <div className={styles.hero_wrapper + ` mh-full-screen`}>
                    <div className={styles.hero_content}>
                        <h1 className={styles.hero_title}>Your AI-powered assistant for meetings and calls</h1>
                        <div className={styles.hero_desc}>
                            <p>Krisp is a desktop app that maximizes the productivity of online meetings with its
                                AI-powered </p>
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