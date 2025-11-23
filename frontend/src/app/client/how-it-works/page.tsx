import React from "react";
import type {Metadata} from "next";
import HowItWorks from "@/components/how-it-works/how-it-works";
import Footer from "@/components/footer/footer";

export const generateMetadata = (): Metadata => {
    return {
        title: "How It Works",
        description: "Discover our streamlined 3D rendering process from consultation to final delivery. Professional workflow for architectural visualization, product rendering, and animation services.",
        keywords: [
            "3D rendering process",
            "architectural visualization workflow",
            "product rendering steps",
            "3D animation process",
            "rendering studio workflow",
            "visualization project timeline"
        ],
        openGraph: {
            title: "Professional 3D Rendering Process | Render Agency",
            description: "Learn about our proven 3D rendering workflow from initial consultation through final delivery. Transparent process for all rendering services.",
            type: "website",
            images: [
                {
                    url: "/services-image.png",
                    width: 1200,
                    height: 630,
                    alt: "3D Rendering Process and Workflow - Render Agency",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "3D Rendering Process & Workflow | Render Agency",
            description: "Discover our professional 3D rendering process from consultation to delivery. Transparent workflow for all visualization services.",
            images: ["/services-image.png"],
        },
        alternates: {
            canonical: "/how-it-works",
        },
    };
};

const Page: React.FC = () => {
    return (
        <>
            <HowItWorks/>
            <Footer/>
        </>
    );
}

export default Page;
