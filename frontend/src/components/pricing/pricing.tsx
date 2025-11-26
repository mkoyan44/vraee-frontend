import React from 'react';
import styles from "@/assets/styles/client/components/pricing.module.scss";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PricingTier {
    name: string;
    price: string;
    originalPrice?: string;
    description: string;
    features: string[];
    popular?: boolean;
    category: string;
    turnaroundTime: string;
    revisions?: string;
    includes?: string[];
    notes?: string[];
}

const pricingTiers: PricingTier[] = [
    // 3D Modeling (CAD) and Sculpting
    {
        name: "Basic CAD Modeling",
        price: "$199–$299",
        description: "Single, non-organic piece (e.g., simple band, basic pendant). Minimal stone setting. Clear reference image/sketch provided.",
        category: "3D Modeling & Sculpting",
        turnaroundTime: "3–5 business days",
        revisions: "2 free revisions included",
        features: [
            "CAD-optimized jewelry modeling",
            "Ring, pendant, and bracelet designs",
            "Basic gemstone placement",
            "STL, 3DM export formats",
            "Manufacturing-ready specifications"
        ],
        notes: [
            "Perfect for simple, clean designs",
            "50% deposit required",
            "Additional revisions: $75/hour"
        ]
    },
    {
        name: "Standard CAD Modeling",
        price: "$300–$499",
        description: "More complex designs (e.g., halo setting, multi-stone, detailed shank). Requires moderate problem-solving and multiple iterations.",
        category: "3D Modeling & Sculpting",
        turnaroundTime: "4–7 business days",
        revisions: "2 free revisions included",
        popular: true,
        features: [
            "Advanced CAD jewelry modeling",
            "Complex ring and pendant designs",
            "Multi-stone arrangements",
            "Detailed shank modifications",
            "Technical manufacturing specs",
            "Multiple format exports",
            "Manufacturing feasibility review"
        ],
        notes: [
            "Most engagement and designer pieces",
            "50% deposit required",
            "Additional revisions: $75/hour"
        ]
    },
    {
        name: "Premium Sculpting",
        price: "$500–$850+",
        description: "Highly intricate, organic, or free-form designs (e.g., animal figures, detailed filigree, complex pave). Requires advanced sculpting techniques.",
        category: "3D Modeling & Sculpting",
        turnaroundTime: "7–14 business days",
        revisions: "2 free revisions included",
        features: [
            "Advanced digital sculpting",
            "Organic, free-form designs",
            "High-detail filigree work",
            "Complex pave arrangements",
            "Photo-realistic surface detailing",
            "Multiple export formats",
            "Manufacturing optimization"
        ],
        notes: [
            "For high-end, unique designs",
            "50% deposit required",
            "Additional revisions: $75/hour",
            "Specialized sculpting expertise"
        ]
    },

    // Rendering (Static Image)
    {
        name: "E-commerce Rendering",
        price: "$75–$125 per image",
        description: "High-resolution (e.g., 2000x2000 px), white/simple background, standard material setup. Ideal for product pages and online catalogs.",
        category: "Photorealistic Rendering",
        turnaroundTime: "2–4 business days",
        revisions: "1 free revision included",
        features: [
            "4K resolution images",
            "White/clean backgrounds",
            "Standard jewelry materials",
            "Professional lighting",
            "High-resolution PNG/JPEG",
            "Commercial usage rights"
        ],
        notes: [
            "Perfect for product listings",
            "Watermark-free delivery",
            "Multiple angles available"
        ]
    },
    {
        name: "Marketing Rendering",
        price: "$150–$250 per image",
        description: "Ultra-high resolution (4K), complex materials, custom background/scene setup, advanced lighting. For advertising campaigns and print media.",
        category: "Photorealistic Rendering",
        turnaroundTime: "3–5 business days",
        revisions: "2 free revisions included",
        features: [
            "6K+ ultra-high resolution",
            "Complex metal materials",
            "Gemstone dispersion effects",
            "Custom scene environments",
            "Advanced lighting setups",
            "Professional post-processing",
            "Print-ready quality",
            "Commercial usage rights"
        ],
        notes: [
            "For print and marketing campaigns",
            "Multiple composition options",
            "Advanced material shaders"
        ]
    },
    {
        name: "Bulk Rendering Package (10+ images)",
        price: "$50–$90 per image",
        description: "Discounted rate for bulk orders of the same model. Cost-effective solution for large collections and product catalogs.",
        category: "Photorealistic Rendering",
        turnaroundTime: "5–10 business days",
        revisions: "3 free revisions for collection",
        features: [
            "Same model, multiple angles",
            "Consistent lighting & materials",
            "Bulk discount pricing",
            "Multiple format exports",
            "Commercial usage rights",
            "Organized delivery packages"
        ],
        notes: [
            "Best value for collections",
            "Consistent style throughout",
            "Volume discount applied"
        ]
    },

    // Animation (Video)
    {
        name: "360° Product Rotation",
        price: "$150–$250",
        description: "Simple, smooth 360° rotation on a white/simple background. Perfect for e-commerce product pages and basic marketing.",
        category: "Animation & Video",
        turnaroundTime: "3–5 business days",
        revisions: "1 free revision included",
        features: [
            "300° smooth rotation",
            "Clean backgrounds",
            "HD video export (1080p)",
            "Multiple rotation speeds",
            "MP4 format optimized",
            "Commercial usage rights",
            "Social media ready"
        ],
        includes: [
            "5–10 second duration"
        ],
        notes: [
            "E-commerce essential",
            "Fast turnaround",
            "SEO-friendly video format"
        ]
    },
    {
        name: "Cinematic Jewelry Showcase",
        price: "$300–$550",
        description: "Dynamic camera movements, slow zooms, focus on details (gemstone sparkle, engraving). For premium marketing and presentation.",
        category: "Animation & Video",
        turnaroundTime: "5–8 business days",
        revisions: "2 free revisions included",
        features: [
            "Dynamic camera movements",
            "Focus on gemstone details",
            "Slow-motion sparkle effects",
            "Professional transitions",
            "4K video export",
            "Custom music integration",
            "Background environments",
            "Commercial usage rights"
        ],
        includes: [
            "15–30 second duration"
        ],
        notes: [
            "Premium marketing content",
            " storytelling approach",
            "Attention-grabbing effects"
        ]
    },
    {
        name: "Full Collection Video",
        price: "Custom Quote",
        description: "Animation of multiple pieces, complex transitions, and storytelling elements. For brand presentations and comprehensive marketing campaigns.",
        category: "Animation & Video",
        turnaroundTime: "10–14 business days",
        revisions: "3 free revisions included",
        features: [
            "Multiple jewelry pieces",
            "Complex transition effects",
            "Brand storytelling",
            "Professional voiceover prep",
            "4K video production",
            "Background music integration",
            "Custom branding elements",
            "Complete usage rights"
        ],
        includes: [
            "30+ seconds duration"
        ],
        notes: [
            "Brand presentation videos",
            "Comprehensive marketing content",
            "Complex production requirements"
        ]
    },

    // Hourly Rate and Retainer
    {
        name: "Hourly Consulting Rate",
        price: "$75–$120 per hour",
        description: "Professional consultation, design reviews, extensive revisions, and specialized problem-solving outside standard project scope.",
        category: "Professional Services",
        turnaroundTime: "As needed",
        features: [
            "Expert design consultation",
            "Technical problem-solving",
            "Material & process advice",
            "Manufacturing guidance",
            "Design review services",
            "Specialized revisions",
            "Industry best practices",
            "Professional recommendations"
        ],
        notes: [
            "For work outside fixed projects",
            "Billed in 15-minute increments",
            "Prepaid for extensive work"
        ]
    },
    {
        name: "Monthly Retainer",
        price: "$2,000–$5,000 monthly",
        description: "Priority service for brands requiring guaranteed monthly deliverables. Includes dedicated communication and expedited turnaround times.",
        category: "Professional Services",
        turnaroundTime: "Priority scheduling",
        features: [
            "Dedicated project manager",
            "Guaranteed monthly deliverables",
            "Priority scheduling",
            "Direct communication channel",
            "Discounted hourly rates",
            "Expedited turnaround",
            "Long-term partnership terms",
            "Custom service agreements"
        ],
        includes: [
            "Guaranteed response within 2 hours",
            "Monthly strategy calls",
            "Priority support",
            "Volume discounts"
        ]
    }
];

