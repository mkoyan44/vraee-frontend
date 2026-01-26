"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import UserDTO from "@/interfaces/userDTO";
import { getUserData, getUserProjects } from "@/services/api";
import { useUserStore } from "@/store/useUserStore";
import ProfileCreationFlow from "@/components/profile/profile-creation-flow";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import ProjectCreationModal from "@/components/modal/project-creation-modal";
import { CheckCircle2, User, Building2, Briefcase, Settings, FileText, Plus, ArrowRight, Package, Clock, CheckCircle, XCircle, AlertCircle, TrendingUp, Search, Filter, Grid3x3, List, Download, Calendar, Hash } from 'lucide-react';

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

// Profile tabbed view component
const ProfileTabbedView: React.FC<{ user: UserDTO; projects: Project[]; successMessage?: boolean }> = ({ user, projects, successMessage }) => {
    const [activeTab, setActiveTab] = useState<'overview' | 'profile' | 'projects'>('overview');
    const [showSuccess, setShowSuccess] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState<string>('all');
    const [serviceFilter, setServiceFilter] = useState<string>('all');

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
            case 'QUOTE_PENDING': return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
            case 'AWAITING_PAYMENT': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
            case 'PREPARATION': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
            case 'CAD_SCENE_SETUP': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
            case 'CAD_MODEL_CREATION': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
            case 'CAD_MODEL_AWAITING_APPROVAL': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
            case 'CAD_FINAL_OPTIMIZATION': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
            case 'CAD_FINAL_FILE_READY': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
            case 'CAD_FILE_PREPARATION': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
            case 'SCENE_MATERIAL_SETUP': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
            case 'DRAFT_RENDER_AWAITING_APPROVAL': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
            case 'FINAL_HIGH_RES_RENDERING': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
            case 'FINAL_VISUALS_READY': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
            case 'READY_FOR_DOWNLOAD': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
            case 'COMPLETED': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
            case 'CANCELLED': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
            default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
        }
    };

    const getStatusText = (status: string) => {
        const statusMap: Record<string, string> = {
            'QUOTE_PENDING': 'Quote Pending',
            'AWAITING_PAYMENT': 'Awaiting Payment',
            'PREPARATION': 'Preparation',
            'CAD_SCENE_SETUP': 'CAD Scene Setup',
            'CAD_MODEL_CREATION': 'CAD Model Creation',
            'CAD_MODEL_AWAITING_APPROVAL': 'Awaiting Your Approval',
            'CAD_FINAL_OPTIMIZATION': 'Final Optimization',
            'CAD_FINAL_FILE_READY': 'CAD File Ready',
            'CAD_FILE_PREPARATION': 'CAD File Preparation',
            'SCENE_MATERIAL_SETUP': 'Scene & Material Setup',
            'DRAFT_RENDER_AWAITING_APPROVAL': 'Awaiting Your Approval',
            'FINAL_HIGH_RES_RENDERING': 'Final Rendering',
            'FINAL_VISUALS_READY': 'Visuals Ready',
            'READY_FOR_DOWNLOAD': 'Ready for Download',
            'COMPLETED': 'Completed',
            'CANCELLED': 'Cancelled',
        };
        return statusMap[status] || status;
    };

    // Get actionable step for each status
    const getActionableStep = (status: string): { text: string; type: 'action' | 'info' | 'success' } => {
        switch (status) {
            case 'QUOTE_PENDING':
                return { text: 'Review and approve quote', type: 'action' };
            case 'AWAITING_PAYMENT':
                return { text: 'Complete payment to proceed', type: 'action' };
            case 'CAD_MODEL_AWAITING_APPROVAL':
                return { text: 'Review and approve CAD model', type: 'action' };
            case 'DRAFT_RENDER_AWAITING_APPROVAL':
                return { text: 'Review and approve draft render', type: 'action' };
            case 'CAD_FINAL_FILE_READY':
            case 'FINAL_VISUALS_READY':
            case 'READY_FOR_DOWNLOAD':
                return { text: 'Download your files', type: 'success' };
            case 'COMPLETED':
                return { text: 'Project completed successfully', type: 'success' };
            case 'CANCELLED':
                return { text: 'Project cancelled', type: 'info' };
            default:
                return { text: 'Work in progress', type: 'info' };
        }
    };

    // Get progress percentage based on status (if not provided)
    const getProgressFromStatus = (status: string, currentProgress: number): number => {
        if (currentProgress > 0) return currentProgress;
        
        const statusProgress: Record<string, number> = {
            'QUOTE_PENDING': 5,
            'AWAITING_PAYMENT': 10,
            'PREPARATION': 15,
            'CAD_SCENE_SETUP': 20,
            'CAD_MODEL_CREATION': 35,
            'CAD_MODEL_AWAITING_APPROVAL': 50,
            'CAD_FINAL_OPTIMIZATION': 60,
            'CAD_FINAL_FILE_READY': 70,
            'CAD_FILE_PREPARATION': 25,
            'SCENE_MATERIAL_SETUP': 40,
            'DRAFT_RENDER_AWAITING_APPROVAL': 65,
            'FINAL_HIGH_RES_RENDERING': 80,
            'FINAL_VISUALS_READY': 90,
            'READY_FOR_DOWNLOAD': 95,
            'COMPLETED': 100,
            'CANCELLED': 0,
        };
        return statusProgress[status] || 0;
    };

    // Categorize projects by status
    const categorizeProjects = () => {
        const categories = {
            ready: [] as Project[],
            inProgress: [] as Project[],
            pending: [] as Project[],
            completed: [] as Project[],
            cancelled: [] as Project[]
        };

        projects.forEach(project => {
            const status = project.status;
            if (status === 'COMPLETED') {
                categories.completed.push(project);
            } else if (status === 'CANCELLED') {
                categories.cancelled.push(project);
            } else if (['CAD_FINAL_FILE_READY', 'FINAL_VISUALS_READY', 'READY_FOR_DOWNLOAD'].includes(status)) {
                categories.ready.push(project);
            } else if (['QUOTE_PENDING', 'AWAITING_PAYMENT'].includes(status)) {
                categories.pending.push(project);
            } else {
                categories.inProgress.push(project);
            }
        });

        return categories;
    };

    const projectCategories = categorizeProjects();

    // Format order number professionally (e.g., VR-2024-001)
    const formatOrderNumber = (id: number, createdAt: string) => {
        const year = new Date(createdAt).getFullYear();
        const paddedId = String(id).padStart(4, '0');
        return `VR-${year}-${paddedId}`;
    };

    // Filter projects based on search and filters
    const getFilteredProjects = () => {
        let filtered = [...projects];

        // Search filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(project => 
                project.projectName.toLowerCase().includes(query) ||
                project.serviceType.toLowerCase().includes(query) ||
                (project.serviceDetail && project.serviceDetail.toLowerCase().includes(query)) ||
                formatOrderNumber(project.id, project.createdAt).toLowerCase().includes(query)
            );
        }

        // Status filter
        if (statusFilter !== 'all') {
            if (statusFilter === 'ready') {
                filtered = filtered.filter(p => projectCategories.ready.includes(p));
            } else if (statusFilter === 'inProgress') {
                filtered = filtered.filter(p => projectCategories.inProgress.includes(p));
            } else if (statusFilter === 'pending') {
                filtered = filtered.filter(p => projectCategories.pending.includes(p));
            } else if (statusFilter === 'completed') {
                filtered = filtered.filter(p => projectCategories.completed.includes(p));
            } else {
                filtered = filtered.filter(p => p.status === statusFilter);
            }
        }

        // Service filter
        if (serviceFilter !== 'all') {
            filtered = filtered.filter(p => p.serviceType === serviceFilter);
        }

        return filtered;
    };

    const filteredProjects = getFilteredProjects();

    // Group projects by date (for bulk orders)
    const groupProjectsByDate = (projs: Project[]) => {
        const groups: Record<string, Project[]> = {};
        projs.forEach(project => {
            const date = new Date(project.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            if (!groups[date]) {
                groups[date] = [];
            }
            groups[date].push(project);
        });
        return groups;
    };

    const groupedByDate = groupProjectsByDate(filteredProjects);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <>
            <div className="background min-h-screen">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                    {/* Welcome Header - Personalized */}
                    <div className="mb-10 lg:mb-16">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
                            <div 
                                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-3xl sm:text-4xl font-bold flex-shrink-0 shadow-lg"
                                style={{
                                    backgroundColor: 'rgba(var(--btn-primary-bg), 0.15)',
                                    color: 'rgb(var(--btn-primary-bg))',
                                    border: '3px solid',
                                    borderColor: 'rgba(var(--btn-primary-bg), 0.2)'
                                }}
                            >
                                {user.fullName ? user.fullName.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="mb-2">
                                    <h1 
                                        className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 leading-tight"
                                        style={{ color: 'rgb(var(--color-title))' }}
                                    >
                                        {user.fullName ? `Welcome, ${user.fullName.split(' ')[0]}` : `Welcome, ${user.email.split('@')[0]}`}
                                    </h1>
                                    {user.companyName && (
                                        <p 
                                            className="text-lg sm:text-xl font-medium"
                                            style={{ color: 'rgb(var(--color-text))' }}
                                        >
                                            {user.companyName}
                                        </p>
                                    )}
                                </div>
                                <p 
                                    className="text-base sm:text-lg leading-relaxed max-w-2xl"
                                    style={{ color: 'rgb(var(--color-text))', opacity: 0.8 }}
                                >
                                    Manage your account, track projects, and access all your 3D jewelry visualization services in one place.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Success Message */}
                    {showSuccess && (
                        <div 
                            className="mb-6 rounded-lg p-4 flex items-start gap-3 border"
                            style={{
                                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                                borderColor: 'rgba(34, 197, 94, 0.3)'
                            }}
                        >
                            <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: 'rgb(34, 197, 94)' }} />
                            <div>
                                <h4 className="font-semibold mb-1" style={{ color: 'rgb(34, 197, 94)' }}>Project Created Successfully!</h4>
                                <p className="text-sm" style={{ color: 'rgb(34, 197, 94)' }}>
                                    Your new project has been submitted. You'll receive a quote shortly to start the process.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Tabs */}
                    <div className="mb-8">
                        <div 
                            className="border-b"
                            style={{ borderColor: 'rgb(var(--color-border))' }}
                        >
                            <nav className="-mb-px flex space-x-1 sm:space-x-8">
                                <button
                                    onClick={() => setActiveTab('overview')}
                                    className={`py-4 px-4 sm:px-1 border-b-2 font-semibold text-sm sm:text-base transition-all duration-200 ${
                                        activeTab === 'overview'
                                            ? ''
                                            : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
                                    }`}
                                    style={{
                                        color: activeTab === 'overview' 
                                            ? 'rgb(var(--btn-primary-bg))' 
                                            : 'rgb(var(--color-text))',
                                        borderBottomColor: activeTab === 'overview' 
                                            ? 'rgb(var(--btn-primary-bg))' 
                                            : 'transparent',
                                        borderBottomWidth: activeTab === 'overview' ? '2px' : '2px'
                                    }}
                                >
                                    Overview
                                </button>
                                <button
                                    onClick={() => setActiveTab('profile')}
                                    className={`py-4 px-4 sm:px-1 border-b-2 font-semibold text-sm sm:text-base transition-all duration-200 ${
                                        activeTab === 'profile'
                                            ? ''
                                            : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
                                    }`}
                                    style={{
                                        color: activeTab === 'profile' 
                                            ? 'rgb(var(--btn-primary-bg))' 
                                            : 'rgb(var(--color-text))',
                                        borderBottomColor: activeTab === 'profile' 
                                            ? 'rgb(var(--btn-primary-bg))' 
                                            : 'transparent',
                                        borderBottomWidth: activeTab === 'profile' ? '2px' : '2px'
                                    }}
                                >
                                    Profile
                                </button>
                                <button
                                    onClick={() => setActiveTab('projects')}
                                    className={`py-4 px-4 sm:px-1 border-b-2 font-semibold text-sm sm:text-base transition-all duration-200 ${
                                        activeTab === 'projects'
                                            ? ''
                                            : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
                                    }`}
                                    style={{
                                        color: activeTab === 'projects' 
                                            ? 'rgb(var(--btn-primary-bg))' 
                                            : 'rgb(var(--color-text))',
                                        borderBottomColor: activeTab === 'projects' 
                                            ? 'rgb(var(--btn-primary-bg))' 
                                            : 'transparent',
                                        borderBottomWidth: activeTab === 'projects' ? '2px' : '2px'
                                    }}
                                >
                                    Projects <span className="ml-1 opacity-70">({projects.length})</span>
                                </button>
                            </nav>
                        </div>
                    </div>

                    {/* Overview Tab */}
                    {activeTab === 'overview' && (
                        <div className="space-y-8">
                            {/* Project Status Summary - Compact Horizontal Badges */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                                {/* Ready for Download */}
                                <Card 
                                    className="shadow-sm border-l-2"
                                    style={{
                                        backgroundColor: 'rgba(var(--color-bg), 0.95)',
                                        borderColor: 'rgb(34, 197, 94)',
                                        borderLeftWidth: '2px'
                                    }}
                                >
                                    <CardContent className="p-3">
                                        <div className="flex items-center gap-3">
                                            <div 
                                                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                                style={{
                                                    backgroundColor: 'rgba(34, 197, 94, 0.1)'
                                                }}
                                            >
                                                <Package className="w-4 h-4" style={{ color: 'rgb(34, 197, 94)' }} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2">
                                                    <span 
                                                        className="text-xl font-bold"
                                                        style={{ color: 'rgb(34, 197, 94)' }}
                                                    >
                                                        {projectCategories.ready.length}
                                                    </span>
                                                    <h3 
                                                        className="text-sm font-semibold truncate"
                                                        style={{ color: 'rgb(var(--color-title))' }}
                                                    >
                                                        Ready for Download
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* In Progress */}
                                <Card 
                                    className="shadow-sm border-l-2"
                                    style={{
                                        backgroundColor: 'rgba(var(--color-bg), 0.95)',
                                        borderColor: 'rgb(37, 99, 235)',
                                        borderLeftWidth: '2px'
                                    }}
                                >
                                    <CardContent className="p-3">
                                        <div className="flex items-center gap-3">
                                            <div 
                                                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                                style={{
                                                    backgroundColor: 'rgba(37, 99, 235, 0.1)'
                                                }}
                                            >
                                                <TrendingUp className="w-4 h-4" style={{ color: 'rgb(37, 99, 235)' }} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2">
                                                    <span 
                                                        className="text-xl font-bold"
                                                        style={{ color: 'rgb(37, 99, 235)' }}
                                                    >
                                                        {projectCategories.inProgress.length}
                                                    </span>
                                                    <h3 
                                                        className="text-sm font-semibold truncate"
                                                        style={{ color: 'rgb(var(--color-title))' }}
                                                    >
                                                        In Progress
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Pending */}
                                <Card 
                                    className="shadow-sm border-l-2"
                                    style={{
                                        backgroundColor: 'rgba(var(--color-bg), 0.95)',
                                        borderColor: 'rgb(251, 191, 36)',
                                        borderLeftWidth: '2px'
                                    }}
                                >
                                    <CardContent className="p-3">
                                        <div className="flex items-center gap-3">
                                            <div 
                                                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                                style={{
                                                    backgroundColor: 'rgba(251, 191, 36, 0.1)'
                                                }}
                                            >
                                                <Clock className="w-4 h-4" style={{ color: 'rgb(251, 191, 36)' }} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2">
                                                    <span 
                                                        className="text-xl font-bold"
                                                        style={{ color: 'rgb(251, 191, 36)' }}
                                                    >
                                                        {projectCategories.pending.length}
                                                    </span>
                                                    <h3 
                                                        className="text-sm font-semibold truncate"
                                                        style={{ color: 'rgb(var(--color-title))' }}
                                                    >
                                                        Pending
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Completed */}
                                <Card 
                                    className="shadow-sm border-l-2"
                                    style={{
                                        backgroundColor: 'rgba(var(--color-bg), 0.95)',
                                        borderColor: 'rgb(34, 197, 94)',
                                        borderLeftWidth: '2px'
                                    }}
                                >
                                    <CardContent className="p-3">
                                        <div className="flex items-center gap-3">
                                            <div 
                                                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                                style={{
                                                    backgroundColor: 'rgba(34, 197, 94, 0.1)'
                                                }}
                                            >
                                                <CheckCircle className="w-4 h-4" style={{ color: 'rgb(34, 197, 94)' }} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2">
                                                    <span 
                                                        className="text-xl font-bold"
                                                        style={{ color: 'rgb(34, 197, 94)' }}
                                                    >
                                                        {projectCategories.completed.length}
                                                    </span>
                                                    <h3 
                                                        className="text-sm font-semibold truncate"
                                                        style={{ color: 'rgb(var(--color-title))' }}
                                                    >
                                                        Completed
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Quick Actions */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                                <Card 
                                    className="cursor-pointer hover:shadow-lg transition-all duration-200 group"
                                    onClick={() => setIsModalOpen(true)}
                                    style={{
                                        backgroundColor: 'rgba(var(--color-bg), 0.95)',
                                        borderColor: 'rgb(var(--color-border))'
                                    }}
                                >
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div 
                                                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                                                style={{
                                                    backgroundColor: 'rgba(var(--btn-primary-bg), 0.1)'
                                                }}
                                            >
                                                <Plus className="w-6 h-6" style={{ color: 'rgb(var(--btn-primary-bg))' }} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 
                                                    className="font-semibold mb-1.5 text-base"
                                                    style={{ color: 'rgb(var(--color-title))' }}
                                                >
                                                    Create New Project
                                                </h3>
                                                <p 
                                                    className="text-sm leading-relaxed"
                                                    style={{ color: 'rgb(var(--color-text))', opacity: 0.8 }}
                                                >
                                                    Start a new 3D visualization project
                                                </p>
                                            </div>
                                            <ArrowRight 
                                                className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200" 
                                                style={{ color: 'rgb(var(--color-text))', opacity: 0.6 }} 
                                            />
                                        </div>
                                    </CardContent>
                                </Card>

                                <Link href="/client/dashboard" className="h-full">
                                    <Card 
                                        className="cursor-pointer hover:shadow-lg transition-all duration-200 h-full group"
                                        style={{
                                            backgroundColor: 'rgba(var(--color-bg), 0.95)',
                                            borderColor: 'rgb(var(--color-border))'
                                        }}
                                    >
                                        <CardContent className="p-6 h-full">
                                            <div className="flex items-start gap-4 h-full">
                                                <div 
                                                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                                                    style={{
                                                        backgroundColor: 'rgba(var(--btn-primary-bg), 0.1)'
                                                    }}
                                                >
                                                    <Briefcase className="w-6 h-6" style={{ color: 'rgb(var(--btn-primary-bg))' }} />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h3 
                                                        className="font-semibold mb-1.5 text-base"
                                                        style={{ color: 'rgb(var(--color-title))' }}
                                                    >
                                                        View Dashboard
                                                    </h3>
                                                    <p 
                                                        className="text-sm leading-relaxed"
                                                        style={{ color: 'rgb(var(--color-text))', opacity: 0.8 }}
                                                    >
                                                        Track all your projects
                                                    </p>
                                                </div>
                                                <ArrowRight 
                                                    className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200" 
                                                    style={{ color: 'rgb(var(--color-text))', opacity: 0.6 }} 
                                                />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>

                                <Card 
                                    className="cursor-pointer hover:shadow-lg transition-all duration-200 group"
                                    onClick={() => setActiveTab('profile')}
                                    style={{
                                        backgroundColor: 'rgba(var(--color-bg), 0.95)',
                                        borderColor: 'rgb(var(--color-border))'
                                    }}
                                >
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div 
                                                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                                                style={{
                                                    backgroundColor: 'rgba(var(--btn-primary-bg), 0.1)'
                                                }}
                                            >
                                                <Settings className="w-6 h-6" style={{ color: 'rgb(var(--btn-primary-bg))' }} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 
                                                    className="font-semibold mb-1.5 text-base"
                                                    style={{ color: 'rgb(var(--color-title))' }}
                                                >
                                                    Edit Profile
                                                </h3>
                                                <p 
                                                    className="text-sm leading-relaxed"
                                                    style={{ color: 'rgb(var(--color-text))', opacity: 0.8 }}
                                                >
                                                    Update your information
                                                </p>
                                            </div>
                                            <ArrowRight 
                                                className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200" 
                                                style={{ color: 'rgb(var(--color-text))', opacity: 0.6 }} 
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Projects by Status */}
                            {projects.length > 0 && (
                                <div className="space-y-8">
                                    {/* Ready for Download */}
                                    {projectCategories.ready.length > 0 && (
                                        <div>
                                            <div className="flex items-center gap-3 mb-4">
                                                <div 
                                                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                                                    style={{
                                                        backgroundColor: 'rgba(34, 197, 94, 0.1)'
                                                    }}
                                                >
                                                    <Package className="w-5 h-5" style={{ color: 'rgb(34, 197, 94)' }} />
                                                </div>
                                                <div>
                                                    <h2 
                                                        className="text-xl font-bold"
                                                        style={{ color: 'rgb(var(--color-title))' }}
                                                    >
                                                        Ready for Download ({projectCategories.ready.length})
                                                    </h2>
                                                    <p 
                                                        className="text-sm"
                                                        style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}
                                                    >
                                                        Your files are ready to download
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                {projectCategories.ready.map((project) => (
                                                    <Card 
                                                        key={project.id}
                                                        className="hover:shadow-md transition-all duration-200"
                                                        style={{
                                                            backgroundColor: 'rgba(var(--color-bg), 0.95)',
                                                            borderColor: 'rgb(var(--color-border))'
                                                        }}
                                                    >
                                                        <CardContent className="p-4">
                                                            <div className="flex items-center gap-4">
                                                                {/* Status Indicator */}
                                                                <div 
                                                                    className="w-2 h-2 rounded-full flex-shrink-0"
                                                                    style={{ backgroundColor: 'rgb(34, 197, 94)' }}
                                                                ></div>
                                                                
                                                                {/* Project Details */}
                                                                <div className="flex-1 min-w-0">
                                                                    <div className="flex items-center gap-3 mb-1">
                                                                        <h3 
                                                                            className="font-bold text-base truncate"
                                                                            style={{ color: 'rgb(var(--color-title))' }}
                                                                        >
                                                                            {project.projectName}
                                                                        </h3>
                                                                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium flex-shrink-0 ${getStatusColor(project.status)}`}>
                                                                            {getStatusText(project.status)}
                                                                        </span>
                                                                    </div>
                                                                    <p 
                                                                        className="text-xs mb-1.5 truncate"
                                                                        style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}
                                                                    >
                                                                        {project.serviceType}
                                                                    </p>
                                                                    {/* Progress Bar */}
                                                                    <div className="flex items-center gap-2">
                                                                        <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                                                                            <div
                                                                                className="h-1.5 rounded-full transition-all"
                                                                                style={{ 
                                                                                    width: `${getProgressFromStatus(project.status, project.progress)}%`,
                                                                                    backgroundColor: 'rgb(34, 197, 94)'
                                                                                }}
                                                                            ></div>
                                                                        </div>
                                                                        <span 
                                                                            className="text-xs font-semibold w-10 text-right"
                                                                            style={{ color: 'rgb(var(--color-text))', opacity: 0.8 }}
                                                                        >
                                                                            {getProgressFromStatus(project.status, project.progress)}%
                                                                        </span>
                                                                    </div>
                                                                    {/* Actionable Step */}
                                                                    {(() => {
                                                                        const action = getActionableStep(project.status);
                                                                        return (
                                                                            <p 
                                                                                className={`text-xs mt-1.5 ${
                                                                                    action.type === 'action' ? 'font-medium' : ''
                                                                                }`}
                                                                                style={{ 
                                                                                    color: action.type === 'action' 
                                                                                        ? 'rgb(37, 99, 235)' 
                                                                                        : action.type === 'success'
                                                                                        ? 'rgb(34, 197, 94)'
                                                                                        : 'rgb(var(--color-text))',
                                                                                    opacity: action.type === 'info' ? 0.7 : 1
                                                                                }}
                                                                            >
                                                                                {action.type === 'action' && '→ '}
                                                                                {action.text}
                                                                            </p>
                                                                        );
                                                                    })()}
                                                                </div>
                                                                
                                                                {/* Action Button */}
                                                                <button className="flex-shrink-0 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                                                                    <ArrowRight className="w-4 h-4" style={{ color: 'rgb(var(--color-text))', opacity: 0.6 }} />
                                                                </button>
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* In Progress */}
                                    {projectCategories.inProgress.length > 0 && (
                                        <div>
                                            <div className="flex items-center gap-3 mb-4">
                                                <div 
                                                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                                                    style={{
                                                        backgroundColor: 'rgba(37, 99, 235, 0.1)'
                                                    }}
                                                >
                                                    <TrendingUp className="w-5 h-5" style={{ color: 'rgb(37, 99, 235)' }} />
                                                </div>
                                                <div>
                                                    <h2 
                                                        className="text-xl font-bold"
                                                        style={{ color: 'rgb(var(--color-title))' }}
                                                    >
                                                        In Progress ({projectCategories.inProgress.length})
                                                    </h2>
                                                    <p 
                                                        className="text-sm"
                                                        style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}
                                                    >
                                                        Currently being worked on by our team
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                {projectCategories.inProgress.map((project) => (
                                                    <Card 
                                                        key={project.id}
                                                        className="hover:shadow-md transition-all duration-200"
                                                        style={{
                                                            backgroundColor: 'rgba(var(--color-bg), 0.95)',
                                                            borderColor: 'rgb(var(--color-border))'
                                                        }}
                                                    >
                                                        <CardContent className="p-4">
                                                            <div className="flex items-center gap-4">
                                                                {/* Status Indicator */}
                                                                <div 
                                                                    className="w-2 h-2 rounded-full flex-shrink-0"
                                                                    style={{ backgroundColor: 'rgb(37, 99, 235)' }}
                                                                ></div>
                                                                
                                                                {/* Project Details */}
                                                                <div className="flex-1 min-w-0">
                                                                    <div className="flex items-center gap-3 mb-1">
                                                                        <h3 
                                                                            className="font-bold text-base truncate"
                                                                            style={{ color: 'rgb(var(--color-title))' }}
                                                                        >
                                                                            {project.projectName}
                                                                        </h3>
                                                                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium flex-shrink-0 ${getStatusColor(project.status)}`}>
                                                                            {getStatusText(project.status)}
                                                                        </span>
                                                                    </div>
                                                                    <p 
                                                                        className="text-xs mb-1.5 truncate"
                                                                        style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}
                                                                    >
                                                                        {project.serviceType}
                                                                    </p>
                                                                    {/* Progress Bar */}
                                                                    <div className="flex items-center gap-2">
                                                                        <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                                                                            <div
                                                                                className="h-1.5 rounded-full transition-all"
                                                                                style={{ 
                                                                                    width: `${getProgressFromStatus(project.status, project.progress)}%`,
                                                                                    backgroundColor: 'rgb(37, 99, 235)'
                                                                                }}
                                                                            ></div>
                                                                        </div>
                                                                        <span 
                                                                            className="text-xs font-semibold w-10 text-right"
                                                                            style={{ color: 'rgb(var(--color-text))', opacity: 0.8 }}
                                                                        >
                                                                            {getProgressFromStatus(project.status, project.progress)}%
                                                                        </span>
                                                                    </div>
                                                                    {/* Actionable Step */}
                                                                    {(() => {
                                                                        const action = getActionableStep(project.status);
                                                                        return (
                                                                            <p 
                                                                                className={`text-xs mt-1.5 ${
                                                                                    action.type === 'action' ? 'font-medium' : ''
                                                                                }`}
                                                                                style={{ 
                                                                                    color: action.type === 'action' 
                                                                                        ? 'rgb(37, 99, 235)' 
                                                                                        : action.type === 'success'
                                                                                        ? 'rgb(34, 197, 94)'
                                                                                        : 'rgb(var(--color-text))',
                                                                                    opacity: action.type === 'info' ? 0.7 : 1
                                                                                }}
                                                                            >
                                                                                {action.type === 'action' && '→ '}
                                                                                {action.text}
                                                                            </p>
                                                                        );
                                                                    })()}
                                                                </div>
                                                                
                                                                {/* Action Button */}
                                                                <button className="flex-shrink-0 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                                                                    <ArrowRight className="w-4 h-4" style={{ color: 'rgb(var(--color-text))', opacity: 0.6 }} />
                                                                </button>
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Pending */}
                                    {projectCategories.pending.length > 0 && (
                                        <div>
                                            <div className="flex items-center gap-3 mb-4">
                                                <div 
                                                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                                                    style={{
                                                        backgroundColor: 'rgba(251, 191, 36, 0.1)'
                                                    }}
                                                >
                                                    <Clock className="w-5 h-5" style={{ color: 'rgb(251, 191, 36)' }} />
                                                </div>
                                                <div>
                                                    <h2 
                                                        className="text-xl font-bold"
                                                        style={{ color: 'rgb(var(--color-title))' }}
                                                    >
                                                        Pending ({projectCategories.pending.length})
                                                    </h2>
                                                    <p 
                                                        className="text-sm"
                                                        style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}
                                                    >
                                                        Awaiting quote approval or payment
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                {projectCategories.pending.map((project) => (
                                                    <Card 
                                                        key={project.id}
                                                        className="hover:shadow-md transition-all duration-200"
                                                        style={{
                                                            backgroundColor: 'rgba(var(--color-bg), 0.95)',
                                                            borderColor: 'rgb(var(--color-border))'
                                                        }}
                                                    >
                                                        <CardContent className="p-4">
                                                            <div className="flex items-center gap-4">
                                                                {/* Status Indicator */}
                                                                <div 
                                                                    className="w-2 h-2 rounded-full flex-shrink-0"
                                                                    style={{ backgroundColor: 'rgb(251, 191, 36)' }}
                                                                ></div>
                                                                
                                                                {/* Project Details */}
                                                                <div className="flex-1 min-w-0">
                                                                    <div className="flex items-center gap-3 mb-1">
                                                                        <h3 
                                                                            className="font-bold text-base truncate"
                                                                            style={{ color: 'rgb(var(--color-title))' }}
                                                                        >
                                                                            {project.projectName}
                                                                        </h3>
                                                                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium flex-shrink-0 ${getStatusColor(project.status)}`}>
                                                                            {getStatusText(project.status)}
                                                                        </span>
                                                                    </div>
                                                                    <p 
                                                                        className="text-xs mb-1.5 truncate"
                                                                        style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}
                                                                    >
                                                                        {project.serviceType}
                                                                    </p>
                                                                    {/* Progress Bar */}
                                                                    <div className="flex items-center gap-2">
                                                                        <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                                                                            <div
                                                                                className="h-1.5 rounded-full transition-all"
                                                                                style={{ 
                                                                                    width: `${getProgressFromStatus(project.status, project.progress)}%`,
                                                                                    backgroundColor: 'rgb(251, 191, 36)'
                                                                                }}
                                                                            ></div>
                                                                        </div>
                                                                        <span 
                                                                            className="text-xs font-semibold w-10 text-right"
                                                                            style={{ color: 'rgb(var(--color-text))', opacity: 0.8 }}
                                                                        >
                                                                            {getProgressFromStatus(project.status, project.progress)}%
                                                                        </span>
                                                                    </div>
                                                                    {/* Actionable Step */}
                                                                    {(() => {
                                                                        const action = getActionableStep(project.status);
                                                                        return (
                                                                            <p 
                                                                                className={`text-xs mt-1.5 ${
                                                                                    action.type === 'action' ? 'font-medium' : ''
                                                                                }`}
                                                                                style={{ 
                                                                                    color: action.type === 'action' 
                                                                                        ? 'rgb(251, 191, 36)' 
                                                                                        : action.type === 'success'
                                                                                        ? 'rgb(34, 197, 94)'
                                                                                        : 'rgb(var(--color-text))',
                                                                                    opacity: action.type === 'info' ? 0.7 : 1
                                                                                }}
                                                                            >
                                                                                {action.type === 'action' && '→ '}
                                                                                {action.text}
                                                                            </p>
                                                                        );
                                                                    })()}
                                                                </div>
                                                                
                                                                {/* Action Button */}
                                                                <button className="flex-shrink-0 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                                                                    <ArrowRight className="w-4 h-4" style={{ color: 'rgb(var(--color-text))', opacity: 0.6 }} />
                                                                </button>
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Completed (if any) */}
                                    {projectCategories.completed.length > 0 && (
                                        <div>
                                            <div className="flex items-center gap-3 mb-4">
                                                <div 
                                                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                                                    style={{
                                                        backgroundColor: 'rgba(34, 197, 94, 0.1)'
                                                    }}
                                                >
                                                    <CheckCircle className="w-5 h-5" style={{ color: 'rgb(34, 197, 94)' }} />
                                                </div>
                                                <div>
                                                    <h2 
                                                        className="text-xl font-bold"
                                                        style={{ color: 'rgb(var(--color-title))' }}
                                                    >
                                                        Completed ({projectCategories.completed.length})
                                                    </h2>
                                                    <p 
                                                        className="text-sm"
                                                        style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}
                                                    >
                                                        Finished projects archive
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                                {projectCategories.completed.slice(0, 6).map((project) => (
                                                    <Card 
                                                        key={project.id}
                                                        className="hover:shadow-md transition-all duration-200 opacity-75"
                                                        style={{
                                                            backgroundColor: 'rgba(var(--color-bg), 0.95)',
                                                            borderColor: 'rgb(var(--color-border))'
                                                        }}
                                                    >
                                                        <CardContent className="p-5">
                                                            <div className="flex items-start justify-between mb-3">
                                                                <div className="flex-1 min-w-0">
                                                                    <h3 
                                                                        className="font-semibold text-base mb-1 truncate"
                                                                        style={{ color: 'rgb(var(--color-title))' }}
                                                                    >
                                                                        {project.projectName}
                                                                    </h3>
                                                                    <p 
                                                                        className="text-xs"
                                                                        style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}
                                                                    >
                                                                        {project.serviceType}
                                                                    </p>
                                                                </div>
                                                                <CheckCircle className="w-4 h-4" style={{ color: 'rgb(34, 197, 94)' }} />
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                ))}
                                            </div>
                                            {projectCategories.completed.length > 6 && (
                                                <button
                                                    onClick={() => setActiveTab('projects')}
                                                    className="text-sm font-medium mt-4"
                                                    style={{ color: 'rgb(var(--btn-primary-bg))' }}
                                                >
                                                    View all {projectCategories.completed.length} completed projects →
                                                </button>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Empty State */}
                            {projects.length === 0 && (
                                <Card 
                                    className="text-center py-12"
                                    style={{
                                        backgroundColor: 'rgba(var(--color-bg), 0.95)',
                                        borderColor: 'rgb(var(--color-border))'
                                    }}
                                >
                                    <CardContent>
                                        <div 
                                            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                                            style={{
                                                backgroundColor: 'rgba(var(--btn-primary-bg), 0.1)'
                                            }}
                                        >
                                            <Package className="w-8 h-8" style={{ color: 'rgb(var(--btn-primary-bg))' }} />
                                        </div>
                                        <h3 
                                            className="text-xl font-semibold mb-2"
                                            style={{ color: 'rgb(var(--color-title))' }}
                                        >
                                            No Projects Yet
                                        </h3>
                                        <p 
                                            className="mb-6 max-w-md mx-auto"
                                            style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}
                                        >
                                            You haven't created any projects yet. Start by creating your first project to see it here.
                                        </p>
                                        <button
                                            onClick={() => setIsModalOpen(true)}
                                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors"
                                            style={{ backgroundColor: 'rgb(var(--btn-primary-bg))', color: 'rgb(var(--btn-primary-text))' }}
                                        >
                                            <Plus className="w-5 h-5" /> Create Your First Project
                                        </button>
                                    </CardContent>
                                </Card>
                            )}
                        </div>
                    )}

                    {/* Profile Tab */}
                    {activeTab === 'profile' && (
                        <div className="grid gap-6 md:grid-cols-2">
                            {/* Account Information */}
                            <Card 
                                style={{
                                    backgroundColor: 'rgba(var(--color-bg), 0.95)',
                                    borderColor: 'rgb(var(--color-border))'
                                }}
                            >
                                <CardHeader>
                                    <CardTitle 
                                        className="text-xl flex items-center gap-2"
                                        style={{ color: 'rgb(var(--color-title))' }}
                                    >
                                        <User className="w-5 h-5" />
                                        Account Information
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <label 
                                            className="text-sm font-medium block mb-1"
                                            style={{ color: 'rgb(var(--color-text))' }}
                                        >
                                            Full Name
                                        </label>
                                        <p 
                                            className="text-base"
                                            style={{ color: 'rgb(var(--color-title))' }}
                                        >
                                            {user.fullName || 'Not provided'}
                                        </p>
                                    </div>
                                    <div>
                                        <label 
                                            className="text-sm font-medium block mb-1"
                                            style={{ color: 'rgb(var(--color-text))' }}
                                        >
                                            Email
                                        </label>
                                        <p 
                                            className="text-base"
                                            style={{ color: 'rgb(var(--color-title))' }}
                                        >
                                            {user.email}
                                        </p>
                                    </div>
                                    {user.companyName && (
                                        <div>
                                            <label 
                                                className="text-sm font-medium block mb-1"
                                                style={{ color: 'rgb(var(--color-text))' }}
                                            >
                                                Company
                                            </label>
                                            <p 
                                                className="text-base"
                                                style={{ color: 'rgb(var(--color-title))' }}
                                            >
                                                {user.companyName}
                                            </p>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>

                            {/* Business Information */}
                            <Card 
                                style={{
                                    backgroundColor: 'rgba(var(--color-bg), 0.95)',
                                    borderColor: 'rgb(var(--color-border))'
                                }}
                            >
                                <CardHeader>
                                    <CardTitle 
                                        className="text-xl flex items-center gap-2"
                                        style={{ color: 'rgb(var(--color-title))' }}
                                    >
                                        <Building2 className="w-5 h-5" />
                                        Business Information
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <label 
                                            className="text-sm font-medium block mb-1"
                                            style={{ color: 'rgb(var(--color-text))' }}
                                        >
                                            Business Type
                                        </label>
                                        <p 
                                            className="text-base"
                                            style={{ color: 'rgb(var(--color-title))' }}
                                        >
                                            {formatClientType(user.clientType)}
                                        </p>
                                    </div>
                                    <div>
                                        <label 
                                            className="text-sm font-medium block mb-1"
                                            style={{ color: 'rgb(var(--color-text))' }}
                                        >
                                            Services Needed
                                        </label>
                                        <p 
                                            className="text-base"
                                            style={{ color: 'rgb(var(--color-title))' }}
                                        >
                                            {formatServices(user.primaryService)}
                                        </p>
                                    </div>
                                    <div>
                                        <label 
                                            className="text-sm font-medium block mb-1"
                                            style={{ color: 'rgb(var(--color-text))' }}
                                        >
                                            Project Volume
                                        </label>
                                        <p 
                                            className="text-base"
                                            style={{ color: 'rgb(var(--color-title))' }}
                                        >
                                            {formatProjectVolume(user.projectVolume)}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Technical Information */}
                            <Card 
                                style={{
                                    backgroundColor: 'rgba(var(--color-bg), 0.95)',
                                    borderColor: 'rgb(var(--color-border))'
                                }}
                            >
                                <CardHeader>
                                    <CardTitle 
                                        className="text-xl flex items-center gap-2"
                                        style={{ color: 'rgb(var(--color-title))' }}
                                    >
                                        <Settings className="w-5 h-5" />
                                        Technical Information
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <label 
                                            className="text-sm font-medium block mb-1"
                                            style={{ color: 'rgb(var(--color-text))' }}
                                        >
                                            CAD Software
                                        </label>
                                        <p 
                                            className="text-base"
                                            style={{ color: 'rgb(var(--color-title))' }}
                                        >
                                            {formatCadSoftware(user.cadSoftware)}
                                        </p>
                                    </div>
                                    <div>
                                        <label 
                                            className="text-sm font-medium block mb-1"
                                            style={{ color: 'rgb(var(--color-text))' }}
                                        >
                                            Required Outputs
                                        </label>
                                        <p 
                                            className="text-base"
                                            style={{ color: 'rgb(var(--color-title))' }}
                                        >
                                            {formatOutputs(user.requiredOutputs)}
                                        </p>
                                    </div>
                                    {user.referralSource && (
                                        <div>
                                            <label 
                                                className="text-sm font-medium block mb-1"
                                                style={{ color: 'rgb(var(--color-text))' }}
                                            >
                                                How you heard about us
                                            </label>
                                            <p 
                                                className="text-base"
                                                style={{ color: 'rgb(var(--color-title))' }}
                                            >
                                                {user.referralSource}
                                            </p>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {/* Projects Tab */}
                    {activeTab === 'projects' && (
                        <div className="space-y-6">
                            {projects.length === 0 ? (
                                <Card 
                                    style={{
                                        backgroundColor: 'rgba(var(--color-bg), 0.95)',
                                        borderColor: 'rgb(var(--color-border))'
                                    }}
                                >
                                    <CardContent className="text-center py-12">
                                        <div 
                                            className="text-6xl mb-4 mx-auto w-20 h-20 rounded-full flex items-center justify-center"
                                            style={{
                                                backgroundColor: 'rgba(var(--btn-primary-bg), 0.1)',
                                                color: 'rgb(var(--btn-primary-bg))'
                                            }}
                                        >
                                            📋
                                        </div>
                                        <h3 
                                            className="text-xl font-semibold mb-2"
                                            style={{ color: 'rgb(var(--color-title))' }}
                                        >
                                            No Projects Yet
                                        </h3>
                                        <p 
                                            className="mb-6"
                                            style={{ color: 'rgb(var(--color-text))' }}
                                        >
                                            You haven't created any projects yet. Start by creating your first project.
                                        </p>
                                        <Button
                                            onClick={() => setIsModalOpen(true)}
                                            className="btn-primary"
                                        >
                                            <Plus className="w-4 h-4 mr-2" />
                                            Create Your First Project
                                        </Button>
                                    </CardContent>
                                </Card>
                            ) : (
                                <>
                                    {/* Filters and Controls */}
                                    <Card 
                                        style={{
                                            backgroundColor: 'rgba(var(--color-bg), 0.95)',
                                            borderColor: 'rgb(var(--color-border))'
                                        }}
                                    >
                                        <CardContent className="p-6">
                                            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                                                {/* Search */}
                                                <div className="relative flex-1 w-full lg:max-w-md">
                                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: 'rgb(var(--color-text))', opacity: 0.5 }} />
                                                    <input
                                                        type="text"
                                                        placeholder="Search by order number, name, or service..."
                                                        value={searchQuery}
                                                        onChange={(e) => setSearchQuery(e.target.value)}
                                                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all"
                                                        style={{
                                                            backgroundColor: 'rgba(var(--color-bg), 1)',
                                                            borderColor: 'rgb(var(--color-border))',
                                                            color: 'rgb(var(--color-text))',
                                                            focusRingColor: 'rgb(var(--btn-primary-bg))'
                                                        }}
                                                    />
                                                </div>

                                                {/* Filters */}
                                                <div className="flex flex-wrap gap-3 items-center">
                                                    <select
                                                        value={statusFilter}
                                                        onChange={(e) => setStatusFilter(e.target.value)}
                                                        className="px-4 py-2.5 rounded-lg border text-sm font-medium focus:outline-none focus:ring-2 transition-all"
                                                        style={{
                                                            backgroundColor: 'rgba(var(--color-bg), 1)',
                                                            borderColor: 'rgb(var(--color-border))',
                                                            color: 'rgb(var(--color-text))'
                                                        }}
                                                    >
                                                        <option value="all">All Statuses</option>
                                                        <option value="ready">Ready for Download</option>
                                                        <option value="inProgress">In Progress</option>
                                                        <option value="pending">Pending</option>
                                                        <option value="completed">Completed</option>
                                                    </select>

                                                    <select
                                                        value={serviceFilter}
                                                        onChange={(e) => setServiceFilter(e.target.value)}
                                                        className="px-4 py-2.5 rounded-lg border text-sm font-medium focus:outline-none focus:ring-2 transition-all"
                                                        style={{
                                                            backgroundColor: 'rgba(var(--color-bg), 1)',
                                                            borderColor: 'rgb(var(--color-border))',
                                                            color: 'rgb(var(--color-text))'
                                                        }}
                                                    >
                                                        <option value="all">All Services</option>
                                                        <option value="3D CAD Modeling">3D CAD Modeling</option>
                                                        <option value="3D Rendering & Animation">3D Rendering & Animation</option>
                                                    </select>

                                                    {/* View Toggle */}
                                                    <div className="flex items-center gap-1 p-1 rounded-lg border" style={{ borderColor: 'rgb(var(--color-border))', backgroundColor: 'rgba(var(--color-bg), 0.5)' }}>
                                                        <button
                                                            onClick={() => setViewMode('cards')}
                                                            className={`p-2 rounded transition-all ${viewMode === 'cards' ? '' : 'opacity-50'}`}
                                                            style={{
                                                                backgroundColor: viewMode === 'cards' ? 'rgba(var(--btn-primary-bg), 0.1)' : 'transparent',
                                                                color: viewMode === 'cards' ? 'rgb(var(--btn-primary-bg))' : 'rgb(var(--color-text))'
                                                            }}
                                                            title="Card View"
                                                        >
                                                            <Grid3x3 className="w-4 h-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => setViewMode('table')}
                                                            className={`p-2 rounded transition-all ${viewMode === 'table' ? '' : 'opacity-50'}`}
                                                            style={{
                                                                backgroundColor: viewMode === 'table' ? 'rgba(var(--btn-primary-bg), 0.1)' : 'transparent',
                                                                color: viewMode === 'table' ? 'rgb(var(--btn-primary-bg))' : 'rgb(var(--color-text))'
                                                            }}
                                                            title="Table View"
                                                        >
                                                            <List className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Results Count */}
                                            <div className="mt-4 pt-4 border-t" style={{ borderColor: 'rgb(var(--color-border))' }}>
                                                <p className="text-sm" style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}>
                                                    Showing <strong>{filteredProjects.length}</strong> of <strong>{projects.length}</strong> orders
                                                    {searchQuery && ` matching "${searchQuery}"`}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Table View */}
                                    {viewMode === 'table' && filteredProjects.length > 0 && (
                                        <Card 
                                            style={{
                                                backgroundColor: 'rgba(var(--color-bg), 0.95)',
                                                borderColor: 'rgb(var(--color-border))'
                                            }}
                                        >
                                            <CardContent className="p-0">
                                                <div className="overflow-x-auto">
                                                    <table className="w-full">
                                                        <thead>
                                                            <tr className="border-b" style={{ borderColor: 'rgb(var(--color-border))', backgroundColor: 'rgba(var(--color-bg), 0.5)' }}>
                                                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgb(var(--color-text))' }}>
                                                                    Order #
                                                                </th>
                                                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgb(var(--color-text))' }}>
                                                                    Project Name
                                                                </th>
                                                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgb(var(--color-text))' }}>
                                                                    Service
                                                                </th>
                                                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgb(var(--color-text))' }}>
                                                                    Status
                                                                </th>
                                                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgb(var(--color-text))' }}>
                                                                    Manager
                                                                </th>
                                                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgb(var(--color-text))' }}>
                                                                    Progress
                                                                </th>
                                                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgb(var(--color-text))' }}>
                                                                    Est. Delivery
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y" style={{ borderColor: 'rgb(var(--color-border))' }}>
                                                            {filteredProjects.map((project) => (
                                                                <tr 
                                                                    key={project.id}
                                                                    className="hover:bg-opacity-50 transition-colors"
                                                                    style={{ 
                                                                        backgroundColor: 'rgba(var(--color-bg), 0.3)',
                                                                        borderColor: 'rgb(var(--color-border))'
                                                                    }}
                                                                >
                                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                                        <div className="flex items-center gap-2">
                                                                            <Hash className="w-4 h-4" style={{ color: 'rgb(var(--color-text))', opacity: 0.5 }} />
                                                                            <span className="text-sm font-mono font-medium" style={{ color: 'rgb(var(--color-title))' }}>
                                                                                {formatOrderNumber(project.id, project.createdAt)}
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td className="px-6 py-4">
                                                                        <div className="text-sm font-semibold" style={{ color: 'rgb(var(--color-title))' }}>
                                                                            {project.projectName}
                                                                        </div>
                                                                        {project.serviceDetail && (
                                                                            <div className="text-xs mt-1" style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}>
                                                                                {project.serviceDetail}
                                                                            </div>
                                                                        )}
                                                                    </td>
                                                                    <td className="px-6 py-4">
                                                                        <span className="text-sm" style={{ color: 'rgb(var(--color-text))' }}>
                                                                            {project.serviceType}
                                                                        </span>
                                                                    </td>
                                                                    <td className="px-6 py-4">
                                                                        <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                                                                            {getStatusText(project.status)}
                                                                        </span>
                                                                    </td>
                                                                    <td className="px-6 py-4">
                                                                        <span className="text-sm" style={{ color: 'rgb(var(--color-text))' }}>
                                                                            {project.projectManager || '—'}
                                                                        </span>
                                                                    </td>
                                                                    <td className="px-6 py-4">
                                                                        <div className="flex items-center gap-2">
                                                                            <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                                                                <div
                                                                                    className="h-2 rounded-full transition-all"
                                                                                    style={{ 
                                                                                        width: `${project.progress}%`,
                                                                                        backgroundColor: project.progress === 100 ? 'rgb(34, 197, 94)' : 'rgb(var(--btn-primary-bg))'
                                                                                    }}
                                                                                ></div>
                                                                            </div>
                                                                            <span className="text-xs font-medium w-10 text-right" style={{ color: 'rgb(var(--color-text))' }}>
                                                                                {project.progress}%
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td className="px-6 py-4">
                                                                        <span className="text-sm" style={{ color: 'rgb(var(--color-text))' }}>
                                                                            {project.estimatedDelivery ? formatDate(project.estimatedDelivery) : '—'}
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    )}

                                    {/* Card View - Grouped by Date for Bulk Orders */}
                                    {viewMode === 'cards' && filteredProjects.length > 0 && (
                                        <div className="space-y-8">
                                            {Object.entries(groupedByDate).map(([date, dateProjects]) => (
                                                <div key={date}>
                                                    {/* Date Header */}
                                                    <div className="flex items-center gap-3 mb-4">
                                                        <div 
                                                            className="w-10 h-10 rounded-lg flex items-center justify-center"
                                                            style={{
                                                                backgroundColor: 'rgba(var(--btn-primary-bg), 0.1)'
                                                            }}
                                                        >
                                                            <Calendar className="w-5 h-5" style={{ color: 'rgb(var(--btn-primary-bg))' }} />
                                                        </div>
                                                        <div>
                                                            <h3 
                                                                className="text-lg font-bold"
                                                                style={{ color: 'rgb(var(--color-title))' }}
                                                            >
                                                                {date}
                                                            </h3>
                                                            <p 
                                                                className="text-sm"
                                                                style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}
                                                            >
                                                                {dateProjects.length} {dateProjects.length === 1 ? 'order' : 'orders'}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Projects Grid */}
                                                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                                        {dateProjects.map((project) => (
                                                            <Card 
                                                                key={project.id}
                                                                className="hover:shadow-lg transition-all duration-200"
                                                                style={{
                                                                    backgroundColor: 'rgba(var(--color-bg), 0.95)',
                                                                    borderColor: 'rgb(var(--color-border))'
                                                                }}
                                                            >
                                                                <CardContent className="p-5">
                                                                    {/* Order Number */}
                                                                    <div className="flex items-center gap-2 mb-3">
                                                                        <Hash className="w-3.5 h-3.5" style={{ color: 'rgb(var(--color-text))', opacity: 0.5 }} />
                                                                        <span className="text-xs font-mono font-semibold" style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}>
                                                                            {formatOrderNumber(project.id, project.createdAt)}
                                                                        </span>
                                                                    </div>

                                                                    {/* Project Name */}
                                                                    <h3 
                                                                        className="font-semibold text-sm mb-2 line-clamp-2"
                                                                        style={{ color: 'rgb(var(--color-title))' }}
                                                                    >
                                                                        {project.projectName}
                                                                    </h3>

                                                                    {/* Service Type */}
                                                                    <p 
                                                                        className="text-xs mb-3"
                                                                        style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}
                                                                    >
                                                                        {project.serviceType}
                                                                    </p>

                                                                    {/* Status Badge */}
                                                                    <div className="mb-3">
                                                                        <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                                                                            {getStatusText(project.status)}
                                                                        </span>
                                                                    </div>

                                                                    {/* Project Manager */}
                                                                    {project.projectManager && (
                                                                        <div className="flex items-center gap-1.5 mb-3">
                                                                            <User className="w-3 h-3" style={{ color: 'rgb(var(--color-text))', opacity: 0.5 }} />
                                                                            <span className="text-xs" style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}>
                                                                                {project.projectManager}
                                                                            </span>
                                                                        </div>
                                                                    )}

                                                                    {/* Progress */}
                                                                    <div className="mb-2">
                                                                        <div className="flex justify-between items-center mb-1">
                                                                            <span className="text-xs font-medium" style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}>
                                                                                Progress
                                                                            </span>
                                                                            <span className="text-xs font-semibold" style={{ color: 'rgb(var(--color-text))' }}>
                                                                                {project.progress}%
                                                                            </span>
                                                                        </div>
                                                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                                                                            <div
                                                                                className="h-1.5 rounded-full transition-all"
                                                                                style={{ 
                                                                                    width: `${project.progress}%`,
                                                                                    backgroundColor: project.progress === 100 ? 'rgb(34, 197, 94)' : 'rgb(var(--btn-primary-bg))'
                                                                                }}
                                                                            ></div>
                                                                        </div>
                                                                    </div>

                                                                    {/* Estimated Delivery */}
                                                                    {project.estimatedDelivery && (
                                                                        <div className="flex items-center gap-1.5 mt-3 pt-3 border-t" style={{ borderColor: 'rgb(var(--color-border))' }}>
                                                                            <Clock className="w-3 h-3" style={{ color: 'rgb(var(--color-text))', opacity: 0.5 }} />
                                                                            <span className="text-xs" style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}>
                                                                                {formatDate(project.estimatedDelivery)}
                                                                            </span>
                                                                        </div>
                                                                    )}
                                                                </CardContent>
                                                            </Card>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* No Results */}
                                    {filteredProjects.length === 0 && (
                                        <Card 
                                            style={{
                                                backgroundColor: 'rgba(var(--color-bg), 0.95)',
                                                borderColor: 'rgb(var(--color-border))'
                                            }}
                                        >
                                            <CardContent className="text-center py-12">
                                                <Search className="w-12 h-12 mx-auto mb-4" style={{ color: 'rgb(var(--color-text))', opacity: 0.3 }} />
                                                <h3 
                                                    className="text-lg font-semibold mb-2"
                                                    style={{ color: 'rgb(var(--color-title))' }}
                                                >
                                                    No Orders Found
                                                </h3>
                                                <p 
                                                    className="text-sm mb-4"
                                                    style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}
                                                >
                                                    {searchQuery || statusFilter !== 'all' || serviceFilter !== 'all'
                                                        ? 'Try adjusting your filters or search query.'
                                                        : 'No projects match your criteria.'}
                                                </p>
                                                {(searchQuery || statusFilter !== 'all' || serviceFilter !== 'all') && (
                                                    <button
                                                        onClick={() => {
                                                            setSearchQuery('');
                                                            setStatusFilter('all');
                                                            setServiceFilter('all');
                                                        }}
                                                        className="text-sm font-medium"
                                                        style={{ color: 'rgb(var(--btn-primary-bg))' }}
                                                    >
                                                        Clear all filters
                                                    </button>
                                                )}
                                            </CardContent>
                                        </Card>
                                    )}
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Project Creation Modal */}
            <ProjectCreationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onProjectCreated={() => {
                    setIsModalOpen(false);
                    setActiveTab('projects');
                    window.location.reload();
                }}
            />
        </>
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
    }, [searchParams]);

    if (loading) {
        return (
            <div className="background min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div 
                        className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4"
                        style={{ borderColor: 'rgb(var(--btn-primary-bg))' }}
                    ></div>
                    <p style={{ color: 'rgb(var(--color-text))' }}>Loading your profile...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="background min-h-screen flex items-center justify-center">
                <Card 
                    className="w-full max-w-md mx-4"
                    style={{
                        backgroundColor: 'rgba(var(--color-bg), 0.95)',
                        borderColor: 'rgb(var(--color-border))'
                    }}
                >
                    <CardContent className="text-center pt-6">
                        <div className="text-6xl mb-4">⚠️</div>
                        <h2 
                            className="text-xl font-semibold mb-2"
                            style={{ color: 'rgb(var(--color-title))' }}
                        >
                            Error Loading Profile
                        </h2>
                        <p 
                            className="mb-4"
                            style={{ color: 'rgb(var(--color-text))' }}
                        >
                            {error}
                        </p>
                        <Button
                            onClick={() => window.location.reload()}
                            className="btn-primary"
                        >
                            Refresh Page
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="background min-h-screen flex items-center justify-center">
                <Card 
                    className="w-full max-w-md mx-4"
                    style={{
                        backgroundColor: 'rgba(var(--color-bg), 0.95)',
                        borderColor: 'rgb(var(--color-border))'
                    }}
                >
                    <CardContent className="text-center pt-6">
                        <div className="text-6xl mb-4">🚫</div>
                        <h2 
                            className="text-xl font-semibold mb-2"
                            style={{ color: 'rgb(var(--color-title))' }}
                        >
                            Access Denied
                        </h2>
                        <p 
                            className="mb-4"
                            style={{ color: 'rgb(var(--color-text))' }}
                        >
                            Please log in to access your profile.
                        </p>
                        <Button
                            onClick={() => router.push('/client/login')}
                            className="btn-primary"
                        >
                            Go to Login
                        </Button>
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
            <div className="background min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div 
                        className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4"
                        style={{ borderColor: 'rgb(var(--btn-primary-bg))' }}
                    ></div>
                    <p style={{ color: 'rgb(var(--color-text))' }}>Loading your profile...</p>
                </div>
            </div>
        }>
            <Profile />
        </Suspense>
    );
};

export default ProfileWithSuspense;
