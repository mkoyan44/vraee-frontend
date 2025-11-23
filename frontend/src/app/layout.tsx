import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    metadataBase: new URL('https://render-agency.com'),

    title: {
        default: "3D Architectural Visualization & Product Rendering Services | Professional Studio",
        template: "%s | Render Agency"
    },

    description: "Hire expert 3D rendering studio for architectural visualization, product renders & animations. Transparent pricing, fast turnaround. Start your 3D project today.",

    keywords: [
        "3D rendering services for architects",
        "hire 3D visualization company",
        "product rendering service cost",
        "architectural 3D rendering pricing",
        "professional 3D modeling service",
        "3D architectural visualization",
        "product rendering studio",
        "commercial 3D rendering",
        "photorealistic rendering services",
        "3D animation service pricing"
    ],

    authors: [{ name: "Render Agency" }],
    creator: "Render Agency",
    publisher: "Render Agency",

    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    openGraph: {
        title: "Professional 3D Rendering Services | Render Agency",
        description: "Premium 3D rendering and visualization services for architecture, products, and commercial projects. Expert 3D modeling, photorealistic rendering, and animation solutions.",
        url: "/",
        siteName: "Render Agency",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/hero-image.png",
                width: 1200,
                height: 630,
                alt: "Professional 3D Rendering Services - Render Agency",
            },
            {
                url: "/services-hero.png",
                width: 1200,
                height: 630,
                alt: "Architectural Visualization Services",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Professional 3D Rendering Services | Render Agency",
        description: "Premium 3D rendering and visualization services for architecture, products, and commercial projects.",
        images: ["/hero-image.png"],
        creator: "@renderagency",
    },

    other: {
        'theme-color': '#16161a',
        'msapplication-TileColor': '#16161a',
        'color-scheme': 'light dark',
    },

    alternates: {
        canonical: "/",
    },
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            {/* Favicon and app icons */}
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-16.png" />
            <link rel="apple-touch-icon" href="/icons/apple-icon.png" />
            <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/icons/icon-96.png" />

            {/* Web app manifest */}
            <link rel="manifest" href="/site.webmanifest" />

            {/* Microsoft tiles */}
            <meta name="msapplication-TileColor" content="#16161a" />
            <meta name="msapplication-TileImage" content="/icons/icon-144.png" />
            <meta name="theme-color" content="#16161a" />

            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ProfessionalService",
                        "name": "Render Agency",
                        "description": "Professional 3D rendering and visualization services specializing in architectural visualization, product rendering, and animation services.",
                        "url": "https://render-agency.com",
                        "logo": "https://render-agency.com/logo.svg",
                        "image": "https://render-agency.com/hero-image.png",
                        "telephone": "+554877784558",
                        "address": {
                            "@type": "PostalAddress",
                            "addressCountry": "US"
                        },
                        "serviceType": [
                            "3D Architectural Visualization",
                            "Product Rendering Services",
                            "3D Animation",
                            "Photorealistic Rendering"
                        ],
                        "areaServed": "Global",
                        "priceRange": "$$",
                        "knowsAbout": [
                            "3D architectural visualization",
                            "Product rendering services",
                            "3D modeling",
                            "Photorealistic rendering",
                            "3D animation services"
                        ],
                        "sameAs": [
                            "https://render-agency.com/portfolio",
                            "https://render-agency.com/services"
                        ]
                    })
                }}
            />
        </head>
        <body
            className={`antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
