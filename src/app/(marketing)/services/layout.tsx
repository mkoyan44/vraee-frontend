import React from "react";
import type { Metadata } from "next";

export const generateMetadata = (): Metadata => {
    return {
        title: "Professional 3D Jewelry Design, CAD Modeling & Rendering Services",
        description: "Your partner for manufacturing-ready files and high-end marketing visuals. Precision CAD modeling, organic sculpting, and photorealistic rendering services.",
        keywords: [
            "3D jewelry CAD modeling",
            "jewelry rendering services",
            "jewelry design services",
            "CAD modeling for manufacturing",
            "organic jewelry sculpting",
            "photorealistic jewelry rendering",
            "jewelry visualization",
            "3D jewelry design"
        ],
        openGraph: {
            title: "Professional 3D Jewelry Design, CAD Modeling & Rendering Services",
            description: "Your partner for manufacturing-ready files and high-end marketing visuals.",
            type: "website",
            images: [
                {
                    url: "/services-item.png",
                    width: 1200,
                    height: 630,
                    alt: "Professional 3D Jewelry Design Services",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Professional 3D Jewelry Design Services",
            description: "Your partner for manufacturing-ready files and high-end marketing visuals.",
            images: ["/services-item.png"],
        },
        alternates: {
            canonical: "/services",
        },
    };
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

