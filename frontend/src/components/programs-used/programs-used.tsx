import React from 'react';
import Link from 'next/link';
import styles from "@/assets/styles/client/components/programs-used.module.scss";
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

interface SoftwareProgram {
    name: string;
    url: string;
    icon: string;
    category: string;
    description: string;
}

const programs: SoftwareProgram[] = [
    {
        name: "Blender",
        url: "https://www.blender.org",
        icon: "/software/blender.svg",
        category: "3D Modeling & Rendering",
        description: "Open-source 3D creation suite used for comprehensive modeling, sculpting, animation, texturing, and rendering. We leverage its full 3D pipeline for cost-effective, flexible project workflows and rapid prototyping of complex scenes."
    },
    {
        name: "Cinema 4D",
        url: "https://www.maxon.net/en/cinema-4d",
        icon: "/software/cinema-4d.svg",
        category: "Motion Graphics",
        description: "User-friendly 3D modeling, animation, and rendering software with strong motion graphics capabilities. Perfect for our interior design visualizations and architectural presentations with animated elements."
    },
    {
        name: "Adobe After Effects",
        url: "https://www.adobe.com/products/aftereffects.html",
        icon: "/software/after-effects.svg",
        category: "Visual Effects",
        description: "Motion graphics and visual effects software used for compositing, animation, and adding sophisticated effects to our renderings. Key for creating dynamic presentations and video content for client presentations."
    },
    {
        name: "ZBrush",
        url: "https://pixologic.com",
        icon: "/software/zbrush.svg",
        category: "Digital Sculpting",
        description: "Digital sculpting and painting software designed for organic modeling and texturing. Critical in our workflow for creating detailed character designs, organic shapes, and highly realistic surface details."
    },
    {
        name: "Rhino",
        url: "https://www.rhino3d.com",
        icon: "/software/rhino.svg",
        category: "Technical Modeling",
        description: "Advanced NURBS-based modeling software ideal for precise technical modeling, architecture, and product design. Essential for our complex geometric modeling requiring mathematical accuracy and precision."
    },
    {
        name: "Matrix",
        url: "https://matrix.org",
        icon: "/software/matrix.svg",
        category: "Communication & Collaboration",
        description: "Open standard for interoperable, decentralized and end-to-end encrypted communication. We use it for secure client communication, project collaboration, and real-time feedback sharing in our workflow."
    }
];

const ProgramsUsed: React.FC = () => {
    return (
        <section className={styles.programs_used}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Programs We Use</h2>
                    <div className="rte">
                        <p>Our production pipeline utilizes industry-leading software tools that enable us to deliver exceptional 3D visualization and rendering services. Each tool plays a specialized role in our comprehensive workflow, from concept development to final presentation.</p>
                    </div>
                    <a href="#contact" className="btn-simple">Get Started</a>
                </div>

                <div className={styles.programs_cards_grid}>
                    {programs.map((program, index) => {
                        const isBlender = program.name === "Blender";
                        const linkProps = isBlender
                            ? { href: "/blender", title: "Learn more about our Blender workflow" }
                            : {
                                href: program.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                title: `Visit ${program.name} website`
                            };

                        return isBlender ? (
                            <Link
                                key={index}
                                href="/blender"
                                className={styles.program_card_link}
                                title="Learn more about our Blender workflow"
                            >
                                <Card
                                    className={styles.program_card}
                                    style={{
                                        backgroundColor: 'rgba(var(--color-bg), var(--color-bg-alpha, 1))',
                                        borderColor: 'rgb(var(--color-border))'
                                    }}
                                >
                                    <CardHeader className="text-center">
                                        <div className={styles.program_icon_wrapper}>
                                            {program.icon === "/software/blender.svg" ? (
                                                <Image
                                                    src={program.icon}
                                                    alt={`${program.name} logo`}
                                                    width={48}
                                                    height={48}
                                                    className={styles.program_icon}
                                                    priority={false}
                                                />
                                            ) : (
                                                <div className={styles.program_icon_fallback}>
                                                    <span className={styles.program_icon_text}>
                                                        {program.name.split(' ').map(word => word[0]).join('').toUpperCase()}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        <div className={styles.program_meta}>
                                            <h3 className={styles.program_name} style={{ color: 'rgb(var(--color-title))' }}>
                                                {program.name}
                                            </h3>
                                            <div className={styles.program_category}>
                                                {program.category}
                                            </div>
                                        </div>
                                    </CardHeader>

                                    <CardContent>
                                        <p className={styles.program_description} style={{ color: 'rgb(var(--color-text))' }}>
                                            {program.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ) : (
                            <a
                                key={index}
                                href={program.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.program_card_link}
                                title={`Visit ${program.name} website`}
                            >
                                <Card
                                    className={styles.program_card}
                                    style={{
                                        backgroundColor: 'rgba(var(--color-bg), var(--color-bg-alpha, 1))',
                                        borderColor: 'rgb(var(--color-border))'
                                    }}
                                >
                                    <CardHeader className="text-center">
                                        <div className={styles.program_icon_wrapper}>
                                            {program.icon === "/software/blender.svg" ? (
                                                <Image
                                                    src={program.icon}
                                                    alt={`${program.name} logo`}
                                                    width={48}
                                                    height={48}
                                                    className={styles.program_icon}
                                                    priority={false}
                                                />
                                            ) : (
                                                <div className={styles.program_icon_fallback}>
                                                    <span className={styles.program_icon_text}>
                                                        {program.name.split(' ').map(word => word[0]).join('').toUpperCase()}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        <div className={styles.program_meta}>
                                            <h3 className={styles.program_name} style={{ color: 'rgb(var(--color-title))' }}>
                                                {program.name}
                                            </h3>
                                            <div className={styles.program_category}>
                                                {program.category}
                                            </div>
                                        </div>
                                    </CardHeader>

                                    <CardContent>
                                        <p className={styles.program_description} style={{ color: 'rgb(var(--color-text))' }}>
                                            {program.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProgramsUsed;
