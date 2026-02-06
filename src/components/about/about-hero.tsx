import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from "@/assets/styles/client/components/about-hero.module.scss";

const AboutHero: React.FC = () => {
    return (
        <section className={styles.about_hero}>
            <div className="container">
                <div className={styles.hero_wrapper}>
                    <div className={styles.hero_content}>
                        <h1 className={styles.hero_title}>
                            Crafting Digital Excellence in Jewelry Design
                        </h1>
                        <div className={styles.hero_desc}>
                            <p>
                                We are Vraee Jewelry Studio, a premier 3D rendering studio dedicated to transforming jewelry visions into stunning digital reality. With over 5 years of excellence, we've created more than 12,000 models and earned the trust of clients worldwide through our commitment to quality, innovation, and transparent collaboration.
                            </p>
                        </div>
                        <div className={styles.hero_cta}>
                            <Link href="/contact" className="btn-primary">
                                Get Your Quote Today
                            </Link>
                            <Link href="/portfolio" className="btn-simple">
                                View Our Portfolio
                            </Link>
                        </div>
                    </div>
                    <div className={styles.hero_image}>
                        <Image 
                            src="/hero-image.png" 
                            alt="Vraee Jewelry Studio"
                            width={600}
                            height={600}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;

