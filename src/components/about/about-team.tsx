"use client"
import React from 'react';
import Image from 'next/image';
import styles from "@/assets/styles/client/components/about-team.module.scss";

const AboutTeam: React.FC = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Alexandra Chen",
            role: "Lead 3D CAD Specialist",
            bio: "Expert in precision jewelry modeling with 8+ years of experience in MatrixGold and Rhino. Specializes in complex gemstone settings and manufacturing-ready CAD files.",
            image: "/team/Google_AI_Studio_2026-01-29T13_32_09.809Z.png"
        },
        {
            id: 2,
            name: "Marcus Rodriguez",
            role: "Digital Sculptor",
            bio: "Master of organic jewelry forms using ZBrush and Blender. Creates intricate artistic details that traditional CAD cannot achieve, bringing unique visions to life.",
            image: "/team/Google_AI_Studio_2026-01-29T13_34_12.730Z.png"
        },
        {
            id: 3,
            name: "Sarah Kim",
            role: "Rendering Specialist",
            bio: "Photorealistic visualization expert using Cinema 4D and Octane. Creates stunning e-commerce imagery with accurate material simulation and professional lighting.",
            image: "/team/Google_AI_Studio_2026-01-29T13_34_31.097Z.png"
        },
        {
            id: 4,
            name: "David Thompson",
            role: "Technical Director",
            bio: "Oversees quality assurance and workflow optimization. Ensures every project meets production standards and client specifications with precision.",
            image: "/team/Google_AI_Studio_2026-01-29T13_34_49.577Z.png"
        },
        {
            id: 5,
            name: "Elena Volkov",
            role: "Animation Artist",
            bio: "Creates cinematic jewelry animations and turntable presentations. Specializes in gemstone sparkle effects and dynamic product showcases.",
            image: "/team/Google_AI_Studio_2026-01-29T13_35_32.220Z.png"
        },
        {
            id: 6,
            name: "James Park",
            role: "Client Success Manager",
            bio: "Ensures seamless communication and project coordination. Your dedicated point of contact for updates, feedback, and ensuring your vision is realized.",
            image: "/team/Google_AI_Studio_2026-01-29T13_36_41.449Z.png"
        }
    ];

    return (
        <section className={styles.about_team}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Meet Our Expert Team</h2>
                    <p className={styles.subtitle}>
                        Passionate professionals dedicated to bringing your jewelry visions to life
                    </p>
                </div>
                <div className={styles.team_grid}>
                    {teamMembers.map((member) => {
                        return (
                            <div key={member.id} className={styles.team_card}>
                                <div className={styles.card_image_wrapper}>
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={400}
                                        height={400}
                                        className={styles.member_image}
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className={styles.card_content}>
                                    <h3 className={styles.member_name}>{member.name}</h3>
                                    <p className={styles.member_role}>{member.role}</p>
                                    <p className={styles.member_bio}>{member.bio}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className={styles.cta_section}>
                    <h3 className={styles.cta_title}>Ready to Work With Us?</h3>
                    <p className={styles.cta_text}>
                        Join thousands of satisfied clients who trust Vraee Jewelry Studio for their jewelry 3D visualization needs. Experience the power of the Vraee App - our innovative client portal designed to streamline your project workflow.
                    </p>
                    <div className={styles.cta_buttons}>
                        <a href="/contact" className="btn-primary">Get Started Today</a>
                        <a href="/portfolio" className="btn-simple">View Our Work</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTeam;

