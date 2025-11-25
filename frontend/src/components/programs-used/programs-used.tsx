import React from 'react';
import Link from 'next/link';
import styles from "@/assets/styles/client/components/programs-used.module.scss";
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { Box, Palette, Video } from 'lucide-react';

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
        url: "/client/blender",
        icon: "/software/blender.svg",
        category: "3D Modeling & Rendering",
        description: "Open-source 3D creation suite used for comprehensive modeling, sculpting, animation, texturing, and rendering. We leverage its full 3D pipeline for cost-effective, flexible project workflows and rapid prototyping of complex scenes."
    },
    {
        name: "Cinema 4D",
        url: "/client/cinema-4d",
        icon: "/software/cinema-4d.svg",
        category: "Motion Graphics",
        description: "User-friendly 3D modeling, animation, and rendering software with strong motion graphics capabilities. Perfect for our interior design visualizations and architectural presentations with animated elements."
    },
    {
        name: "After Effects",
        url: "/client/after-effects",
        icon: "/software/after-effects.svg",
        category: "Visual Effects",
        description: "Motion graphics and visual effects software used for compositing, animation, and adding sophisticated effects to our renderings. Key for creating dynamic presentations and video content for client presentations."
    },
    {
        name: "ZBrush",
        url: "/client/zbrush",
        icon: "/software/zbrush.svg",
        category: "Digital Sculpting",
        description: "Digital sculpting and painting software designed for organic modeling and texturing. Critical in our workflow for creating detailed character designs, organic shapes, and highly realistic surface details."
    },
    {
        name: "Rhino",
        url: "/client/rhino",
        icon: "/software/rhino.svg",
        category: "Technical Modeling",
        description: "Advanced NURBS-based modeling software ideal for precise technical modeling, architecture, and product design. Essential for our complex geometric modeling requiring mathematical accuracy and precision."
    },
    {
        name: "Matrix",
        url: "/client/matrix",
        icon: "/software/matrix.svg",
        category: "Communication & Collaboration",
        description: "Our proprietary VFX orchestration platform for distributed rendering, asset management, and collaborative production workflows. Enables seamless coordination across our entire creative pipeline."
    }
];

const ProgramsUsed: React.FC = () => {
    const isInternalLink = (url: string) => url.startsWith('/client/');

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
                        const isInternal = isInternalLink(program.url);
                        const cardElement = (
                            <Card
                                className={styles.program_card}
                                style={{
                                    backgroundColor: 'rgba(var(--color-bg), var(--color-bg-alpha, 1))',
                                    borderColor: 'rgb(var(--color-border))'
                                }}
                            >
                                <CardHeader className="text-center">
                                    <div className={styles.program_icon_wrapper}>
                                        {program.name === "Blender" ? (
                                            <Box className="w-12 h-12 text-blue-500" />
                                        ) : program.name === "After Effects" ? (
                                            <Video className="w-12 h-12 text-purple-500" />
                                        ) : (
                                            <Image
                                                src={program.icon}
                                                alt={`${program.name} logo`}
                                                width={48}
                                                height={48}
                                                className={styles.program_icon}
                                                priority={false}
                                            />
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
                        );

                        return isInternal ? (
                            <Link
                                key={index}
                                href={program.url}
                                className={styles.program_card_link}
                                title={`Learn about our ${program.name} workflow`}
                            >
                                {cardElement}
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
                                {cardElement}
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProgramsUsed;
