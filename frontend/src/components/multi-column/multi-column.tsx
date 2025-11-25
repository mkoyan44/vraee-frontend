"use client"
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from "@/assets/styles/client/components/multi-column.module.scss";

gsap.registerPlugin(ScrollTrigger);

const MultiColumn: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const numberRefs = useRef<HTMLSpanElement[]>([]);
    const [animationsTriggered, setAnimationsTriggered] = useState(false);

    const items = [
        {
            id: '1',
            title: '5',
            title_additional: '',
            description: 'Years on the market',
            increasing: true,
        },
        {
            id: '2',
            title: '12000',
            title_additional: '+',
            description: 'Models already made',
            increasing: true,
        },
        {
            id: '3',
            title: '98',
            title_additional: '%',
            description: 'Clients come by recommendation',
            increasing: true,
        },
    ];

    useEffect(() => {
        const trigger = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
            onEnter: () => {
                setAnimationsTriggered(true);

                // Delay for text animation
                setTimeout(() => {
                    numberRefs.current.forEach((el, index) => {
                        const item = items[index];
                        if (!item.increasing || isNaN(Number(item.title))) return;

                        const target = Number(item.title);

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
                }, 600); // Wait for fade in/slide up to complete
            }
        });

        return () => {
            trigger.kill();
        };
    }, []);

    return (
        <section className={styles.multi_column} ref={sectionRef}>
            <div className="container">
                <div className={styles.wrapper}>
                    {items.map((item, index) => (
                        <div className={`${styles.item} ${animationsTriggered ? styles.animate : ''}`} key={item.id}>
                            <h3 className={`${styles.item_title} ${animationsTriggered ? styles.animate : ''}`}>
                                <span
                                    ref={el => {
                                        if (el) numberRefs.current[index] = el;
                                    }}
                                >
                                    {item.increasing ? '0' : item.title}
                                </span>
                                <span style={{ color: 'var(--color-primary)' }}>{item.title_additional}</span>
                            </h3>
                            <div className={`${styles.item_desc} h3`}>{item.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MultiColumn;
