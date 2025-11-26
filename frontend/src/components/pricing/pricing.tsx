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
    turnaroundTime: string;
    revisions: string;
    serviceType: string;
    clientType: string[];
}

const pricingTiers: PricingTier[] = [
    {
        name: "CAD Modeling",
        price: "$450",
        originalPrice: "$599",
        serviceType: "CAD_MODELING",
        description: "Professional CAD jewelry modeling for manufacturing",
        turnaroundTime: "4-6 business days",
        revisions: "3 included",
        clientType: ["MANUFACTURER_WHOLESALER", "JEWELRY_ECOMMERCE", "DESIGNER_ETSY"],
        features: [
            "CAD-optimized 3D modeling",
            "Ring, pendant, and bracelet designs",
            "Gemstone placement & sizing",
            "STL, 3DM, OBJ export formats",
            "Technical specifications",
            "Manufacturing feasibility review",
            "Source files included",
            "Email & chat support"
        ]
    },
    {
        name: "Photorealistic Rendering",
        price: "$650",
        originalPrice: "$849",
        serviceType: "PHOTOREALISTIC_RENDERING",
        description: "High-end photorealistic jewelry visualization",
        turnaroundTime: "3-5 business days",
        revisions: "4 included",
        clientType: ["JEWELRY_ECOMMERCE", "MARKETING_AGENCY", "DESIGNER_ETSY"],
        popular: true,
        features: [
            "8-12 premium renders per piece",
            "Multiple angles & close-ups",
            "Realistic materials & lighting",
            "High-resolution PNG/JPEG",
            "Professional presentation",
            "Gemstone dispersion effects",
            "Post-processing & retouching",
            "Watermark-free delivery"
        ]
    },
    {
        name: "Animation & Motion",
        price: "$1,200",
        originalPrice: "$1,599",
        serviceType: "ANIMATION_VIDEO",
        description: "Dynamic jewelry animations for marketing & e-commerce",
        turnaroundTime: "7-10 business days",
        revisions: "5 included",
        clientType: ["JEWELRY_ECOMMERCE", "MARKETING_AGENCY", "MANUFACTURER_WHOLESALER"],
        features: [
            "Product spin animations",
            "Lifestyle jewelry videos",
            "Multi-angle demonstrations",
            "4K MP4 export",
            "Background music integration",
            "Gemstone sparkle effects",
            "Social media optimized",
            "Commercial usage rights"
        ]
    },
    {
        name: "Complete Jewelry Suite",
        price: "Custom",
        serviceType: "COMPLETE_SUITE",
        description: "Full-service jewelry design, modeling & marketing",
        turnaroundTime: "10-21 business days",
        revisions: "8 included",
        clientType: ["JEWELRY_ECOMMERCE", "MARKETING_AGENCY", "MANUFACTURER_WHOLESALER", "DESIGNER_ETSY"],
        features: [
            "CAD modeling + rendering",
            "Collection of 3-10 pieces",
            "Product photography setup",
            "E-commerce optimization",
            "Dedicated project manager",
            "Unlimited revisions",
            "Source files & assets",
            "Post-launch support",
            "Brand integration",
            "Custom requirements"
        ]
    }
];

