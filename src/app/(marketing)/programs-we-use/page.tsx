import React from "react";
import type {Metadata} from "next";
import Link from "next/link";
import Icon from "@/components/icon/icon";
import Image from "next/image";
import { CheckCircle2, ArrowLeft } from "lucide-react";

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
                    {/* Back to Services Button */}
                    <div className="mb-12">
                        <Link 
                            href="/services" 
                            className="inline-flex items-center gap-2 btn-primary"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Services
                        </Link>
                    </div>

                    <div className="text-center mb-20">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight" style={{ color: 'rgb(var(--color-title))' }}>
                            Industry-Standard Technology Stack
                        </h1>

                        <p className="text-2xl max-w-5xl mx-auto mb-12 leading-relaxed" style={{ color: 'rgb(var(--color-text))' }}>
                            We utilize the world's leading jewelry design and engineering software to ensure every piece is manufacturing-ready and visually stunning.
                        </p>
                    </div>
                </div>
            </section>

            {/* Technology Categories by Workflow */}
            <section className="py-32 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5"></div>
                <div className="max-w-7xl mx-auto relative z-10">

                    {/* Category A: CAD & Engineering */}
                    <div id="cad-engineering" className="mb-32 scroll-mt-24">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
                                <Icon icon="star" />
                                <span>Precision Focus</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'rgb(var(--color-title))' }}>
                                CAD & Engineering
                            </h2>
                            <p className="text-xl max-w-4xl mx-auto mb-8" style={{ color: 'rgb(var(--color-text))' }}>
                                Manufacturing-ready geometry and technical accuracy for stone setting.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* MatrixGold */}
                            <div className="group p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <Image 
                                        src="/software/matrix.svg" 
                                        alt="MatrixGold" 
                                        width={40} 
                                        height={40}
                                        className="flex-shrink-0"
                                    />
                                    <div className="flex-1 flex items-center justify-between">
                                        <h3 className="font-bold text-xl group-hover:text-blue-400 transition-colors">MatrixGold</h3>
                                        <span className="px-2 py-1 rounded text-xs font-semibold flex items-center gap-1" style={{ backgroundColor: 'rgba(var(--btn-primary-bg), 0.15)', color: 'rgb(var(--btn-primary-bg))' }}>
                                            <CheckCircle2 className="w-3 h-3" />
                                            Verified Pro
                                        </span>
                                    </div>
                                </div>
                                <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgb(var(--color-text))' }}>
                                    <span className="font-semibold">Why we use it:</span> To guarantee 100% casting success and technical precision.
                                </p>
                                <Link href="/matrix" className="text-blue-400 text-sm hover:underline inline-flex items-center gap-1">
                                    Learn more →
                                </Link>
                            </div>

                            {/* Rhino 7 */}
                            <div className="group p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <Image 
                                        src="/software/rhino.svg" 
                                        alt="Rhino 7" 
                                        width={40} 
                                        height={40}
                                        className="flex-shrink-0"
                                    />
                                    <div className="flex-1 flex items-center justify-between">
                                        <h3 className="font-bold text-xl group-hover:text-cyan-400 transition-colors">Rhino 7</h3>
                                        <span className="px-2 py-1 rounded text-xs font-semibold flex items-center gap-1" style={{ backgroundColor: 'rgba(var(--btn-primary-bg), 0.15)', color: 'rgb(var(--btn-primary-bg))' }}>
                                            <CheckCircle2 className="w-3 h-3" />
                                            Verified Pro
                                        </span>
                                    </div>
                                </div>
                                <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgb(var(--color-text))' }}>
                                    <span className="font-semibold">Why we use it:</span> To guarantee 100% casting success and technical precision.
                                </p>
                                <Link href="/rhino" className="text-cyan-400 text-sm hover:underline inline-flex items-center gap-1">
                                    Learn more →
                                </Link>
                            </div>

                            {/* Materialise Magics */}
                            <div className="group p-6 rounded-2xl bg-gradient-to-br from-teal-500/10 to-green-500/10 border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 flex items-center justify-center text-2xl flex-shrink-0" style={{ color: 'rgb(var(--color-title))' }}>
                                        ⚙️
                                    </div>
                                    <h3 className="font-bold text-xl group-hover:text-teal-400 transition-colors flex-1">Materialise Magics</h3>
                                </div>
                                <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgb(var(--color-text))' }}>
                                    <span className="font-semibold">Why we use it:</span> To guarantee 100% casting success and technical precision.
                                </p>
                                <Link href="/magics" className="text-teal-400 text-sm hover:underline inline-flex items-center gap-1">
                                    Learn more →
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Category B: Digital Sculpting */}
                    <div id="digital-sculpting" className="mb-32 scroll-mt-24">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium mb-6">
                                <Icon icon="star" />
                                <span>Artistry Focus</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'rgb(var(--color-title))' }}>
                                Digital Sculpting
                            </h2>
                            <p className="text-xl max-w-4xl mx-auto mb-8" style={{ color: 'rgb(var(--color-text))' }}>
                                Organic detailing, high-poly artistry, and complex anatomical textures.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* ZBrush */}
                            <div className="group p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <Image 
                                        src="/software/zbrush.svg" 
                                        alt="ZBrush" 
                                        width={40} 
                                        height={40}
                                        className="flex-shrink-0"
                                    />
                                    <div className="flex-1 flex items-center justify-between">
                                        <h3 className="font-bold text-xl group-hover:text-purple-400 transition-colors">ZBrush</h3>
                                        <span className="px-2 py-1 rounded text-xs font-semibold flex items-center gap-1" style={{ backgroundColor: 'rgba(var(--btn-primary-bg), 0.15)', color: 'rgb(var(--btn-primary-bg))' }}>
                                            <CheckCircle2 className="w-3 h-3" />
                                            Verified Pro
                                        </span>
                                    </div>
                                </div>
                                <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgb(var(--color-text))' }}>
                                    <span className="font-semibold">Why we use it:</span> To achieve artistic details that traditional CAD cannot reach.
                                </p>
                                <Link href="/zbrush" className="text-purple-400 text-sm hover:underline inline-flex items-center gap-1">
                                    Learn more →
                                </Link>
                            </div>

                            {/* Blender */}
                            <div className="group p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <Image 
                                        src="/software/blender.svg" 
                                        alt="Blender" 
                                        width={40} 
                                        height={40}
                                        className="flex-shrink-0"
                                    />
                                    <div className="flex-1 flex items-center justify-between">
                                        <h3 className="font-bold text-xl group-hover:text-orange-400 transition-colors">Blender</h3>
                                        <span className="px-2 py-1 rounded text-xs font-semibold flex items-center gap-1" style={{ backgroundColor: 'rgba(var(--btn-primary-bg), 0.15)', color: 'rgb(var(--btn-primary-bg))' }}>
                                            <CheckCircle2 className="w-3 h-3" />
                                            Verified Pro
                                        </span>
                                    </div>
                                </div>
                                <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgb(var(--color-text))' }}>
                                    <span className="font-semibold">Why we use it:</span> To achieve artistic details that traditional CAD cannot reach.
                                </p>
                                <Link href="/blender" className="text-orange-400 text-sm hover:underline inline-flex items-center gap-1">
                                    Learn more →
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Category C: High-End Visualization */}
                    <div id="high-end-visualization" className="mb-32 scroll-mt-24">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm font-medium mb-6">
                                <Icon icon="star" />
                                <span>Marketing Focus</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'rgb(var(--color-title))' }}>
                                High-End Visualization
                            </h2>
                            <p className="text-xl max-w-4xl mx-auto mb-8" style={{ color: 'rgb(var(--color-text))' }}>
                                Photorealistic dispersion, physically accurate metal materials, and 4K E-commerce renders.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Cinema 4D */}
                            <div className="group p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <Image 
                                        src="/software/cinema-4d.svg" 
                                        alt="Cinema 4D" 
                                        width={40} 
                                        height={40}
                                        className="flex-shrink-0"
                                    />
                                    <div className="flex-1 flex items-center justify-between">
                                        <h3 className="font-bold text-xl group-hover:text-blue-400 transition-colors">Cinema 4D</h3>
                                        <span className="px-2 py-1 rounded text-xs font-semibold flex items-center gap-1" style={{ backgroundColor: 'rgba(var(--btn-primary-bg), 0.15)', color: 'rgb(var(--btn-primary-bg))' }}>
                                            <CheckCircle2 className="w-3 h-3" />
                                            Verified Pro
                                        </span>
                                    </div>
                                </div>
                                <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgb(var(--color-text))' }}>
                                    <span className="font-semibold">Why we use it:</span> To provide marketing-ready visuals before production starts.
                                </p>
                                <Link href="/cinema-4d" className="text-blue-400 text-sm hover:underline inline-flex items-center gap-1">
                                    Learn more →
                                </Link>
                            </div>

                            {/* After Effects */}
                            <div className="group p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <Image 
                                        src="/software/after-effects.svg" 
                                        alt="After Effects" 
                                        width={40} 
                                        height={40}
                                        className="flex-shrink-0"
                                    />
                                    <div className="flex-1 flex items-center justify-between">
                                        <h3 className="font-bold text-xl group-hover:text-green-400 transition-colors">After Effects</h3>
                                        <span className="px-2 py-1 rounded text-xs font-semibold flex items-center gap-1" style={{ backgroundColor: 'rgba(var(--btn-primary-bg), 0.15)', color: 'rgb(var(--btn-primary-bg))' }}>
                                            <CheckCircle2 className="w-3 h-3" />
                                            Verified Pro
                                        </span>
                                    </div>
                                </div>
                                <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgb(var(--color-text))' }}>
                                    <span className="font-semibold">Why we use it:</span> To provide marketing-ready visuals before production starts.
                                </p>
                                <Link href="/after-effects" className="text-green-400 text-sm hover:underline inline-flex items-center gap-1">
                                    Learn more →
                                </Link>
                            </div>

                            {/* Blender */}
                            <div className="group p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <Image 
                                        src="/software/blender.svg" 
                                        alt="Blender" 
                                        width={40} 
                                        height={40}
                                        className="flex-shrink-0"
                                    />
                                    <div className="flex-1 flex items-center justify-between">
                                        <h3 className="font-bold text-xl group-hover:text-orange-400 transition-colors">Blender</h3>
                                        <span className="px-2 py-1 rounded text-xs font-semibold flex items-center gap-1" style={{ backgroundColor: 'rgba(var(--btn-primary-bg), 0.15)', color: 'rgb(var(--btn-primary-bg))' }}>
                                            <CheckCircle2 className="w-3 h-3" />
                                            Verified Pro
                                        </span>
                                    </div>
                                </div>
                                <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgb(var(--color-text))' }}>
                                    <span className="font-semibold">Why we use it:</span> To provide marketing-ready visuals before production starts.
                                </p>
                                <Link href="/blender" className="text-orange-400 text-sm hover:underline inline-flex items-center gap-1">
                                    Learn more →
                                </Link>
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
        </>
    );
}

export default Page;
