"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createProject } from '@/services/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { PlusIcon, X, FolderOpen } from 'lucide-react';

interface ProjectCreationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onProjectCreated?: () => void;
}

const ProjectCreationModal: React.FC<ProjectCreationModalProps> = ({ isOpen, onClose, onProjectCreated }) => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        serviceType: '',
        serviceDetail: '',
        projectName: '',
        description: '',
        files: [] as File[]
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const serviceTypeOptions = [
        '3D CAD Modeling',
        '3D Rendering & Animation'
    ];

    const getServiceDetailOptions = (serviceType: string) => {
        if (serviceType === '3D CAD Modeling') {
            return [
                'Modeling from Scratch (Sketch/Reference)',
                'Modeling from Sample (Photo/Physical Item)',
                'CAD Correction/Optimization'
            ];
        } else if (serviceType === '3D Rendering & Animation') {
            return [
                'Still Shots (White Background, 3 Views)',
                'Lifestyle Packshot (Complex Scene, 5 Views)',
                '360° Turntable Animation (10-15 sec)',
                'On-Body Video Animation'
            ];
        }
        return [];
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value,
            ...(field === 'serviceType' && { serviceDetail: '' }) // Reset service detail when service type changes
        }));
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            if (!formData.serviceType || !formData.projectName) {
                throw new Error('Please fill in all required fields');
            }

            // For now, we'll just store file names. File upload handling can be added later
            const fileNames = formData.files.map(file => file.name);

            const projectData = {
                serviceType: formData.serviceType,
                serviceDetail: formData.serviceDetail || undefined,
                projectName: formData.projectName,
                description: formData.description || undefined,
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
            setError(err.message || 'Failed to create project');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={handleBackdropClick}
        >
            <Card
                className="w-full max-w-2xl"
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
                        Fill out the form below and we'll prepare a quote for your project.
                    </p>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Service Type */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="serviceType">Service Type *</Label>
                                <select
                                    id="serviceType"
                                    value={formData.serviceType}
                                    onChange={(e) => handleInputChange('serviceType', e.target.value)}
                                    className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-input dark:border-input dark:text-foreground"
                                    style={{ borderColor: 'rgb(var(--color-border))' }}
                                    required
                                >
                                    <option value="">Select a service type</option>
                                    {serviceTypeOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Service Detail */}
                            {formData.serviceType && (
                                <div className="space-y-2">
                                    <Label htmlFor="serviceDetail">Service Detail</Label>
                                    <select
                                        id="serviceDetail"
                                        value={formData.serviceDetail}
                                        onChange={(e) => handleInputChange('serviceDetail', e.target.value)}
                                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-input dark:border-input dark:text-foreground"
                                        style={{ borderColor: 'rgb(var(--color-border))' }}
                                    >
                                        <option value="">Select a service detail (optional)</option>
                                        {getServiceDetailOptions(formData.serviceType).map(option => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                    </select>
                                </div>
                            )}
                        </div>

                        {/* Project Name */}
                        <div className="space-y-2">
                            <Label htmlFor="projectName">Project Name *</Label>
                            <Input
                                id="projectName"
                                type="text"
                                value={formData.projectName}
                                onChange={(e) => handleInputChange('projectName', e.target.value)}
                                placeholder="Enter project name"
                                required
                            />
                        </div>

                        {/* Project Description */}
                        <div className="space-y-2">
                            <Label htmlFor="description">Project Description</Label>
                            <Textarea
                                id="description"
                                value={formData.description}
                                onChange={(e) => handleInputChange('description', e.target.value)}
                                rows={3}
                                placeholder="Describe your project requirements..."
                            />
                        </div>

                        {/* File Upload */}
                        <div className="space-y-2">
                            <Label htmlFor="files">Upload Files (References, Sketches, CAD)</Label>
                            <Input
                                id="files"
                                type="file"
                                multiple
                                onChange={handleFileChange}
                                accept=".jpg,.jpeg,.png,.pdf,.dwg,.stl,.obj,.fbx,.blend,.zip"
                            />
                            {formData.files.length > 0 && (
                                <div className="space-y-2 mt-2">
                                    <p className="text-sm text-muted-foreground">Selected files:</p>
                                    {formData.files.map((file, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between bg-muted px-3 py-2 rounded"
                                        >
                                            <span className="text-sm truncate">{file.name}</span>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => removeFile(index)}
                                                className="h-6 w-6 p-0 text-destructive hover:text-destructive/80"
                                            >
                                                <X className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 rounded-md">
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
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                disabled={isSubmitting}
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
