import React from 'react';
import Link from 'next/link';
import styles from "@/assets/styles/client/components/service-columns.module.scss";

interface ServiceColumnsProps {
    serviceSlug?: string;
}

const ServiceColumns: React.FC<ServiceColumnsProps> = ({ serviceSlug }) => {
    // Default content for sculpting
    let items = [
        {
            title: 'What We Need from You',
            description: "<p>Get your jewelry ideas converted into stunning digital sculptures in the shortest time. Vraee Jewelry Studio is here with professional jewelry sculpting design services to give life to your designs that are still sparking in your mind.</p><p>Whether you are a manufacturer or a jewelry retailer, Vraee Jewelry Studio is your jewelry design studio with the best resources and the most dedicated team of professionals to help you get a fresh jewelry line – starting with sculpting. You just need to express your thoughts on a piece of paper, and leave the rest to us. We've some of the best jewelry designers who can create accurate, easy to understand digital sculptures in just 24 hours.</p>",
        },
        {
            title: 'Why Us for Jewelry Digital Sculpting',
            description: "<p>Whether you are a jewelry retailer or a big brand, when you want to introduce a creative line of jewelry, digital sculpting is the first step. It is a way of giving a new life to ideas in your mind. In the beginning, you'll have a rough idea of what your future jewelry will look like. Sculpting is the process of converting those raw ideas into stunning 3D digital sculptures.</p><p>Our team of professionals digitally recreates any idea or concept in the shortest time with the desirable superb results. We not only quickly convert your visions into digital sculptures but also let you express your creative thoughts or even tiny ideas. After understanding your requirements, our designers combine your imaginative input with their knowledge to create a work of art.</p><p>And we do it within 24-hours!</p>",
        },
    ];

    // Custom content for modeling/CAD
    if (serviceSlug === 'modeling' || serviceSlug === 'cad-design') {
        items = [
            {
                title: 'What We Need from You',
                description: "<p>To create precision 3D CAD models for manufacturing, we need your design specifications and reference materials. This includes:</p><ul><li><strong>Sketches or drawings:</strong> Hand-drawn sketches, technical drawings, or reference images of your jewelry design</li><li><strong>Stone specifications:</strong> Type, size, and quantity of gemstones to be set</li><li><strong>Metal preferences:</strong> Type of metal (gold, silver, platinum) and desired finish</li><li><strong>Size requirements:</strong> Ring sizes, chain lengths, or other dimensional specifications</li><li><strong>Manufacturing preferences:</strong> Casting, milling, or other production methods you plan to use</li></ul><p>Our CAD specialists will review your materials and create production-ready 3D files with perfect tolerances and specifications.</p>",
            },
            {
                title: 'Why Choose Our Precision CAD Modeling Services',
                description: "<p>Our CAD modeling team combines technical expertise with manufacturing knowledge to deliver files that meet the highest industry standards. Here's what sets us apart:</p><ul><li><strong>Manufacturing-Ready Files:</strong> Every model includes perfect stone setting tolerances, shrinkage compensation, and structural integrity checks</li><li><strong>Industry-Leading Software:</strong> We use MatrixGold, Rhino 7, and Materialise Magics to ensure precision and compatibility</li><li><strong>Fast Turnaround:</strong> Simple models completed in 24-48 hours, complex pieces in 3-5 business days</li><li><strong>Unlimited Revisions:</strong> We work with you until the design meets your exact specifications</li><li><strong>Production Expertise:</strong> Our models are trusted by master jewelers and manufacturers worldwide</li></ul><p>Experience the perfect blend of technical precision and manufacturing expertise that ensures flawless production every time.</p>",
            },
        ];
    }

    // Custom content for rendering
    if (serviceSlug === 'rendering') {
        items = [
            {
                title: 'What We Need from You',
                description: "<p>To create photorealistic renders of your jewelry, we need your design files and specifications:</p><ul><li><strong>3D CAD files:</strong> Your existing 3D jewelry models in common formats (STL, OBJ, FBX, or .3dm). We can also work with 2D sketches if you need modeling services first</li><li><strong>Material specifications:</strong> Metal types (gold, silver, platinum), finishes (polished, brushed, matte), gemstone details (diamond, sapphire, etc.), and any special material requirements</li><li><strong>Style preferences:</strong> Background preferences (white, lifestyle, or custom), lighting style, and overall aesthetic direction for jewelry presentation</li><li><strong>Usage context:</strong> E-commerce product images, marketing materials, print catalogs, or social media content</li><li><strong>Quantity:</strong> Number of angles and variations needed for each jewelry piece</li></ul><p>Our jewelry rendering specialists will review your materials and create stunning photorealistic images optimized for your specific use case.</p>",
            },
            {
                title: 'Why Choose Our Jewelry Rendering Services',
                description: "<p>We specialize in jewelry rendering and visualization. Our rendering team creates marketplace-ready images that convert browsers to buyers. Here's what sets us apart:</p><ul><li><strong>Jewelry Specialization:</strong> We specialize exclusively in jewelry rendering, understanding the unique requirements of showcasing fine jewelry, gemstones, and precious metals</li><li><strong>Photorealistic Quality:</strong> Ultra-realistic 4K renders with physically accurate diamond dispersion and metal textures that are indistinguishable from professional jewelry photography</li><li><strong>E-Commerce Optimized:</strong> Images specifically crafted for online jewelry marketplaces with proper lighting, angles, and backgrounds that showcase your jewelry</li><li><strong>Industry-Leading Software:</strong> We use Cinema 4D, After Effects, and Blender to ensure the highest quality jewelry renders with advanced materials simulation</li><li><strong>Fast Turnaround:</strong> Standard jewelry renders completed in 24-48 hours, complex scenes in 3-5 business days</li><li><strong>Multiple Angles:</strong> Each jewelry piece comes with 3-8 angle views, giving you comprehensive coverage for your marketing needs</li><li><strong>Unlimited Revisions:</strong> We work with you until the renders meet your exact vision and requirements</li></ul><p>Experience the perfect blend of technical expertise and artistic vision, specialized in jewelry visualization, that delivers stunning visuals for your jewelry business.</p>",
            },
        ];
    }

    // Custom content for animation
    if (serviceSlug === 'animation') {
        items = [
            {
                title: 'What We Need from You',
                description: "<p>To create captivating jewelry animations, we need your design files and animation specifications:</p><ul><li><strong>3D CAD files:</strong> Your existing 3D jewelry models in common formats (STL, OBJ, FBX, or .3dm). We can also work with 2D sketches if you need modeling services first</li><li><strong>Animation type:</strong> 360° turntable rotation, on-body video, gemstone sparkle animation, or cinematic showcase</li><li><strong>Material specifications:</strong> Metal types (gold, silver, platinum), finishes (polished, brushed, matte), gemstone details (diamond, sapphire, etc.), and any special material requirements</li><li><strong>Style preferences:</strong> Background preferences (white, lifestyle, or custom), lighting style, camera movement preferences, and overall aesthetic direction</li><li><strong>Usage context:</strong> E-commerce product pages, social media content, marketing presentations, or website showcases</li><li><strong>Duration and format:</strong> Desired video length, resolution (HD, 4K), and output format (MP4, MOV, etc.)</li></ul><p>Our jewelry animation specialists will review your materials and create stunning motion visuals optimized for your specific use case.</p>",
            },
            {
                title: 'Why Choose Our Jewelry Animation Services',
                description: "<p>We specialize in jewelry animation and motion graphics. Our animation team creates captivating videos that showcase your jewelry with cinematic quality. Here's what sets us apart:</p><ul><li><strong>Jewelry Specialization:</strong> We specialize exclusively in jewelry animation, understanding the unique requirements of showcasing fine jewelry, gemstones, and precious metals in motion</li><li><strong>Cinematic Quality:</strong> Professional animations with smooth camera movements, dynamic lighting, and post-production effects that highlight gemstone sparkle and metal reflections</li><li><strong>Multiple Animation Types:</strong> 360° turntable presentations, on-body videos, gemstone sparkle animations, and cinematic showcase videos</li><li><strong>Industry-Leading Software:</strong> We use Cinema 4D, After Effects, and Blender to ensure the highest quality jewelry animations with advanced motion graphics</li><li><strong>Fast Turnaround:</strong> Standard animations completed in 48-72 hours, complex cinematic videos in 5-7 business days</li><li><strong>Optimized for Platforms:</strong> Videos specifically crafted for e-commerce, social media, presentations, and marketing materials</li><li><strong>Unlimited Revisions:</strong> We work with you until the animations meet your exact vision and requirements</li></ul><p>Experience the perfect blend of technical expertise and artistic vision, specialized in jewelry motion graphics, that delivers captivating videos for your jewelry business.</p>",
            },
        ];
    }

    // Custom content for 3d-design
    if (serviceSlug === '3d-design') {
        items = [
            {
                title: 'What We Need from You',
                description: "<p>To create stunning 3D jewelry designs, we need your creative input and design direction:</p><ul><li><strong>Design concepts:</strong> Sketches, mood boards, reference images, or verbal descriptions of your jewelry vision</li><li><strong>Style preferences:</strong> Design aesthetic (modern, vintage, organic, geometric), overall feel, and any specific design elements you want to explore</li><li><strong>Material considerations:</strong> Metal types (gold, silver, platinum), gemstone preferences, and any material-specific design requirements</li><li><strong>Design goals:</strong> Purpose of the design (collection development, customer presentation, concept exploration, etc.)</li><li><strong>Target audience:</strong> Who the design is for (end customers, retailers, manufacturers) to ensure appropriate design direction</li><li><strong>Timeline:</strong> When you need the design concepts or visualizations</li></ul><p>Our creative 3D design specialists will review your input and create stunning designs that bring your jewelry vision to life.</p>",
            },
            {
                title: 'Why Choose Our Creative 3D Design Services',
                description: "<p>We specialize in creative 3D jewelry design and development. Our creative design team creates stunning visual presentations that showcase the full potential of your jewelry concepts. Here's what sets us apart:</p><ul><li><strong>Creative Specialization:</strong> We specialize in creative design exploration, pushing boundaries of shape and form to create unique jewelry designs</li><li><strong>Artistic Vision:</strong> Our designers combine artistic vision with technical expertise to create designs that are both beautiful and production-ready</li><li><strong>Shape Exploration:</strong> We excel at complex shape experimentation, creating organic forms and innovative designs that traditional CAD cannot achieve</li><li><strong>Industry-Leading Software:</strong> We use ZBrush and Blender to create detailed 3D models with precise anatomy, flow, and artistic detail</li><li><strong>Visual Presentations:</strong> Stunning customer-ready visualizations that showcase your concepts in the best possible light</li><li><strong>Fast Turnaround:</strong> Initial design concepts completed in 24-48 hours, detailed designs in 3-5 business days</li><li><strong>Unlimited Revisions:</strong> We work with you through multiple iterations until the design meets your exact vision</li></ul><p>Experience the perfect blend of artistic vision and technical expertise, specialized in creative jewelry design, that delivers stunning 3D designs for your jewelry business.</p>",
            },
        ];
    }

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {
                        items.map((item,index)=>{
                            return (
                                <div 
                                    key={index} 
                                    className="p-8 rounded-2xl border"
                                    style={{
                                        backgroundColor: 'rgba(var(--color-bg), var(--color-bg-alpha, 1))',
                                        borderColor: 'rgb(var(--color-border))',
                                    }}
                                >
                                    <h3 
                                        className="text-2xl font-bold mb-6"
                                        style={{ color: 'rgb(var(--color-title))' }}
                                    >
                                        {item.title}
                                    </h3>
                                    <div 
                                        className="leading-relaxed space-y-4"
                                        style={{ color: 'rgb(var(--color-text))', opacity: 0.8 }}
                                        dangerouslySetInnerHTML={{__html: item.description }} 
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="text-center mt-12">
                    <Link href="/contact" className="btn-primary inline-block">
                        Get In Touch
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ServiceColumns;
