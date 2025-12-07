import React from "react";
import type {Metadata} from "next";
import ServicesHero from "@/components/services-hero/services-hero";
import ServicesList from "@/components/services-list/services-list";

export const generateMetadata = (): Metadata => {
    return {
        title: "3D Architectural Visualization & Product Rendering Services | Pricing & Portfolio",
        description: "Expert 3D rendering services for architects & designers. Architectural visualization, product renders & animations. View pricing, portfolio, and get instant quotes.",
        keywords: [
            "3D architectural visualization services",
            "product rendering service pricing",
            "hire 3D rendering studio",
            "architectural 3D rendering cost",
            "professional product rendering",
            "3D animation service portfolio",
            "commercial rendering services",
            "photorealistic 3D visualization"
        ],
        openGraph: {
            title: "3D Architectural & Product Rendering Services | Professional Studio Portfolio",
            description: "Leading 3D rendering studio offering architectural visualization, product renders & animations. Transparent pricing, portfolio showcase, instant quotes.",
            type: "website",
            images: [
                {
                    url: "/services-hero.png",
                    width: 1200,
                    height: 630,
                    alt: "Professional 3D Rendering Services - Architectural Visualization & Product Rendering Portfolio",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "3D Rendering Services | Architecture & Product Visualization",
            description: "Professional architectural visualization & product rendering services. View portfolio, pricing, and get your project quote today.",
            images: ["/services-hero.png"],
            creator: "@renderagency",
        },
        alternates: {
            canonical: "/services",
        },
    };
};

const Page: React.FC = () => {
    return (
        <div className="scheme-light-3 background">
            <ServicesHero />
            <ServicesList />
        </div>
    );
};

export default Page;
