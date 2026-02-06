"use client"
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Award, Users, FileCheck, TrendingUp } from 'lucide-react';
import styles from "@/assets/styles/client/components/about-achievements.module.scss";

gsap.registerPlugin(ScrollTrigger);

const AboutAchievements: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const numberRefs = useRef<HTMLSpanElement[]>([]);
    const [animationsTriggered, setAnimationsTriggered] = useState(false);

    const achievements = [
        {
            id: 1,
            icon: Award,
            number: '5',
            suffix: '+',
            label: 'Years of Excellence',
            color: { bg: 'rgba(16, 185, 129, 0.15)', icon: '#10B981' },
            increasing: true
        },
        {
            id: 2,
            icon: FileCheck,
            number: '12000',
            suffix: '+',
            label: 'Models Created',
            color: { bg: 'rgba(59, 130, 246, 0.15)', icon: '#3B82F6' },
            increasing: true
        },
        {
            id: 3,
            icon: Users,
            number: '98',
            suffix: '%',
            label: 'Client Recommendation Rate',
            color: { bg: 'rgba(139, 92, 246, 0.15)', icon: '#8B5CF6' },
            increasing: true
        },
        {
            id: 4,
            icon: TrendingUp,
            number: '5000',
            suffix: '+',
            label: 'Projects Delivered',
            color: { bg: 'rgba(245, 158, 11, 0.15)', icon: '#F59E0B' },
            increasing: true
        }
    ];

    useEffect(() => {
        const trigger = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
            onEnter: () => {
                setAnimationsTriggered(true);

                setTimeout(() => {
                    numberRefs.current.forEach((el, index) => {
                        const achievement = achievements[index];
                        if (!achievement.increasing || isNaN(Number(achievement.number))) return;

                        const target = Number(achievement.number);

                        gsap.fromTo(
                            el,
                            { innerText: 0 },
                            {
                                innerText: target,
                                duration: 2.5,
                                ease: "power2.out",
                                snap: { innerText: 1 },
                                onUpdate: function () {
                                    const val = Math.floor(Number(el.innerText));
                                    el.innerText = val.toLocaleString();
                                }
                            }
                        );
                    });
                }, 600);
            }
        });

        return () => {
            trigger.kill();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className={styles.about_achievements} ref={sectionRef}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Our Achievements</h2>
                    <p className={styles.subtitle}>
                        Numbers that reflect our commitment to excellence
                    </p>
                </div>
                <div className={styles.achievements_grid}>
                    {achievements.map((achievement, index) => {
                        const IconComponent = achievement.icon;
                        return (
                            <div 
                                key={achievement.id} 
                                className={`${styles.achievement_card} ${animationsTriggered ? styles.animate : ''}`}
                                style={animationsTriggered ? { transitionDelay: `${index * 0.1}s` } : {}}
                            >
                                <div 
                                    className={styles.icon_wrapper}
                                    style={{ backgroundColor: achievement.color.bg }}
                                >
                                    <IconComponent 
                                        className={styles.icon}
                                        style={{ color: achievement.color.icon }}
                                    />
                                </div>
                                <div className={styles.number_wrapper}>
                                    <span
                                        ref={el => {
                                            if (el) numberRefs.current[index] = el;
                                        }}
                                        className={styles.number}
                                    >
                                        {achievement.increasing ? '0' : achievement.number}
                                    </span>
                                    <span className={styles.suffix}>{achievement.suffix}</span>
                                </div>
                                <p className={styles.label}>{achievement.label}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AboutAchievements;

