"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import UserDTO from "@/interfaces/userDTO";
import { getUserData, getUserProjects } from "@/services/api";
import { useUserStore } from "@/store/useUserStore";
import ProfileCreationFlow from "@/components/profile/profile-creation-flow";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/services";

interface Project {
  id: number;
  userId: number;
  serviceType: string;
  serviceDetail?: string;
  projectName: string;
  createdAt: string;
  status: string;
  description?: string;
  files?: string[];
  projectManager?: string;
  estimatedDelivery?: string;
  progress: number;
  updatedAt: string;
}

import Link from 'next/link';

// Profile tabbed view component
const ProfileTabbedView: React.FC<{ user: UserDTO; projects: Project[]; successMessage?: boolean }> = ({ user, projects, successMessage }) => {
    const [activeTab, setActiveTab] = useState<'profile' | 'projects' | 'dashboard'>('dashboard');
    const [showSuccess, setShowSuccess] = useState<boolean>(false);

    useEffect(() => {
        // Check URL hash to determine initial tab
        if (window.location.hash === '#projects' || successMessage) {
            setActiveTab('projects');
        }

        // Show success message if coming from project creation
        if (successMessage) {
            setShowSuccess(true);
            // Auto-hide success message after 5 seconds
            const timer = setTimeout(() => setShowSuccess(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [successMessage]);

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

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'QUOTE_PENDING': return 'bg-gray-100 text-gray-800';
            case 'AWAITING_PAYMENT': return 'bg-yellow-100 text-yellow-800';
            case 'PREPARATION': return 'bg-blue-100 text-blue-800';
            case 'CAD_SCENE_SETUP': return 'bg-blue-100 text-blue-800';
            case 'CAD_MODEL_CREATION': return 'bg-blue-100 text-blue-800';
            case 'CAD_MODEL_AWAITING_APPROVAL': return 'bg-orange-100 text-orange-800';
            case 'CAD_FINAL_OPTIMIZATION': return 'bg-blue-100 text-blue-800';
            case 'CAD_FINAL_FILE_READY': return 'bg-green-100 text-green-800';
            case 'CAD_FILE_PREPARATION': return 'bg-blue-100 text-blue-800';
            case 'SCENE_MATERIAL_SETUP': return 'bg-blue-100 text-blue-800';
            case 'DRAFT_RENDER_AWAITING_APPROVAL': return 'bg-orange-100 text-orange-800';
            case 'FINAL_HIGH_RES_RENDERING': return 'bg-blue-100 text-blue-800';
            case 'FINAL_VISUALS_READY': return 'bg-green-100 text-green-800';
            case 'READY_FOR_DOWNLOAD': return 'bg-green-100 text-green-800';
            case 'COMPLETED': return 'bg-green-100 text-green-800';
            case 'CANCELLED': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusText = (status: string) => {
        const statusMap: Record<string, string> = {
            'QUOTE_PENDING': 'Quote Pending',
            'AWAITING_PAYMENT': 'Awaiting Payment',
            'PREPARATION': 'In Progress: Preparation',
            'CAD_SCENE_SETUP': 'CAD Scene Setup',
            'CAD_MODEL_CREATION': 'CAD Model Creation (WIP)',
            'CAD_MODEL_AWAITING_APPROVAL': 'CAD Model Awaiting Approval',
            'CAD_FINAL_OPTIMIZATION': 'Final Optimization for Printing',
            'CAD_FINAL_FILE_READY': 'Final File Ready',
            'CAD_FILE_PREPARATION': 'CAD File Preparation',
            'SCENE_MATERIAL_SETUP': 'Scene & Material Setup',
            'DRAFT_RENDER_AWAITING_APPROVAL': 'Draft Render Awaiting Approval',
            'FINAL_HIGH_RES_RENDERING': 'Final High-Res Rendering',
            'FINAL_VISUALS_READY': 'Final Visuals Ready',
            'READY_FOR_DOWNLOAD': 'Ready for Download',
            'COMPLETED': 'Project Completed',
            'CANCELLED': 'Project Cancelled',
        };
        return statusMap[status] || status;
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const getActionRequired = (status: string, projectName: string) => {
        switch (status) {
            case 'AWAITING_PAYMENT':
                return `Your quote for "${projectName}" is ready. Please review the details and confirm payment to start the project.`;
            case 'CAD_MODEL_AWAITING_APPROVAL':
                return 'The CAD model is ready for review. Your approval is required to proceed to final optimization.';
            case 'DRAFT_RENDER_AWAITING_APPROVAL':
                return 'The draft render is ready. Please approve the angles and composition to begin final high-resolution rendering.';
            case 'READY_FOR_DOWNLOAD':
                return 'Your project is complete! Final files are ready for download.';
            default:
                return null;
        }
    };

    const getActionButtons = (status: string) => {
        switch (status) {
            case 'AWAITING_PAYMENT':
                return [{ text: 'Confirm Order & Pay', primary: true }];
            case 'CAD_MODEL_AWAITING_APPROVAL':
                return [
                    { text: 'Approve Model', primary: true },
                    { text: 'Request Revisions', primary: false }
                ];
            case 'DRAFT_RENDER_AWAITING_APPROVAL':
                return [
                    { text: 'Approve Model', primary: true },
                    { text: 'Request Revisions', primary: false }
                ];
            case 'READY_FOR_DOWNLOAD':
                return [{ text: 'Download Project Files', primary: true }];
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Welcome to Render Agency</h1>
                    <p className="text-gray-600 mt-2">
                        Your profile has been successfully set up! Manage your account and projects.
                    </p>
                </div>

                {/* Tabs */}
                <div className="mb-8">
                    <div className="border-b border-gray-200">
                        <nav className="-mb-px flex space-x-8">
                            <Link
                                href="/client/dashboard"
                                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                                    activeTab === 'dashboard'
                                        ? 'border-blue-500 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                            >
                                📊 Dashboard
                            </Link>
                            <button
                                onClick={() => setActiveTab('profile')}
                                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                                    activeTab === 'profile'
                                        ? 'border-blue-500 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                            >
                                Profile
                            </button>
                            <button
                                onClick={() => setActiveTab('projects')}
                                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                                    activeTab === 'projects'
                                        ? 'border-blue-500 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                            >
                                Projects ({projects.length})
                            </button>
                        </nav>
                    </div>
                </div>

                {/* Dashboard Tab - Redirect Notice */}
                {activeTab === 'dashboard' && (
                    <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                        <CardContent className="text-center py-16">
                            <div className="text-blue-500 text-6xl mb-4">📊</div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Dashboard</h2>
                            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                                Access your comprehensive project management dashboard with real-time tracking,
                                analytics, progress monitoring, and all the features you saw on our how-it-works page.
                            </p>
                            <div className="space-y-4">
                                <Link
                                    href="/client/dashboard"
                                    className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                                >
                                    🚀 Open Full Dashboard
                                </Link>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-8">
                                    <div className="bg-white p-4 rounded-lg shadow-sm">
                                        <div className="text-blue-500 text-2xl mb-2">📈</div>
                                        <h3 className="font-semibold mb-1">Project Analytics</h3>
                                        <p className="text-sm text-gray-600">Track performance metrics & insights</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm">
                                        <div className="text-purple-500 text-2xl mb-2">🎯</div>
                                        <h3 className="font-semibold mb-1">Live Progress</h3>
                                        <p className="text-sm text-gray-600">Real-time project tracking</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm">
                                        <div className="text-green-500 text-2xl mb-2">🏆</div>
                                        <h3 className="font-semibold mb-1">Loyalty Program</h3>
                                        <p className="text-sm text-gray-600">Earn points for exclusive benefits</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )}

                {activeTab === 'profile' && (
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
                                    Ready to start a new project? Create your first project and connect with our experts.
                                </p>
                                <button
                                    onClick={() => window.location.href = '/'}
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Create New Project
                                </button>
                            </CardContent>
                        </Card>
                    </div>
                )}

                {activeTab === 'projects' && (
                    <div className="space-y-6">
                        {/* Success Message */}
                        {showSuccess && (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                                <div className="text-green-600 text-lg">✅</div>
                                <div>
                                    <h4 className="text-green-800 font-semibold">Project Created Successfully!</h4>
                                    <p className="text-green-700 text-sm">
                                        Your new project has been submitted. You'll receive a quote shortly to start the process.
                                    </p>
                                </div>
                            </div>
                        )}
                        {projects.length === 0 ? (
                            <Card>
                                <CardContent className="text-center py-12">
                                    <div className="text-gray-400 text-6xl mb-4">📋</div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No Projects Yet</h3>
                                    <p className="text-gray-600 mb-6">
                                        You haven't created any projects yet. Start by creating your first project.
                                    </p>
                                    <button
                                        onClick={() => window.location.href = '/'}
                                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        Create Your First Project
                                    </button>
                                </CardContent>
                            </Card>
                        ) : (
                            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
                                {projects.map((project) => {
                                    const actionRequired = getActionRequired(project.status, project.projectName);
                                    const actionButtons = getActionButtons(project.status);

                                    return (
                                        <Card key={project.id} className="relative">
                                            <CardHeader>
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <CardTitle className="text-lg font-semibold text-gray-900">
                                                            Project #{project.id}: {project.projectName}
                                                        </CardTitle>
                                                        <p className="text-sm text-gray-600 mt-1">
                                                            {project.serviceType}
                                                            {project.serviceDetail && ` - ${project.serviceDetail}`}
                                                        </p>
                                                    </div>
                                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                                                        {getStatusText(project.status)}
                                                    </span>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="space-y-4">
                                                    {/* Project Manager */}
                                                    {project.projectManager && (
                                                        <div>
                                                            <label className="text-sm font-medium text-gray-500">Project Manager</label>
                                                            <p className="text-gray-900">Manager: {project.projectManager}</p>
                                                        </div>
                                                    )}

                                                    {/* Estimated Delivery */}
                                                    {project.estimatedDelivery && (
                                                        <div>
                                                            <label className="text-sm font-medium text-gray-500">Estimated Delivery</label>
                                                            <p className="text-gray-900">{formatDate(project.estimatedDelivery)}</p>
                                                        </div>
                                                    )}

                                                    {/* Current Status */}
                                                    <div>
                                                        <label className="text-sm font-medium text-gray-500">Current Status</label>
                                                        <p className="text-gray-900">{getStatusText(project.status)}</p>
                                                    </div>

                                                    {/* Progress */}
                                                    <div>
                                                        <div className="flex justify-between items-center mb-1">
                                                            <label className="text-sm font-medium text-gray-500">Progress</label>
                                                            <span className="text-sm text-gray-600">{project.progress}%</span>
                                                        </div>
                                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                                            <div
                                                                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                                                style={{ width: `${project.progress}%` }}
                                                            ></div>
                                                        </div>
                                                    </div>

                                                    {/* Description */}
                                                    {project.description && (
                                                        <div>
                                                            <label className="text-sm font-medium text-gray-500">Description</label>
                                                            <p className="text-gray-900 text-sm">{project.description}</p>
                                                        </div>
                                                    )}

                                                    {/* Action Required */}
                                                    {actionRequired && (
                                                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                                                            <h4 className="text-lg font-semibold text-orange-800 mb-2">Action Required</h4>
                                                            <p className="text-orange-700 text-sm">{actionRequired}</p>
                                                            {actionButtons && (
                                                                <div className="flex gap-2 mt-3">
                                                                    {actionButtons.map((button, index) => (
                                                                        <button
                                                                            key={index}
                                                                            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                                                                                button.primary
                                                                                    ? 'bg-orange-600 text-white hover:bg-orange-700'
                                                                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                                            }`}
                                                                        >
                                                                            {button.text}
                                                                        </button>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

const Profile = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [user, setUser] = useState<UserDTO | null>(null);
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { role } = useUserStore();
    const successMessage = searchParams?.get('success') === 'true';

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                // Fetch user data
                const userData = await getUserData();
                setUser(userData);

                // Fetch projects if user is logged in and profile is complete
                if (userData?.isProfileComplete) {
                    const projectsResponse = await getUserProjects();
                    if (Array.isArray(projectsResponse)) {
                        setProjects(projectsResponse);
                    } else if (projectsResponse.status === 'success') {
                        setProjects(projectsResponse.data || []);
                    } else {
                        setProjects([]);
                    }
                }
            } catch (err) {
                console.error('Error loading profile:', err);
                setError("Error loading profile. Please try refreshing the page.");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [searchParams]); // Re-run when URL searchParams change (including success parameter)

    useEffect(() => {
        // Check URL hash to determine initial tab
        if (window.location.hash === '#projects') {
            // This will be handled by the component itself when mounted
        }
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
    return <ProfileTabbedView user={user} projects={projects} successMessage={successMessage} />;
};

// Wrapper component with Suspense boundary
const ProfileWithSuspense = () => {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="text-gray-600 mt-4">Loading your profile...</p>
                </div>
            </div>
        }>
            <Profile />
        </Suspense>
    );
};

export default ProfileWithSuspense;
