"use client"
import React from 'react';
import { Sparkles, TrendingUp, Award, Globe, Smartphone, Gem, Smartphone as AppIcon, DollarSign, Clock, MapPin, Lightbulb } from 'lucide-react';
import styles from "@/assets/styles/client/components/about-story.module.scss";

const AboutStory: React.FC = () => {
    const milestones = [
        {
            id: 1,
            year: "2019",
            icon: Sparkles,
            title: "The Beginning",
            description: "Vraee Jewelry Studio was founded with a vision to revolutionize jewelry visualization through cutting-edge 3D technology and artistic expertise.",
            color: { bg: 'rgba(245, 158, 11, 0.15)', icon: '#F59E0B' }
        },
        {
            id: 2,
            year: "2020-2021",
            icon: TrendingUp,
            title: "Rapid Growth",
            description: "We expanded our team of jewelry CAD specialists and developed proprietary workflows that set new industry standards for quality and efficiency.",
            color: { bg: 'rgba(16, 185, 129, 0.15)', icon: '#10B981' }
        },
        {
            id: 3,
            year: "2022-2023",
            icon: Award,
            title: "Industry Recognition",
            description: "Reached 10,000+ models created and achieved 98% client recommendation rate, establishing ourselves as a trusted partner for jewelry businesses worldwide.",
            color: { bg: 'rgba(59, 130, 246, 0.15)', icon: '#3B82F6' }
        },
        {
            id: 4,
            year: "2023-2024",
            icon: Smartphone,
            title: "Vraee App Launch",
            description: "We developed and launched the Vraee App - a comprehensive client portal that revolutionizes project management. Our clients can now track projects in real-time, communicate directly with specialists, and manage their entire workflow seamlessly.",
            color: { bg: 'rgba(139, 92, 246, 0.15)', icon: '#8B5CF6' }
        }
    ];

    return (
        <section className={styles.about_story}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Our Story</h2>
                    <p className={styles.subtitle}>
                        From a vision to a leading jewelry 3D visualization studio with innovative client technology
                    </p>
                </div>
                <div className={styles.story_content}>
                    <div className={styles.intro}>
                        <div className={styles.intro_card}>
                            <div className={styles.intro_icon_wrapper}>
                                <Sparkles className={styles.intro_icon} />
                            </div>
                            <div className={styles.intro_content}>
                                <p className={styles.intro_paragraph}>
                                    Founded in 2019, Vraee Jewelry Studio began with a simple yet powerful mission: to bridge the gap between jewelry design vision and digital reality. What started as a small team of passionate 3D artists has grown into a premier studio trusted by jewelry designers, manufacturers, and e-commerce businesses worldwide.
                                </p>
                            </div>
                        </div>
                        <div className={styles.intro_card}>
                            <div className={styles.intro_icon_wrapper}>
                                <TrendingUp className={styles.intro_icon} />
                            </div>
                            <div className={styles.intro_content}>
                                <p className={styles.intro_paragraph}>
                                    Our journey has been marked by continuous innovation, client-focused service, and an unwavering commitment to quality. We've invested in cutting-edge technology, developed proprietary workflows, and assembled a team of expert jewelry CAD specialists who understand both the technical and artistic aspects of jewelry design.
                                </p>
                            </div>
                        </div>
                        <div className={styles.intro_card}>
                            <div className={styles.intro_icon_wrapper}>
                                <AppIcon className={styles.intro_icon} />
                            </div>
                            <div className={styles.intro_content}>
                                <p className={styles.intro_paragraph}>
                                    Beyond delivering exceptional 3D visualization services, we've created the Vraee App - a powerful client portal that puts project management, real-time tracking, and seamless communication at your fingertips. We're committed to continuously developing and enhancing this platform to provide our clients with the best possible experience.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.milestones}>
                        {milestones.map((milestone) => {
                            const IconComponent = milestone.icon;
                            return (
                                <div key={milestone.id} className={styles.milestone_card}>
                                    <div 
                                        className={styles.milestone_icon}
                                        style={{ backgroundColor: milestone.color.bg }}
                                    >
                                        <IconComponent 
                                            style={{ color: milestone.color.icon }}
                                        />
                                    </div>
                                    <div className={styles.milestone_year}>{milestone.year}</div>
                                    <h3 className={styles.milestone_title}>{milestone.title}</h3>
                                    <p className={styles.milestone_description}>{milestone.description}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.why_unique}>
                        <div className={styles.unique_header}>
                            <h3 className={styles.unique_title}>What Makes Vraee Unique</h3>
                            <div className={styles.title_underline}></div>
                        </div>
                        <div className={styles.unique_grid}>
                            <div className={styles.unique_item}>
                                <div className={styles.unique_icon_wrapper} style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)' }}>
                                    <Gem style={{ color: '#10B981' }} />
                                </div>
                                <h4>Jewelry-Specific Expertise</h4>
                                <p>We specialize exclusively in jewelry, understanding the nuances of gemstone settings, metal finishes, and manufacturing requirements.</p>
                            </div>
                            <div className={styles.unique_item}>
                                <div className={styles.unique_icon_wrapper} style={{ backgroundColor: 'rgba(139, 92, 246, 0.15)' }}>
                                    <AppIcon style={{ color: '#8B5CF6' }} />
                                </div>
                                <h4>The Vraee App</h4>
                                <p>We've built a comprehensive client portal that enables real-time project tracking, direct communication with specialists, and seamless workflow management. We're continuously developing new features to enhance your experience.</p>
                            </div>
                            <div className={styles.unique_item}>
                                <div className={styles.unique_icon_wrapper} style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)' }}>
                                    <DollarSign style={{ color: '#3B82F6' }} />
                                </div>
                                <h4>Transparent Pricing</h4>
                                <p>No hidden fees, no surprises. Our transparent pricing calculator shows exactly what you'll pay before you commit.</p>
                            </div>
                            <div className={styles.unique_item}>
                                <div className={styles.unique_icon_wrapper} style={{ backgroundColor: 'rgba(245, 158, 11, 0.15)' }}>
                                    <Clock style={{ color: '#F59E0B' }} />
                                </div>
                                <h4>Fast Turnaround</h4>
                                <p>Simple models in 24-48 hours, complex pieces in 3-5 days. We respect your deadlines and deliver on time.</p>
                            </div>
                            <div className={styles.unique_item}>
                                <div className={styles.unique_icon_wrapper} style={{ backgroundColor: 'rgba(236, 72, 153, 0.15)' }}>
                                    <MapPin style={{ color: '#EC4899' }} />
                                </div>
                                <h4>Global Service</h4>
                                <p>From Albuquerque to anywhere in the world, we serve clients globally with the same high-quality standards.</p>
                            </div>
                            <div className={styles.unique_item}>
                                <div className={styles.unique_icon_wrapper} style={{ backgroundColor: 'rgba(239, 68, 68, 0.15)' }}>
                                    <Lightbulb style={{ color: '#EF4444' }} />
                                </div>
                                <h4>Continuous Innovation</h4>
                                <p>We're not just service providers - we're innovators. Our commitment to developing the Vraee App demonstrates our dedication to improving how clients interact with jewelry visualization services.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutStory;

