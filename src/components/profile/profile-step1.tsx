'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { updateProfileStep1 } from '@/services/api';

interface ProfileStep1Props {
    initialData?: {
        fullName?: string;
        companyName?: string;
        email?: string;
    };
    onNext: (data: { fullName: string; companyName?: string }) => void;
    onError: (error: string) => void;
}

const ProfileStep1: React.FC<ProfileStep1Props> = ({ initialData, onNext, onError }) => {
    const [fullName, setFullName] = useState(initialData?.fullName || '');
    const [companyName, setCompanyName] = useState(initialData?.companyName || '');
    const [email] = useState(initialData?.email || '');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!fullName.trim()) {
            onError('Full name is required');
            return;
        }

        setIsLoading(true);
        try {
            const profileData = {
                fullName: fullName.trim(),
                companyName: companyName.trim() || undefined,
            };

            await updateProfileStep1(profileData);
            onNext(profileData);
        } catch (error) {
            console.error('Profile Step 1 update failed:', error);
            onError('Failed to save profile information. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl">Create Your Partner Account</CardTitle>
                <CardDescription className="mt-2">
                    Join the leading B2B platform for high-quality jewelry visuals.
                    Your journey to faster, more scalable e-commerce content starts here.
                </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                            id="fullName"
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Enter your full name"
                            required
                            disabled={isLoading}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="companyName">
                            Company Name <span className="text-sm text-gray-500">(Optional)</span>
                        </Label>
                        <Input
                            id="companyName"
                            type="text"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            placeholder="Enter your company name"
                            disabled={isLoading}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Business Email Address</Label>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            disabled
                            className="bg-gray-50"
                        />
                    </div>
                </CardContent>

                <div className="flex justify-end px-6 py-4">
                    <Button
                        type="submit"
                        disabled={isLoading || !fullName.trim()}
                        className="min-w-32"
                    >
                        {isLoading ? 'Saving...' : 'Continue to Profile'}
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default ProfileStep1;
