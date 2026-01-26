"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { createProject } from '@/services/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { X, FolderOpen, Upload, File, CheckCircle2 } from 'lucide-react';
import { pricingTiers, PricingTier } from '@/config/pricing.config';
import { useUserStore } from '@/store/useUserStore';

interface ProjectCreationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onProjectCreated?: () => void;
    initialServiceType?: string;
    initialServiceDetail?: string;
}

// Backend enum mappings (from project.entity.ts)
enum ServiceType {
    CAD_MODELING = '3D CAD Modeling',
    RENDERING_ANIMATION = '3D Rendering & Animation',
}

enum ServiceDetail {
    // CAD Modeling
    MODELING_FROM_SCRATCH = 'Modeling from Scratch (Sketch/Reference)',
    MODELING_FROM_SAMPLE = 'Modeling from Sample (Photo/Physical Item)',
    CAD_CORRECTION_OPTIMIZATION = 'CAD Correction/Optimization',
    DIGITAL_SCULPTING = 'Digital Sculpting (Organic Forms & Free-Form Designs)',
    
    // Rendering & Animation
    STILL_SHOTS_WHITE_BACKGROUND = 'Still Shots (White Background, 3 Views)',
    LIFESTYLE_PACKSHOT = 'Lifestyle Packshot (Complex Scene, 5 Views)',
    TURNAROUND_ANIMATION = '360° Turntable Animation (10-15 sec)',
    ON_BODY_VIDEO_ANIMATION = 'On-Body Video Animation',
}

