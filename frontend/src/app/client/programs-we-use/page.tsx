import React from "react";
import type {Metadata} from "next";
import ProgramsShowcase from "@/components/programs-showcase";
import CustomProjectForm from "@/components/custom-project-form";
import Footer from "@/components/footer/footer";
import Icon from "@/components/icon/icon";
import Image from "next/image";

export const generateMetadata = (): Metadata => {
    return {
        title: "Professional 3D Software Tools & Technology Stack | Render Agency",
        description: "Deep dive into our professional 3D software ecosystem. Learn how we leverage industry-leading tools like Blender, Cinema 4D, ZBrush, After Effects, Rhino, and our proprietary Matrix platform for exceptional 3D visualization results.",
        keywords: [
            "3D modeling software",
            "Blender software",
            "Autodesk Maya",
            "3ds Max",
            "ZBrush sculpting",
            "Cinema 4D",
            "rendering software",
            "3D animation tools",
            "professional 3D software",
            "Rhino NURBS modeling",
            "After Effects compositing",
            "distributed rendering",
            "VFX pipeline"
        ],
        openGraph: {
            title: "Professional 3D Software & Technology Stack | Render Agency",
            description: "Explore our comprehensive 3D software ecosystem and workflow optimization strategies for exceptional architectural visualization, product rendering, and animation services.",
            type: "website",
            images: [
                {
                    url: "/services-image.png",
                    width: 1200,
                    height: 630,
                    alt: "Professional 3D Software Technology Stack at Render Agency",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Professional 3D Software Tools | Render Agency",
            description: "Industry-leading 3D software tools and optimized workflow strategies for architectural visualization, product rendering, and animation.",
            images: ["/services-image.png"],
        },
        alternates: {
            canonical: "/programs-we-use",
        },
    };
};

const workflowSections = [
    {
        title: "Conceptual Design & Modeling Phase",
        description: "Foundation of every successful project - from initial sketches to detailed technical models.",
        tools: ["Blender", "Rhino", "Cinema 4D"],
        capabilities: [
            "Rapid prototyping and concept development",
            "Technical precision modeling for manufacturing",
            "Complex geometry handling with NURBS accuracy",
            "Scalable workflow from simple to complex designs"
        ]
    },
    {
        title: "Detail Enhancement & Sculpting",
        description: "Where precision meets artistry - crafting photorealistic surface details and organic forms.",
        tools: ["ZBrush"],
        capabilities: [
            "Sub-millimeter detail sculpting for jewelry and products",
            "Dynamic tessellation for complex organic shapes",
            "Advanced brush systems for realistic material simulation",
            "High-resolution displacement mapping"
        ]
    },
    {
        title: "Rendering & Composition",
        description: "Bringing 3D models to life with photorealistic visualization and post-production magic.",
        tools: ["Blender", "Cinema 4D", "After Effects"],
        capabilities: [
            "GPU-accelerated rendering with Cycles and Octane",
            "Advanced material creation with PBR workflows",
            "Professional color grading and composition",
            "Multi-layer compositing for photorealistic results"
        ]
    },
    {
        title: "Distributed Production & Quality Control",
        description: "Our proprietary orchestration system ensures consistent quality across all projects.",
        tools: ["Matrix (Proprietary)"],
        capabilities: [
            "Automated distributed rendering pipelines",
            "Real-time quality assurance and iteration",
            "Scalable resource management across cloud infrastructure",
            "Seamless client collaboration and feedback integration"
        ]
    }
];

const technicalSpecifications = [
    {
        category: "Hardware Infrastructure",
        specs: [
            "NVIDIA RTX 40-series GPUs with 48GB+ VRAM",
            "AMD Ryzen Threadripper CPUs with 64+ cores",
            "512GB+ system RAM per workstation",
            "NVMe SSD arrays for rapid I/O operations",
            "10GbE network infrastructure for file transfer",
            "Redundant power systems and cooling"
        ]
    },
    {
        category: "Network & Storage",
        specs: [
            "Multi-terabyte NVMe storage pools",
            "Redundant backup systems with off-site replication",
            "High-speed WAN links for distributed rendering",
            "Automated backup with versioning control",
            "Secure VPN access for remote collaboration"
        ]
    },
    {
        category: "Quality Assurance",
        specs: [
            "Automated render comparison algorithms",
            "Color accuracy calibration across all displays",
            "Resolution testing up to 16K for print media",
            "File format validation and integrity checks",
            "Cross-platform compatibility testing"
        ]
    }
];

const Page: React.FC = () => {
    return (
        <>
            {/* Epic Hero Section */}
            <section className="relative py-32 px-4 overflow-hidden background" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.01) 100%)' }}>
                {/* Animated Background Elements */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500 rounded-full blur-2xl animate-pulse delay-500"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-3 px-8 py-4 btn-primary text-white rounded-full text-sm font-bold mb-10 shadow-2xl">
                            <Icon icon="star" />
                            <span>PREMIUM 3D ECOSYSTEM</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight" style={{ color: 'rgb(var(--color-title))' }}>
                            The World's Most
                            <span className="block bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent animate-pulse">
                                Advanced 3D Pipeline
                            </span>
                        </h1>

                        <p className="text-2xl max-w-5xl mx-auto mb-12 leading-relaxed" style={{ color: 'rgb(var(--color-text))' }}>
                            We don't just use software — we orchestrate a symphony of cutting-edge technologies
                            that transforms impossible visions into breathtaking realities. Every pixel, every detail,
                            every innovation is powered by our meticulously crafted production ecosystem.
                        </p>

                        {/* Live Stats */}
                        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
                            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                                <div className="text-sm uppercase tracking-wider opacity-80">Projects Completed</div>
                            </div>
                            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                                <div className="text-sm uppercase tracking-wider opacity-80">Tools Mastered</div>
                            </div>
                            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                                <div className="text-sm uppercase tracking-wider opacity-80">Render Power</div>
                            </div>
                            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                <div className="text-3xl font-bold text-orange-400 mb-2">99.9%</div>
                                <div className="text-sm uppercase tracking-wider opacity-80">Quality Assurance</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Master Software Showcase - Individual Highlighted Cards */}
            <section className="py-32 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5"></div>
                <div className="max-w-7xl mx-auto relative z-10">

                    {/* Featured Tool 1 - Blender */}
                    <div className="mb-32">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 text-orange-400 rounded-full text-sm font-medium mb-6">
                                    <Image src="/software/blender.svg" alt="Blender" width={20} height={20} />
                                    Industry Standard
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'rgb(var(--color-title))' }}>
                                    Blender: The Complete <span className="text-orange-500">Open-Source</span> Powerhouse
                                </h2>
                                <p className="text-xl mb-8 leading-relaxed" style={{ color: 'rgb(var(--color-text))' }}>
                                    Our foundation tool that revolutionized 3D production. Blender's integrated pipeline
                                    enables us to create everything from intricate architectural models to complex character
                                    designs, all within a single, free, and incredibly powerful application.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
                                            <Icon icon="plus" className="text-orange-500 w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="font-bold">Cycles Rendering</div>
                                            <div className="text-sm opacity-75">Photorealistic GPU acceleration</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
                                            <Icon icon="plus" className="text-orange-500 w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="font-bold">EEVEE Real-time</div>
                                            <div className="text-sm opacity-75">Instant viewport previews</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <a href="/client/blender" className="btn-primary">Explore Blender Workflows</a>
                                    <div className="px-4 py-2 bg-white/5 rounded-lg text-sm opacity-75">
                                        Used in 85% of projects
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="relative">
                                    <div className="aspect-square bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl p-8 flex items-center justify-center">
                                        <Image
                                            src="/software/blender.svg"
                                            alt="Blender"
                                            width={200}
                                            height={200}
                                            className="drop-shadow-2xl"
                                        />
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20">
                                        <div className="text-lg font-bold">Free & Open Source</div>
                                        <div className="text-sm opacity-75">Zero licensing costs</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Featured Tool 2 - Cinema 4D */}
                    <div className="mb-32">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
                                    <Image src="/software/cinema-4d.svg" alt="Cinema 4D" width={20} height={20} />
                                    Motion Graphics Powerhouse
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'rgb(var(--color-title))' }}>
                                    Cinema 4D: Where <span className="text-blue-500">Creativity</span> Meets Precision
                                </h2>
                                <p className="text-xl mb-8 leading-relaxed" style={{ color: 'rgb(var(--color-text))' }}>
                                    Our animation and motion graphics champion. Cinema 4D's intuitive workflow and
                                    powerful toolset enable us to create stunning architectural walkthroughs, product
                                    demonstrations, and dynamic presentations that captivate audiences.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                            <Icon icon="plus" className="text-blue-500 w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="font-bold">Redshift Integration</div>
                                            <div className="text-sm opacity-75">Ultra-fast GPU rendering</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                            <Icon icon="star" className="text-blue-500 w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="font-bold">MoGraph Toolkit</div>
                                            <div className="text-sm opacity-75">Advanced animation tools</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <a href="/client/cinema-4d" className="btn-primary">Master Cinema 4D</a>
                                    <div className="px-4 py-2 bg-white/5 rounded-lg text-sm opacity-75">
                                        Perfect for animations
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="relative">
                                    <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl p-8 flex items-center justify-center">
                                        <Image
                                            src="/software/cinema-4d.svg"
                                            alt="Cinema 4D"
                                            width={200}
                                            height={200}
                                            className="drop-shadow-2xl"
                                        />
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20">
                                        <div className="text-lg font-bold">Industry Favorite</div>
                                        <div className="text-sm opacity-75">Trusted by studios worldwide</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tool Comparison Grid */}
                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'rgb(var(--color-title))' }}>
                                Our Complete <span className="text-primary">Software Arsenal</span>
                            </h2>
                            <p className="text-xl max-w-4xl mx-auto" style={{ color: 'rgb(var(--color-text))' }}>
                                Every tool in our ecosystem serves a unique purpose in our production pipeline.
                                We master each one to deliver unparalleled results across every project type.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* ZBrush Card */}
                            <div className="group p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                                <div className="flex items-center gap-4 mb-4">
                                    <Image src="/software/zbrush.svg" alt="ZBrush" width={40} height={40} />
                                    <div>
                                        <h3 className="font-bold text-lg group-hover:text-purple-400 transition-colors">ZBrush</h3>
                                        <div className="text-sm text-purple-400">Digital Sculpting</div>
                                    </div>
                                </div>
                                <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgb(var(--color-text))' }}>
                                    Micrometer-precision sculpting for the most intricate surface details.
                                    Essential for photorealistic textures and organic modeling.
                                </p>
                                <a href="/client/zbrush" className="text-purple-400 text-sm hover:underline">Learn more →</a>
                            </div>

                            {/* After Effects Card */}
                            <div className="group p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                                <div className="flex items-center gap-4 mb-4">
                                    <Image src="/software/after-effects.svg" alt="After Effects" width={40} height={40} />
                                    <div>
                                        <h3 className="font-bold text-lg group-hover:text-green-400 transition-colors">After Effects</h3>
                                        <div className="text-sm text-green-400">Visual Effects</div>
                                    </div>
                                </div>
                                <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgb(var(--color-text))' }}>
                                    Professional compositing and motion graphics for studio-quality results.
                                    Adds that final polish to every production.
                                </p>
                                <a href="/client/after-effects" className="text-green-400 text-sm hover:underline">Learn more →</a>
                            </div>

                            {/* Rhino Card */}
                            <div className="group p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                                <div className="flex items-center gap-4 mb-4">
                                    <Image src="/software/rhino.svg" alt="Rhino" width={40} height={40} />
                                    <div>
                                        <h3 className="font-bold text-lg group-hover:text-cyan-400 transition-colors">Rhino</h3>
                                        <div className="text-sm text-cyan-400">Technical Precision</div>
                                    </div>
                                </div>
                                <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgb(var(--color-text))' }}>
                                    Mathematical accuracy for complex curved surfaces and technical designs.
                                    CNC-ready precision modeling.
                                </p>
                                <a href="/client/rhino" className="text-cyan-400 text-sm hover:underline">Learn more →</a>
                            </div>

                            {/* Matrix Card - Full Width */}
                            <div className="md:col-span-2 lg:col-span-3 group p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 hover:border-primary/40 transition-all duration-300">
                                <div className="flex items-center justify-center gap-6 mb-6">
                                    <Image src="/software/matrix.svg" alt="Matrix" width={60} height={60} />
                                    <div className="text-center">
                                        <h3 className="font-bold text-2xl group-hover:text-primary transition-colors">Matrix</h3>
                                        <div className="text-lg text-primary mb-2">Proprietary Orchestration Platform</div>
                                        <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm inline-block">
                                            Our Secret Weapon
                                        </div>
                                    </div>
                                </div>
                                <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto" style={{ color: 'rgb(var(--color-text))' }}>
                                    Our custom-built VFX orchestration platform that seamlessly coordinates every tool in our pipeline.
                                    Automated workflows, distributed rendering, and real-time collaboration make the impossible routine.
                                    This is the secret behind our unmatched production speed and quality consistency.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workflow Integration Section */}
            <section className="py-20 px-4 background">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'rgb(var(--color-title))' }}>
                            Integrated Production Workflow
                        </h2>
                        <p className="text-lg max-w-3xl mx-auto" style={{ color: 'rgb(var(--color-text))' }}>
                            Our software ecosystem isn't just a collection of tools - it's a meticulously designed pipeline
                            where each application enhances the capabilities of the others, ensuring seamless project execution.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {workflowSections.map((section, index) => (
                            <div key={index} className="flex flex-col lg:flex-row gap-12 items-start">
                                <div className="lg:w-1/3">
                                    <h3 className="text-2xl font-bold mb-4" style={{ color: 'rgb(var(--color-title))' }}>
                                        {section.title}
                                    </h3>
                                    <p className="text-lg mb-6" style={{ color: 'rgb(var(--color-text))' }}>
                                        {section.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {section.tools.map((tool, toolIndex) => (
                                            <span
                                                key={toolIndex}
                                                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="lg:w-2/3">
                                    <ul className="space-y-3">
                                        {section.capabilities.map((capability, capIndex) => (
                                            <li key={capIndex} className="flex items-start gap-3">
                                                <Icon icon="plus" className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                                                <span style={{ color: 'rgb(var(--color-text))' }}>{capability}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Infrastructure Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'rgb(var(--color-title))' }}>
                            Technical Infrastructure & Quality Assurance
                        </h2>
                        <p className="text-lg max-w-3xl mx-auto" style={{ color: 'rgb(var(--color-text))' }}>
                            Professional results require professional infrastructure. Our enterprise-grade setup ensures
                            consistent quality and rapid turnaround times for all projects.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {technicalSpecifications.map((spec, index) => (
                            <div key={index} className="p-8 rounded-2xl border border-gray-200" style={{ background: 'rgba(var(--color-bg), 0.6)' }}>
                                <h3 className="text-xl font-bold mb-6" style={{ color: 'rgb(var(--color-title))' }}>
                                    {spec.category}
                                </h3>
                                <ul className="space-y-3">
                                    {spec.specs.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start gap-3">
                                            <Icon icon="star" className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm" style={{ color: 'rgb(var(--color-text))' }}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Our Stack Matters Section */}
            <section className="py-20 px-4 background">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'rgb(var(--color-title))' }}>
                            Why Our Technology Stack Matters
                        </h2>
                        <p className="text-lg max-w-3xl mx-auto mb-12" style={{ color: 'rgb(var(--color-text))' }}>
                            Choosing the right tools isn't about having the most software licenses - it's about having the
                            perfect combination of technologies that work harmoniously to deliver exceptional results.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="p-6 rounded-xl border border-gray-200" style={{ background: 'rgba(var(--color-bg), 0.8)' }}>
                                <h3 className="text-xl font-bold mb-4 text-green-600">Cost-Effective Excellence</h3>
                                <p style={{ color: 'rgb(var(--color-text))' }}>
                                    By leveraging open-source solutions like Blender alongside industry standards,
                                    we deliver premium results without premium software costs, passing savings directly to our clients.
                                </p>
                            </div>

                            <div className="p-6 rounded-xl border border-gray-200" style={{ background: 'rgba(var(--color-bg), 0.8)' }}>
                                <h3 className="text-xl font-bold mb-4 text-blue-600">Workflow Optimization</h3>
                                <p style={{ color: 'rgb(var(--color-text))' }}>
                                    Every tool integrates seamlessly with our Matrix orchestration platform,
                                    ensuring data flows smoothly from concept to final delivery without bottlenecks.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="p-6 rounded-xl border border-gray-200" style={{ background: 'rgba(var(--color-bg), 0.8)' }}>
                                <h3 className="text-xl font-bold mb-4 text-purple-600">Scalability & Flexibility</h3>
                                <p style={{ color: 'rgb(var(--color-text))' }}>
                                    Our modular approach means we can scale resources up or down based on project requirements,
                                    optimizing costs while maintaining consistent quality standards.
                                </p>
                            </div>

                            <div className="p-6 rounded-xl border border-gray-200" style={{ background: 'rgba(var(--color-bg), 0.8)' }}>
                                <h3 className="text-xl font-bold mb-4 text-orange-600">Future-Proof Technology</h3>
                                <p style={{ color: 'rgb(var(--color-text))' }}>
                                    Regular platform updates and continuous evaluation of emerging technologies
                                    ensure our stack remains at the forefront of 3D visualization capabilities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'rgb(var(--color-title))' }}>
                            Ready to Experience the Power of Professional 3D Tools?
                        </h2>
                        <p className="text-lg mb-12" style={{ color: 'rgb(var(--color-text))' }}>
                            Whether you're a startup with a groundbreaking product or an enterprise brand requiring
                            architectural visualization, our technology stack delivers results that exceed expectations.
                            Let's discuss how we can bring your vision to life with precision and artistry.
                        </p>

                        <CustomProjectForm />
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    );
}

export default Page;
