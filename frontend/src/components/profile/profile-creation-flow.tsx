'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserDTO } from '@/interfaces/userDTO';
import ProfileStep1 from './profile-step1';
import ProfileStep2 from './profile-step2';
import ProfileStep3 from './profile-step3';

interface ProfileCreationFlowProps {
    userData: UserDTO;
}

interface StepData {
    step1?: { fullName: string; companyName?: string };
    step2?: { clientType: string; primaryService: string[]; projectVolume: string };
    step3?: { cadSoftware: string; requiredOutputs: string[]; referralSource?: string };
}

const ProfileCreationFlow: React.FC<ProfileCreationFlowProps> = ({ userData }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [error, setError] = useState<string>('');
    const [stepData, setStepData] = useState<StepData>({
        step1: {
            fullName: userData.fullName || '',
            companyName: userData.companyName
        },
        step2: {
            clientType: userData.clientType,
            primaryService: userData.primaryService || [],
            projectVolume: userData.projectVolume
        },
        step3: {
            cadSoftware: userData.cadSoftware,
            requiredOutputs: userData.requiredOutputs || [],
            referralSource: userData.referralSource
        }
    });
    const router = useRouter();

    const handleStep1Complete = (data: { fullName: string; companyName?: string }) => {
        setStepData(prev => ({ ...prev, step1: data }));
        setCurrentStep(2);
        setError('');
    };

    const handleStep2Complete = (data: { clientType: string; primaryService: string[]; projectVolume: string }) => {
        setStepData(prev => ({ ...prev, step2: data }));
        setCurrentStep(3);
        setError('');
    };

    const handleStep2Back = () => {
        setCurrentStep(1);
        setError('');
    };

    const handleStep3Complete = () => {
        setError('');
        // Redirect to main dashboard or profile page
        router.push('/client/dashboard'); // or wherever the main portal is
    };

    const handleStep3Back = () => {
        setCurrentStep(2);
        setError('');
    };

    const handleError = (errorMessage: string) => {
        setError(errorMessage);
    };

    const renderStepIndicator = () => (
        <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
                {[1, 2, 3].map((step) => (
                    <React.Fragment key={step}>
                        <div className={`
                            flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors
                            ${currentStep >= step
                                ? 'border-blue-500 bg-blue-500 text-white'
                                : 'border-gray-300 text-gray-300'
                            }
                        `}>
                            {step}
                        </div>
                        {step < 3 && (
                            <div className={`
                                w-12 h-0.5 transition-colors
                                ${currentStep > step ? 'bg-blue-500' : 'bg-gray-300'}
                            `} />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );

    const renderCurrentStep = () => {
        // Make sure we have the required step data
        if (!stepData.step1) return null;

        switch (currentStep) {
            case 1:
                return (
                    <ProfileStep1
                        initialData={{
                            fullName: stepData.step1.fullName,
                            companyName: stepData.step1.companyName,
                            email: userData.email
                        }}
                        onNext={handleStep1Complete}
                        onError={handleError}
                    />
                );

            case 2:
                return (
                    <ProfileStep2
                        initialData={{
                            clientType: stepData.step2?.clientType,
                            primaryService: stepData.step2?.primaryService,
                            projectVolume: stepData.step2?.projectVolume
                        }}
                        onNext={handleStep2Complete}
                        onBack={handleStep2Back}
                        onError={handleError}
                    />
                );

            case 3:
                // Ensure we have step 1 and step 2 data for step 3
                if (!stepData.step1 || !stepData.step2) return null;

                return (
                    <ProfileStep3
                        step1Data={stepData.step1}
                        step2Data={stepData.step2}
                        initialData={{
                            cadSoftware: stepData.step3?.cadSoftware,
                            requiredOutputs: stepData.step3?.requiredOutputs,
                            referralSource: stepData.step3?.referralSource
                        }}
                        onComplete={handleStep3Complete}
                        onBack={handleStep3Back}
                        onError={handleError}
                    />
                );

            default:
                return null;
        }
    };

    const getStepTitle = () => {
        const titles = {
            1: 'Account Setup',
            2: 'Business Qualification',
            3: 'Technical Details'
        };
        return titles[currentStep as keyof typeof titles] || '';
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Step Indicator */}
                {renderStepIndicator()}

                {/* Step Title */}
                <div className="text-center mb-8">
                    <h2 className="text-xl font-semibold text-gray-700">
                        Step {currentStep} of 3: {getStepTitle()}
                    </h2>
                </div>

                {/* Error Display */}
                {error && (
                    <div className="max-w-2xl mx-auto mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-700 text-center">{error}</p>
                    </div>
                )}

                {/* Current Step Content */}
                <div className="flex justify-center">
                    {renderCurrentStep()}
                </div>

                {/* Welcome Message for Incompleting Profiles */}
                {currentStep === 1 && (
                    <div className="max-w-2xl mx-auto mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="text-blue-700 text-center text-sm">
                            Welcome to Render Agency! Let's set up your account so we can provide you with
                            the best possible service tailored to your jewelry visualization needs.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfileCreationFlow;
