import React, { Suspense } from "react";
import type {Metadata} from "next";
import Portfolio from "@/components/portfolio/portfolio";

export const generateMetadata = (): Metadata => {
    return {
        title: "3D Rendering Portfolio | Architectural & Product Visualization Examples",
        description: "Top-rated 3D rendering studio portfolio. See our architectural visualizations, product renders & animations. Real client projects, proven results. Get inspired for your project.",
        keywords: [
            "3D rendering portfolio examples",
            "architectural visualization showcase",
            "best product rendering portfolio",
            "3D animation project gallery",
            "professional rendering case studies",
            "architectural 3D visualization portfolio",
            "product rendering portfolio",
            "3D visualization examples"
        ],
        openGraph: {
            title: "Professional 3D Rendering Portfolio | Real Projects & Case Studies",
            description: "Browse our award-winning portfolio of architectural visualizations, product renderings & 3D animations. See why clients choose our 3D rendering studio.",
            type: "website",
            images: [
                {
                    url: "/portfolio/1.png",
                    width: 1200,
                    height: 630,
                    alt: "Professional 3D Rendering Portfolio - Architectural Visualizations & Product Renders",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "3D Rendering Portfolio | Professional Architectural & Product Visualization",
            description: "Explore our extensive portfolio showcasing architectural visualizations, product renders, and professional 3D animations from real client projects.",
            images: ["/portfolio/1.png"],
            creator: "@renderagency",
        },
        alternates: {
            canonical: "/portfolio",
        },
    };
};

const PortfolioWithSuspense = () => (
    <Suspense fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
                <p className="text-gray-600 mt-4">Loading portfolio...</p>
            </div>
        </div>
    }>
        <Portfolio />
    </Suspense>
);

const Page: React.FC = () => {
    return (
        <div className="scheme-light-3 background">
            <PortfolioWithSuspense />
        </div>
    );
};

export default Page;
