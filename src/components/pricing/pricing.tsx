"use client";

import React, { useState } from 'react';
import { pricingTiers, PricingTier } from '@/config/pricing.config';
import ProjectCreationModal from '@/components/modal/project-creation-modal';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);

    // Group tiers by category
    const groupedTiers = pricingTiers.reduce((acc, tier) => {
        if (!acc[tier.category]) {
            acc[tier.category] = [];
        }
        acc[tier.category].push(tier);
        return acc;
    }, {} as Record<string, PricingTier[]>);

    const handleStartProject = (tier: PricingTier) => {
        // Only open modal if tier has serviceType (CAD or Rendering)
        if (tier.serviceType) {
            setSelectedTier(tier);
            setIsModalOpen(true);
        } else {
            // For Professional Services, redirect to contact
            window.location.href = '/contact';
        }
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedTier(null);
    };

    const handleProjectCreated = () => {
        handleModalClose();
    };

    return (
        <>
            <div className="background min-h-screen">
                {/* Hero Section */}
                <section className="relative overflow-hidden background py-16 lg:py-24">
                    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="mx-auto max-w-4xl">
                            <div className="text-center relative">
                                <h1 
                                    className="text-4xl font-bold tracking-tight sm:text-5xl leading-tight"
                                    style={{ color: 'rgb(var(--color-title))' }}
                                >
                                    Professional
                                    <br />
                                    <span className="relative">
                                        <span className="relative z-10" style={{ color: 'rgb(var(--color-title))' }}>
                                            3D Jewelry Services
                                        </span>
                                        <div 
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent opacity-30 -z-10"
                                            style={{ 
                                                background: 'linear-gradient(to right, transparent, rgba(var(--color-border), 0.3), transparent)'
                                            }}
                                        ></div>
                                    </span>
                                </h1>
                                <div 
                                    className="mt-4 w-24 h-0.5 mx-auto"
                                    style={{ 
                                        background: 'linear-gradient(to right, transparent, rgb(var(--color-border)), transparent)'
                                    }}
                                ></div>
                            </div>
                            <p 
                                className="mt-6 text-lg max-w-3xl mx-auto"
                                style={{ color: 'rgb(var(--color-text))' }}
                            >
                                Industry-standard pricing for CAD modeling, photorealistic rendering, and animation services.
                                Transparent rates with professional contract terms and 50% deposit structure.
                            </p>
                            <div className="mt-8 flex justify-center gap-4 flex-wrap">
                                <div 
                                    className="rounded-lg px-4 py-2 text-sm font-medium shadow-sm border"
                                    style={{ 
                                        backgroundColor: 'rgba(var(--color-bg), 0.8)',
                                        borderColor: 'rgb(var(--color-border))',
                                        color: 'rgb(var(--color-text))'
                                    }}
                                >
                                    📊 US Market Analysis Based
                                </div>
                                <div 
                                    className="rounded-lg px-4 py-2 text-sm font-medium shadow-sm border"
                                    style={{ 
                                        backgroundColor: 'rgba(var(--color-bg), 0.8)',
                                        borderColor: 'rgb(var(--color-border))',
                                        color: 'rgb(var(--color-text))'
                                    }}
                                >
                                    📋 Professional Contracts
                                </div>
                                <div 
                                    className="rounded-lg px-4 py-2 text-sm font-medium shadow-sm border"
                                    style={{ 
                                        backgroundColor: 'rgba(var(--color-bg), 0.8)',
                                        borderColor: 'rgb(var(--color-border))',
                                        color: 'rgb(var(--color-text))'
                                    }}
                                >
                                    ✅ Manufacturing Ready
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Service Categories */}
                {Object.entries(groupedTiers).map(([category, tiers], categoryIndex) => (
                    <section 
                        key={category} 
                        className={`py-16 lg:py-24 background ${categoryIndex % 2 === 1 ? 'bg-opacity-50' : ''}`}
                    >
                        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-12 lg:mb-16">
                                <h2 
                                    className="text-3xl font-bold mb-3"
                                    style={{ color: 'rgb(var(--color-title))' }}
                                >
                                    {category}
                                </h2>
                                <div 
                                    className="w-20 h-1 mx-auto rounded-full"
                                    style={{ backgroundColor: 'rgb(var(--color-border))' }}
                                ></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {tiers.map((tier) => (
                                    <div 
                                        key={tier.id} 
                                        className={`relative group ${tier.popular ? 'md:scale-105 lg:scale-110' : ''}`}
                                    >
                                        {tier.popular && (
                                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                                                <span className="bg-gradient-to-r from-amber-500 to-rose-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                                                    Most Popular
                                                </span>
                                            </div>
                                        )}

                                        <div 
                                            className={`relative h-full rounded-lg shadow-md overflow-hidden border transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 ${
                                                tier.popular 
                                                    ? 'ring-2 ring-amber-200 dark:ring-amber-800 shadow-amber-50 dark:shadow-amber-900/20' 
                                                    : ''
                                            }`}
                                            style={{
                                                backgroundColor: 'rgba(var(--color-bg), 0.95)',
                                                borderColor: tier.popular 
                                                    ? 'rgb(var(--btn-primary-bg))' 
                                                    : 'rgb(var(--color-border))'
                                            }}
                                        >
                                            {/* Header */}
                                            <div 
                                                className="px-6 py-4 border-b"
                                                style={{
                                                    backgroundColor: 'rgba(var(--color-bg), 0.5)',
                                                    borderColor: 'rgb(var(--color-border))'
                                                }}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <h3 
                                                        className="text-xl font-bold"
                                                        style={{ color: 'rgb(var(--color-title))' }}
                                                    >
                                                        {tier.name}
                                                    </h3>
                                                    {tier.popular && <span className="text-2xl">⭐</span>}
                                                </div>
                                                {tier.isManufacturingReady && (
                                                    <div className="mt-2">
                                                        <span 
                                                            className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded border"
                                                            style={{
                                                                backgroundColor: 'rgba(var(--btn-primary-bg), 0.1)',
                                                                color: 'rgb(var(--btn-primary-bg))',
                                                                borderColor: 'rgba(var(--btn-primary-bg), 0.3)'
                                                            }}
                                                        >
                                                            <Check className="w-3 h-3" />
                                                            Manufacturing-Ready
                                                        </span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Price Section */}
                                            <div 
                                                className="px-6 py-6 border-b text-center"
                                                style={{
                                                    background: 'linear-gradient(to right, rgba(var(--color-bg), 0.5), rgba(var(--color-bg), 0.95))',
                                                    borderColor: 'rgb(var(--color-border))'
                                                }}
                                            >
                                                <div 
                                                    className="text-4xl font-bold mb-2"
                                                    style={{ color: 'rgb(var(--color-title))' }}
                                                >
                                                    {tier.price}
                                                </div>
                                                {tier.price !== "Custom Quote" && tier.category !== "Professional Services" && (
                                                    <div 
                                                        className="text-sm"
                                                        style={{ color: 'rgb(var(--color-text))' }}
                                                    >
                                                        {tier.category === "3D Rendering & Animation" ? "Package" : "Starting Price"}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Service Details */}
                                            <div className="px-6 py-6 space-y-4">
                                                {/* Quick Facts */}
                                                <div className="grid grid-cols-2 gap-4 mb-4">
                                                    <div 
                                                        className="rounded-lg px-3 py-2 border"
                                                        style={{
                                                            backgroundColor: 'rgba(var(--color-bg), 0.6)',
                                                            borderColor: 'rgb(var(--color-border))'
                                                        }}
                                                    >
                                                        <div 
                                                            className="text-xs font-semibold uppercase tracking-wide mb-1"
                                                            style={{ color: 'rgb(var(--color-text))' }}
                                                        >
                                                            Time
                                                        </div>
                                                        <div 
                                                            className="text-sm font-medium"
                                                            style={{ color: 'rgb(var(--color-title))' }}
                                                        >
                                                            {tier.turnaroundTime}
                                                        </div>
                                                    </div>
                                                    <div 
                                                        className="rounded-lg px-3 py-2 border"
                                                        style={{
                                                            backgroundColor: 'rgba(var(--color-bg), 0.6)',
                                                            borderColor: 'rgb(var(--color-border))'
                                                        }}
                                                    >
                                                        <div 
                                                            className="text-xs font-semibold uppercase tracking-wide mb-1"
                                                            style={{ color: 'rgb(var(--color-text))' }}
                                                        >
                                                            Revisions
                                                        </div>
                                                        <div 
                                                            className="text-sm font-medium"
                                                            style={{ color: 'rgb(var(--color-title))' }}
                                                        >
                                                            {tier.revisions || 'N/A'}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* What Includes */}
                                                {tier.includes && tier.includes.length > 0 && (
                                                    <div>
                                                        <h4 
                                                            className="text-sm font-bold mb-3 uppercase tracking-wide"
                                                            style={{ color: 'rgb(var(--color-title))' }}
                                                        >
                                                            What's Included
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {tier.includes.map((item, idx) => (
                                                                <li 
                                                                    key={idx} 
                                                                    className="flex items-start text-sm"
                                                                    style={{ color: 'rgb(var(--color-text))' }}
                                                                >
                                                                    <span 
                                                                        className="mr-2 mt-1"
                                                                        style={{ color: 'rgb(var(--btn-primary-bg))' }}
                                                                    >
                                                                        •
                                                                    </span>
                                                                    <span>{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {/* Service Description */}
                                                <div 
                                                    className="text-sm leading-relaxed pt-2 border-t"
                                                    style={{ 
                                                        color: 'rgb(var(--color-text))',
                                                        borderColor: 'rgb(var(--color-border))'
                                                    }}
                                                >
                                                    {tier.description}
                                                </div>

                                                {/* Features List */}
                                                {tier.features && tier.features.length > 0 && (
                                                    <div className="pt-2">
                                                        <ul className="space-y-2">
                                                            {tier.features.slice(0, 4).map((feature, idx) => (
                                                                <li 
                                                                    key={idx} 
                                                                    className="flex items-start text-sm"
                                                                    style={{ color: 'rgb(var(--color-text))' }}
                                                                >
                                                                    <Check 
                                                                        className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" 
                                                                        style={{ color: 'rgb(var(--btn-primary-bg))' }}
                                                                    />
                                                                    <span>{feature}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {/* Important Notes */}
                                                {tier.notes && tier.notes.length > 0 && (
                                                    <div 
                                                        className="rounded-lg px-4 py-3 border"
                                                        style={{
                                                            backgroundColor: 'rgba(var(--color-bg), 0.5)',
                                                            borderColor: 'rgb(var(--color-border))'
                                                        }}
                                                    >
                                                        <h4 
                                                            className="text-sm font-semibold mb-2"
                                                            style={{ color: 'rgb(var(--color-title))' }}
                                                        >
                                                            Important Notes
                                                        </h4>
                                                        <ul className="space-y-1">
                                                            {tier.notes.map((note, idx) => (
                                                                <li 
                                                                    key={idx} 
                                                                    className="text-sm"
                                                                    style={{ color: 'rgb(var(--color-text))' }}
                                                                >
                                                                    • {note}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>

                                            {/* CTA Button */}
                                            <div className="px-6 pb-6">
                                                <button 
                                                    onClick={() => handleStartProject(tier)}
                                                    className="w-full py-3 px-6 rounded-lg font-semibold btn-primary shadow-sm transition-all duration-200 hover:shadow-md"
                                                >
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
                <section 
                    className="py-24"
                    style={{
                        background: 'linear-gradient(to right, rgb(var(--color-bg)), rgb(var(--color-bg)))',
                        color: 'rgb(var(--color-text))'
                    }}
                >
                    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 
                                className="text-4xl font-bold mb-4"
                                style={{ color: 'rgb(var(--color-title))' }}
                            >
                                Professional Service Standards
                            </h2>
                            <p 
                                className="text-xl max-w-3xl mx-auto"
                                style={{ color: 'rgb(var(--color-text))' }}
                            >
                                Industry-leading contract terms and business practices designed for B2B relationships
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: '💳', title: 'Payment Terms', items: [
                                    '50% non-refundable deposit',
                                    'Final payment upon delivery',
                                    'Secure payment processing',
                                    'Invoice with detailed breakdown'
                                ]},
                                { icon: '📄', title: 'Contract Terms', items: [
                                    'Written agreements for all projects',
                                    'Clear scope of work defined',
                                    'Specific deadlines and milestones',
                                    'Revision policy limitations'
                                ]},
                                { icon: '💎', title: 'Portfolio Rights', items: [
                                    'Website portfolio usage rights',
                                    'Social media showcase permission',
                                    'NDA available for sensitive projects',
                                    'Data security protocols'
                                ]},
                                { icon: '📊', title: 'Project Management', items: [
                                    'Weekly progress updates',
                                    'Multiple quality checkpoints',
                                    'Manufacturing guidance included',
                                    '2-hour initial response SLA'
                                ]}
                            ].map((item, idx) => (
                                <div 
                                    key={idx}
                                    className="rounded-2xl p-8 border backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
                                    style={{
                                        backgroundColor: 'rgba(var(--color-bg), 0.8)',
                                        borderColor: 'rgb(var(--color-border))'
                                    }}
                                >
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h3 
                                        className="text-xl font-bold mb-4"
                                        style={{ color: 'rgb(var(--color-title))' }}
                                    >
                                        {item.title}
                                    </h3>
                                    <ul className="space-y-2">
                                        {item.items.map((listItem, i) => (
                                            <li 
                                                key={i}
                                                style={{ color: 'rgb(var(--color-text))' }}
                                            >
                                                • {listItem}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trust Signals */}
                <section className="py-16 background">
                    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: '📊', title: 'US Market Analysis', desc: 'Professional pricing based on actual industry standards' },
                                { icon: '⏰', title: 'Defined Timeframes', desc: 'Clear delivery expectations with realistic timelines' },
                                { icon: '📋', title: 'Professional Contracts', desc: 'Written agreements protecting both parties' },
                                { icon: '🛠️', title: 'Manufacturing Focus', desc: 'All deliverables optimized for production processes' }
                            ].map((item, idx) => (
                                <div key={idx} className="text-center group">
                                    <div 
                                        className="text-5xl mb-4 p-4 rounded-xl inline-block"
                                        style={{
                                            backgroundColor: 'rgba(var(--color-bg), 0.8)',
                                            border: '1px solid',
                                            borderColor: 'rgb(var(--color-border))'
                                        }}
                                    >
                                        {item.icon}
                                    </div>
                                    <h4 
                                        className="font-bold text-lg mb-2"
                                        style={{ color: 'rgb(var(--color-title))' }}
                                    >
                                        {item.title}
                                    </h4>
                                    <p style={{ color: 'rgb(var(--color-text))' }}>
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section 
                    className="py-24"
                    style={{
                        background: 'linear-gradient(to bottom right, rgba(var(--color-bg), 0.95), rgba(var(--color-bg), 0.98))',
                        borderTop: '1px solid',
                        borderBottom: '1px solid',
                        borderColor: 'rgb(var(--color-border))'
                    }}
                >
                    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 
                                className="text-4xl font-bold mb-4"
                                style={{ color: 'rgb(var(--color-title))' }}
                            >
                                Your Project Journey
                            </h2>
                            <p 
                                className="text-xl"
                                style={{ color: 'rgb(var(--color-text))' }}
                            >
                                From contract to delivery in 4 professional steps
                            </p>
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
                                    <div 
                                        className="rounded-2xl p-8 shadow-lg border transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2"
                                        style={{
                                            backgroundColor: 'rgba(var(--color-bg), 0.95)',
                                            borderColor: 'rgb(var(--color-border))'
                                        }}
                                    >
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-rose-500 text-white font-bold text-xl rounded-full mb-6">
                                            {process.step}
                                        </div>
                                        <h3 
                                            className="text-xl font-bold mb-4"
                                            style={{ color: 'rgb(var(--color-title))' }}
                                        >
                                            {process.title}
                                        </h3>
                                        <p 
                                            className="leading-relaxed"
                                            style={{ color: 'rgb(var(--color-text))' }}
                                        >
                                            {process.description}
                                        </p>
                                    </div>
                                    <div 
                                        className="w-full h-0.5 mt-8 hidden lg:block"
                                        style={{ 
                                            background: 'linear-gradient(to right, transparent, rgb(var(--color-border)), transparent)'
                                        }}
                                    ></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section 
                    className="py-24"
                    style={{
                        background: 'linear-gradient(to right, rgb(var(--btn-primary-bg)), rgb(var(--btn-primary-bg)))',
                        color: 'rgb(var(--btn-primary-text))'
                    }}
                >
                    <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
                        <p className="text-xl mb-8 leading-relaxed opacity-90">
                            Contact us today for a detailed proposal based on your specific needs.
                            Get a custom quote in just 2 hours with our experienced project managers.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a 
                                href="/contact"
                                className="px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                                style={{
                                    backgroundColor: 'rgb(var(--btn-primary-text))',
                                    color: 'rgb(var(--btn-primary-bg))'
                                }}
                            >
                                📋 Request Detailed Quote
                            </a>
                            <a 
                                href="/contact"
                                className="border-2 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:opacity-80"
                                style={{
                                    borderColor: 'rgb(var(--btn-primary-text))',
                                    color: 'rgb(var(--btn-primary-text))'
                                }}
                            >
                                📞 Schedule Consultation
                            </a>
                        </div>

                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                            {[
                                { value: '500+', label: 'Projects Completed' },
                                { value: '5 Days', label: 'Average Delivery' },
                                { value: '2 Hours', label: 'Quote Response Time' }
                            ].map((stat, idx) => (
                                <div 
                                    key={idx}
                                    className="rounded-lg p-4 border"
                                    style={{
                                        backgroundColor: 'rgba(var(--btn-primary-text), 0.1)',
                                        borderColor: 'rgba(var(--btn-primary-text), 0.2)'
                                    }}
                                >
                                    <div className="text-2xl font-bold">{stat.value}</div>
                                    <div className="text-sm opacity-80">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* Project Creation Modal */}
            {selectedTier && (
                <ProjectCreationModal
                    isOpen={isModalOpen}
                    onClose={handleModalClose}
                    onProjectCreated={handleProjectCreated}
                    initialServiceType={selectedTier.serviceType}
                    initialServiceDetail={selectedTier.serviceDetail}
                />
            )}
        </>
    );
};

export default Pricing;
