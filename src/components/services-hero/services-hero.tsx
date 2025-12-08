import React from 'react';
import styles from "@/assets/styles/client/components/services-hero.module.scss";
import Image from "next/image";
import Link from "next/link";

const ServicesHero: React.FC = ()=> {
    return (
        <section className={styles.services_hero}>
            <div className="container">
                <div className={styles.bg}></div>
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <div className={styles.badge}>
                            <span>Professional 3D Rendering Services</span>
                        </div>
                        <h1 className={`h1`}>Expert 3D Jewelry & Product Visualization Services</h1>
                        <div className={styles.desc}>
                            <p>Transform your jewelry designs into stunning photorealistic visualizations with our comprehensive 3D rendering services. From concept sculpting to final presentation renders, we deliver production-ready 3D models that elevate your brand and captivate your customers.</p>
                        </div>
                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <div className={styles.stat_number}>500+</div>
                                <div className={styles.stat_label}>Projects Completed</div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.stat_number}>24h</div>
                                <div className={styles.stat_label}>Average Delivery</div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.stat_number}>99%</div>
                                <div className={styles.stat_label}>Client Satisfaction</div>
                            </div>
                        </div>
                        <div className={styles.cta_group}>
                            <Link href="/contact" className="btn-primary">Start Your Project</Link>
                            <Link href="#services-list" className="btn-secondary">View Our Services</Link>
                        </div>
                    </div>
                    <div className={styles.hero_image}>
                        <Image src={'/services-hero.png'} alt={'Professional 3D jewelry rendering services'} width={'478'} height={'455'} />
                        <div className={styles.image_overlay}>
                            <div className={styles.overlay_content}>
                                <div className={styles.overlay_title}>Premium Quality</div>
                                <div className={styles.overlay_desc}>Photorealistic renders that exceed expectations</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesHero;
