import React from "react";
import type {Metadata} from "next";
import HowItWorksDetailed from "@/components/how-it-works-detailed/how-it-works-detailed";

export const generateMetadata = (): Metadata => {
    return {
        title: "Complete 3D Jewelry Rendering Process | 12-Step Excellence Workflow",
        description: "Experience our comprehensive 12-step 3D jewelry rendering process. From vision to virtual brilliance - meet our team, explore our technology, and discover why 5000+ clients choose our expertise.",
        keywords: [
            "3D jewelry rendering process",
            "jewelry CAD visualization workflow",
            "professional 3D rendering studio",
            "jewelry design process",
            "3D modeling workflow",
            "rendering technology experts",
            "jewelry visualization team",
            "quality assurance process",
            "rendering service workflow",
            "jewelry design specialists"
        ],
        openGraph: {
            title: "Complete 3D Jewelry Rendering Process | 12-Step Excellence | Render Agency",
            description: "Discover our world-class 12-step 3D jewelry rendering process. Meet our master craftsmen, explore cutting-edge technology, and experience unparalleled quality assurance. 5000+ projects delivered with 99.8% satisfaction.",
            type: "website",
            images: [
                {
                    url: "/services-image.png",
                    width: 1200,
                    height: 630,
                    alt: "Complete 3D Jewelry Rendering Process - Render Agency Specialists",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "12-Step 3D Jewelry Rendering Mastery | Render Agency",
            description: "Experience the complete 3D jewelry rendering process. 12 steps from vision to virtual brilliance. Technology masters, quality excellence, 5000+ successful projects.",
            images: ["/services-image.png"],
        },
        alternates: {
            canonical: "/how-it-works",
        },
    };
};

const Page: React.FC = () => {
    return <HowItWorksDetailed />;
}

export default Page;