const Pricing: React.FC = () => {
    const calculateSavings = (price: string, originalPrice?: string) => {
        if (!originalPrice || originalPrice === "Custom" || price === "Custom") return null;
        const currentPrice = parseFloat(price.replace('$', '').replace(',', ''));
        const original = parseFloat(originalPrice.replace('$', '').replace(',', ''));
        const savings = ((original - currentPrice) / original) * 100;
        return Math.round(savings);
    };

    return (
        <section className={styles.pricing}>
            <div className="container">
                <div className={styles.hero}>
                    <h1 className="h2">Professional 3D Jewelry Services</h1>
                    <p className={styles.description}>
                        Transparent pricing for CAD modeling, photorealistic rendering, and animation services.
                        Choose the perfect service for your jewelry brand or design needs.
                    </p>
                    <div className={styles.promotion}>
                        🎉 <strong>Limited Time Offer:</strong> Up to 30% off our services!
                    </div>
                </div>

                <div className={styles.grid}>
                    {pricingTiers.map((tier, index) => {
                        const savingsPercent = calculateSavings(tier.price, tier.originalPrice);

                        return (
                            <Card key={tier.name} className={`${styles.card} ${tier.popular ? styles.popular : ''}`}>
                                <CardHeader>
                                    {tier.popular && (
                                        <div className={styles.popularBadge}>Most Popular</div>
                                    )}
                                    {savingsPercent && (
                                        <div className={styles.discountBadge}>{savingsPercent}% OFF</div>
                                    )}
                                    <CardTitle className={styles.title}>{tier.name}</CardTitle>
                                    <p className={styles.serviceType}>{tier.serviceType.replace('_', ' ').toLowerCase()}</p>
                                    <CardDescription className={styles.price}>
                                        {tier.originalPrice && tier.price !== "Custom" && (
                                            <span className={styles.originalPrice}>{tier.originalPrice}</span>
                                        )}
                                        <span className={styles.amount}>{tier.price}</span>
                                        {tier.price !== "Custom" && <span className={styles.perPiece}>per piece</span>}
                                    </CardDescription>
                                    <p className={styles.tierDescription}>{tier.description}</p>
                                </CardHeader>

                                <CardContent>
                                    <div className={styles.timeline}>
                                        <div className={styles.timeItem}>
                                            <span className={styles.label}>Turnaround:</span>
                                            <span className={styles.value}>{tier.turnaroundTime}</span>
                                        </div>
                                        <div className={styles.timeItem}>
                                            <span className={styles.label}>Revisions:</span>
                                            <span className={styles.value}>{tier.revisions}</span>
                                        </div>
                                    </div>

                                    {tier.clientType.length > 0 && (
                                        <div className={styles.clientTypes}>
                                            <span className={styles.clientLabel}>Perfect for:</span>
                                            <div className={styles.clientBadges}>
                                                {tier.clientType.slice(0, 2).map(clientType => (
                                                    <span key={clientType} className={styles.clientBadge}>
                                                        {clientType.replace('_', ' ').toLowerCase()}
                                                    </span>
                                                ))}
                                                {tier.clientType.length > 2 && (
                                                    <span className={styles.clientBadge}>+{tier.clientType.length - 2} more</span>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    <ul className={styles.features}>
                                        {tier.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className={styles.feature}>
                                                <svg className={styles.checkmark} viewBox="0 0 24 24" fill="none">
                                                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>

                                <CardFooter>
                                    <Button
                                        className={styles.ctaButton}
                                        variant={tier.popular ? "default" : "outline"}
                                        size="lg"
                                    >
                                        {tier.price === "Custom" ? "Get Custom Quote" : "Start Project"}
                                    </Button>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>

                {/* Professional Testimonials & Trust Signals */}
                <div className={styles.trustSection}>
                    <div className={styles.trustGrid}>
                        <div className={styles.trustItem}>
                            <div className={styles.trustIcon}>🏆</div>
                            <h4>Industry Experts</h4>
                            <p>10+ years of jewelry 3D modeling experience</p>
                        </div>
                        <div className={styles.trustItem}>
                            <div className={styles.trustIcon}>⚡</div>
                            <h4>Fast Turnaround</h4>
                            <p>Average delivery within 5 business days</p>
                        </div>
                        <div className={styles.trustItem}>
                            <div className={styles.trustIcon}>🔒</div>
                            <h4>Secure & Private</h4>
                            <p>Confidential design projects protected</p>
                        </div>
                        <div className={styles.trustItem}>
                            <div className={styles.trustIcon}>💎</div>
                            <h4>Manufacturing Ready</h4>
                            <p>CAD files optimized for production</p>
                        </div>
                    </div>
                </div>

                <div className={styles.processSection}>
                    <h2>What Happens After You Order?</h2>
                    <div className={styles.processSteps}>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>01</div>
                            <h4>Project Setup</h4>
                            <p>We gather your requirements, design brief, and reference materials within 24 hours</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>02</div>
                            <h4>Initial Concept</h4>
                            <p>Receive initial drafts within 48-72 hours for your feedback and revisions</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>03</div>
                            <h4>Refinement</h4>
                            <p>Incorporate your feedback with included revisions until perfect</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>04</div>
                            <h4>Final Delivery</h4>
                            <p>Receive production-ready files with all agreed formats and specifications</p>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomSection}>
                    <div className={styles.additionalInfo}>
                        <h3>Volume Discounts Available</h3>
                        <p>
                            Working on multiple projects? Get discounted rates for collections of 5+ pieces,
                            bulk rendering orders, or ongoing retainer agreements.
                        </p>
                        <Button variant="secondary" size="lg">
                            Discuss Volume Pricing
                        </Button>
                    </div>

                    <div className={styles.guarantee}>
                        <h3>100% Satisfaction Guarantee</h3>
                        <p>
                            Not happy with your 3D model? We'll keep revising until you are, or provide
                            a full refund. Quality is our promise, backed by our reputation.
                        </p>
                    </div>

                    <div className={styles.ctaBox}>
                        <h3>Ready to Get Started?</h3>
                        <p>Fill out our quick project form and we'll get back to you within 2 hours with a detailed proposal.</p>
                        <Button size="lg">
                            Start Your Jewelry Project
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
