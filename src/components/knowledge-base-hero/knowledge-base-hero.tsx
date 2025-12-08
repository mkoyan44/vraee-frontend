import React from 'react';
import styles from "@/assets/styles/client/components/knowledge-base-hero.module.scss";
import Image from "next/image";
import Link from "next/link";

const KnowledgeBaseHero: React.FC = () => {
    return (
        <section className={styles.knowledge_base_hero}>
            <div className="container">
                <div className={styles.bg}></div>
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <div className={styles.badge}>
                            <span>Expert Knowledge Base</span>
                        </div>
                        <h1 className={`h1`}>Master 3D Jewelry Design & Rendering</h1>
                        <div className={styles.desc}>
                            <p>Unlock the secrets of professional 3D jewelry visualization with our comprehensive knowledge base. From beginner tutorials to advanced techniques, discover expert insights, best practices, and industry-leading workflows that will elevate your 3D design skills.</p>
                        </div>
                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <div className={styles.stat_number}>50+</div>
                                <div className={styles.stat_label}>Expert Articles</div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.stat_number}>15+</div>
                                <div className={styles.stat_label}>Video Tutorials</div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.stat_number}>Free</div>
                                <div className={styles.stat_label}>Access Forever</div>
                            </div>
                        </div>
                        <div className={styles.cta_group}>
                            <Link href="#articles" className="btn-primary">Browse Articles</Link>
                            <Link href="/contact" className="btn-secondary">Get Expert Help</Link>
                        </div>
                    </div>
                    <div className={styles.hero_image}>
                        <Image src={'/hero-image.png'} alt={'3D Jewelry Knowledge Base'} width={'478'} height={'455'} />
                        <div className={styles.image_overlay}>
                            <div className={styles.overlay_content}>
                                <div className={styles.overlay_title}>Learn from Experts</div>
                                <div className={styles.overlay_desc}>Industry professionals share their knowledge</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default KnowledgeBaseHero;
