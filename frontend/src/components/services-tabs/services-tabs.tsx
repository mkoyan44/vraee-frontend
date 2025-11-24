"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "@/assets/styles/client/components/services-tabs.module.scss";
import Link from "next/link"

const tabs = [
    {
        "header": "Sketching",
        "title":"Professional Jewelry Sketch Creation",
        "description":"<p>Transform your jewelry concepts into detailed hand-drawn sketches. Our expert designers capture the essence of your vision through meticulous concept art, hand drawing, and creative ideation processes that bring your jewelry designs to life on paper.</p><ul><li>Detailed jewelry sketches and technical drawings</li><li>Concept art development and refinement</li><li>Hand-drawn renderings with technical accuracy</li><li>Creative ideation and design exploration</li></ul>",
        "link":{
            "label":"Learn more",
            "href":"/services/sketching",
        },
        "image": "/services-jewelry-sketches.png",
    },
    {
        "header": "MODELING",
        "title":"Jewelry 3D Modeling Services",
        "description":"<p>Create precise 3D models of your jewelry designs using industry-leading software like Blender, Rhino, and ZBrush. Our modeling process focuses on creating production-ready CAD structures with proper topology and surface details.</p><ul><li>3D modeling in Blender, Rhino, and ZBrush</li><li>Precise CAD structure development</li><li>Optimal topology for manufacturing</li><li>Model preparation for rendering</li></ul>",
        "link":{
            "label":"Learn more",
            "href":"/services/modeling",
        },
        "image": "/services-3d-modeling.png",
    },
    {
        "header": "Rendering",
        "title":"Photorealistic Jewelry Rendering",
        "description":"<p>Produce stunning photorealistic visualizations of your jewelry pieces with professional lighting setups, material accuracy, and high-definition outputs perfect for marketing and e-commerce platforms.</p><ul><li>Professional lighting and shadow setups</li><li>Accurate material rendering (metals, gems, finishes)</li><li>High-resolution photorealistic outputs</li><li>Multi-angle and composition variations</li></ul>",
        "link":{
            "label":"Learn more",
            "href":"/services/rendering",
        },
        "image": "/services-jewelry-rendering.png",
    },
    {
        "header": "Animation",
        "title":"Jewelry Animation & Motion Graphics",
        "description":"<p>Bring your jewelry to life with dynamic turntable animations, material transitions, and motion previews that showcase every facet of your design from multiple perspectives.</p><ul><li>Smooth turntable rotation animations</li><li>Material transition effects and highlights</li><li>Motion previews for client presentations</li><li>Frame-by-frame animation sequences</li></ul>",
        "link":{
            "label":"Learn more",
            "href":"/services/animation",
        },
        "image": "/services-jewelry-animation.png",
    },
    {
        "header": "3D Jewelry Design",
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
                        {tabs.map((tab, i) => (
                            <li
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={i === activeIndex ? styles.active : ""}
                            >
                                {tab.header}
                            </li>
                        ))}
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
