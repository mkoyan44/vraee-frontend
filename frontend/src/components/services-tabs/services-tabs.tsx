"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "@/assets/styles/client/components/services-tabs.module.scss";
import Link from "next/link";
import { PenTool, Box, Image, Play, Sparkles, FileText } from "lucide-react";

const tabs = [
    {
        "header": "Sketching",
        "icon": PenTool,
        "title":"Professional Jewelry Sketch Creation",
        "description":"<p>Transform your jewelry vision into detailed technical sketches that capture every detail. Our expert designers specialize in jewelry forms, creating technical drawings that manufacturers understand while maintaining artistic beauty.</p><ul><li>Technical jewelry drawings for manufacturing</li><li>Concept visualization and design refinement</li><li>Gemstone and metal specifications</li><li>Multiple design variations and options</li></ul>",
        "link":{
            "label":"Learn more",
            "href":"/services/sketching",
        },
        "image": "/services-jewelry-sketches.png",
    },
    {
        "header": "MODELING",
        "icon": Box,
        "title":"Precision Jewelry 3D Modeling",
        "description":"<p>Transform your jewelry sketches into accurate, manufacturing-ready 3D models. Our specialized team ensures every curve, prong, and setting is anatomically precise, creating models trusted by master jewelers worldwide.</p><ul><li>Anatomically precise ring and pendant modeling</li><li>Gemstone setting and prong configuration</li><li>Metal weight calculations and adjustment</li><li>Production-ready CAD files for casting</li></ul>",
        "link":{
            "label":"Learn more",
            "href":"/services/modeling",
        },
        "image": "/services-3d-modeling.png",
    },
    {
        "header": "Rendering",
        "icon": Image,
        "title":"E-commerce Jewelry Visualization",
        "description":"<p>Create stunning jewelry photography that converts browsers to buyers. Our photorealistic renderings feature accurate material simulation, professional studio lighting, and 360° views that showcase your pieces perfectly on any sales platform.</p><ul><li>Lifestyle jewelry photography rendering</li><li>E-commerce product image sets (3-8 angles)</li><li>Accurate metal and gemstone material simulation</li><li>Professional studio lighting and composition</li></ul>",
        "link":{
            "label":"Learn more",
            "href":"/services/rendering",
        },
        "image": "/services-jewelry-rendering.png",
    },
    {
        "header": "Animation",
        "icon": Play,
        "title":"Jewelry Motion & Presentation",
        "description":"<p>Showcase your jewelry designs with cinematic quality. Our animations highlight gemstone sparkle, metal reflections, and the intricate details that make each piece unique, perfect for websites, presentations, and social media.</p><ul><li>Elegant jewelry turntable presentations</li><li>Gemstone sparkle and light animations</li><li>Metal texture and finish visualizations</li><li>Cinematic jewelry showcase videos</li></ul>",
        "link":{
            "label":"Learn more",
            "href":"/services/animation",
        },
        "image": "/services-jewelry-animation.png",
    },
    {
        "header": "3D Jewelry Design",
        "icon": Sparkles,
        "title":"Creative 3D Jewelry Design Process",
        "description":"<p>Experience our complete creative 3D digital design process, from initial concepts to fully realized CAD development and intricate detail modeling that pushes the boundaries of jewelry artistry.</p><ul><li>Complete 3D digital design workflow</li><li>CAD development and prototyping</li><li>Detailed surface and feature modeling</li><li>Complex CAD structure creation</li></ul>",
        "link":{
            "label":"Learn more",
            "href":"/services/3d-design",
        },
        "image": "/services-3d-jewelry-design.png",
    },
    {
        "header": "Jewelry CAD Design",
        "icon": FileText,
        "title":"Engineering-Level Jewelry CAD",
        "description":"<p>Engineered with precision using parametric CAD design techniques that ensure manufacturing accuracy and technical perfection in every aspect of your jewelry piece.</p><ul><li>Parametric CAD design systems</li><li>Engineering-level jewelry modeling</li><li>Technical specification views</li><li>Manufacturing-ready CAD files</li></ul>",
        "link":{
            "label":"Learn more",
            "href":"/services/cad-design",
        },
        "image": "/services-jewelry-cad.png",
    },
];

type CSSVars = React.CSSProperties & {
    [key: `--${string}`]: string;
};

const ServicesTabs: React.FC = ()=> {
    const ulRef = useRef<HTMLUListElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [tabStyle, setTabStyle] = useState<CSSVars>({
        "--tab-width": "0px",
        "--tab-left": "0px",
    });

    useEffect(() => {
        if (!ulRef.current) return;
        const ul = ulRef.current;
        const li = ul.children[activeIndex] as HTMLLIElement;

        if (li) {
            const width = li.offsetWidth;
            const left = li.offsetLeft;

            setTabStyle({
                "--tab-width": `${width}px`,
                "--tab-left": `${left}px`,
            });
        }
    }, [activeIndex]);
    let index = 1
    return (
        <section className={styles.services_tabs}>
            <div className="container">
                <h2 className="text-center">Services</h2>
                <nav>
                    <ul
                        ref={ulRef}
                        className={styles["tabs-nav"]}
                        style={tabStyle}
                    >
                        {tabs.map((tab, i) => {
                            const IconComponent = tab.icon;
                            return (
                                <li
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    className={i === activeIndex ? styles.active : ""}
                                >
                                    <IconComponent
                                        className="w-4 h-4 mr-2"
                                        style={{
                                            color: i === 0 ? '#10B981' : i === 1 ? '#F59E0B' : i === 2 ? '#3B82F6' : i === 3 ? '#EF4444' : i === 4 ? '#8B5CF6' : '#EC4899'
                                        }}
                                    />
                                    {tab.header}
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <div className={styles["tabs"]}>
                    {tabs.map((tab, i) => (
                        <div
                            id={'tab-' + index}
                            className={i === activeIndex ? styles.active + ' ' + styles['tab'] : styles['tab']}
                            key={i}
                        >
                            <div className={styles['tab-content']}>
                                <h3 className={`h6`}>{tab.title}</h3>
                                <div className="rte mb-5" dangerouslySetInnerHTML={{__html: tab.description}}></div>
                                <Link href={tab.link.href} className="btn-simple">{tab.link.label}</Link>
                            </div>
                            <div className={styles['tab-media']}>
                                <img src={tab.image} alt={tab.header}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesTabs;
