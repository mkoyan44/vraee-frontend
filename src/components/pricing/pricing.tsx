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
            <section className="relative overflow-hidden bg-gray-50 py-16">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mx-auto max-w-4xl">
                        <div className="text-center relative">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl leading-tight">
                                Professional
                                <br />
                                <span className="relative">
                                    <span className="relative z-10 text-gray-800">3D Jewelry Services</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent opacity-30 -z-10"></div>
                                </span>
                            </h1>
                            <div className="mt-4 w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto"></div>
                        </div>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Industry-standard pricing for CAD modeling, photorealistic rendering, and animation services.
                            Transparent rates with professional contract terms and 50% deposit structure.
                        </p>
                        <div className="mt-8 flex justify-center gap-4 flex-wrap">
                            <div className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
                                📊 US Market Analysis Based
                            </div>
                            <div className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
                                📋 Professional Contracts
                            </div>
                            <div className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
                                ✅ Manufacturing Ready
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Categories */}
            {Object.entries(groupedTiers).map(([category, tiers], categoryIndex) => (
                <section key={category} className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">
                                {category}
                            </h2>
                            <div className="w-20 h-1 bg-gray-300 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {tiers.map((tier, index) => (
                                <div key={tier.name} className={`relative group ${tier.popular ? 'md:scale-105 lg:scale-110' : ''}`}>
                                    {tier.popular && (
                                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                                            <span className="bg-gradient-to-r from-amber-500 to-rose-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                                                Most Popular
                                            </span>
                                        </div>
                                    )}

                                    <div className={`relative h-full bg-white rounded-lg shadow-md overflow-hidden border transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 ${
                                        tier.popular ? 'ring-2 ring-amber-200 shadow-amber-50' : 'hover:border-amber-200'
                                    }`}>
                                        {/* Header */}
                                        <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
                                                {tier.popular && <span className="text-2xl">⭐</span>}
                                            </div>
                                        </div>

                                        {/* Price Section */}
                                        <div className="px-6 py-6 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100 text-center">
                                            <div className="text-4xl font-bold text-gray-900 mb-2">
                                                {tier.price}
                                            </div>
                                            {tier.price !== "Custom Quote" && (
                                                <div className="text-gray-600 text-sm">
                                                    {tier.category === "Photorealistic Rendering" || category === "Animation & Video" ? "Per Image" : "Per Piece"}
                                                </div>
                                            )}
                                        </div>

                                        {/* Service Details */}
                                        <div className="px-6 py-6 space-y-4">

                                            {/* Quick Facts */}
                                            <div className="grid grid-cols-2 gap-4 mb-4">
                                                <div className="bg-blue-50 rounded-lg px-3 py-2">
                                                    <div className="text-xs font-semibold text-blue-700 uppercase tracking-wide">Time</div>
                                                    <div className="text-sm font-medium text-blue-900">{tier.turnaroundTime}</div>
                                                </div>
                                                <div className="bg-green-50 rounded-lg px-3 py-2">
                                                    <div className="text-xs font-semibold text-green-700 uppercase tracking-wide">Revisions</div>
                                                    <div className="text-sm font-medium text-green-900">{tier.revisions || 'N/A'}</div>
                                                </div>
                                            </div>

                                            {/* What Includes */}
                                            {tier.includes && tier.includes.length > 0 && (
                                                <div>
                                                    <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">What's Included</h4>
                                                    <ul className="space-y-2">
                                                        {tier.includes.map((item, idx) => (
                                                            <li key={idx} className="flex items-start text-sm text-gray-700">
                                                                <span className="text-green-500 mr-2 mt-1">•</span>
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Service Description */}
                                            <div className="text-sm text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
                                                {tier.description}
                                            </div>

                                            {/* Important Notes */}
                                            {tier.notes && tier.notes.length > 0 && (
                                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-3">
                                                    <h4 className="text-sm font-semibold text-yellow-800 mb-2">Important Notes</h4>
                                                    <ul className="space-y-1">
                                                        {tier.notes.map((note, idx) => (
                                                            <li key={idx} className="text-sm text-yellow-700">• {note}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>

                                        {/* CTA Button */}
                                        <div className="px-6 pb-6">
                                            <button className="w-full py-3 px-6 rounded-lg font-semibold bg-gray-900 hover:bg-gray-800 text-white shadow-sm transition-colors duration-200">
                                                {tier.price === "Custom Quote" ? "Get Custom Quote" : "Start Project"}
                                            </button>
                                        </div>
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
                            <div className="text-5xl mb-4 p-4 bg-gray-100 rounded-xl inline-block">
                                📊
                            </div>
                            <h4 className="font-bold text-lg mb-2">US Market Analysis</h4>
                            <p className="text-gray-600">Professional pricing based on actual industry standards</p>
                        </div>

                        <div className="text-center group">
                            <div className="text-5xl mb-4 p-4 bg-gray-100 rounded-xl inline-block">
                                ⏰
                            </div>
                            <h4 className="font-bold text-lg mb-2">Defined Timeframes</h4>
                            <p className="text-gray-600">Clear delivery expectations with realistic timelines</p>
                        </div>

                        <div className="text-center group">
                            <div className="text-5xl mb-4 p-4 bg-gray-100 rounded-xl inline-block">
                                📋
                            </div>
                            <h4 className="font-bold text-lg mb-2">Professional Contracts</h4>
                            <p className="text-gray-600">Written agreements protecting both parties</p>
                        </div>

                        <div className="text-center group">
                            <div className="text-5xl mb-4 p-4 bg-gray-100 rounded-xl inline-block">
                                🛠️
                            </div>
                            <h4 className="font-bold text-lg mb-2">Manufacturing Focus</h4>
                            <p className="text-gray-600">All deliverables optimized for production processes</p>
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
            <section className="py-24 bg-blue-900 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
                    <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                        Contact us today for a detailed proposal based on your specific needs.
                        Get a custom quote in just 2 hours with our experienced project managers.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-gray-50">
                            📋 Request Detailed Quote
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-200">
                            📞 Schedule Consultation
                        </button>
                    </div>

                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                        <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-700">
                            <div className="text-2xl font-bold">500+</div>
                            <div className="text-sm text-blue-200">Projects Completed</div>
                        </div>
                        <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-700">
                            <div className="text-2xl font-bold">5 Days</div>
                            <div className="text-sm text-blue-200">Average Delivery</div>
                        </div>
                        <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-700">
                            <div className="text-2xl font-bold">2 Hours</div>
                            <div className="text-sm text-blue-200">Quote Response Time</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
