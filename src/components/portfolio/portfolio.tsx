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
            label:'All Projects',
            value:'',
            icon: 'grid',
            count: 24
        },
        {
            label:'Sculpting',
            value:'sculpting',
            icon: 'sculpting',
            count: 8
        },
        {
            label:'Rendering',
            value:'rendering',
            icon: 'paintbrush',
            count: 10
        },
        {
            label:'Animation',
            value:'animation',
            icon: 'animation',
            count: 4
        },
        {
            label:'Social Media',
            value:'social-media-rendering',
            icon: 'design',
            count: 2
        },
    ];

    const items = [
        {
            id: 1,
            type: 'video',
            image: '/portfolio/1.png',
            video: '/portfolio/1.mp4',
            category: 'sculpting',
            title: 'Diamond Ring Concept',
            description: 'Intricate 3D sculpting of a luxury diamond ring with detailed gem settings and ornate band design.',
            client: 'Luxury Jewelers Co.',
            tools: ['ZBrush', 'Rhino', 'Cinema 4D'],
            duration: '5 days',
            featured: true
        },
        {
            id: 2,
            type: 'image',
            image: '/portfolio/2.png',
            category:'sculpting',
            title: 'Gold Necklace Design',
            description: 'Elegant gold necklace with intricate filigree work and emerald stone settings.',
            client: 'Boutique Jewelry',
            tools: ['ZBrush', 'Matrix Gold'],
            duration: '7 days',
            featured: false
        },
        {
            id: 3,
            type: 'image',
            image: '/portfolio/3.png',
            category:'rendering',
            title: 'Earrings Photorealistic Render',
            description: 'High-quality photorealistic rendering of diamond stud earrings with studio lighting.',
            client: 'Online Retailer',
            tools: ['Cinema 4D', 'Redshift'],
            duration: '2 days',
            featured: true
        },
        {
            id: 4,
            type: 'image',
            image: '/portfolio/4.png',
            category:'animation',
            title: 'Ring Rotation Animation',
            description: 'Smooth 360-degree turntable animation showcasing ring details from all angles.',
            client: 'E-commerce Platform',
            tools: ['Cinema 4D', 'After Effects'],
            duration: '3 days',
            featured: false
        },
        {
            id: 5,
            type: 'video',
            image: '/portfolio/5.png',
            video: '/portfolio/1.mp4',
            category:'social-media-rendering',
            title: 'Instagram Product Showcase',
            description: 'Optimized rendering for social media featuring bracelet with lifestyle background.',
            client: 'Social Media Brand',
            tools: ['Blender', 'Photoshop'],
            duration: '4 days',
            featured: false
        },
        {
            id: 6,
            type: 'image',
            image: '/portfolio/photo_2025-06-25_20-27-11.jpg',
            category:'sculpting',
            title: 'Custom Engagement Ring',
            description: 'Bespoke engagement ring design with unique center stone setting and intricate detailing.',
            client: 'Private Client',
            tools: ['ZBrush', 'Rhino'],
            duration: '10 days',
            featured: true
        },
        {
            id: 7,
            type: 'image',
            image: '/portfolio/photo_2025-06-25_21-39-20.jpg',
            category:'rendering',
            title: 'Pearl Necklace Render',
            description: 'Studio-quality rendering of pearl necklace with realistic material properties.',
            client: 'Luxury Brand',
            tools: ['Cinema 4D', 'V-Ray'],
            duration: '3 days',
            featured: false
        },
        {
            id: 8,
            type: 'image',
            image: '/portfolio/photo_2025-06-25_21-40-37.jpg',
            category:'sculpting',
            title: 'Antique Style Brooch',
            description: 'Vintage-inspired brooch with detailed engraving and multiple gemstone settings.',
            client: 'Antique Dealer',
            tools: ['ZBrush', 'Matrix Gold'],
            duration: '8 days',
            featured: false
        },
        {
            id: 9,
            type: 'image',
            image: '/portfolio/photo_2025-06-25_21-41-33.jpg',
            category:'animation',
            title: 'Jewelry Collection Showcase',
            description: 'Animated presentation of complete jewelry collection for client presentation.',
            client: 'Design Studio',
            tools: ['Cinema 4D', 'Element 3D'],
            duration: '5 days',
            featured: true
        }
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
        <>
            {/* Hero Section */}
            <section className={styles.portfolio_hero}>
                <div className="container">
                    <div className={styles.hero_content}>
                        <div className={styles.badge}>
                            <span>Our Portfolio</span>
                        </div>
                        <h1 className={`h1`}>Showcasing Excellence in 3D Jewelry Design</h1>
                        <div className={styles.hero_desc}>
                            <p>Explore our extensive portfolio of award-winning 3D jewelry visualizations, from intricate sculpting to photorealistic rendering. Each project represents our commitment to craftsmanship, innovation, and client satisfaction.</p>
                        </div>
                        <div className={styles.hero_stats}>
                            <div className={styles.stat}>
                                <div className={styles.stat_number}>200+</div>
                                <div className={styles.stat_label}>Projects Completed</div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.stat_number}>50+</div>
                                <div className={styles.stat_label}>Happy Clients</div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.stat_number}>4.9</div>
                                <div className={styles.stat_label}>Average Rating</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.hero_bg}></div>
            </section>

            {/* Main Portfolio Section */}
            <section className={styles.portfolio}>
                <div className="container">
                    <div className={styles.filters}>
                        <div className={styles.filter_wrapper}>
                            {
                                filters.map((filter,index)=>{
                                    return (
                                        <button
                                            key={index}
                                            className={`${styles.filter_btn} ${currentValue === filter.value ? styles.active : ''}`}
                                            onClick={() => handleChange(filter.value)}
                                        >
                                            <Icon icon={filter.icon as any} />
                                            <span className={styles.filter_label}>{filter.label}</span>
                                            <span className={styles.filter_count}>({filter.count})</span>
                                        </button>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className={styles.portfolio_grid}>
                        {
                            filteredItems.map(item=>{
                                return (
                                    <article className={`${styles.portfolio_card} ${item.featured ? styles.featured : ''}`} key={item.id}>
                                        <div className={styles.card_image}>
                                            {item.type === 'video' && (
                                                <div className={styles.video_badge}>
                                                    <Icon icon="play" />
                                                </div>
                                            )}
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={400}
                                                height={300}
                                                className={styles.image}
                                            />
                                            <div className={styles.image_overlay}>
                                                <div className={styles.overlay_content}>
                                                    <h3 className={styles.overlay_title}>{item.title}</h3>
                                                    <p className={styles.overlay_desc}>{item.description}</p>
                                                    <div className={styles.overlay_meta}>
                                                        <span className={styles.client}>{item.client}</span>
                                                        <span className={styles.duration}>{item.duration}</span>
                                                    </div>
                                                    <div className={styles.overlay_tools}>
                                                        {item.tools.map((tool, idx) => (
                                                            <span key={idx} className={styles.tool_tag}>{tool}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            {item.featured && (
                                                <div className={styles.featured_badge}>
                                                    <Icon icon="star" />
                                                    <span>Featured</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className={styles.card_content}>
                                            <div className={styles.card_meta}>
                                                <span className={styles.category}>{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
                                                <span className={styles.date}>{item.duration}</span>
                                            </div>
                                            <h3 className={styles.card_title}>{item.title}</h3>
                                            <p className={styles.card_desc}>{item.description.substring(0, 100)}...</p>
                                            <div className={styles.card_actions}>
                                                {item.type === 'image' ? (
                                                    <a href={item.image} data-fancybox="gallery" className={styles.view_btn}>
                                                        <Icon icon="paintbrush" />
                                                        View Project
                                                    </a>
                                                ) : (
                                                    <a href={item.video} data-fancybox="gallery" className={styles.view_btn}>
                                                        <Icon icon="play" />
                                                        Watch Video
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </article>
                                )
                            })
                        }
                    </div>

                    <div className={styles.load_more}>
                        <button className="btn-secondary">
                            Load More Projects
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Portfolio;
