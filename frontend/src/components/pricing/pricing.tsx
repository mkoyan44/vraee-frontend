import React from 'react';
import styles from "@/assets/styles/client/components/pricing.module.scss";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PricingTier {
    name: string;
    price: string;
    description: string;
    features: string[];
    popular?: boolean;
    turnaroundTime: string;
    revisions: string;
}

const pricingTiers: PricingTier[] = [
    {
        name: "Bronze",
        price: "$299",
        description: "Perfect for simple jewelry pieces and basic concepts",
        turnaroundTime: "5-7 business days",
        revisions: "2 included",
        features: [
            "Basic 3D jewelry modeling",
            "Single piece design",
            "Standard material mapping",
            "JPG + OBJ files",
            "Email support",
            "Basic texture work"
        ]
    },
    {
        name: "Silver",
        price: "$599",
        description: "Ideal for detailed pieces and collection items",
        turnaroundTime: "3-5 business days",
        revisions: "3 included",
        features: [
            "Advanced 3D modeling",
            "Up to 3 related pieces",
            "High-quality textures",
            "Multiple format export",
            "Priority email support",
            "Gemstone detailing",
            "Basic animation ready"
        ],
        popular: true
    },
    {
        name: "Gold",
        price: "$999",
        description: "Complete jewelry collection and complex designs",
        turnaroundTime: "2-4 business days",
        revisions: "5 included",
        features: [
            "Complex 3D jewelry modeling",
            "Collection of 5-10 pieces",
            "Premium materials & textures",
            "All standard 3D formats",
            "Phone/video consultation",
            "Detailed technical specs",
            "Animation setup",
            "Presentation renders"
        ]
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Large-scale projects and bespoke solutions",
        turnaroundTime: "Flexible timeline",
        revisions: "Unlimited",
        features: [
            "Everything in Gold tier",
            "Custom collection development",
            "Video production integration",
            "Dedicated project manager",
            "Real-time collaboration",
            "Source files included",
            "Brand integration",
            "Post-launch support"
        ]
    }
];

const Pricing: React.FC = () => {
    return (
        <section className={styles.pricing}>
            <div className="container">
                <div className={styles.hero}>
                    <h1 className="h2">Choose Your Package</h1>
                    <p className={styles.description}>
                        Select the perfect tier for your jewelry design needs. From simple concepts to complete collections,
                        we deliver premium 3D models that bring your vision to life.
                    </p>
                </div>

                <div className={styles.grid}>
                    {pricingTiers.map((tier, index) => (
                        <Card key={tier.name} className={`${styles.card} ${tier.popular ? styles.popular : ''}`}>
                            <CardHeader>
                                {tier.popular && (
                                    <div className={styles.popularBadge}>Most Popular</div>
                                )}
                                <CardTitle className={styles.title}>{tier.name}</CardTitle>
                                <CardDescription className={styles.price}>
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
                                    Get Started
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className={styles.bottomSection}>
                    <div className={styles.additionalInfo}>
                        <h3>Need Something Custom?</h3>
                        <p>
                            Don't see the perfect package for your project? We offer fully customized solutions
                            tailored to your specific requirements and budget.
                        </p>
                        <Button variant="secondary" size="lg">
                            Contact Us for Custom Quote
                        </Button>
                    </div>

                    <div className={styles.guarantee}>
                        <h3>Money-Back Guarantee</h3>
                        <p>
                            We're confident in our work. If you're not completely satisfied with your 3D model,
                            we'll refund your payment or provide free revisions until you are.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
