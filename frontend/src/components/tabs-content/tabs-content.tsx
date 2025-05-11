"use client"
import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import styles from "@/assets/styles/client/components/tabs-content.module.scss";
import Image from "next/image";
import Link from "next/link";
const TabsContent: React.FC = ()=> {
    const tabs = [
        {
            id: 1,
            header: 'Individuals and Freelancers',
            title: 'Individuals and Freelancers',
            description: '<p>Professional calls from any location. Focus on discussions without missing details. Review key points efficiently.</p><ul><li>Distraction-free calls</li><li>Complete capture of discussions</li><li>Quick review of key points and summary</li></ul>',
            url: '#',
            image: '/tabs-image.png',
        },
        {
            id: 2,
            header: 'Sales and Success',
            title: 'Sales and Success',
            description: '<p>Professional calls from any location. Focus on discussions without missing details. Review key points efficiently.</p><ul><li>Distraction-free calls</li><li>Complete capture of discussions</li><li>Quick review of key points and summary</li></ul>',
            url: '#',
            image: '/tabs-image.png',
        },
        {
            id: 3,
            header: 'Hybrid Work',
            title: 'Hybrid Work',
            description: '<p>Professional calls from any location. Focus on discussions without missing details. Review key points efficiently.</p><ul><li>Distraction-free calls</li><li>Complete capture of discussions</li><li>Quick review of key points and summary</li></ul>',
            url: '#',
            image: '/tabs-image.png',
        },
        {
            id: 4,
            header: 'Professional Services',
            title: 'Professional Services',
            description: '<p>Professional calls from any location. Focus on discussions without missing details. Review key points efficiently.</p><ul><li>Distraction-free calls</li><li>Complete capture of discussions</li><li>Quick review of key points and summary</li></ul>',
            url: '#',
            image: '/tabs-image.png',
        },
        {
            id: 5,
            header: 'Call Center (BPO)',
            title: 'Call Center (BPO)',
            description: '<p>Professional calls from any location. Focus on discussions without missing details. Review key points efficiently.</p><ul><li>Distraction-free calls</li><li>Complete capture of discussions</li><li>Quick review of key points and summary</li></ul>',
            url: '#',
            image: '/tabs-image.png',
        },
        {
            id: 6,
            header: 'Call Center (Enterprise)',
            title: 'Call Center (Enterprise)',
            description: '<p>Professional calls from any location. Focus on discussions without missing details. Review key points efficiently.</p><ul><li>Distraction-free calls</li><li>Complete capture of discussions</li><li>Quick review of key points and summary</li></ul>',
            url: '#',
            image: '/tabs-image.png',
        },
        {
            id: 7,
            header: 'SDK and Developers',
            title: 'SDK and Developers',
            description: '<p>Professional calls from any location. Focus on discussions without missing details. Review key points efficiently.</p><ul><li>Distraction-free calls</li><li>Complete capture of discussions</li><li>Quick review of key points and summary</li></ul>',
            url: '#',
            image: '/tabs-image.png',
        },
    ];
    const [activeTab, setActiveTab] = useState<number>(tabs[0].id);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            gsap.fromTo(
                contentRef.current,
                { opacity: 0, rotateY: 60, transformOrigin: "right center" },
                { opacity: 1, rotateY: 0, duration: 1, ease: "power2.out" }
            );
        }
    }, [activeTab]);


    return (
        <section className={styles.tabs_content}>
            <div className="container">
                <h2 className={`text-center`}>How it works?</h2>
                <div className={styles.wrapper}>
                    <nav className={styles.tabs_headers}>
                        <ul>
                            {
                                tabs.map(item=>{
                                    return (
                                        <li key={item.id}>
                                            <button
                                                type="button"
                                                className={`${styles.header_btn} btn w-full ${activeTab === item.id ? 'btn-primary' : ''}`}
                                                onClick={() => setActiveTab(item.id)}
                                            >
                                                {item.header}
                                            </button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                    <div className={styles.tabs_contents}>
                        {tabs.map((item) =>
                            item.id === activeTab ? (
                                <div key={item.id} className={styles.card} ref={contentRef}>
                                    <div className={styles.card_content}>
                                        <h3>{item.title}</h3>
                                        <div
                                            className={`rte mb-5`}
                                            dangerouslySetInnerHTML={{ __html: item.description }}
                                        ></div>
                                        <Link href={item.url} className="btn-simple">
                                            Learn More
                                        </Link>
                                    </div>
                                    <div className={styles.card_media}>
                                        <Image src={item.image} alt={''} width={'539'} height={'610'} />
                                    </div>
                                </div>
                            ) : null
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TabsContent;