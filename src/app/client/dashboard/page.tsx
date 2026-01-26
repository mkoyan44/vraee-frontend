'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import {
  checkAuth,
  getUserProfile,
  getUserProjects,
  User,
  Project,
} from '@/services/dashboard';
import {
  Package, Clock, CheckCircle, TrendingUp, Plus, 
  Hash, Calendar, DollarSign, FileText, User as UserIcon,
  ArrowRight, Download
} from 'lucide-react';
import ProjectCreationModal from '@/components/modal/project-creation-modal';
import { useUserStore } from '@/store/useUserStore';
import Link from 'next/link';

const DashboardPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const { role } = useUserStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [user, setUser] = useState<User | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const initializeDashboard = async () => {
      try {
        const isAuth = await checkAuth();
        if (!isAuth) {
          router.push('/client/login');
          return;
        }
        setIsAuthenticated(true);

        const [userProfile, userProjects] = await Promise.all([
          getUserProfile(),
          getUserProjects()
        ]);

        setUser(userProfile);
        // Sort projects by creation date (newest first)
        setProjects(userProjects.sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        ));

      } catch (error) {
        console.error('Dashboard initialization failed:', error);
        router.push('/client/login');
      } finally {
        setIsLoading(false);
      }
    };

    initializeDashboard();
  }, [router]);

  // Format order number
  const formatOrderNumber = (id: number, createdAt: string) => {
    const year = new Date(createdAt).getFullYear();
    const paddedId = String(id).padStart(4, '0');
    return `VR-${year}-${paddedId}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Estimate cost based on service type (since cost isn't stored in DB)
  const estimateCost = (project: Project): string => {
    if (project.status === 'QUOTE_PENDING' || project.status === 'AWAITING_PAYMENT') {
      return 'Quote Pending';
    }
    
    // Rough estimates based on service type
    if (project.serviceType === '3D CAD Modeling') {
      if (project.serviceDetail?.includes('Essential') || project.serviceDetail?.includes('Basic')) {
        return '$20 - $80';
      } else if (project.serviceDetail?.includes('Advanced')) {
        return '$80 - $200';
      } else if (project.serviceDetail?.includes('Sculpting') || project.serviceDetail?.includes('Premium')) {
        return '$200+';
      }
      return '$80 - $200';
    } else if (project.serviceType === '3D Rendering & Animation') {
      if (project.serviceDetail?.includes('Starter') || project.serviceDetail?.includes('Still Shots')) {
        return '$70';
      } else if (project.serviceDetail?.includes('360') || project.serviceDetail?.includes('Turntable')) {
        return '$70 - $120';
      } else if (project.serviceDetail?.includes('Lifestyle') || project.serviceDetail?.includes('Packshot')) {
        return '$150 - $300';
      }
      return '$70 - $150';
    }
    
    return 'TBD';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'QUOTE_PENDING': return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
      case 'AWAITING_PAYMENT': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'COMPLETED': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'READY_FOR_DOWNLOAD': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'CANCELLED': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      default: return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
    }
  };

  const getStatusText = (status: string) => {
    const statusMap: Record<string, string> = {
      'QUOTE_PENDING': 'Quote Pending',
      'AWAITING_PAYMENT': 'Awaiting Payment',
      'PREPARATION': 'In Progress',
      'CAD_SCENE_SETUP': 'In Progress',
      'CAD_MODEL_CREATION': 'In Progress',
      'CAD_MODEL_AWAITING_APPROVAL': 'Awaiting Approval',
      'CAD_FINAL_OPTIMIZATION': 'In Progress',
      'CAD_FINAL_FILE_READY': 'Ready',
      'CAD_FILE_PREPARATION': 'In Progress',
      'SCENE_MATERIAL_SETUP': 'In Progress',
      'DRAFT_RENDER_AWAITING_APPROVAL': 'Awaiting Approval',
      'FINAL_HIGH_RES_RENDERING': 'In Progress',
      'FINAL_VISUALS_READY': 'Ready',
      'READY_FOR_DOWNLOAD': 'Ready for Download',
      'COMPLETED': 'Completed',
      'CANCELLED': 'Cancelled',
    };
    return statusMap[status] || status;
  };

  const isCompleted = (status: string) => {
    return status === 'COMPLETED' || status === 'READY_FOR_DOWNLOAD' || status === 'FINAL_VISUALS_READY' || status === 'CAD_FINAL_FILE_READY';
  };

  const isPending = (status: string) => {
    return status === 'QUOTE_PENDING' || status === 'AWAITING_PAYMENT';
  };

  if (isLoading) {
    return (
      <div className="background min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" style={{ borderColor: 'rgb(var(--btn-primary-bg))' }}></div>
          <p style={{ color: 'rgb(var(--color-text))' }}>Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="background min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Header */}
        <div className="mb-8 lg:mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h1 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2"
                style={{ color: 'rgb(var(--color-title))' }}
              >
                Work Dashboard
              </h1>
              <p 
                className="text-base sm:text-lg"
                style={{ color: 'rgb(var(--color-text))', opacity: 0.8 }}
              >
                Complete overview of all projects, services, and costs
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: 'rgb(var(--btn-primary-bg))', color: 'rgb(var(--btn-primary-text))' }}
            >
              <Plus className="w-5 h-5" />
              New Project
            </button>
          </div>
        </div>

        {/* Column Layout - All Projects */}
        <div className="space-y-4">
          {projects.length === 0 ? (
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
                  Start by creating your first project to see it here.
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
          ) : (
            projects.map((project, index) => {
              const isPendingProject = isPending(project.status);
              return (
              <Card 
                key={project.id}
                className={`hover:shadow-lg transition-all duration-200 ${isPendingProject ? 'w-full' : ''}`}
                style={{
                  backgroundColor: 'rgba(var(--color-bg), 0.95)',
                  borderColor: 'rgb(var(--color-border))',
                  borderLeftWidth: isCompleted(project.status) ? '4px' : isPending(project.status) ? '4px' : '4px',
                  borderLeftColor: isCompleted(project.status) 
                    ? 'rgb(34, 197, 94)' 
                    : isPending(project.status) 
                    ? 'rgb(251, 191, 36)' 
                    : 'rgb(37, 99, 235)'
                }}
              >
                <CardContent className={isPendingProject ? "p-5 px-4 sm:px-6 lg:px-8" : "p-4"}>
                  <div className={`flex flex-col ${isPendingProject ? 'lg:flex-row' : 'lg:flex-row'} gap-4`}>
                    {/* Left Column - Main Info */}
                    <div className="flex-1 space-y-3">
                      {/* Order Number & Status */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1.5">
                            <Hash className="w-3.5 h-3.5" style={{ color: 'rgb(var(--color-text))', opacity: 0.5 }} />
                            <span 
                              className="text-xs font-mono font-semibold"
                              style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}
                            >
                              {formatOrderNumber(project.id, project.createdAt)}
                            </span>
                          </div>
                          <h3 
                            className={`${isPendingProject ? 'text-lg' : 'text-base'} font-bold mb-1.5`}
                            style={{ color: 'rgb(var(--color-title))' }}
                          >
                            {project.projectName}
                          </h3>
                          {project.description && (
                            <p 
                              className="text-xs mb-2"
                              style={{ color: 'rgb(var(--color-text))', opacity: 0.8 }}
                            >
                              {project.description}
                            </p>
                          )}
                        </div>
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium flex-shrink-0 ${getStatusColor(project.status)}`}>
                          {getStatusText(project.status)}
                        </span>
                      </div>

                      {/* Service Information */}
                      <div className={`grid ${isPendingProject ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'} gap-3`}>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <FileText className="w-3.5 h-3.5" style={{ color: 'rgb(var(--color-text))', opacity: 0.6 }} />
                            <span 
                              className="text-xs font-semibold uppercase tracking-wide"
                              style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}
                            >
                              Service Type
                            </span>
                          </div>
                          <p 
                            className="text-sm font-medium"
                            style={{ color: 'rgb(var(--color-title))' }}
                          >
                            {project.serviceType}
                          </p>
                          {project.serviceDetail && (
                            <p 
                              className="text-xs mt-0.5"
                              style={{ color: 'rgb(var(--color-text))', opacity: 0.8 }}
                            >
                              {project.serviceDetail}
                            </p>
                          )}
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <DollarSign className="w-3.5 h-3.5" style={{ color: 'rgb(var(--color-text))', opacity: 0.6 }} />
                            <span 
                              className="text-xs font-semibold uppercase tracking-wide"
                              style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}
                            >
                              Cost
                            </span>
                          </div>
                          <p 
                            className="text-sm font-medium"
                            style={{ color: 'rgb(var(--color-title))' }}
                          >
                            {estimateCost(project)}
                          </p>
                        </div>

                        {isPendingProject && project.estimatedDelivery && (
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Calendar className="w-3.5 h-3.5" style={{ color: 'rgb(var(--color-text))', opacity: 0.6 }} />
                              <span 
                                className="text-xs font-semibold uppercase tracking-wide"
                                style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}
                              >
                                Est. Delivery
                              </span>
                            </div>
                            <p 
                              className="text-sm font-medium"
                              style={{ color: 'rgb(var(--color-title))' }}
                            >
                              {formatDate(project.estimatedDelivery)}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Progress Bar */}
                      {!isCompleted(project.status) && !isPending(project.status) && (
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span 
                              className="text-sm font-medium"
                              style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}
                            >
                              Progress
                            </span>
                            <span 
                              className="text-sm font-semibold"
                              style={{ color: 'rgb(37, 99, 235)' }}
                            >
                              {project.progress}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className="h-2 rounded-full transition-all"
                              style={{ 
                                width: `${project.progress}%`,
                                backgroundColor: 'rgb(37, 99, 235)'
                              }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right Column - History & Details */}
                    <div className={`${isPendingProject ? 'lg:w-72' : 'lg:w-56'} flex-shrink-0 space-y-3`}>
                      {/* Project Manager */}
                      {project.projectManager && (
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <UserIcon className="w-4 h-4" style={{ color: 'rgb(var(--color-text))', opacity: 0.6 }} />
                            <span 
                              className="text-xs font-semibold uppercase tracking-wide"
                              style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}
                            >
                              Project Manager
                            </span>
                          </div>
                          <p 
                            className="text-sm font-medium"
                            style={{ color: 'rgb(var(--color-title))' }}
                          >
                            {project.projectManager}
                          </p>
                        </div>
                      )}

                      {/* History Timeline */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-3.5 h-3.5" style={{ color: 'rgb(var(--color-text))', opacity: 0.6 }} />
                          <span 
                            className="text-xs font-semibold uppercase tracking-wide"
                            style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}
                          >
                            History
                          </span>
                        </div>
                        <div className="space-y-2">
                          {/* Created */}
                          <div className="flex items-start gap-2">
                            <div className="flex-shrink-0 mt-0.5">
                              <div 
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: 'rgb(37, 99, 235)' }}
                              ></div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p 
                                className="text-xs font-medium"
                                style={{ color: 'rgb(var(--color-title))' }}
                              >
                                Created
                              </p>
                              <p 
                                className="text-xs mt-0.5"
                                style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}
                              >
                                {formatDateTime(project.createdAt)}
                              </p>
                            </div>
                          </div>

                          {/* Last Updated */}
                          {project.updatedAt && project.updatedAt !== project.createdAt && !isPendingProject && (
                            <div className="flex items-start gap-2">
                              <div className="flex-shrink-0 mt-0.5">
                                <div 
                                  className="w-1.5 h-1.5 rounded-full"
                                  style={{ backgroundColor: isCompleted(project.status) ? 'rgb(34, 197, 94)' : 'rgb(251, 191, 36)' }}
                                ></div>
                              </div>
                              <div className="flex-1 min-w-0">
                                <p 
                                  className="text-xs font-medium"
                                  style={{ color: 'rgb(var(--color-title))' }}
                                >
                                  Updated
                                </p>
                                <p 
                                  className="text-xs mt-0.5"
                                  style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}
                                >
                                  {formatDateTime(project.updatedAt)}
                                </p>
                              </div>
                            </div>
                          )}

                          {/* Files Count */}
                          {project.files && project.files.length > 0 && (
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 mt-0.5">
                                <FileText className="w-3 h-3" style={{ color: 'rgb(var(--color-text))', opacity: 0.5 }} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p 
                                  className="text-xs font-medium"
                                  style={{ color: 'rgb(var(--color-title))' }}
                                >
                                  Files Attached
                                </p>
                                <p 
                                  className="text-xs mt-0.5"
                                  style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}
                                >
                                  {project.files.length} {project.files.length === 1 ? 'file' : 'files'}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Action Button */}
                      {isCompleted(project.status) && (
                        <button
                          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-colors"
                          style={{ 
                            backgroundColor: 'rgba(34, 197, 94, 0.1)',
                            color: 'rgb(34, 197, 94)',
                            border: '1px solid',
                            borderColor: 'rgba(34, 197, 94, 0.3)'
                          }}
                        >
                          <Download className="w-4 h-4" />
                          Download Files
                        </button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )})
          )}
        </div>

        {/* Summary Footer */}
        {projects.length > 0 && (
          <div className="mt-12 pt-8 border-t" style={{ borderColor: 'rgb(var(--color-border))' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p 
                  className="text-sm mb-1"
                  style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}
                >
                  Total Projects
                </p>
                <p 
                  className="text-2xl font-bold"
                  style={{ color: 'rgb(var(--color-title))' }}
                >
                  {projects.length}
                </p>
              </div>
              <div>
                <p 
                  className="text-sm mb-1"
                  style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}
                >
                  Completed
                </p>
                <p 
                  className="text-2xl font-bold"
                  style={{ color: 'rgb(34, 197, 94)' }}
                >
                  {projects.filter(p => isCompleted(p.status)).length}
                </p>
              </div>
              <div>
                <p 
                  className="text-sm mb-1"
                  style={{ color: 'rgb(var(--color-text))', opacity: 0.7 }}
                >
                  In Progress
                </p>
                <p 
                  className="text-2xl font-bold"
                  style={{ color: 'rgb(37, 99, 235)' }}
                >
                  {projects.filter(p => !isCompleted(p.status) && !isPending(p.status)).length}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Quick Links */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/profile"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors"
            style={{ 
              borderColor: 'rgb(var(--color-border))',
              color: 'rgb(var(--color-text))',
              backgroundColor: 'rgba(var(--color-bg), 0.5)',
              borderWidth: '1px',
              borderStyle: 'solid'
            }}
          >
            <UserIcon className="w-4 h-4" />
            View Profile
          </Link>
          <Link
            href="/profile#projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors"
            style={{ 
              borderColor: 'rgb(var(--color-border))',
              color: 'rgb(var(--color-text))',
              backgroundColor: 'rgba(var(--color-bg), 0.5)',
              borderWidth: '1px',
              borderStyle: 'solid'
            }}
          >
            <FileText className="w-4 h-4" />
            All Projects
          </Link>
        </div>
      </div>

      {/* Project Creation Modal */}
      <ProjectCreationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onProjectCreated={() => {
          setIsModalOpen(false);
          window.location.reload();
        }}
      />
    </div>
  );
};

export default DashboardPage;
