import React from "react";
import type {Metadata} from "next";
import AboutHero from "@/components/about/about-hero";
import AboutValues from "@/components/about/about-values";
import AboutStory from "@/components/about/about-story";
import AboutTeam from "@/components/about/about-team";
import AboutAchievements from "@/components/about/about-achievements";

export const generateMetadata = (): Metadata => {
    return {
        title: "About Us | Vraee Jewelry Studio - Expert Jewelry CAD Specialists",
        description: "Learn about Vraee Jewelry Studio - a premier 3D rendering studio specializing in jewelry visualization. 5+ years of excellence, 12,000+ models created, and 98% client recommendation rate. Meet our expert team.",
        keywords: [
            "about vraee",
            "jewelry 3D company",
            "jewelry CAD specialists",
            "jewelry rendering studio",
            "3D jewelry design team",
            "jewelry visualization experts",
            "jewelry CAD company",
            "about jewelry 3D studio",
            "jewelry design professionals",
            "3D rendering specialists"
        ],
        openGraph: {
            title: "About Us | Vraee Jewelry Studio - Expert Jewelry CAD Specialists",
            description: "Learn about Vraee Jewelry Studio - a premier 3D rendering studio specializing in jewelry visualization. 5+ years of excellence, 12,000+ models created, and 98% client recommendation rate.",
            type: "website",
            images: [
                {
                    url: "/hero-image.png",
                    width: 1200,
                    height: 630,
                    alt: "Vraee Jewelry Studio Team",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "About Us | Vraee Jewelry Studio",
            description: "Learn about Vraee Jewelry Studio - a premier 3D rendering studio specializing in jewelry visualization.",
            images: ["/hero-image.png"],
        },
        alternates: {
            canonical: "/about",
        },
    };
};

const Page: React.FC = () => {
    return (
        <>
            <AboutHero />
            <AboutValues />
            <AboutStory />
            <AboutAchievements />
            <AboutTeam />
        </>
    );
};

export default Page;

