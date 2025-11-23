'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ClientType, PrimaryService, ProjectVolume } from '@/interfaces/userDTO';
import { updateProfileStep2 } from '@/services/api';

interface ProfileStep2Props {
    initialData?: {
        clientType?: string;
        primaryService?: string[];
        projectVolume?: string;
    };
    onNext: (data: { clientType: string; primaryService: string[]; projectVolume: string }) => void;
    onBack: () => void;
    onError: (error: string) => void;
}

const ProfileStep2: React.FC<ProfileStep2Props> = ({ initialData, onNext, onBack, onError }) => {
    const [clientType, setClientType] = useState(initialData?.clientType || '');
    const [primaryService, setPrimaryService] = useState<string[]>(initialData?.primaryService || []);
    const [projectVolume, setProjectVolume] = useState(initialData?.projectVolume || '');
    const [isLoading, setIsLoading] = useState(false);

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
            setPrimaryService(prev => [...prev, service]);
        } else {
            setPrimaryService(prev => prev.filter(s => s !== service));
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!clientType) {
            onError('Please select your business type');
            return;
        }

        if (primaryService.length === 0) {
            onError('Please select at least one primary service');
            return;
        }

        if (!projectVolume) {
            onError('Please select your expected project volume');
            return;
        }

        setIsLoading(true);
        try {
            const profileData = {
                clientType,
                primaryService,
                projectVolume
            };

            await updateProfileStep2(profileData);
            onNext(profileData);
        } catch (error) {
            console.error('Profile Step 2 update failed:', error);
            onError('Failed to save business information. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl">Tell Us About Your Business</CardTitle>
                <CardDescription className="mt-2">
                    This information helps us connect you with the right specialist and offer
                    the most relevant pricing and service packages.
                </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-8">
                    {/* Client Type */}
                    <div className="space-y-4">
                        <Label className="text-base font-semibold">
                            Which best describes your business?
                        </Label>
                        <div className="grid gap-3">
                            {clientTypeOptions.map((option) => (
                                <label
                                    key={option.value}
                                    className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                                        clientType === option.value
                                            ? 'border-blue-500 bg-blue-50'
                                            : 'border-gray-200 hover:bg-gray-50'
                                    }`}
                                >
                                    <input
                                        type="radio"
                                        name="clientType"
                                        value={option.value}
                                        checked={clientType === option.value}
                                        onChange={(e) => setClientType(e.target.value)}
                                        className="text-blue-600"
                                        disabled={isLoading}
                                    />
                                    <span>{option.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Primary Service */}
                    <div className="space-y-4">
                        <Label className="text-base font-semibold">
                            What is your primary need?
                        </Label>
                        <div className="grid gap-3">
                            {primaryServiceOptions.map((option) => (
                                <label
                                    key={option.value}
                                    className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                                >
                                    <Checkbox
                                        checked={primaryService.includes(option.value)}
                                        onCheckedChange={(checked) =>
                                            handlePrimaryServiceChange(option.value, checked as boolean)
                                        }
                                        disabled={isLoading}
                                    />
                                    <span>{option.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Project Volume */}
                    <div className="space-y-4">
                        <Label className="text-base font-semibold">
                            What is your expected project volume?
                        </Label>
                        <div className="grid gap-3">
                            {projectVolumeOptions.map((option) => (
                                <label
                                    key={option.value}
                                    className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                                        projectVolume === option.value
                                            ? 'border-blue-500 bg-blue-50'
                                            : 'border-gray-200 hover:bg-gray-50'
                                    }`}
                                >
                                    <input
                                        type="radio"
                                        name="projectVolume"
                                        value={option.value}
                                        checked={projectVolume === option.value}
                                        onChange={(e) => setProjectVolume(e.target.value)}
                                        className="text-blue-600"
                                        disabled={isLoading}
                                    />
                                    <span>{option.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </CardContent>

                <div className="flex justify-between px-6 py-4">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={onBack}
                        disabled={isLoading}
                        className="min-w-24"
                    >
                        Back
                    </Button>
                    <Button
                        type="submit"
                        disabled={isLoading || !clientType || primaryService.length === 0 || !projectVolume}
                        className="min-w-44"
                    >
                        {isLoading ? 'Saving...' : 'Next: Technical Details'}
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default ProfileStep2;