const Pricing: React.FC = () => {
    // Group tiers by category
    const groupedTiers = pricingTiers.reduce((acc, tier) => {
        if (!acc[tier.category]) {
            acc[tier.category] = [];
        }
        acc[tier.category].push(tier);
        return acc;
    }, {} as Record<string, PricingTier[]>);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-rose-50 py-24">
                <div className="absolute inset-0 bg-[url('/hero-bg.svg')] bg-cover bg-center opacity-5"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mx-auto max-w-4xl">
                        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Professional 3D Jewelry
                            <span className="bg-gradient-to-r from-amber-600 via-purple-600 to-rose-600 bg-clip-text text-transparent"> Services</span>
                        </h1>
                        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                            Industry-standard pricing for CAD modeling, photorealistic rendering, and animation services.
                            Transparent rates with professional contract terms and 50% deposit structure.
                        </p>
                        <div className="mt-8 flex justify-center gap-4 flex-wrap">
                            <div className="bg-white/80 backdrop-blur-sm border border-amber-200 rounded-full px-4 py-2 text-sm font-medium text-amber-900 shadow-sm">
                                🚀 3-5 Day Average Turnaround
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full px-4 py-2 text-sm font-medium text-purple-900 shadow-sm">
                                📄 Professional Contracts
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm border border-rose-200 rounded-full px-4 py-2 text-sm font-medium text-rose-900 shadow-sm">
                                💎 Manufacturing Ready
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Categories */}
            {Object.entries(groupedTiers).map(([category, tiers], categoryIndex) => (
                <section key={category} className={`py-24 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                {category}
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-rose-500 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {tiers.map((tier, index) => (
                                <div key={tier.name} className={`relative group ${tier.popular ? 'md:scale-105 lg:scale-110' : ''}`}>
                                    {tier.popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                            <span className="bg-gradient-to-r from-amber-500 to-rose-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                                                Most Popular
                                            </span>
                                        </div>
                                    )}

                                    <div className={`relative h-full bg-white rounded-2xl shadow-lg overflow-hidden border transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 ${
                                        tier.popular ? 'ring-2 ring-amber-200 shadow-amber-100' : 'hover:border-amber-200'
                                    }`}>
                                        <div className="p-8">
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
                                                {tier.popular && <span className="text-2xl">⭐</span>}
                                            </div>

                                            <div className="mb-6">
                                                <span className={`text-4xl font-bold ${
                                                    tier.price === "Custom Quote" ? 'text-gray-900' : 'bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent'
                                                }`}>
                                                    {tier.price}
                                                </span>
                                                {tier.price !== "Custom Quote" && (
                                                    <span className="text-gray-600 text-lg ml-1">
                                                        {tier.category === "Photorealistic Rendering" || category === "Animation & Video" ? "" : "per piece"}
                                                    </span>
                                                )}
                                            </div>

                                            <p className="text-gray-600 mb-6 leading-relaxed">{tier.description}</p>

                                            <div className="space-y-3 mb-6">
                                                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                                                    <span className="text-sm font-medium text-gray-500">Turnaround</span>
                                                    <span className="text-sm text-gray-900 font-medium">{tier.turnaroundTime}</span>
                                                </div>

                                                {tier.revisions && (
                                                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                                                        <span className="text-sm font-medium text-gray-500">Free Revisions</span>
                                                        <span className="text-sm text-gray-900 font-medium">{tier.revisions}</span>
                                                    </div>
                                                )}

                                                {tier.includes && tier.includes.length > 0 && (
                                                    <div className="py-3 space-y-2">
                                                        <span className="text-sm font-semibold text-amber-700 uppercase tracking-wide">What Includes:</span>
                                                        <div className="space-y-1">
                                                            {tier.includes.map((item, idx) => (
                                                                <div key={idx} className="flex items-center text-sm text-gray-700">
                                                                    <svg className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                                    </svg>
                                                                    {item}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            {tier.notes && tier.notes.length > 0 && (
                                                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 space-y-1">
                                                    <span className="text-sm font-semibold text-amber-800">Important:</span>
                                                    {tier.notes.map((note, idx) => (
                                                        <div key={idx} className="text-sm text-amber-700">• {note}</div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        <div className="px-8 pb-8">
                                            <button className={`w-full py-3 px-6 rounded-xl font-semibold text-white shadow-lg transition-all duration-200 transform hover:scale-105 ${
                                                tier.popular
                                                    ? 'bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600'
                                                    : 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800'
                                            }`}>
                                                {tier.price === "Custom Quote" ? "Get Custom Quote" : "Start Project"}
                                            </button>
                                        </div>

                                        {/* Decorative elements */}
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-100 to-rose-100 rounded-bl-3xl opacity-30"></div>
                                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-100 to-amber-100 rounded-tr-3xl opacity-30"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* Professional Standards Section */}
            <section className="py-24 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Professional Service Standards</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Industry-leading contract terms and business practices designed for B2B relationships
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:bg-white/15 transition-all duration-300">
                            <div className="text-4xl mb-4">💳</div>
                            <h3 className="text-xl font-bold mb-4">Payment Terms</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>• 50% non-refundable deposit</li>
                                <li>• Final payment upon delivery</li>
                                <li>• Secure payment processing</li>
                                <li>• Invoice with detailed breakdown</li>
                            </ul>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:bg-white/15 transition-all duration-300">
                            <div className="text-4xl mb-4">📄</div>
                            <h3 className="text-xl font-bold mb-4">Contract Terms</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>• Written agreements for all projects</li>
                                <li>• Clear scope of work defined</li>
                                <li>• Specific deadlines and milestones</li>
                                <li>• Revision policy limitations</li>
                            </ul>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:bg-white/15 transition-all duration-300">
                            <div className="text-4xl mb-4">💎</div>
                            <h3 className="text-xl font-bold mb-4">Portfolio Rights</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>• Website portfolio usage rights</li>
                                <li>• Social media showcase permission</li>
                                <li>• NDA available for sensitive projects</li>
                                <li>• Data security protocols</li>
                            </ul>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:bg-white/15 transition-all duration-300">
                            <div className="text-4xl mb-4">📊</div>
                            <h3 className="text-xl font-bold mb-4">Project Management</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>• Weekly progress updates</li>
                                <li>• Multiple quality checkpoints</li>
                                <li>• Manufacturing guidance included</li>
                                <li>• 2-hour initial response SLA</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Signals */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center group">
                            <div className="text-5xl mb-4 p-4 bg-gradient-to-br from-amber-100 to-rose-100 rounded-2xl inline-block group-hover:scale-110 transition-transform">
                                🎯
                            </div>
                            <h4 className="font-bold text-lg mb-2">US Market Pricing</h4>
                            <p className="text-gray-600">Real rates based on industry analysis, not made-up numbers</p>
                        </div>

                        <div className="text-center group">
                            <div className="text-5xl mb-4 p-4 bg-gradient-to-br from-purple-100 to-amber-100 rounded-2xl inline-block group-hover:scale-110 transition-transform">
                                ⚡
                            </div>
                            <h4 className="font-bold text-lg mb-2">Fast Delivery</h4>
                            <p className="text-gray-600">Average 3-7 business days for CAD work, 2-5 days for renders</p>
                        </div>

                        <div className="text-center group">
                            <div className="text-5xl mb-4 p-4 bg-gradient-to-br from-rose-100 to-purple-100 rounded-2xl inline-block group-hover:scale-110 transition-transform">
                                🔒
                            </div>
                            <h4 className="font-bold text-lg mb-2">Secure & Professional</h4>
                            <p className="text-gray-600">Confidential projects handled with NDAs and secure file transfer</p>
                        </div>

                        <div className="text-center group">
                            <div className="text-5xl mb-4 p-4 bg-gradient-to-br from-amber-100 to-purple-100 rounded-2xl inline-block group-hover:scale-110 transition-transform">
                                🏭
                            </div>
                            <h4 className="font-bold text-lg mb-2">Manufacturing Ready</h4>
                            <p className="text-gray-600">All files optimized for production with technical specifications</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-gradient-to-br from-amber-50 to-rose-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Project Journey</h2>
                        <p className="text-xl text-gray-600">From contract to delivery in 4 professional steps</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Discovery & Setup",
                                description: "Detailed requirements gathering, design brief creation, and contract finalization within 24-48 hours."
                            },
                            {
                                step: "02",
                                title: "Initial Creation",
                                description: "First drafts delivered within specified timeframes. Full feedback incorporation with included revisions."
                            },
                            {
                                step: "03",
                                title: "Review & Refinement",
                                description: "Iterative improvements based on your feedback. Quality assurance checkpoints ensure perfection."
                            },
                            {
                                step: "04",
                                title: "Final Delivery",
                                description: "Production-ready files with all agreed formats, technical specs, and commercial usage rights."
                            }
                        ].map((process, index) => (
                            <div key={index} className="text-center group relative">
                                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-rose-500 text-white font-bold text-xl rounded-full mb-6">
                                        {process.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{process.description}</p>
                                </div>
                                <div className="w-full h-0.5 bg-gradient-to-r from-amber-300 to-rose-300 mt-8 hidden lg:block"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-24 bg-gradient-to-r from-amber-600 via-purple-600 to-rose-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Jewelry Business?</h2>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                        Join hundreds of satisfied jewelry brands, manufacturers, and designers who trust us with their 3D visualization needs.
                        Start your project today with our professional team and US market-standard pricing.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                            💬 Get Custom Quote (2-hour response)
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-200">
                            📞 Schedule Consultation
                        </button>
                    </div>

                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                            <div className="text-2xl font-bold">95%</div>
                            <div className="text-sm text-white/80">Client Satisfaction</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                            <div className="text-2xl font-bold">500+</div>
                            <div className="text-sm text-white/80">Projects Delivered</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                            <div className="text-2xl font-bold">5 Days</div>
                            <div className="text-sm text-white/80">Average Turnaround</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
