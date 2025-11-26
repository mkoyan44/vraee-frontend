import React from "react";
import type {Metadata} from "next";
import Pricing from "@/components/pricing/pricing";

export const generateMetadata = (): Metadata => {
    return {
        title: "Professional 3D Jewelry Services Pricing | US Market Analysis Based",
        description: "Industry-standard pricing for CAD modeling ($199-$850+), photorealistic rendering ($75-$250/image), animation ($150-$550+), and consulting. Transparent rates with 50% deposit required.",
        keywords: [
            "jewelry CAD modeling pricing",
            "3D jewelry rendering cost",
            "jewelry animation pricing",
            "bulk jewelry rendering rates",
            "jewelry design retainer pricing",
            "professional 3D jewelry services"
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
