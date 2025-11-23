import React from "react";
import type {Metadata} from "next";
import Pricing from "@/components/pricing/pricing";

export const generateMetadata = (): Metadata => {
    return {
        title: "Pricing",
        description: "Transparent 3D rendering pricing for architectural visualization, product rendering, and animation services. Get competitive quotes for your visualization projects.",
        keywords: [
            "3D rendering pricing",
            "architectural visualization cost",
            "product rendering prices",
            "3D animation pricing",
            "rendering service quotes",
            "visualization pricing tiers"
        ],
        openGraph: {
            title: "3D Rendering Pricing & Quotes | Render Agency",
            description: "Competitive pricing for professional 3D rendering services. Get transparent quotes for architectural visualization, product rendering, and animation projects.",
            type: "website",
            images: [
                {
                    url: "/services-image.png",
                    width: 1200,
                    height: 630,
                    alt: "3D Rendering Pricing and Service Packages - Render Agency",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "3D Rendering Pricing | Render Agency",
            description: "Transparent pricing for 3D rendering services. Competitive quotes for architectural visualization and product rendering.",
            images: ["/services-image.png"],
        },
        alternates: {
            canonical: "/pricing",
        },
    };
};

const Page: React.FC = () => {
    return (
        <div className="scheme-light-3 background">
            <Pricing />
        </div>
    );
};

export default Page;
