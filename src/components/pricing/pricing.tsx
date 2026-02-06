"use client";

import React from 'react';
import { pricingTiers, PricingTier } from '@/config/pricing.config';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
    // Group tiers by category
    const groupedTiers = pricingTiers.reduce((acc, tier) => {
        if (!acc[tier.category]) {
            acc[tier.category] = [];
        }
        acc[tier.category].push(tier);
        return acc;
    }, {} as Record<string, PricingTier[]>);

    const handleStartProject = () => {
        window.location.href = '/contact';
    };

    return (
        <>
            <div className="background min-h-screen">
                {/* Minimal Hero Section with Color */}
                <section 
                    className="pt-32 pb-20 px-4 sm:px-6 lg:px-8"
                    style={{
                        background: 'linear-gradient(135deg, rgba(var(--btn-primary-bg), 0.02), rgba(var(--btn-primary-bg), 0.05))',
                    }}
                >
                    <div className="max-w-5xl mx-auto text-center">
                        <h1 
                            className="text-5xl sm:text-6xl lg:text-7xl font-light mb-6 tracking-tight"
                            style={{ 
                                color: 'rgb(var(--color-title))',
                                background: 'linear-gradient(135deg, rgb(var(--color-title)), rgb(var(--btn-primary-bg)))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            Pricing
                        </h1>
                        <div className="w-20 h-0.5 mx-auto mb-8" style={{ background: 'linear-gradient(to right, transparent, rgb(var(--btn-primary-bg)), transparent)' }}></div>
                        <p 
                            className="text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed"
                            style={{ color: 'rgb(var(--color-text))', opacity: 0.8 }}
                        >
                            Transparent, industry-standard pricing for professional 3D jewelry services
                        </p>
                    </div>
                </section>

                {/* Service Categories - Minimal Design */}
                {Object.entries(groupedTiers).map(([category, tiers], categoryIndex) => {
                    // Different subtle background colors for each category
                    const categoryColors = {
                        '3D CAD Modeling': 'rgba(59, 130, 246, 0.03)', // blue
                        '3D Rendering & Animation': 'rgba(168, 85, 247, 0.03)', // purple
                        'Professional Services': 'rgba(236, 72, 153, 0.03)', // pink
                    };
                    const categoryColor = categoryColors[category as keyof typeof categoryColors] || 'transparent';
                    
                    return (
                    <section 
                        key={category} 
                        className={`py-20 px-4 sm:px-6 lg:px-8 ${categoryIndex > 0 ? 'border-t' : ''}`}
                        style={{ 
                            borderColor: 'rgb(var(--color-border))',
                            backgroundColor: categoryColor,
                        }}
                    >
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 
                                    className="text-2xl sm:text-3xl font-light mb-3 tracking-tight"
                                    style={{ color: 'rgb(var(--color-title))' }}
                                >
                                    {category}
                                </h2>
                                <div className="w-16 h-0.5 mx-auto" style={{ background: 'linear-gradient(to right, transparent, rgb(var(--btn-primary-bg)), transparent)' }}></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {tiers.map((tier, tierIndex) => (
                                    <div 
                                        key={tier.id} 
                                        className="group relative"
                                        style={{
                                            animation: `fadeIn 0.5s ease-out ${tierIndex * 0.1}s both`,
                                        }}
                                    >
                                        {tier.popular && (
                                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                                                <span 
                                                    className="px-4 py-1.5 text-xs font-medium rounded-full shadow-sm"
                                                    style={{
                                                        background: 'linear-gradient(135deg, rgb(var(--btn-primary-bg)), rgba(var(--btn-primary-bg), 0.8))',
                                                        color: 'rgb(var(--btn-primary-text))',
                                                    }}
                                                >
                                                    Popular
                                                </span>
                                            </div>
                                        )}

                                        <div 
                                            className="h-full border transition-all duration-300 group-hover:shadow-lg"
                                            style={{
                                                backgroundColor: tier.popular 
                                                    ? 'rgba(var(--btn-primary-bg), 0.03)' 
                                                    : 'rgba(var(--color-bg), 0.5)',
                                                borderColor: tier.popular 
                                                    ? 'rgb(var(--btn-primary-bg))' 
                                                    : 'rgba(var(--color-border), 0.3)',
                                                borderWidth: tier.popular ? '2px' : '1px',
                                            }}
                                            onMouseEnter={(e) => {
                                                if (!tier.popular) {
                                                    e.currentTarget.style.borderColor = 'rgba(var(--btn-primary-bg), 0.5)';
                                                    e.currentTarget.style.backgroundColor = 'rgba(var(--btn-primary-bg), 0.02)';
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (!tier.popular) {
                                                    e.currentTarget.style.borderColor = 'rgba(var(--color-border), 0.3)';
                                                    e.currentTarget.style.backgroundColor = 'rgba(var(--color-bg), 0.5)';
                                                }
                                            }}
                                        >
                                            {/* Header */}
                                            <div 
                                                className="px-6 py-5 border-b" 
                                                style={{ 
                                                    borderColor: 'rgba(var(--color-border), 0.2)',
                                                    backgroundColor: tier.popular ? 'rgba(var(--btn-primary-bg), 0.05)' : 'transparent',
                                                }}
                                            >
                                                <h3 
                                                    className="text-lg font-medium"
                                                    style={{ color: 'rgb(var(--color-title))' }}
                                                >
                                                    {tier.name}
                                                </h3>
                                                {tier.isManufacturingReady && (
                                                    <div className="mt-2">
                                                        <span 
                                                            className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded"
                                                            style={{
                                                                backgroundColor: 'rgba(var(--btn-primary-bg), 0.15)',
                                                                color: 'rgb(var(--btn-primary-bg))',
                                                            }}
                                                        >
                                                            <Check className="w-3 h-3" />
                                                            Manufacturing-Ready
                                                        </span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Price */}
                                            <div 
                                                className="px-6 py-6 text-center border-b relative" 
                                                style={{ 
                                                    borderColor: 'rgba(var(--color-border), 0.2)',
                                                    background: tier.popular 
                                                        ? 'linear-gradient(135deg, rgba(var(--btn-primary-bg), 0.12), rgba(var(--btn-primary-bg), 0.05))'
                                                        : 'linear-gradient(135deg, rgba(var(--btn-primary-bg), 0.02), transparent)',
                                                }}
                                            >
                                                <div 
                                                    className="text-3xl font-light mb-1"
                                                    style={{ 
                                                        color: tier.popular 
                                                            ? 'rgb(var(--btn-primary-bg))' 
                                                            : 'rgb(var(--color-title))' 
                                                    }}
                                                >
                                                    {tier.price}
                                                </div>
                                                {tier.price !== "Custom Quote" && tier.category !== "Professional Services" && (
                                                    <div 
                                                        className="text-xs font-light"
                                                        style={{ 
                                                            color: tier.popular 
                                                                ? 'rgb(var(--btn-primary-bg))' 
                                                                : 'rgb(var(--color-text))', 
                                                            opacity: tier.popular ? 0.8 : 0.6 
                                                        }}
                                                    >
                                                        {tier.category === "3D Rendering & Animation" ? "Package" : "Starting Price"}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Key Info */}
                                            <div className="px-6 py-5 border-b" style={{ borderColor: 'rgba(var(--color-border), 0.2)' }}>
                                                <div className="flex justify-between items-center text-sm mb-3">
                                                    <span style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}>Delivery</span>
                                                    <span 
                                                        className="px-2 py-1 rounded"
                                                        style={{ 
                                                            color: 'rgb(var(--btn-primary-bg))',
                                                            backgroundColor: 'rgba(var(--btn-primary-bg), 0.1)',
                                                            fontWeight: 500 
                                                        }}
                                                    >
                                                        {tier.turnaroundTime}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between items-center text-sm">
                                                    <span style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}>Revisions</span>
                                                    <span 
                                                        className="px-2 py-1 rounded"
                                                        style={{ 
                                                            color: 'rgb(var(--btn-primary-bg))',
                                                            backgroundColor: 'rgba(var(--btn-primary-bg), 0.1)',
                                                            fontWeight: 500 
                                                        }}
                                                    >
                                                        {tier.revisions || 'N/A'}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <div className="px-6 py-5 border-b" style={{ borderColor: 'rgba(var(--color-border), 0.2)' }}>
                                                <p 
                                                    className="text-sm font-light leading-relaxed"
                                                    style={{ color: 'rgb(var(--color-text))', opacity: 0.8 }}
                                                >
                                                    {tier.description}
                                                </p>
                                            </div>

                                            {/* Includes */}
                                            {tier.includes && tier.includes.length > 0 && (
                                                <div className="px-6 py-5">
                                                    <div className="space-y-2.5">
                                                        {tier.includes.slice(0, 5).map((item, idx) => (
                                                            <div 
                                                                key={idx} 
                                                                className="flex items-start text-sm group/item"
                                                                style={{ color: 'rgb(var(--color-text))', opacity: 0.8 }}
                                                            >
                                                                <span 
                                                                    className="mr-2.5 mt-1 transition-colors"
                                                                    style={{ color: 'rgb(34, 197, 94)' }}
                                                                >
                                                                    <Check className="w-3.5 h-3.5" />
                                                                </span>
                                                                <span className="font-light">{item}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* CTA */}
                                            <div className="px-6 pb-6">
                                                <button 
                                                    onClick={handleStartProject}
                                                    className="w-full py-3 text-sm font-medium transition-all duration-200 hover:scale-[1.02]"
                                                    style={{
                                                        backgroundColor: tier.popular 
                                                            ? 'rgb(var(--btn-primary-bg))' 
                                                            : 'transparent',
                                                        color: tier.popular 
                                                            ? 'rgb(var(--btn-primary-text))' 
                                                            : 'rgb(var(--btn-primary-bg))',
                                                        border: tier.popular 
                                                            ? 'none' 
                                                            : '1px solid rgb(var(--btn-primary-bg))',
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        if (!tier.popular) {
                                                            e.currentTarget.style.backgroundColor = 'rgba(var(--btn-primary-bg), 0.1)';
                                                        }
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        if (!tier.popular) {
                                                            e.currentTarget.style.backgroundColor = 'transparent';
                                                        }
                                                    }}
                                                >
                                                    {tier.price === "Custom Quote" ? "Get Quote" : "Start Project"}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    );
                })}

                {/* Simple Terms Section with Color */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: 'rgb(var(--color-border))' }}>
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 
                                className="text-2xl sm:text-3xl font-light mb-4 tracking-tight"
                                style={{ color: 'rgb(var(--color-title))' }}
                            >
                                Terms & Process
                            </h2>
                            <div className="w-16 h-0.5 mx-auto" style={{ background: 'linear-gradient(to right, transparent, rgb(var(--btn-primary-bg)), transparent)' }}></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div 
                                className="p-6 rounded-lg border transition-all duration-300 hover:shadow-md"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(59, 130, 246, 0.02))',
                                    borderColor: 'rgba(59, 130, 246, 0.3)',
                                }}
                            >
                                <h3 
                                    className="text-base font-medium mb-4 flex items-center gap-2"
                                    style={{ color: 'rgb(var(--color-title))' }}
                                >
                                    <span style={{ color: 'rgb(59, 130, 246)' }}>💳</span>
                                    Payment
                                </h3>
                                <ul className="space-y-2.5 text-sm font-light" style={{ color: 'rgb(var(--color-text))', opacity: 0.8 }}>
                                    <li className="flex items-start gap-2">
                                        <span style={{ color: 'rgb(59, 130, 246)' }}>•</span>
                                        <span>50% deposit to start</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span style={{ color: 'rgb(59, 130, 246)' }}>•</span>
                                        <span>Final payment on delivery</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span style={{ color: 'rgb(59, 130, 246)' }}>•</span>
                                        <span>Secure processing</span>
                                    </li>
                                </ul>
                            </div>
                            <div 
                                className="p-6 rounded-lg border transition-all duration-300 hover:shadow-md"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.08), rgba(168, 85, 247, 0.02))',
                                    borderColor: 'rgba(168, 85, 247, 0.3)',
                                }}
                            >
                                <h3 
                                    className="text-base font-medium mb-4 flex items-center gap-2"
                                    style={{ color: 'rgb(var(--color-title))' }}
                                >
                                    <span style={{ color: 'rgb(168, 85, 247)' }}>📦</span>
                                    Delivery
                                </h3>
                                <ul className="space-y-2.5 text-sm font-light" style={{ color: 'rgb(var(--color-text))', opacity: 0.8 }}>
                                    <li className="flex items-start gap-2">
                                        <span style={{ color: 'rgb(168, 85, 247)' }}>•</span>
                                        <span>Timeline per tier</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span style={{ color: 'rgb(168, 85, 247)' }}>•</span>
                                        <span>Revisions included</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span style={{ color: 'rgb(168, 85, 247)' }}>•</span>
                                        <span>Manufacturing-ready files</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Minimal CTA with Color */}
                <section 
                    className="py-24 px-4 sm:px-6 lg:px-8 border-t" 
                    style={{ 
                        borderColor: 'rgb(var(--color-border))',
                        background: 'linear-gradient(135deg, rgba(var(--btn-primary-bg), 0.08), rgba(var(--btn-primary-bg), 0.03))',
                    }}
                >
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 
                            className="text-3xl sm:text-4xl font-light mb-6 tracking-tight"
                            style={{ color: 'rgb(var(--color-title))' }}
                        >
                            Ready to Start?
                        </h2>
                        <p 
                            className="text-base font-light mb-8"
                            style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}
                        >
                            Choose a service above or contact us for a custom quote
                        </p>
                        <a 
                            href="/contact"
                            className="inline-block px-8 py-3 text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
                            style={{
                                backgroundColor: 'rgb(var(--btn-primary-bg))',
                                color: 'rgb(var(--btn-primary-text))',
                            }}
                        >
                            Contact Us
                        </a>
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
            `}            </style>
            </div>
        </>
    );
};

export default Pricing;
