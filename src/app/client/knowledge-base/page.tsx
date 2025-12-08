import React from "react";
import type { Metadata } from "next";
import KnowledgeBaseHero from "@/components/knowledge-base-hero/knowledge-base-hero";
import KnowledgeBaseArticles from "@/components/knowledge-base-articles/knowledge-base-articles";

export const generateMetadata = (): Metadata => {
    return {
        title: "3D Jewelry & Rendering Knowledge Base | Tutorials, Guides & Best Practices",
        description: "Comprehensive knowledge base for 3D jewelry design, rendering techniques, and industry best practices. Learn from expert tutorials, guides, and resources.",
        keywords: [
            "3D jewelry knowledge base",
            "jewelry rendering tutorials",
            "3D modeling guides",
            "jewelry design best practices",
            "ZBrush tutorials",
            "Rhino jewelry modeling",
            "3D rendering techniques",
            "jewelry visualization guide"
        ],
        openGraph: {
            title: "3D Jewelry & Rendering Knowledge Base | Expert Tutorials & Guides",
            description: "Master 3D jewelry design and rendering with our comprehensive knowledge base. Expert tutorials, guides, and industry best practices.",
            type: "website",
            images: [
                {
                    url: "/hero-image.png",
                    width: 1200,
                    height: 630,
                    alt: "3D Jewelry Knowledge Base - Expert Tutorials and Guides",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "3D Jewelry Knowledge Base | Tutorials & Guides",
            description: "Learn 3D jewelry design and rendering with expert tutorials, guides, and best practices.",
            images: ["/hero-image.png"],
            creator: "@renderagency",
        },
        alternates: {
            canonical: "/knowledge-base",
        },
    };
};

const Page: React.FC = () => {
    return (
        <div className="scheme-light-3 background">
            <KnowledgeBaseHero />
            <KnowledgeBaseArticles />
        </div>
    );
};

export default Page;
