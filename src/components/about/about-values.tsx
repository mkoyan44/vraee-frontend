"use client"
import React from 'react';
import { Target, Eye, Heart, Users } from 'lucide-react';
import styles from "@/assets/styles/client/components/about-values.module.scss";

const AboutValues: React.FC = () => {
    const values = [
        {
            id: 1,
            icon: Target,
            title: "Our Mission",
            description: "To transform jewelry visions into stunning 3D reality, empowering designers and businesses to showcase their creations with photorealistic precision and artistic excellence.",
            color: { bg: 'rgba(16, 185, 129, 0.15)', icon: '#10B981' }
        },
        {
            id: 2,
            icon: Eye,
            title: "Our Vision",
            description: "To lead the jewelry 3D visualization industry by setting new standards in quality, innovation, and client collaboration, making professional 3D rendering accessible to all.",
            color: { bg: 'rgba(59, 130, 246, 0.15)', icon: '#3B82F6' }
        },
        {
            id: 3,
            icon: Heart,
            title: "Excellence in Craftsmanship",
            description: "Every model, every render, every animation is crafted with meticulous attention to detail, ensuring production-ready quality that meets the highest industry standards.",
            color: { bg: 'rgba(236, 72, 153, 0.15)', icon: '#EC4899' }
        },
        {
            id: 4,
            icon: Users,
            title: "Client-First Approach",
            description: "Your success is our success. We prioritize transparent communication, responsive support, and collaborative partnerships that put your needs at the center of everything we do.",
            color: { bg: 'rgba(139, 92, 246, 0.15)', icon: '#8B5CF6' }
        }
    ];

    return (
        <section className={styles.about_values}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Our Mission, Vision & Values</h2>
                    <p className={styles.subtitle}>
                        The principles that guide everything we do at Vraee Jewelry Studio
                    </p>
                </div>
                <div className={styles.values_grid}>
                    {values.map((value) => {
                        const IconComponent = value.icon;
                        return (
                            <div key={value.id} className={styles.value_card}>
                                <div 
                                    className={styles.icon_wrapper}
                                    style={{ backgroundColor: value.color.bg }}
                                >
                                    <IconComponent 
                                        className={styles.icon}
                                        style={{ color: value.color.icon }}
                                    />
                                </div>
                                <h3 className={styles.card_title}>{value.title}</h3>
                                <p className={styles.card_description}>{value.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AboutValues;

