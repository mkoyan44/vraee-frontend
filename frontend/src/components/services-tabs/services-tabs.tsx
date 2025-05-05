"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "@/assets/styles/services-tabs.module.scss";
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
    },
    {
        "header": "MODELING",
        "title":"Jewelry Sketch Design Services 2",
        "description":"<p>Get your jewelry ideas converted into a sketch in the shortest time. Sarkissian Luxury Studio is here with professional jewelry sketch design services to give life to your designs that are still sparking in your mind.</p><ul><li>Works with any conferencing app</li><li>Works with all call center platforms</li><li>Works with any headphone and device</li></ul>",
        "link":{
            "label":"Learn more",
            "href":"/",
        },
    },
    {
        "header": "Rendering",
        "title":"Jewelry Sketch Design Services 3",
        "description":"<p>Get your jewelry ideas converted into a sketch in the shortest time. Sarkissian Luxury Studio is here with professional jewelry sketch design services to give life to your designs that are still sparking in your mind.</p><ul><li>Works with any conferencing app</li><li>Works with all call center platforms</li><li>Works with any headphone and device</li></ul>",
        "link":{
            "label":"Learn more",
            "href":"/",
        },
    },
    {
        "header": "Animation",
        "title":"Jewelry Sketch Design Services 4",
        "description":"<p>Get your jewelry ideas converted into a sketch in the shortest time. Sarkissian Luxury Studio is here with professional jewelry sketch design services to give life to your designs that are still sparking in your mind.</p><ul><li>Works with any conferencing app</li><li>Works with all call center platforms</li><li>Works with any headphone and device</li></ul>",
        "link":{
            "label":"Learn more",
            "href":"/",
        },
    },
    {
        "header": "3D Jewelry Design",
        "title":"Jewelry Sketch Design Services 5",
        "description":"<p>Get your jewelry ideas converted into a sketch in the shortest time. Sarkissian Luxury Studio is here with professional jewelry sketch design services to give life to your designs that are still sparking in your mind.</p><ul><li>Works with any conferencing app</li><li>Works with all call center platforms</li><li>Works with any headphone and device</li></ul>",
        "link":{
            "label":"Learn more",
            "href":"/",
        },
    },
    {
        "header": "Jewelry CAD Design",
        "title":"Jewelry Sketch Design Services 6",
        "description":"<p>Get your jewelry ideas converted into a sketch in the shortest time. Sarkissian Luxury Studio is here with professional jewelry sketch design services to give life to your designs that are still sparking in your mind.</p><ul><li>Works with any conferencing app</li><li>Works with all call center platforms</li><li>Works with any headphone and device</li></ul>",
        "link":{
            "label":"Learn more",
            "href":"/",
        },
    },
];

type CSSVars = React.CSSProperties & {
    [key: `--${string}`]: string;
};

function ServicesTabs() {
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
                                <h3>{tab.title}</h3>
                                <div className="rte" dangerouslySetInnerHTML={{__html: tab.description}}></div>
                                <Link href={tab.link.href}>{tab.link.label}</Link>
                            </div>
                            <div className={styles['tab-media']}>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesTabs;
