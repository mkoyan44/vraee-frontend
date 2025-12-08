import React from "react";
import type {Metadata} from "next";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";

export const generateMetadata = (): Metadata => {
    return {
        title: "Contact Us",
        description: "Get in touch with Render Agency for professional 3D rendering and visualization services. Contact our team for quotes, project consultations, and custom visualization solutions.",
        keywords: [
            "contact 3D rendering",
            "3D visualization quote",
            "architectural visualization contact",
            "product rendering services contact",
            "3D animation contact",
            "rendering studio contact"
        ],
        openGraph: {
            title: "Contact Render Agency | Professional 3D Rendering Services",
            description: "Get in touch with our team for professional 3D rendering, architectural visualization, and product rendering services. Request a quote for your project today.",
            type: "website",
            images: [
                {
                    url: "/services-image.png",
                    width: 1200,
                    height: 630,
                    alt: "Contact Render Agency - Professional 3D Rendering Services",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Contact Render Agency | 3D Rendering Services",
            description: "Get in touch for professional 3D rendering and visualization services. Contact our expert team today.",
            images: ["/services-image.png"],
        },
        alternates: {
            canonical: "/contact",
        },
    };
};

const Page: React.FC = () => {
    return (
        <>
            <Contact/>
            <Footer/>
        </>
    );
}

export default Page;
