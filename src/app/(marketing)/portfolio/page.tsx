import React, { Suspense } from "react";
import type {Metadata} from "next";
import Portfolio from "@/components/portfolio/portfolio";

export const generateMetadata = (): Metadata => {
    return {
        title: "Portfolio | Jewelry Design & Rendering",
        description: "A selection of our jewelry designs and renders.",
        keywords: [
            "3D jewelry portfolio",
            "jewelry rendering gallery",
            "3D CAD modeling portfolio",
            "jewelry sculpting examples",
            "photorealistic jewelry renders",
            "jewelry animation portfolio",
            "professional jewelry 3D design",
            "jewelry visualization showcase"
        ],
        openGraph: {
            title: "Portfolio | Jewelry Design & Rendering",
            description: "A selection of our jewelry designs and renders.",
            type: "website",
            images: [
                {
                    url: "/portfolio/1.png",
                    width: 1200,
                    height: 630,
                    alt: "Professional 3D Jewelry Design Portfolio",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Portfolio | Jewelry Design & Rendering",
            description: "A selection of our jewelry designs and renders.",
            images: ["/portfolio/1.png"],
        },
        alternates: {
            canonical: "/portfolio",
        },
    };
};

const PortfolioWithSuspense = () => (
    <Suspense fallback={
        <div className="min-h-screen background flex items-center justify-center">
            <div className="text-center">
                <div 
                    className="animate-spin rounded-full h-32 w-32 border-b-2 mx-auto"
                    style={{ borderColor: 'rgb(var(--btn-primary-bg))' }}
                ></div>
                <p 
                    className="mt-4"
                    style={{ color: 'rgb(var(--color-text))' }}
                >
                    Loading portfolio...
                </p>
            </div>
        </div>
    }>
        <Portfolio />
    </Suspense>
);

const Page: React.FC = () => {
    return (
        <div className="background">
            <PortfolioWithSuspense />
        </div>
    );
};

export default Page;
