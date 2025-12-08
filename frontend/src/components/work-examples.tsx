"use client"
import React, { useEffect } from 'react';
import Image from "next/image";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import styles from "@/assets/styles/client/components/media-grid.module.scss";

const WorkExamples: React.FC = () => {
    // Use the actual portfolio images available in public/portfolio/
    const examples = [
        {
            id: 1,
            type: 'image',
            image: '/portfolio/1.png',
            alt: '3D Architectural Rendering'
        },
        {
            id: 2,
            type: 'image',
            image: '/portfolio/2.png',
            alt: 'Product Design Visualization'
        },
        {
            id: 3,
            type: 'image',
            image: '/portfolio/3.png',
            alt: '3D Character Design'
        },
        {
            id: 4,
            type: 'image',
            image: '/portfolio/4.png',
            alt: 'Motion Graphics Animation'
        },
        {
            id: 5,
            type: 'image',
            image: '/portfolio/5.png',
            alt: 'Game Asset Modeling'
        },
        {
            id: 6,
            type: 'image',
            image: '/portfolio/photo_2025-11-06_19-40-18.jpg',
            alt: '3D Scene Design'
        }
    ];

    useEffect(() => {
        Fancybox.bind("[data-fancybox='work-examples']", {});
    }, []);

    const gap = 1;
    return (
        <section className={styles.media_grid}>
            <div className="container">
                <h2 style={{
                    fontSize: '2rem',
                    fontWeight: '600',
                    color: 'rgb(var(--color-title))',
                    marginBottom: '2rem',
                    textAlign: 'center'
                }}>
                    Examples of Our Work
                </h2>
                <div className={styles.wrapper} style={{gap: `${gap}rem`}}>
                    {
                        examples.map(item=>{
                            let flex = 25; // 4 items per row on desktop
                            let flex_mobile = 50; // 2 items per row on mobile
                            let space = gap - gap * flex / 100;
                            return (
                                <div key={item.id} className={`${styles.grid_item}`} style={{flex: `0 0 calc(${flex}% - ${space}rem)`}}>
                                    <a href={item.image} data-fancybox="work-examples" className={styles.item_wrapper}>
                                        <Image
                                            src={item.image}
                                            alt={item.alt}
                                            width={400}
                                            height={300}
                                            style={{
                                                objectFit: 'cover',
                                                borderRadius: '8px'
                                            }}
                                        />
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <a href="/portfolio" className="btn-simple" style={{
                        padding: '0.75rem 2rem',
                        fontSize: '1.1rem',
                        fontWeight: '500',
                        display: 'inline-block',
                        textDecoration: 'none'
                    }}>
                        View Full Portfolio
                    </a>
                </div>
            </div>
        </section>
    );
}

export default WorkExamples;
