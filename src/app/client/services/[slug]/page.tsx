import { Metadata } from "next";
import { notFound } from 'next/navigation';
import { services } from "@/lib/services";
import ServiceHero from "@/components/service-hero/service-hero";
import TextWithMedia from "@/components/text-with-media/text-with-media";
import React from "react";
import Reviews from "@/components/reviews/reviews";
import MediaGrid from "@/components/media-grid/media-grid";
import Faq from "@/components/faq/faq";
import ServiceColumns from "@/components/service-columns/service-columns";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return Object.keys(services).map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug);
    const service = services[decodedSlug];

    if (!service) {
        return {
            title: "Service not found",
            description: "We couldn't find the requested service.",
        };
    }

    return {
        title: `${service.title} | Sarkissian Luxury Studio`,
        description: service.description.replace(/<[^>]*>?/gm, "").slice(0, 160),
        openGraph: {
            title: service.title,
            description: service.description.replace(/<[^>]*>?/gm, "").slice(0, 160),
            images: [service.image],
        }
    };
}

export default async function ServicePage({ params }: PageProps) {
    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug);
    const service = services[decodedSlug];

    if (!service) {
        notFound();
    }

    return (
        <div className="scheme-light-3 background z-10 relative">
            <ServiceHero
                title={service.title}
                description={service.description}
                image={service.image}
            />
            <ServiceColumns/>
            <TextWithMedia scheme={undefined} has_background={false}/>
            <Reviews/>
            <MediaGrid/>
            <Faq/>
        </div>
    );
}