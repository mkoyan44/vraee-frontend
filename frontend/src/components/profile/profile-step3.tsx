'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { CadSoftware, RequiredOutput } from '@/interfaces/userDTO';
import { updateProfileStep3, completeProfile } from '@/services/api';

interface ProfileStep3Props {
    step1Data: { fullName: string; companyName?: string };
    step2Data: { clientType: string; primaryService: string[]; projectVolume: string };
    initialData?: {
        cadSoftware?: string;
        requiredOutputs?: string[];
        referralSource?: string;
    };
    onComplete: () => void;
    onBack: () => void;
    onError: (error: string) => void;
}

const ProfileStep3: React.FC<ProfileStep3Props> = ({
    step1Data,
    step2Data,
    initialData,
    onComplete,
    onBack,
    onError
}) => {
    const [cadSoftware, setCadSoftware] = useState(initialData?.cadSoftware || '');
    const [requiredOutputs, setRequiredOutputs] = useState<string[]>(initialData?.requiredOutputs || []);
    const [referralSource, setReferralSource] = useState(initialData?.referralSource || '');
    const [isLoading, setIsLoading] = useState(false);

    const cadSoftwareOptions = [
        { value: CadSoftware.RHINO, label: 'Rhino' },
        { value: CadSoftware.MATRIX_GOLD, label: 'MatrixGold' },
        { value: CadSoftware.ZBRUSH, label: 'ZBrush' },
        { value: CadSoftware.OTHER, label: 'Other' }
    ];

    const requiredOutputOptions = [
        { value: RequiredOutput.STL, label: 'STL (for 3D Printing)' },
        { value: RequiredOutput.CDM, label: '3DM (Source File)' },
        { value: RequiredOutput.PNG_JPEG, label: 'PNG/JPEG (Renders)' },
        { value: RequiredOutput.MP4, label: 'MP4 (Animation)' }
    ];

    const handleRequiredOutputChange = (output: string, checked: boolean) => {
        if (checked) {
            setRequiredOutputs(prev => [...prev, output]);
        } else {
            setRequiredOutputs(prev => prev.filter(o => o !== output));
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!cadSoftware) {
            onError('Please select your CAD software');
            return;
        }

        if (requiredOutputs.length === 0) {
            onError('Please select at least one required output format');
            return;
        }

        setIsLoading(true);
        try {
            const step3Data = {
                cadSoftware,
                requiredOutputs,
                referralSource: referralSource.trim() || undefined
            };

            // Update step 3 first
            await updateProfileStep3(step3Data);

            // Then complete the full profile
            const completeData = {
                ...step1Data,
                ...step2Data,
                ...step3Data
            };

            await completeProfile(completeData);
            onComplete();
        } catch (error) {
            console.error('Profile completion failed:', error);
            onError('Failed to complete your profile. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl">Finalize Your Technical Profile</CardTitle>
                <CardDescription className="mt-2">
                    Let us know your technical requirements so we can ensure perfect file
                    compatibility from day one.
                </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-8">
                    {/* CAD Software */}
                    <div className="space-y-2">
                        <Label htmlFor="cadSoftware">Which CAD software do you primarily use?</Label>
                        <Select value={cadSoftware} onValueChange={setCadSoftware} disabled={isLoading}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select your CAD software" />
                            </SelectTrigger>
                            <SelectContent>
                                {cadSoftwareOptions.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Required Outputs */}
                    <div className="space-y-4">
                        <Label className="text-base font-semibold">
                            What final file types do you require?
                        </Label>
                        <div className="grid gap-3">
                            {requiredOutputOptions.map((option) => (
                                <label
                                    key={option.value}
                                    className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                                >
                                    <Checkbox
                                        checked={requiredOutputs.includes(option.value)}
                                        onCheckedChange={(checked) =>
                                            handleRequiredOutputChange(option.value, checked as boolean)
                                        }
                                        disabled={isLoading}
                                    />
                                    <span>{option.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Referral Source */}
                    <div className="space-y-2">
                        <Label htmlFor="referralSource">
                            How did you hear about us? <span className="text-sm text-gray-500">(Optional)</span>
                        </Label>
                        <Input
                            id="referralSource"
                            type="text"
                            value={referralSource}
                            onChange={(e) => setReferralSource(e.target.value)}
                            placeholder="e.g., Google search, recommendation, social media"
                            disabled={isLoading}
                        />
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
                        disabled={isLoading || !cadSoftware || requiredOutputs.length === 0}
                        className="min-w-56"
                    >
                        {isLoading ? 'Completing...' : 'Complete Registration & Access Portal'}
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default ProfileStep3;
