import React from "react";
import type {Metadata} from "next";
import Pricing from "@/components/pricing/pricing";

export const generateMetadata = (): Metadata => {
    return {
        title: "3D Jewelry Services Pricing | CAD Modeling, Rendering & Animation",
        description: "Professional pricing for CAD jewelry modeling, photorealistic rendering, and animation services. Transparent quotes for manufacturers, jewelry brands, and design studios.",
        keywords: [
            "jewelry 3D modeling pricing",
            "CAD jewelry design cost",
            "photorealistic jewelry rendering prices",
            "3D jewelry animation pricing",
            "jewelry CAD services quotes",
            "jewelry rendering service tiers"
        ],
        openGraph: {
            title: "3D Jewelry Services Pricing | CAD Modeling, Rendering & Animation",
            description: "Professional pricing for CAD jewelry modeling, photorealistic rendering, and animation services. Transparent quotes for manufacturers, jewelry brands, and design studios.",
            type: "website",
            images: [
                {
                    url: "/portfolio/1.png",
                    width: 1200,
                    height: 630,
                    alt: "3D Jewelry Services Pricing - CAD Modeling, Rendering & Animation",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "3D Jewelry Services Pricing",
            description: "Professional pricing for CAD jewelry modeling, photorealistic rendering, and animation services.",
            images: ["/portfolio/1.png"],
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
