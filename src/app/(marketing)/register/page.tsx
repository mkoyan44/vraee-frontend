"use client";

import React, { useState } from 'react';
import type { Metadata } from "next";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { register } from '@/services/api';
import { ClientType, PrimaryService, ProjectVolume } from '@/interfaces/userDTO';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        email: '',
        website: '',
        password: '',
        clientType: '',
        primaryService: [] as string[],
        projectVolume: '',
    });
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const router = useRouter();

    const clientTypeOptions = [
        {
            value: ClientType.JEWELRY_ECOMMERCE,
            label: 'Jewelry E-commerce Brand (Mid-to-Large Scale)'
        },
        {
            value: ClientType.MANUFACTURER_WHOLESALER,
            label: 'Manufacturer / Wholesaler'
        },
        {
            value: ClientType.DESIGNER_ETSY,
            label: 'Independent Designer / Etsy/Shopify Seller'
        },
        {
            value: ClientType.MARKETING_AGENCY,
            label: 'Marketing Agency / Photographer'
        }
    ];

    const primaryServiceOptions = [
        { value: PrimaryService.CAD_MODELING, label: '3D CAD Modeling' },
        { value: PrimaryService.PHOTOREALISTIC_RENDERING, label: 'Photorealistic Rendering' },
        { value: PrimaryService.ANIMATION_VIDEO, label: 'Animation/Video' },
        { value: PrimaryService.CONSULTING, label: 'Consulting' }
    ];

    const projectVolumeOptions = [
        { value: ProjectVolume.ONE_OFF, label: 'One-off project' },
        { value: ProjectVolume.ONE_TO_FIVE_MONTHLY, label: '1-5 projects/month' },
        { value: ProjectVolume.FIVE_PLUS_VOLUME, label: '5+ projects/month (Volume)' },
        { value: ProjectVolume.ONGOING_RETAINER, label: 'Ongoing Retainer' }
    ];

    const handlePrimaryServiceChange = (service: string, checked: boolean) => {
        if (checked) {
            setFormData(prev => ({ ...prev, primaryService: [...prev.primaryService, service] }));
        } else {
            setFormData(prev => ({ ...prev, primaryService: prev.primaryService.filter(s => s !== service) }));
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setError('');

        // Validation
        if (!formData.email.trim()) {
            setError('Email is required');
            return;
        }
        
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email.trim())) {
            setError('Please enter a valid email address');
            return;
        }

        if (!formData.password || formData.password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        if (!formData.fullName.trim()) {
            setError('Full name is required');
            return;
        }
        if (!formData.companyName.trim()) {
            setError('Company name is required');
            return;
        }
        if (!formData.clientType) {
            setError('Please select your business type');
            return;
        }
        if (formData.primaryService.length === 0) {
            setError('Please select at least one primary service');
            return;
        }
        if (!formData.projectVolume) {
            setError('Please select your expected project volume');
            return;
        }

        setIsSubmitting(true);

        try {
            // Prepare registration data, removing empty strings
            const registerData: any = {
                email: formData.email.trim(),
                password: formData.password,
                fullName: formData.fullName.trim(),
                companyName: formData.companyName.trim(),
            };

            // Only include optional fields if they have values
            if (formData.website && formData.website.trim()) {
                registerData.website = formData.website.trim();
            }

            if (formData.clientType) {
                registerData.clientType = formData.clientType;
            }

            if (formData.primaryService && formData.primaryService.length > 0) {
                registerData.primaryService = formData.primaryService;
            }

            if (formData.projectVolume) {
                registerData.projectVolume = formData.projectVolume;
            }

            await register(registerData);
            setIsSuccess(true);
        } catch (err: any) {
            console.error('Registration error:', err);
            const errorMessage = err.response?.data?.message || err.response?.data?.error || err.message || 'Registration failed. Please try again.';
            setError(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="flex items-center justify-center h-full mh-full-screen">
                <Card className="w-[650px]">
                    <CardHeader>
                        <CardTitle className="text-lg">Request Submitted</CardTitle>
                        <CardDescription>Thank you for your interest in Vraee Jewelry Studio</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(var(--btn-primary-bg), 0.1)' }}>
                                <p style={{ color: 'rgb(var(--color-text))' }}>
                                    We have received your request. Our team will review your application within 24 hours.
                                </p>
                            </div>
                            <p className="text-sm" style={{ color: 'rgb(var(--color-text))', opacity: 0.8 }}>
                                You will receive an email notification once your account has been approved.
                            </p>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Link href="/login" className="btn-primary inline-block">
                            Back to Sign In
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen py-8 px-4">
            <Card className="w-full max-w-3xl">
                <CardHeader>
                    <CardTitle className="text-2xl">Request Account Access</CardTitle>
                    <CardDescription>
                        Complete the form below to request access to Vraee Jewelry Studio. Our team will review your application.
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-6 max-h-[70vh] overflow-y-auto">
                        {/* Basic Information Section */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold" style={{ color: 'rgb(var(--color-title))' }}>
                                Basic Information
                            </h3>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="fullName">Full Name *</Label>
                                    <Input
                                        type="text"
                                        id="fullName"
                                        value={formData.fullName}
                                        placeholder="Your full name"
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="companyName">Company Name *</Label>
                                    <Input
                                        type="text"
                                        id="companyName"
                                        value={formData.companyName}
                                        placeholder="Your company name"
                                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="email">Email *</Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        placeholder="your.email@example.com"
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="website">Website / Portfolio Link</Label>
                                    <Input
                                        type="url"
                                        id="website"
                                        value={formData.website}
                                        placeholder="https://yourwebsite.com"
                                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="password">Password *</Label>
                                    <Input
                                        type="password"
                                        id="password"
                                        value={formData.password}
                                        placeholder="Minimum 6 characters"
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        required
                                        minLength={6}
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Business Details Section */}
                        <div className="space-y-4 pt-4 border-t" style={{ borderColor: 'rgb(var(--color-border))' }}>
                            <h3 className="text-lg font-semibold" style={{ color: 'rgb(var(--color-title))' }}>
                                Business Details
                            </h3>
                            
                            {/* Client Type */}
                            <div className="space-y-3">
                                <Label className="text-base font-medium">
                                    Which best describes your business? *
                                </Label>
                                <div className="grid gap-2">
                                    {clientTypeOptions.map((option) => (
                                        <label
                                            key={option.value}
                                            className="flex items-center space-x-2 p-2 border rounded-lg cursor-pointer transition-all duration-200"
                                            style={{
                                                borderColor: formData.clientType === option.value
                                                    ? 'rgb(var(--btn-primary-bg))'
                                                    : 'rgb(var(--color-border))',
                                                backgroundColor: formData.clientType === option.value
                                                    ? 'rgba(var(--btn-primary-bg), 0.1)'
                                                    : 'transparent',
                                            }}
                                            onMouseEnter={(e) => {
                                                if (formData.clientType !== option.value) {
                                                    e.currentTarget.style.backgroundColor = 'rgba(var(--color-border), 0.1)';
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (formData.clientType !== option.value) {
                                                    e.currentTarget.style.backgroundColor = 'transparent';
                                                }
                                            }}
                                        >
                                            <input
                                                type="radio"
                                                name="clientType"
                                                value={option.value}
                                                checked={formData.clientType === option.value}
                                                onChange={(e) => setFormData({ ...formData, clientType: e.target.value })}
                                                className="text-blue-600"
                                                disabled={isSubmitting}
                                            />
                                            <span style={{ color: 'rgb(var(--color-text))' }}>{option.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Primary Service */}
                            <div className="space-y-3">
                                <Label className="text-base font-medium">
                                    What is your primary need? * (Select all that apply)
                                </Label>
                                <div className="grid gap-2">
                                    {primaryServiceOptions.map((option) => (
                                        <label
                                            key={option.value}
                                            className="flex items-center space-x-2 p-2 border rounded-lg cursor-pointer transition-all duration-200"
                                            style={{
                                                borderColor: formData.primaryService.includes(option.value)
                                                    ? 'rgb(var(--btn-primary-bg))'
                                                    : 'rgb(var(--color-border))',
                                                backgroundColor: formData.primaryService.includes(option.value)
                                                    ? 'rgba(var(--btn-primary-bg), 0.1)'
                                                    : 'transparent',
                                            }}
                                            onMouseEnter={(e) => {
                                                if (!formData.primaryService.includes(option.value)) {
                                                    e.currentTarget.style.backgroundColor = 'rgba(var(--color-border), 0.1)';
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (!formData.primaryService.includes(option.value)) {
                                                    e.currentTarget.style.backgroundColor = 'transparent';
                                                }
                                            }}
                                        >
                                            <Checkbox
                                                checked={formData.primaryService.includes(option.value)}
                                                onCheckedChange={(checked) =>
                                                    handlePrimaryServiceChange(option.value, checked as boolean)
                                                }
                                                disabled={isSubmitting}
                                            />
                                            <span style={{ color: 'rgb(var(--color-text))' }}>{option.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Project Volume */}
                            <div className="space-y-3">
                                <Label className="text-base font-medium">
                                    What is your expected project volume? *
                                </Label>
                                <div className="grid gap-2">
                                    {projectVolumeOptions.map((option) => (
                                        <label
                                            key={option.value}
                                            className="flex items-center space-x-2 p-2 border rounded-lg cursor-pointer transition-all duration-200"
                                            style={{
                                                borderColor: formData.projectVolume === option.value
                                                    ? 'rgb(var(--btn-primary-bg))'
                                                    : 'rgb(var(--color-border))',
                                                backgroundColor: formData.projectVolume === option.value
                                                    ? 'rgba(var(--btn-primary-bg), 0.1)'
                                                    : 'transparent',
                                            }}
                                            onMouseEnter={(e) => {
                                                if (formData.projectVolume !== option.value) {
                                                    e.currentTarget.style.backgroundColor = 'rgba(var(--color-border), 0.1)';
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (formData.projectVolume !== option.value) {
                                                    e.currentTarget.style.backgroundColor = 'transparent';
                                                }
                                            }}
                                        >
                                            <input
                                                type="radio"
                                                name="projectVolume"
                                                value={option.value}
                                                checked={formData.projectVolume === option.value}
                                                onChange={(e) => setFormData({ ...formData, projectVolume: e.target.value })}
                                                className="text-blue-600"
                                                disabled={isSubmitting}
                                            />
                                            <span style={{ color: 'rgb(var(--color-text))' }}>{option.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {error && (
                            <div className="p-4 rounded-lg mt-4" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                                <p className="text-sm" style={{ color: 'rgb(239, 68, 68)' }}>
                                    {error}
                                </p>
                            </div>
                        )}
                    </CardContent>
                    <CardFooter className="mt-4 flex flex-col sm:flex-row gap-3 sm:justify-between items-stretch sm:items-center">
                        <Link 
                            href="/login" 
                            className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-center"
                        >
                            Already have an account? Sign in
                        </Link>
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="btn-primary px-6 py-3 rounded-lg font-semibold"
                        >
                            {isSubmitting ? 'Submitting...' : 'Request Access'}
                        </button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
};

export default RegisterPage;

