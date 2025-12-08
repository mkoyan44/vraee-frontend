import React from 'react';
import styles from "@/assets/styles/client/components/services-hero.module.scss";
import Image from "next/image";

const ServicesHero: React.FC = ()=> {
    return (
        <section className={styles.services_hero}>
            <div className="container">
                <div className={styles.bg}></div>
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <h1 className={`h2`}>Our Services</h1>
                        <Image src={'/services-hero.png'} alt={''} width={'478'} height={'455'} />
                        <div className={styles.desc}>
                            <p>specializes in creating high-precision 3D models for jewelry. We transform ideas into detailed, production-ready designs, combining craftsmanship with cutting-edge technology.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesHero;