"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from "@/assets/styles/client/components/multi-column.module.scss";

gsap.registerPlugin(ScrollTrigger);

const MultiColumn: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const numberRefs = useRef<HTMLSpanElement[]>([]);

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
        const durations = 2; // seconds

        numberRefs.current.forEach((el, index) => {
            const item = items[index];
            if (!item.increasing || isNaN(Number(item.title))) return;

            const target = Number(item.title);

            gsap.fromTo(
                el,
                { innerText: 0 },
                {
                    innerText: target,
                    duration: durations,
                    ease: "power1.out",
                    snap: { innerText: 1 },
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        once: true, // анимация только один раз
                    },
                    onUpdate: function () {
                        const val = Math.floor(Number(el.innerText));
                        el.innerText = val.toLocaleString();
                    }
                }
            );
        });
    }, []);

    return (
        <section className={styles.multi_column} ref={sectionRef}>
            <div className="container">
                <div className={styles.wrapper}>
                    {items.map((item, index) => (
                        <div className={styles.item} key={item.id}>
                            <h3 className={styles.item_title}>
                                <span
                                    ref={el => {
                                        if (el) numberRefs.current[index] = el;
                                    }}
                                >
                                    {item.increasing ? '0' : item.title}
                                </span>
                                {item.title_additional}
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
