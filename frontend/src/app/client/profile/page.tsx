"use client";

import React, { useEffect, useState } from "react";
import UserDTO from "@/interfaces/userDTO";
import { getUserData } from "@/services/api";
import { useUserStore } from "@/store/useUserStore";
import ProfileCreationFlow from "@/components/profile/profile-creation-flow";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Profile creation view component
const ProfileView: React.FC<{ user: UserDTO }> = ({ user }) => {
    const formatServices = (services: string[] | undefined) => {
        if (!services || services.length === 0) return 'Not specified';

        const serviceLabels: Record<string, string> = {
            CAD_MODELING: '3D CAD Modeling',
            PHOTOREALISTIC_RENDERING: 'Photorealistic Rendering',
            ANIMATION_VIDEO: 'Animation/Video',
            CONSULTING: 'Consulting'
        };

        return services.map(service => serviceLabels[service] || service).join(', ');
    };

    const formatClientType = (type?: string) => {
        const typeLabels: Record<string, string> = {
            JEWELRY_ECOMMERCE: 'Jewelry E-commerce Brand',
            MANUFACTURER_WHOLESALER: 'Manufacturer/Wholesaler',
            DESIGNER_ETSY: 'Independent Designer/Etsy Seller',
            MARKETING_AGENCY: 'Marketing Agency'
        };
        return type ? typeLabels[type] || type : 'Not specified';
    };

    const formatProjectVolume = (volume?: string) => {
        const volumeLabels: Record<string, string> = {
            ONE_OFF: 'One-off project',
            ONE_TO_FIVE_MONTHLY: '1-5 projects/month',
            FIVE_PLUS_VOLUME: '5+ projects/month (Volume)',
            ONGOING_RETAINER: 'Ongoing Retainer'
        };
        return volume ? volumeLabels[volume] || volume : 'Not specified';
    };

    const formatCadSoftware = (software?: string) => {
        const softwareLabels: Record<string, string> = {
            RHINO: 'Rhino',
            MATRIX_GOLD: 'MatrixGold',
            ZBRUSH: 'ZBrush',
            OTHER: 'Other'
        };
        return software ? softwareLabels[software] || software : 'Not specified';
    };

    const formatOutputs = (outputs: string[] | undefined) => {
        if (!outputs || outputs.length === 0) return 'Not specified';

        const outputLabels: Record<string, string> = {
            STL: 'STL (3D Printing)',
            CDM: '3DM (Source File)',
            PNG_JPEG: 'PNG/JPEG (Renders)',
            MP4: 'MP4 (Animation)'
        };

        return outputs.map(output => outputLabels[output] || output).join(', ');
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Welcome to Render Agency</h1>
                    <p className="text-gray-600 mt-2">
                        Your profile has been successfully set up! Here's your account information.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {/* Account Information */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-xl">Account Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-gray-500">Full Name</label>
                                <p className="text-gray-900">{user.fullName || 'Not provided'}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-500">Email</label>
                                <p className="text-gray-900">{user.email}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-500">Company</label>
                                <p className="text-gray-900">{user.companyName || 'Not provided'}</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Business Information */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-xl">Business Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-gray-500">Business Type</label>
                                <p className="text-gray-900">{formatClientType(user.clientType)}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-500">Services Needed</label>
                                <p className="text-gray-900">{formatServices(user.primaryService)}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-500">Project Volume</label>
                                <p className="text-gray-900">{formatProjectVolume(user.projectVolume)}</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Technical Information */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-xl">Technical Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-gray-500">CAD Software</label>
                                <p className="text-gray-900">{formatCadSoftware(user.cadSoftware)}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-500">Required Outputs</label>
                                <p className="text-gray-900">{formatOutputs(user.requiredOutputs)}</p>
                            </div>
                            {user.referralSource && (
                                <div>
                                    <label className="text-sm font-medium text-gray-500">How you heard about us</label>
                                    <p className="text-gray-900">{user.referralSource}</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Next Steps */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-xl">What's Next?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 mb-4">
                                Your profile is complete! Based on your selections, you'll be connected with
                                the most suitable jewelry visualization specialists.
                            </p>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                Browse Services
                            </button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

const Profile = () => {
    const [user, setUser] = useState<UserDTO | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { role } = useUserStore();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true);
                const data = await getUserData();
                setUser(data);
            } catch (err) {
                console.error('Error loading user profile:', err);
                setError("Error loading profile. Please try refreshing the page.");
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="text-gray-600 mt-4">Loading your profile...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <Card className="w-full max-w-md mx-4">
                    <CardContent className="text-center pt-6">
                        <div className="text-red-500 text-6xl mb-4">⚠️</div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Profile</h2>
                        <p className="text-gray-600 mb-4">{error}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Refresh Page
                        </button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <Card className="w-full max-w-md mx-4">
                    <CardContent className="text-center pt-6">
                        <div className="text-red-500 text-6xl mb-4">🚫</div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">Access Denied</h2>
                        <p className="text-gray-600 mb-4">Please log in to access your profile.</p>
                        <button
                            onClick={() => window.location.href = '/login'}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Go to Login
                        </button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    // Show profile creation flow if profile is not complete
    if (!user.isProfileComplete) {
        return <ProfileCreationFlow userData={user} />;
    }

    // Show profile view if profile is complete
    return <ProfileView user={user} />;
};

export default Profile;
