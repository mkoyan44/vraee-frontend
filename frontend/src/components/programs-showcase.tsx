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
        name: "ZBrush",
        url: "/client/zbrush",
        icon: "/software/zbrush.svg",
        category: "Digital Sculpting",
        description: "Digital sculpting and painting software designed for organic modeling and texturing. Critical in our workflow for creating detailed character designs, organic shapes, and highly realistic surface details."
    },
    {
        name: "After Effects",
        url: "/client/after-effects",
        icon: "/software/after-effects.svg",
        category: "Visual Effects",
        description: "Motion graphics and visual effects software used for compositing, animation, and adding sophisticated effects to our renderings. Key for creating dynamic presentations and video content for client presentations."
    },
    {
        name: "Rhino",
        url: "/client/rhino",
        icon: "/software/rhino.svg",
        category: "Architectural Design",
        description: "Precision 3D modeling tool used for architectural and product design with mathematical accuracy. Essential for creating parametric models and working with complex curved surfaces in our jewelry and product visualization projects."
    },
    {
        name: "Matrix",
        url: "/client/matrix",
        icon: "/software/matrix.svg",
        category: "In-House Tools",
        description: "Our proprietary VFX orchestration platform for distributed rendering, asset management, and collaborative production workflows. Enables seamless coordination across our entire creative pipeline."
    }
];

const ProgramsShowcase: React.FC = () => {
    const isInternalLink = (url: string) => url.startsWith('/client/');

    return (
        <div className={styles.programs_cards_grid}>
            {programs.map((program, index) => {
                const isInternal = isInternalLink(program.url);
                const cardElement = (
                    <Card className={styles.program_card}>
                        <CardHeader className="text-center pb-3">
                            <div className={styles.program_icon_wrapper}>
                                <Image
                                    src={program.icon}
                                    alt={`${program.name} logo`}
                                    width={48}
                                    height={48}
                                    className={styles.program_icon}
                                />
                            </div>

                            <div className={styles.program_meta}>
                                <h3 className={styles.program_name}>
                                    {program.name}
                                </h3>
                                <div className={styles.program_category}>
                                    {program.category}
                                </div>
                            </div>
                        </CardHeader>

                        <CardContent className="pt-0">
                            <p className={styles.program_description}>
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
    );
};

export default ProgramsShowcase;