const ProjectCreationModal: React.FC<ProjectCreationModalProps> = ({ 
    isOpen, 
    onClose, 
    onProjectCreated,
    initialServiceType = '',
    initialServiceDetail = ''
}) => {
    const router = useRouter();
    const { role } = useUserStore();
    const [formData, setFormData] = useState({
        serviceType: initialServiceType,
        serviceDetail: initialServiceDetail,
        projectName: '',
        description: '',
        files: [] as File[]
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [isDragging, setIsDragging] = useState(false);
    const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

    // Extract unique service types from pricing config
    const getServiceTypes = (): string[] => {
        const types = new Set<string>();
        pricingTiers.forEach(tier => {
            if (tier.serviceType) {
                types.add(tier.serviceType);
            }
        });
        return Array.from(types).sort();
    };

    // Get ALL service details for a specific service type (from backend enum, not just pricing config)
    const getServiceDetailsForType = (serviceType: string): string[] => {
        // Return all possible service details from backend enum based on service type
        if (serviceType === ServiceType.CAD_MODELING) {
            return [
                ServiceDetail.MODELING_FROM_SCRATCH,
                ServiceDetail.MODELING_FROM_SAMPLE,
                ServiceDetail.CAD_CORRECTION_OPTIMIZATION,
                ServiceDetail.DIGITAL_SCULPTING
            ];
        } else if (serviceType === ServiceType.RENDERING_ANIMATION) {
            return [
                ServiceDetail.STILL_SHOTS_WHITE_BACKGROUND,
                ServiceDetail.LIFESTYLE_PACKSHOT,
                ServiceDetail.TURNAROUND_ANIMATION,
                ServiceDetail.ON_BODY_VIDEO_ANIMATION
            ];
        }
        return [];
    };

    // Update form data when modal opens with initial values
    useEffect(() => {
        if (isOpen) {
            // Check if user is logged in when modal opens
            if (!role) {
                setError('You must be logged in to create a project.');
                setTimeout(() => {
                    onClose();
                    router.push('/client/login');
                }, 2000);
                return;
            }

            setFormData({
                serviceType: initialServiceType || '',
                serviceDetail: initialServiceDetail || '',
                projectName: '',
                description: '',
                files: []
            });
            setError('');
            setValidationErrors({});
        } else {
            // Reset form when modal closes
            setFormData({
                serviceType: '',
                serviceDetail: '',
                projectName: '',
                description: '',
                files: []
            });
            setError('');
            setValidationErrors({});
        }
    }, [isOpen, initialServiceType, initialServiceDetail, role, onClose, router]);

    // Validate form fields
    const validateForm = (): boolean => {
        const errors: Record<string, string> = {};

        if (!formData.serviceType || formData.serviceType.trim() === '') {
            errors.serviceType = 'Service Type is required';
        }

        if (!formData.serviceDetail || formData.serviceDetail.trim() === '') {
            errors.serviceDetail = 'Service Detail is required';
        }

        if (!formData.projectName || formData.projectName.trim() === '') {
            errors.projectName = 'Project Name is required';
        }

        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // Drag and drop handlers - MUST be called before any conditional returns (Rules of Hooks)
    const handleDragEnter = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    }, []);

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        const files = Array.from(e.dataTransfer.files);
        const validFiles = files.filter(file => {
            const extension = '.' + file.name.split('.').pop()?.toLowerCase();
            const allowedExtensions = ['.jpg', '.jpeg', '.png', '.pdf', '.dwg', '.stl', '.obj', '.fbx', '.blend', '.zip'];
            return allowedExtensions.includes(extension);
        });

        if (validFiles.length !== files.length) {
            setError('Some files were rejected. Allowed formats: JPG, PNG, PDF, DWG, STL, OBJ, FBX, BLEND, ZIP');
        }

        setFormData(prev => ({
            ...prev,
            files: [...prev.files, ...validFiles]
        }));
    }, []);

    // Check if form is valid for submit button
    const isFormValid = (): boolean => {
        return !!(
            formData.serviceType &&
            formData.serviceType.trim() !== '' &&
            formData.serviceDetail &&
            formData.serviceDetail.trim() !== '' &&
            formData.projectName &&
            formData.projectName.trim() !== ''
        );
    };

    // Early return AFTER all hooks
    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value,
            ...(field === 'serviceType' && { serviceDetail: '' }) // Reset service detail when service type changes
        }));
        
        // Clear validation error for this field
        if (validationErrors[field]) {
            setValidationErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[field];
                return newErrors;
            });
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        setFormData(prev => ({
            ...prev,
            files: [...prev.files, ...files]
        }));
    };

    const removeFile = (index: number) => {
        setFormData(prev => ({
            ...prev,
            files: prev.files.filter((_, i) => i !== index)
        }));
    };

    const formatFileSize = (bytes: number): string => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Check if user is authenticated
        if (!role) {
            setError('You must be logged in to create a project. Redirecting to login...');
            setTimeout(() => {
                onClose();
                router.push('/client/login');
            }, 2000);
            return;
        }

        // Validate form
        if (!validateForm()) {
            setError('Please fill in all required fields correctly');
            return;
        }

        setIsSubmitting(true);

        try {
            // Map service type and detail to backend enum values
            const serviceType = formData.serviceType as ServiceType;
            const serviceDetail = formData.serviceDetail as ServiceDetail;

            // Extract file names for submission
            const fileNames = formData.files.map(file => file.name);

            const projectData = {
                serviceType: serviceType,
                serviceDetail: serviceDetail,
                projectName: formData.projectName.trim(),
                description: formData.description.trim() || undefined,
                files: fileNames.length > 0 ? fileNames : undefined
            };

            await createProject(projectData);

            if (onProjectCreated) {
                onProjectCreated();
            }

            // Reset form and redirect to profile page with success message
            setFormData({
                serviceType: '',
                serviceDetail: '',
                projectName: '',
                description: '',
                files: []
            });
            onClose();

            // Redirect to profile page with success message and switch to projects tab
            router.push('/profile?success=true#projects');
        } catch (err: any) {
            // Handle 401 Unauthorized specifically
            if (err.response?.status === 401) {
                setError('Your session has expired. Please log in again.');
                setTimeout(() => {
                    onClose();
                    router.push('/client/login');
                }, 2000);
            } else if (err.response?.status === 403) {
                setError('You do not have permission to create projects. Please contact support.');
            } else {
                setError(err.response?.data?.message || err.message || 'Failed to create project. Please try again.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const serviceTypeOptions = getServiceTypes();
    const serviceDetailOptions = formData.serviceType ? getServiceDetailsForType(formData.serviceType) : [];

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={handleBackdropClick}
        >
            <Card
                className="w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                style={{
                    backgroundColor: 'rgba(var(--color-bg), var(--color-bg-alpha, 1))',
                    borderColor: 'rgb(var(--color-border))'
                }}
            >
                <CardHeader className="text-center relative">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onClose}
                        className="absolute right-4 top-4"
                        style={{ color: 'rgb(var(--color-text))' }}
                    >
                        <X className="h-4 w-4" />
                    </Button>
                    <CardTitle
                        className="text-2xl font-bold flex items-center justify-center gap-3 pr-12"
                        style={{ color: 'rgb(var(--color-title))' }}
                    >
                        <FolderOpen className="h-6 w-6" />
                        Create New Project
                    </CardTitle>
                    <p style={{ color: 'rgb(var(--color-text))' }}>
                        Complete the form below with your project details. Our team will review your request and prepare a professional quote within 2 hours.
                    </p>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Service Type */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="serviceType" style={{ color: 'rgb(var(--color-title))' }}>
                                    Service Type <span className="text-red-500">*</span>
                                </Label>
                                <p className="text-xs" style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}>
                                    Choose the primary service category for your project
                                </p>
                                <select
                                    id="serviceType"
                                    value={formData.serviceType}
                                    onChange={(e) => handleInputChange('serviceType', e.target.value)}
                                    className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 transition-colors"
                                    style={{ 
                                        borderColor: validationErrors.serviceType 
                                            ? 'rgb(239, 68, 68)' 
                                            : 'rgb(var(--color-border))',
                                        backgroundColor: 'rgba(var(--color-bg), 1)',
                                        color: 'rgb(var(--color-text))'
                                    }}
                                    required
                                >
                                    <option value="">-- Select Service Type --</option>
                                    {serviceTypeOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                                {validationErrors.serviceType && (
                                    <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                                        <span>⚠</span> {validationErrors.serviceType}
                                    </p>
                                )}
                            </div>

                            {/* Service Detail */}
                            {formData.serviceType && (
                                <div className="space-y-2">
                                    <Label htmlFor="serviceDetail" style={{ color: 'rgb(var(--color-title))' }}>
                                        Service Detail <span className="text-red-500">*</span>
                                    </Label>
                                    <p className="text-xs" style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}>
                                        Specify the exact service you require
                                    </p>
                                    <select
                                        id="serviceDetail"
                                        value={formData.serviceDetail}
                                        onChange={(e) => handleInputChange('serviceDetail', e.target.value)}
                                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 transition-colors"
                                        style={{ 
                                            borderColor: validationErrors.serviceDetail 
                                                ? 'rgb(239, 68, 68)' 
                                                : 'rgb(var(--color-border))',
                                            backgroundColor: 'rgba(var(--color-bg), 1)',
                                            color: 'rgb(var(--color-text))'
                                        }}
                                        required
                                    >
                                        <option value="">-- Select Service Detail --</option>
                                        {serviceDetailOptions.map(option => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                    </select>
                                    {validationErrors.serviceDetail && (
                                        <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                                            <span>⚠</span> {validationErrors.serviceDetail}
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Project Name */}
                        <div className="space-y-2">
                            <Label htmlFor="projectName" style={{ color: 'rgb(var(--color-title))' }}>
                                Project Name <span className="text-red-500">*</span>
                            </Label>
                            <p className="text-xs" style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}>
                                Give your project a descriptive name for easy reference
                            </p>
                            <Input
                                id="projectName"
                                type="text"
                                value={formData.projectName}
                                onChange={(e) => handleInputChange('projectName', e.target.value)}
                                placeholder="e.g., Engagement Ring Collection 2024"
                                className="transition-colors"
                                style={{
                                    borderColor: validationErrors.projectName 
                                        ? 'rgb(239, 68, 68)' 
                                        : 'rgb(var(--color-border))'
                                }}
                                required
                            />
                            {validationErrors.projectName && (
                                <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                                    <span>⚠</span> {validationErrors.projectName}
                                </p>
                            )}
                        </div>

                        {/* Project Description */}
                        <div className="space-y-2">
                            <Label htmlFor="description" style={{ color: 'rgb(var(--color-title))' }}>
                                Project Description
                            </Label>
                            <p className="text-xs" style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}>
                                Provide detailed information about your project requirements, specifications, and any special requests
                            </p>
                            <Textarea
                                id="description"
                                value={formData.description}
                                onChange={(e) => handleInputChange('description', e.target.value)}
                                rows={4}
                                placeholder="Include details such as: design style, materials, gemstone specifications, dimensions, deadlines, and any specific requirements..."
                                style={{
                                    borderColor: 'rgb(var(--color-border))',
                                    backgroundColor: 'rgba(var(--color-bg), 1)',
                                    color: 'rgb(var(--color-text))'
                                }}
                            />
                        </div>

                        {/* File Upload - Drag & Drop */}
                        <div className="space-y-2">
                            <Label style={{ color: 'rgb(var(--color-title))' }}>
                                Upload Files (References, Sketches, CAD)
                            </Label>
                            <div
                                onDragEnter={handleDragEnter}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                                className={`border-2 border-dashed rounded-lg p-6 text-center transition-all ${
                                    isDragging 
                                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                                        : 'border-gray-300 dark:border-gray-700'
                                }`}
                                style={{
                                    borderColor: isDragging 
                                        ? 'rgb(var(--btn-primary-bg))' 
                                        : 'rgb(var(--color-border))',
                                    backgroundColor: isDragging 
                                        ? 'rgba(var(--btn-primary-bg), 0.1)' 
                                        : 'rgba(var(--color-bg), 0.5)'
                                }}
                            >
                                <Upload 
                                    className="mx-auto h-12 w-12 mb-4"
                                    style={{ color: 'rgb(var(--color-text))' }}
                                />
                                <p style={{ color: 'rgb(var(--color-text))' }} className="mb-2">
                                    {isDragging ? 'Drop files here' : 'Drag and drop files here, or click to select'}
                                </p>
                                <p className="text-sm mb-4" style={{ color: 'rgb(var(--color-text))' }}>
                                    Accepted formats: JPG, PNG, PDF, DWG, STL, OBJ, FBX, BLEND, ZIP
                                </p>
                                <Input
                                    type="file"
                                    multiple
                                    onChange={handleFileChange}
                                    accept=".jpg,.jpeg,.png,.pdf,.dwg,.stl,.obj,.fbx,.blend,.zip"
                                    className="hidden"
                                    id="file-upload"
                                />
                                <label htmlFor="file-upload">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="cursor-pointer"
                                        style={{
                                            borderColor: 'rgb(var(--color-border))',
                                            color: 'rgb(var(--color-text))'
                                        }}
                                    >
                                        Choose Files
                                    </Button>
                                </label>
                            </div>

                            {/* File List */}
                            {formData.files.length > 0 && (
                                <div className="space-y-2 mt-4">
                                    <p className="text-sm font-medium" style={{ color: 'rgb(var(--color-title))' }}>
                                        Selected files ({formData.files.length}):
                                    </p>
                                    <div className="space-y-2 max-h-40 overflow-y-auto">
                                        {formData.files.map((file, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-between px-3 py-2 rounded border"
                                                style={{
                                                    backgroundColor: 'rgba(var(--color-bg), 0.5)',
                                                    borderColor: 'rgb(var(--color-border))'
                                                }}
                                            >
                                                <div className="flex items-center gap-2 flex-1 min-w-0">
                                                    <File className="h-4 w-4 flex-shrink-0" style={{ color: 'rgb(var(--color-text))' }} />
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm truncate" style={{ color: 'rgb(var(--color-text))' }}>
                                                            {file.name}
                                                        </p>
                                                        <p className="text-xs" style={{ color: 'rgb(var(--color-text))' }}>
                                                            {formatFileSize(file.size)}
                                                        </p>
                                                    </div>
                                                </div>
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => removeFile(index)}
                                                    className="h-8 w-8 p-0 ml-2 flex-shrink-0"
                                                    style={{ color: 'rgb(239, 68, 68)' }}
                                                >
                                                    <X className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Authentication Warning */}
                        {!role && (
                            <div 
                                className="px-4 py-3 rounded-md border mb-4"
                                style={{
                                    backgroundColor: 'rgba(251, 191, 36, 0.1)',
                                    borderColor: 'rgba(251, 191, 36, 0.3)',
                                    color: 'rgb(217, 119, 6)'
                                }}
                            >
                                <p className="font-semibold mb-1">⚠️ Authentication Required</p>
                                <p className="text-sm">You must be logged in to create a project. Redirecting to login page...</p>
                            </div>
                        )}

                        {/* Error Message */}
                        {error && (
                            <div 
                                className="px-4 py-3 rounded-md border"
                                style={{
                                    backgroundColor: error.includes('session') || error.includes('logged in') || error.includes('expired')
                                        ? 'rgba(251, 191, 36, 0.1)'
                                        : 'rgba(239, 68, 68, 0.1)',
                                    borderColor: error.includes('session') || error.includes('logged in') || error.includes('expired')
                                        ? 'rgba(251, 191, 36, 0.3)'
                                        : 'rgba(239, 68, 68, 0.3)',
                                    color: error.includes('session') || error.includes('logged in') || error.includes('expired')
                                        ? 'rgb(217, 119, 6)'
                                        : 'rgb(239, 68, 68)'
                                }}
                            >
                                {error}
                            </div>
                        )}

                        {/* Submit Buttons */}
                        <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-end pt-4">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={onClose}
                                disabled={isSubmitting}
                                style={{
                                    borderColor: 'rgb(var(--color-border))',
                                    color: 'rgb(var(--color-text))'
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                disabled={isSubmitting || !isFormValid()}
                                className="btn-primary"
                            >
                                {isSubmitting ? 'Creating...' : 'Submit Project for Quote'}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default ProjectCreationModal;
