"use client"
import React, {useEffect,useState} from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Image from "next/image";
import Icon from "@/components/icon/icon";
import {Fancybox} from "@fancyapps/ui";
import styles from "@/assets/styles/client/components/portfolio.module.scss";



const Portfolio: React.FC = ()=> {
    const filters = [
        {
            label:'Show All',
            value:'',
        },
        {
            label:'Sculpting',
            value:'sculpting',
        },
        {
            label:'Sketching',
            value:'sketching',
        },
        {
            label:'Rendering',
            value:'rendering',
        },
        {
            label:'Animation',
            value:'animation',
        },
        {
            label:'Social Media Rendering',
            value:'social-media-rendering',
        },
    ];
    const items = [
        {
            id: 1,
            type: 'video',
            image: '/portfolio/1.png',
            video: '/portfolio/1.mp4',
            category: 'sculpting',
        },
        {
            id: 2,
            type: 'image',
            image: '/portfolio/2.png',
            category:'sketching',
        },
        {
            id: 3,
            type: 'image',
            image: '/portfolio/3.png',
            category:'rendering',
        },
        {
            id: 4,
            type: 'image',
            image: '/portfolio/4.png',
            category:'animation',
        },
        {
            id: 5,
            type: 'video',
            image: '/portfolio/5.png',
            video: '/portfolio/1.mp4',
            category:'social-media-rendering',
        },
    ];
    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {});
    }, []);

    const searchParams = useSearchParams();
    const router = useRouter();
    const currentValue = searchParams.get('portfolio') || '';

    const handleChange = (value: string) => {

        const params = new URLSearchParams(Array.from(searchParams.entries()));
        if (value) {
            params.set('portfolio', value);
        } else {
            params.delete('portfolio');
        }
        const query = params.toString();
        const url = query ? `?${query}` : window.location.pathname;

        router.replace(url, { scroll: false });
    };

    const filteredItems = currentValue
        ? items.filter(item => item.category === currentValue)
        : items;

    return (
        <section className={styles.portfolio}>
            <div className="container">
                <div className={styles.header}>
                    <h1 className={`h2`}>Professional & Concise</h1>
                    <div className={styles.desc}>
                        <p>specializes in creating high-precision 3D models for jewelry. We transform ideas into detailed, production-ready designs, combining craftsmanship with cutting-edge technology.</p>
                    </div>
                </div>
                <div className={styles.filters}>
                    <form method="get">
                        <div className={styles.filter_wrapper}>
                            {
                                filters.map((filter,index)=>{
                                    return (
                                        <label className={`${styles.label} scheme-light`} key={index}>
                                            <input type="radio"
                                                   value={filter.value}
                                                   name="portfolio"
                                                   checked={currentValue === filter.value}
                                                   onChange={() => handleChange(filter.value)}
                                            />
                                            <span>{filter.label}</span>
                                        </label>
                                    )
                                })
                            }
                        </div>
                    </form>
                </div>
                <div className={styles.wrapper}>
                    {
                        filteredItems.map(item=>{
                            return (
                                <div className={styles.item} key={item.id}>
                                    {item.type === 'image' ? (
                                        <a href={item.image} data-fancybox="gallery" className={styles.item_wrapper}>
                                            <Image
                                                src={item.image}
                                                alt=""
                                                width={400}
                                                height={300}
                                            />
                                        </a>
                                    ) : (
                                        <>
                                        <a
                                            href={item.video}
                                            data-fancybox="gallery"
                                            className={styles.item_wrapper}
                                        >
                                            <Image
                                                src={item.image}
                                                alt=""
                                                width={420}
                                                height={420}
                                            />
                                        </a>
                                        <a href={item.video} className={`play_button`}>
                                            <Icon icon={'play'} />
                                        </a>
                                        </>
                                    )}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Portfolio;