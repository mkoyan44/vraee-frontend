"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "@/assets/styles/client/components/services-tabs.module.scss";
import Link from "next/link"

const tabs = [
    {
        "header": "Sketching",
        "title":"Jewelry Sketch Design Services",
        "description":"<p>Get your jewelry ideas converted into a sketch in the shortest time. Sarkissian Luxury Studio is here with professional jewelry sketch design services to give life to your designs that are still sparking in your mind.</p><ul><li>Works with any conferencing app</li><li>Works with all call center platforms</li><li>Works with any headphone and device</li></ul>",
        "link":{
            "label":"Learn more",
            "href":"/",
        },
        "image": "/services-image.png",
    },
    {
        "header": "MODELING",
        "title":"Jewelry Sketch Design Services 2",
        "description":"<p>Get your jewelry ideas converted into a sketch in the shortest time. Sarkissian Luxury Studio is here with professional jewelry sketch design services to give life to your designs that are still sparking in your mind.</p><ul><li>Works with any conferencing app</li><li>Works with all call center platforms</li><li>Works with any headphone and device</li></ul>",
        "link":{
            "label":"Learn more",
            "href":"/",
        },
        "image": "/services-image.png",
    },
    {
        "header": "Rendering",
        "title":"Jewelry Sketch Design Services 3",
        "description":"<p>Get your jewelry ideas converted into a sketch in the shortest time. Sarkissian Luxury Studio is here with professional jewelry sketch design services to give life to your designs that are still sparking in your mind.</p><ul><li>Works with any conferencing app</li><li>Works with all call center platforms</li><li>Works with any headphone and device</li></ul>",
        "link":{
            "label":"Learn more",
            "href":"/",
        },
        "image": "/services-image.png",
    },
    {
        "header": "Animation",
        "title":"Jewelry Sketch Design Services 4",
        "description":"<p>Get your jewelry ideas converted into a sketch in the shortest time. Sarkissian Luxury Studio is here with professional jewelry sketch design services to give life to your designs that are still sparking in your mind.</p><ul><li>Works with any conferencing app</li><li>Works with all call center platforms</li><li>Works with any headphone and device</li></ul>",
        "link":{
            "label":"Learn more",
            "href":"/",
        },
        "image": "/services-image.png",
    },
    {
        "header": "3D Jewelry Design",
        "title":"Jewelry Sketch Design Services 5",
        "description":"<p>Get your jewelry ideas converted into a sketch in the shortest time. Sarkissian Luxury Studio is here with professional jewelry sketch design services to give life to your designs that are still sparking in your mind.</p><ul><li>Works with any conferencing app</li><li>Works with all call center platforms</li><li>Works with any headphone and device</li></ul>",
        "link":{
            "label":"Learn more",
            "href":"/",
        },
        "image": "/services-image.png",
    },
    {
        "header": "Jewelry CAD Design",
        "title":"Jewelry Sketch Design Services 6",
        "description":"<p>Get your jewelry ideas converted into a sketch in the shortest time. Sarkissian Luxury Studio is here with professional jewelry sketch design services to give life to your designs that are still sparking in your mind.</p><ul><li>Works with any conferencing app</li><li>Works with all call center platforms</li><li>Works with any headphone and device</li></ul>",
        "link":{
            "label":"Learn more",
            "href":"/",
        },
        "image": "/services-image.png",
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
        <section>
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
