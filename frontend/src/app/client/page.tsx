import React from "react";
import type {Metadata} from "next";
import ServicesTabs from "@/components/services-tabs/services-tabs";
import Hero from "@/components/hero/hero";
import ProgramsUsed from "@/components/programs-used/programs-used";
import Faq from "@/components/faq/faq";
import MultiColumn from "@/components/multi-column/multi-column";
import Reviews from "@/components/reviews/reviews";
import HowItWorks from "@/components/how-it-works/how-it-works";
import MediaGrid from "@/components/media-grid/media-grid";

export const generateMetadata = (): Metadata => {
    return {
        title: "Home",
        description: "Jewelry 3D rendering workflow, custom jewelry CAD service process, e-commerce rendering process featuring transparent pricing, real-time tracking, and guaranteed delivery.",
        keywords: [
            "jewelry 3d rendering workflow",
            "3d modeling process steps",
            "how to order jewelry 3d model",
            "jewelry CAD service process",
            "outsourcing jewelry visuals steps",
            "e-commerce rendering process",
            "custom jewelry 3d design process",
            "transparent 3d rendering pricing",
            "jewelry 3d order tracking",
            "project status control",
            "fixed price 3d modeling",
            "no hidden fees 3d rendering",
            "guaranteed price jewelry CAD",
            "real-time project tracking",
            "direct specialist communication 3d",
            "3d model revision system",
            "client personal account 3d",
            "feedback process jewelry rendering",
            "jewelry CAD collaboration tool",
            "dedicated project manager",
            "seamless communication 3d"
        ],
        openGraph: {
            title: "Our Transparent Workflow: From Concept to E-commerce Visuals | Jewelry 3D Rendering",
            description: "Jewelry 3D rendering workflow featuring transparent pricing, real-time tracking, and guaranteed delivery. Custom jewelry CAD service process from concept to e-commerce visuals.",
            type: "website",
            images: [
                {
                    url: "/hero-image.png",
                    width: 1200,
                    height: 630,
                    alt: "Jewelry 3D Rendering Process - Client Portal Communication Interface",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Jewelry 3D Rendering Workflow | Transparent Process",
            description: "Complete jewelry 3D rendering workflow with transparent pricing, real-time tracking, and guaranteed delivery. From concept to e-commerce visuals.",
            images: ["/hero-image.png"],
            creator: "@renderagency",
        },
        alternates: {
            canonical: "/",
        },
    };
};

const Page: React.FC = () => {
    return (
        <>
            <Hero/>
            <ServicesTabs/>
            <ProgramsUsed/>
            <HowItWorks/>
            <MultiColumn/>
            <Reviews/>
            <MediaGrid/>
            <Faq/>
        </>
    );
}
export default Page;
