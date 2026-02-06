"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "@/assets/styles/client/components/services-tabs.module.scss";
import Link from "next/link";
import Image from "next/image";
import { PenTool, Box, Image as ImageIcon, Play, Sparkles, FileText } from "lucide-react";

const tabs = [
    {
        "header": "Sculpting",
        "label": "Sculpt",
        "icon": PenTool,
        "title":"Professional Jewelry Digital Sculpting",
        "description":"<p>Transform your jewelry vision into stunning digital sculptures that bring your ideas to life in three dimensions. Our expert digital sculptors specialize in organic jewelry forms, creating detailed 3D models that capture artistic beauty and technical precision.</p><ul><li>Organic jewelry sculpting and modeling</li><li>Concept visualization in 3D space</li><li>Gemstone and metal sculptural details</li><li>Multiple design variations and artistic interpretations</li></ul>",
        "link":{
            "label":"Learn more",
            "href":"/services/sculpting",
        },
        "image": "/portfolio/sculpting/Yellow_Top_000232300.jpg",
    },
    {
        "header": "Modeling",
        "label": "Model",
        "icon": Box,
        "title":"Precision Jewelry 3D Modeling",
        "description":"<p>Transform your jewelry sketches into accurate, manufacturing-ready 3D models. Our specialized team ensures every curve, prong, and setting is anatomically precise, creating models trusted by master jewelers worldwide.</p><ul><li>Anatomically precise ring and pendant modeling</li><li>Gemstone setting and prong configuration</li><li>Metal weight calculations and adjustment</li><li>Production-ready CAD files for casting</li></ul>",
        "link":{
            "label":"Learn more",
            "href":"/services/modeling",
        },
        "image": "/portfolio/sculpting/White_Top_01212210000.jpg",
    },
    {
        "header": "Rendering",
        "label": "Render",
        "icon": ImageIcon,
        "title":"E-commerce Jewelry Visualization",
        "description":"<p>Create stunning jewelry photography that converts browsers to buyers. Our photorealistic renderings feature accurate material simulation, professional studio lighting, and 360° views that showcase your pieces perfectly on any sales platform.</p><ul><li>Lifestyle jewelry photography rendering</li><li>E-commerce product image sets (3-8 angles)</li><li>Accurate metal and gemstone material simulation</li><li>Professional studio lighting and composition</li></ul>",
        "link":{
            "label":"Learn more",
            "href":"/services/rendering",
        },
        "image": "/portfolio/rendring/shatlavna.jpg",
    },
    {
        "header": "Animation",
        "label": "Animate",
        "icon": Play,
        "title":"Jewelry Motion & Presentation",
        "description":"<p>Showcase your jewelry designs with cinematic quality. Our animations highlight gemstone sparkle, metal reflections, and the intricate details that make each piece unique, perfect for websites, presentations, and social media.</p><ul><li>Elegant jewelry turntable presentations</li><li>Gemstone sparkle and light animations</li><li>Metal texture and finish visualizations</li><li>Cinematic jewelry showcase videos</li></ul>",
        "link":{
            "label":"Learn more",
            "href":"/services/animation",
        },
        "image": "/portfolio/rendring/anim1.jpg",
    },
    {
        "header": "3D Jewelry Design",
        "label": "Design",
        "icon": Sparkles,
        "title":"Creative 3D Jewelry Design Process",
        "description":"<p>Experience our complete creative 3D digital design process, from initial concepts to fully realized CAD development and intricate detail modeling that pushes the boundaries of jewelry artistry.</p><ul><li>Complete 3D digital design workflow</li><li>CAD development and prototyping</li><li>Detailed surface and feature modeling</li><li>Complex CAD structure creation</li></ul>",
        "link":{
            "label":"Learn more",
            "href":"/services/3d-design",
        },
        "image": "/portfolio/rendring/lavna1.jpg",
    },
    {
        "header": "Jewelry CAD Design",
        "label": "CAD",
        "icon": FileText,
        "title":"Engineering-Level Jewelry CAD",
        "description":"<p>Engineered with precision using parametric CAD design techniques that ensure manufacturing accuracy and technical perfection in every aspect of your jewelry piece.</p><ul><li>Parametric CAD design systems</li><li>Engineering-level jewelry modeling</li><li>Technical specification views</li><li>Manufacturing-ready CAD files</li></ul>",
        "link":{
            "label":"Learn more",
            "href":"/services/cad-design",
        },
        "image": "/portfolio/rendring/verjna_00000.jpg",
    },
];

const ServicesTabs: React.FC = ()=> {
    const ulRef = useRef<HTMLUListElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (!ulRef.current) return;
        const li = ulRef.current.children[activeIndex] as HTMLLIElement;
        if (li) li.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }, [activeIndex]);
    const iconColors = ['#0D9488', '#6366F1', '#2563EB', '#DC2626', '#7C3AED', '#059669'];
    return (
        <section className={styles.services_tabs} aria-label="Services">
            <div className="container">
                <header className={styles.section_header}>
                    <span className={styles.section_label}>Services</span>
                    <h2 className={styles.section_title}>What We Do</h2>
                    <p className={styles.section_desc}>From concept to e-commerce: digital sculpting, precision CAD, photorealistic rendering, and animation for jewelry brands worldwide.</p>
                </header>
                <nav className={styles.nav_wrap} aria-label="Service categories">
                    <ul
                        ref={ulRef}
                        className={styles.tabs_nav}
                    >
                        {tabs.map((tab, i) => {
                            const IconComponent = tab.icon;
                            return (
                                <li
                                    key={i}
                                    role="tab"
                                    aria-selected={i === activeIndex}
                                    tabIndex={0}
                                    onClick={() => setActiveIndex(i)}
                                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveIndex(i); }}
                                    className={i === activeIndex ? styles.active : ''}
                                >
                                    <IconComponent
                                        className={styles.tab_icon}
                                        style={{ color: iconColors[i % iconColors.length] }}
                                        aria-hidden
                                    />
                                    <span>{tab.label ?? tab.header}</span>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <div className={styles.tabs} role="tabpanel">
                    {tabs.map((tab, i) => (
                        <div
                            id={`tab-${i + 1}`}
                            className={i === activeIndex ? `${styles.active} ${styles.tab}` : styles.tab}
                            key={i}
                            hidden={i !== activeIndex}
                        >
                            <div className={styles.tab_content}>
                                <h3 className={styles.tab_title}>{tab.title}</h3>
                                <div className={styles.tab_body} dangerouslySetInnerHTML={{ __html: tab.description }} />
                                <Link href={tab.link.href} className={styles.tab_link}>
                                    {tab.link.label}
                                    <span aria-hidden> →</span>
                                </Link>
                            </div>
                            <div className={styles.tab_media}>
                                <Image
                                    src={tab.image}
                                    alt={`${tab.header} — sample work`}
                                    width={725}
                                    height={600}
                                    className={styles.tab_image}
                                    style={{ width: 'auto', height: 'auto', objectFit: 'contain' }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesTabs;
