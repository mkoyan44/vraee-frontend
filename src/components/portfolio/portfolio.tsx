"use client"
import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Image from "next/image";
import Icon from "@/components/icon/icon";
import { Fancybox } from "@fancyapps/ui";
import { Play } from 'lucide-react';

const Portfolio: React.FC = () => {
    const filters = [
        {
            label: 'Show All',
            value: '',
        },
        {
            label: 'Sculpting',
            value: 'sculpting',
        },
        {
            label: 'Rendering',
            value: 'rendering',
        },
        {
            label: 'Animation',
            value: 'animation',
        },
        {
            label: 'Social Media Rendering',
            value: 'social-media-rendering',
        },
    ];

    // Portfolio items organized by category
    const items = [
        // Animation videos
        {
            id: 1,
            type: 'video',
            image: '/portfolio/1.png',
            video: '/portfolio/animation/spitak.mp4',
            category: 'animation',
        },
        {
            id: 2,
            type: 'video',
            image: '/portfolio/1.png',
            video: '/portfolio/animation/White_1232323.mp4',
            category: 'animation',
        },
        {
            id: 3,
            type: 'video',
            image: '/portfolio/1.png',
            video: '/portfolio/animation/White.mp4',
            category: 'animation',
        },
        {
            id: 4,
            type: 'video',
            image: '/portfolio/1.png',
            video: '/portfolio/animation/Yellow_1.mp4',
            category: 'animation',
        },
        {
            id: 5,
            type: 'video',
            image: '/portfolio/1.png',
            video: '/portfolio/animation/Yellow.mp4',
            category: 'animation',
        },
        {
            id: 6,
            type: 'video',
            image: '/portfolio/1.png',
            video: '/portfolio/animation/Yellow2323232.mp4',
            category: 'animation',
        },
        
        // Rendering images
        {
            id: 7,
            type: 'image',
            image: '/portfolio/rendring/side_00000_00000.jpg',
            category: 'rendering',
        },
        {
            id: 8,
            type: 'image',
            image: '/portfolio/rendring/side_023000.jpg',
            category: 'rendering',
        },
        {
            id: 9,
            type: 'image',
            image: '/portfolio/rendring/top_00000_00000_00000.jpg',
            category: 'rendering',
        },
        {
            id: 10,
            type: 'image',
            image: '/portfolio/rendring/verjna_00000.jpg',
            category: 'rendering',
        },
        {
            id: 11,
            type: 'image',
            image: '/portfolio/rendring/White_00000_00000.jpg',
            category: 'rendering',
        },
        {
            id: 12,
            type: 'image',
            image: '/portfolio/rendring/White_000234234200.jpg',
            category: 'rendering',
        },
        {
            id: 13,
            type: 'image',
            image: '/portfolio/rendring/White_1_00023424200.jpg',
            category: 'rendering',
        },
        {
            id: 14,
            type: 'image',
            image: '/portfolio/rendring/White_back_00000.jpg',
            category: 'rendering',
        },
        {
            id: 15,
            type: 'image',
            image: '/portfolio/rendring/White_Side_00000.jpg',
            category: 'rendering',
        },
        {
            id: 16,
            type: 'image',
            image: '/portfolio/rendring/White_Side_00023423400_00000.jpg',
            category: 'rendering',
        },
        {
            id: 17,
            type: 'image',
            image: '/portfolio/rendring/White_Side_000456435600.jpg',
            category: 'rendering',
        },
        {
            id: 18,
            type: 'image',
            image: '/portfolio/rendring/White_top_00000.jpg',
            category: 'rendering',
        },
        {
            id: 19,
            type: 'image',
            image: '/portfolio/rendring/White_Top_02323230000.jpg',
            category: 'rendering',
        },
        {
            id: 20,
            type: 'image',
            image: '/portfolio/rendring/White_Top_0345634560000.jpg',
            category: 'rendering',
        },
        {
            id: 21,
            type: 'image',
            image: '/portfolio/rendring/White_TopSide_00000_04544540000.jpg',
            category: 'rendering',
        },
        {
            id: 22,
            type: 'image',
            image: '/portfolio/rendring/White_topside_00000.jpg',
            category: 'rendering',
        },
        {
            id: 23,
            type: 'image',
            image: '/portfolio/rendring/White_Topside_000233200.jpg',
            category: 'rendering',
        },
        {
            id: 24,
            type: 'image',
            image: '/portfolio/rendring/White_TopSide_0006786786800.jpg',
            category: 'rendering',
        },
        {
            id: 25,
            type: 'image',
            image: '/portfolio/rendring/Yellow_back_00000.jpg',
            category: 'rendering',
        },
        {
            id: 26,
            type: 'image',
            image: '/portfolio/rendring/Yellow_Side_00000_06786780.jpg',
            category: 'rendering',
        },
        {
            id: 27,
            type: 'image',
            image: '/portfolio/rendring/Yellow_Side_00000.jpg',
            category: 'rendering',
        },
        {
            id: 28,
            type: 'image',
            image: '/portfolio/rendring/Yellow_Side_0067868000.jpg',
            category: 'rendering',
        },
        {
            id: 29,
            type: 'image',
            image: '/portfolio/rendring/Yellow_top_00000.jpg',
            category: 'rendering',
        },
        {
            id: 30,
            type: 'image',
            image: '/portfolio/rendring/Yellow_Top_0000678860.jpg',
            category: 'rendering',
        },
        {
            id: 31,
            type: 'image',
            image: '/portfolio/rendring/Yellow_Top_0067868000.jpg',
            category: 'rendering',
        },
        {
            id: 32,
            type: 'image',
            image: '/portfolio/rendring/Yellow_TopSide_00000_06786780000.jpg',
            category: 'rendering',
        },
        {
            id: 33,
            type: 'image',
            image: '/portfolio/rendring/Yellow_topside_00000.jpg',
            category: 'rendering',
        },
        {
            id: 34,
            type: 'image',
            image: '/portfolio/rendring/Yellow_TopSide_0000678876780.jpg',
            category: 'rendering',
        },
        
        // Sculpting images
        {
            id: 35,
            type: 'image',
            image: '/portfolio/sculpting/brats compositing.png',
            category: 'sculpting',
        },
        {
            id: 36,
            type: 'image',
            image: '/portfolio/sculpting/compositing.jpg',
            category: 'sculpting',
        },
        {
            id: 37,
            type: 'image',
            image: '/portfolio/sculpting/compositing.png',
            category: 'sculpting',
        },
        {
            id: 38,
            type: 'image',
            image: '/portfolio/sculpting/insta.png',
            category: 'sculpting',
        },
        {
            id: 39,
            type: 'image',
            image: '/portfolio/sculpting/light right web.jpg',
            category: 'sculpting',
        },
        {
            id: 40,
            type: 'image',
            image: '/portfolio/sculpting/White_00234234111000.jpg',
            category: 'sculpting',
        },
        {
            id: 41,
            type: 'image',
            image: '/portfolio/sculpting/White_0110000.jpg',
            category: 'sculpting',
        },
        {
            id: 42,
            type: 'image',
            image: '/portfolio/sculpting/White_Insta back_001212000.jpg',
            category: 'sculpting',
        },
        {
            id: 43,
            type: 'image',
            image: '/portfolio/sculpting/White_Insta side_012121210000.jpg',
            category: 'sculpting',
        },
        {
            id: 44,
            type: 'image',
            image: '/portfolio/sculpting/White_Insta top_01212120000.jpg',
            category: 'sculpting',
        },
        {
            id: 45,
            type: 'image',
            image: '/portfolio/sculpting/White_side_00000.jpg',
            category: 'sculpting',
        },
        {
            id: 46,
            type: 'image',
            image: '/portfolio/sculpting/White_Top_01212210000.jpg',
            category: 'sculpting',
        },
        {
            id: 47,
            type: 'image',
            image: '/portfolio/sculpting/Yellow_0023222222000.jpg',
            category: 'sculpting',
        },
        {
            id: 48,
            type: 'image',
            image: '/portfolio/sculpting/Yellow_012120000.jpg',
            category: 'sculpting',
        },
        {
            id: 49,
            type: 'image',
            image: '/portfolio/sculpting/Yellow_insta side_002323000.jpg',
            category: 'sculpting',
        },
        {
            id: 50,
            type: 'image',
            image: '/portfolio/sculpting/Yellow_Insta top_00232323000.jpg',
            category: 'sculpting',
        },
        {
            id: 51,
            type: 'image',
            image: '/portfolio/sculpting/Yellow_Intsa back_002323000.jpg',
            category: 'sculpting',
        },
        {
            id: 52,
            type: 'image',
            image: '/portfolio/sculpting/Yellow_Side_00000.jpg',
            category: 'sculpting',
        },
        {
            id: 53,
            type: 'image',
            image: '/portfolio/sculpting/Yellow_Top_000232300.jpg',
            category: 'sculpting',
        },
        
        // Social Media images
        {
            id: 54,
            type: 'image',
            image: '/portfolio/socialMedia/result.jpg',
            category: 'social-media-rendering',
        },
        {
            id: 55,
            type: 'image',
            image: '/portfolio/socialMedia/Untitled.png',
            category: 'social-media-rendering',
        },
    ];

    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {});
        return () => {
            Fancybox.unbind("[data-fancybox]");
            Fancybox.destroy();
        };
    }, []);

    const searchParams = useSearchParams();
    const router = useRouter();
    const currentValue = searchParams.get('portfolio') || '';

    const handleChange = (value: string) => {
        const params = new URLSearchParams(Array.from(searchParams.entries()));
        if (value) {
            params.set('portfolio', value);
        } else {
            params.delete('portfolio');
        }
        const query = params.toString();
        const url = query ? `?${query}` : window.location.pathname;
        router.replace(url, { scroll: false });
    };

    const filteredItems = currentValue
        ? items.filter(item => item.category === currentValue)
        : items;

    return (
        <div className="background min-h-screen">
            {/* Minimal Hero Section */}
            <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 
                        className="text-5xl sm:text-6xl lg:text-7xl font-light mb-4 tracking-tight"
                        style={{ color: 'rgb(var(--color-title))' }}
                    >
                        Portfolio
                    </h1>
                    <div className="w-16 h-px mx-auto mb-6" style={{ backgroundColor: 'rgb(var(--color-border))' }}></div>
                    <p 
                        className="text-base sm:text-lg max-w-2xl mx-auto font-light"
                        style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}
                    >
                        A curated selection of our jewelry designs and renders
                    </p>
                </div>
            </section>

            {/* Minimal Filters */}
            <section className="px-4 sm:px-6 lg:px-8 mb-16">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap gap-2 justify-center items-center">
                        {filters.map((filter, index) => {
                            const isActive = currentValue === filter.value;
                            return (
                                <button
                                    key={index}
                                    onClick={() => handleChange(filter.value)}
                                    className="inline-flex items-center justify-center px-5 py-2 text-sm font-normal transition-all duration-300"
                                    style={isActive ? {
                                        color: 'rgb(var(--btn-primary-bg))',
                                        borderBottom: '2px solid rgb(var(--btn-primary-bg))',
                                        paddingBottom: '0.5rem',
                                    } : {
                                        color: 'rgb(var(--color-text))',
                                        opacity: 0.6,
                                        borderBottom: '2px solid transparent',
                                        paddingBottom: '0.5rem',
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isActive) {
                                            e.currentTarget.style.opacity = '1';
                                            e.currentTarget.style.color = 'rgb(var(--color-text))';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isActive) {
                                            e.currentTarget.style.opacity = '0.6';
                                        }
                                    }}
                                >
                                    {filter.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Minimal Portfolio Grid */}
            <section className="px-4 sm:px-6 lg:px-8 pb-32">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
                        {filteredItems.map((item, index) => (
                            <div
                                key={item.id}
                                className="group relative aspect-square overflow-hidden cursor-pointer"
                                style={{
                                    animation: `fadeIn 0.6s ease-out ${index * 0.03}s both`,
                                }}
                            >
                                {item.type === 'image' ? (
                                    <a
                                        href={item.image}
                                        data-fancybox="gallery"
                                        className="block w-full h-full relative"
                                        aria-label={`View portfolio image ${item.id} in gallery`}
                                    >
                                        <Image
                                            src={item.image}
                                            alt={`Portfolio item ${item.id}`}
                                            fill
                                            className="object-cover transition-all duration-500 ease-out group-hover:scale-105"
                                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </a>
                                ) : (
                                    <>
                                        <a
                                            href={item.video}
                                            data-fancybox="gallery"
                                            data-type="video"
                                            className="block w-full h-full relative"
                                            aria-label={`View portfolio video ${item.id} in gallery`}
                                        >
                                            <video
                                                src={item.video}
                                                className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105"
                                                preload="metadata"
                                                muted
                                                playsInline
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
                                        </a>
                                        <a
                                            href={item.video}
                                            data-fancybox="gallery"
                                            data-type="video"
                                            className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            aria-label={`Play portfolio video ${item.id}`}
                                        >
                                            <div
                                                className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                                                style={{
                                                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                                    backdropFilter: 'blur(12px)',
                                                }}
                                            >
                                                <Play
                                                    className="w-6 h-6 ml-0.5"
                                                    style={{ color: 'rgb(var(--btn-primary-bg))' }}
                                                    fill="rgb(var(--btn-primary-bg))"
                                                />
                                            </div>
                                        </a>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>

                    {filteredItems.length === 0 && (
                        <div className="text-center py-32">
                            <p
                                className="text-base font-light"
                                style={{ color: 'rgb(var(--color-text))', opacity: 0.5 }}
                            >
                                No items found in this category
                            </p>
                        </div>
                    )}
                </div>
            </section>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default Portfolio;
