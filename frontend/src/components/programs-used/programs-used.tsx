import React from 'react';
import styles from "@/assets/styles/client/components/programs-used.module.scss";

interface SoftwareProgram {
    name: string;
    url: string;
    icon: string;
}

const programs: SoftwareProgram[] = [
    {
        name: "Blender",
        url: "https://www.blender.org",
        icon: "/software/blender.svg"
    },
    {
        name: "Autodesk Maya",
        url: "https://www.autodesk.com/products/maya/overview",
        icon: "/software/maya.svg"
    },
    {
        name: "Autodesk 3ds Max",
        url: "https://www.autodesk.com/products/3ds-max/overview",
        icon: "/software/3ds-max.svg"
    },
    {
        name: "ZBrush",
        url: "https://pixologic.com",
        icon: "/software/zbrush.svg"
    },
    {
        name: "Cinema 4D",
        url: "https://www.maxon.net/en/cinema-4d",
        icon: "/software/cinema-4d.svg"
    },
    {
        name: "Adobe Photoshop",
        url: "https://www.adobe.com/products/photoshop.html",
        icon: "/software/photoshop.svg"
    },
    {
        name: "Adobe After Effects",
        url: "https://www.adobe.com/products/aftereffects.html",
        icon: "/software/after-effects.svg"
    },
    {
        name: "SketchUp",
        url: "https://www.sketchup.com",
        icon: "/software/sketchup.svg"
    }
];

const ProgramsUsed: React.FC = () => {
    return (
        <section className={styles.programs_used}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Programs We Use</h2>
                    <div className="rte">
                        <p>In our work, we utilize a range of professional programs that ensure high quality and efficiency in completing tasks. Thanks to these tools, we can guarantee precision, convenience, and a high level of project execution.</p>
                    </div>
                    <a href="#" className="btn-simple">Learn more</a>
                </div>

                <div className={styles.software_grid}>
                    {programs.map((program, index) => (
                        index === programs.length - 1 ? (
                            <a
                                key={index}
                                href={program.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.software_item}
                                title={`Visit ${program.name} website`}
                            >
                                <div className={styles.icon_container}>
                                    <span className={styles.fallback_text}>{program.name}</span>
                                </div>
                                <span className={styles.software_name}>{program.name}</span>
                            </a>
                        ) : (
                            <div key={index} className={styles.software_item}>
                                <div className={styles.icon_container}>
                                    <span className={styles.fallback_text}>{program.name}</span>
                                </div>
                                <span className={styles.software_name}>{program.name}</span>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramsUsed;
