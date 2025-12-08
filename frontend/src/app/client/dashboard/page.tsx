'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import {
  checkAuth,
  getUserProfile,
  getUserProjects,
  calculateAnalytics,
  generateNotifications,
  logout,
  User,
  Project,
  Notification,
  Analytics
} from '@/services/dashboard';
import {
  Plus, Upload, Eye, TrendingUp, Bell, Star, Trophy, FileText,
  CheckCircle, Clock, MessageSquare, Download, Settings, User as UserIcon,
  BarChart3, Award, Zap, Shield, Archive, LogOut
} from 'lucide-react';



const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showNewProjectForm, setShowNewProjectForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  // State for real user data
  const [user, setUser] = useState<User | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [analytics, setAnalytics] = useState<Analytics | null>(null);

  // Check authentication and load data
  useEffect(() => {
    const initializeDashboard = async () => {
      try {
        // Check authentication
        const isAuth = await checkAuth();
        if (!isAuth) {
          router.push('/client/login');
          return;
        }
        setIsAuthenticated(true);

        // Load user data in parallel
        const [userProfile, userProjects] = await Promise.all([
          getUserProfile(),
          getUserProjects()
        ]);

        setUser(userProfile);
        setProjects(userProjects);

        // Calculate analytics and notifications from projects
        const userAnalytics = calculateAnalytics(userProjects);
        const userNotifications = generateNotifications(userProjects);

        setAnalytics(userAnalytics);
        setNotifications(userNotifications);

      } catch (error) {
        console.error('Dashboard initialization failed:', error);
        router.push('/client/login');
      } finally {
        setIsLoading(false);
      }
    };

    initializeDashboard();
  }, [router]);

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  const getStatusColor = (status: string, progress: number) => {
    if (status === 'COMPLETED') return 'text-green-600 bg-green-50';
    if (progress >= 75) return 'text-blue-600 bg-blue-50';
    if (progress >= 50) return 'text-yellow-600 bg-yellow-50';
    return 'text-gray-600 bg-gray-50';
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'text-red-600 bg-red-50';
      case 'Medium': return 'text-yellow-600 bg-yellow-50';
      case 'Low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  // Not authenticated
  if (!isAuthenticated) {
    return null; // Will redirect
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Client Dashboard</h1>
              <p className="text-sm text-gray-600">Track your projects, communicate with specialists, and manage your orders</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-600">
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400"></span>
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <UserIcon className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">{user?.name || user?.email || 'User'}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                    activeTab === 'overview' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <BarChart3 className="h-5 w-5 inline mr-3" />
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('projects')}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                    activeTab === 'projects' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <FileText className="h-5 w-5 inline mr-3" />
                  My Projects
                </button>
                <button
                  onClick={() => setActiveTab('messages')}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                    activeTab === 'messages' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <MessageSquare className="h-5 w-5 inline mr-3" />
                  Messages
                </button>
                <button
                  onClick={() => setActiveTab('analytics')}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                    activeTab === 'analytics' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <TrendingUp className="h-5 w-5 inline mr-3" />
                  Analytics
                </button>
                <button
                  onClick={() => setActiveTab('loyalty')}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                    activeTab === 'loyalty' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Trophy className="h-5 w-5 inline mr-3" />
                  Loyalty Program
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                    activeTab === 'settings' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Settings className="h-5 w-5 inline mr-3" />
                  Settings
                </button>
              </nav>

              <div className="mt-8">
                <button
                  onClick={() => setShowNewProjectForm(true)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  <Plus className="h-5 w-5 inline mr-2" />
                  Start New Project
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Welcome Section */}
                <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-2">Welcome back, {user?.name || user?.email || 'User'}!</h2>
                    <p className="mb-4">You have {analytics?.activeProjects || 0} active projects and {notifications?.filter(n => !n.read).length || 0} unread notifications.</p>
                    <div className="flex space-x-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold">{analytics?.averageDeliveryTime || '0 days'}</div>
                        <div className="text-sm opacity-90">Avg. Delivery Time</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">{analytics?.totalProjects || 0}</div>
                        <div className="text-sm opacity-90">Total Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">{analytics?.qualityScore || 0}%</div>
                        <div className="text-sm opacity-90">Quality Score</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card className="cursor-pointer hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <Upload className="h-12 w-12 text-blue-500 mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Upload Files</h3>
                      <p className="text-sm text-gray-600">Add reference materials to existing projects</p>
                    </CardContent>
                  </Card>

                  <Card className="cursor-pointer hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <MessageSquare className="h-12 w-12 text-green-500 mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Contact Specialist</h3>
                      <p className="text-sm text-gray-600">Send messages to your assigned team</p>
                    </CardContent>
                  </Card>

                  <Card className="cursor-pointer hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <Eye className="h-12 w-12 text-purple-500 mx-auto mb-3" />
                        <h3 className="font-semibold mb-2">Live Preview</h3>
                        <p className="text-sm text-gray-600">View current progress on active projects</p>
                      </CardContent>
                    </Card>

                    <Card className="cursor-pointer hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <Download className="h-12 w-12 text-orange-500 mx-auto mb-3" />
                        <h3 className="font-semibold mb-2">Download Files</h3>
                        <p className="text-sm text-gray-600">Access completed project deliverables</p>
                      </CardContent>
                    </Card>
                </div>

                {/* Active Projects Overview */}
                <Card>
                  <CardHeader>
                    <CardTitle>Active Projects</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {projects.filter(p => p.status !== 'COMPLETED').map((project) => (
                      <div key={project.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold text-lg">{project.projectName}</h4>
                            <p className="text-sm text-gray-600">Service: {project.serviceType} - {project.serviceDetail}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status, project.progress)}`}>
                              {project.status}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress: {project.progress}%</span>
                            <span>Last updated: {new Date(project.updatedAt).toLocaleDateString()}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                        </div>

                        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-4">
                            <span><FileText className="h-4 w-4 inline mr-1" />{project.files?.length || 0} files</span>
                            <span><Clock className="h-4 w-4 inline mr-1" />Created: {new Date(project.createdAt).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {notifications.slice(0, 4).map((notification) => (
                        <div key={notification.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              {notification.type === 'project' && <TrendingUp className="h-4 w-4 text-blue-600" />}
                              {notification.type === 'update' && <Upload className="h-4 w-4 text-green-600" />}
                              {notification.type === 'delivery' && <Download className="h-4 w-4 text-purple-600" />}
                              {notification.type === 'system' && <Star className="h-4 w-4 text-yellow-600" />}
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm">{notification.message}</p>
                            <p className="text-xs text-gray-500 mt-1">
                              {new Date(notification.createdAt).toLocaleDateString()} at {new Date(notification.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">My Projects</h2>
                  <button
                    onClick={() => setShowNewProjectForm(true)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    <Plus className="h-5 w-5 inline mr-2" />
                    New Project
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {projects.map((project) => (
                    <Card key={project.id} className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold">{project.projectName}</h3>
                            <p className="text-gray-600">Project #{project.id} • {project.serviceType}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status, project.progress)}`}>
                              {project.status}
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-gray-600">Service Detail</p>
                            <p className="font-semibold">{project.serviceDetail}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Files</p>
                            <p className="font-semibold">{project.files?.length || 0}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Progress</p>
                            <p className="font-semibold">{project.progress}%</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Created</p>
                            <p className="font-semibold">{new Date(project.createdAt).toLocaleDateString()}</p>
                          </div>
                        </div>

                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{project.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                        </div>

                        <div className="flex space-x-3">
                          <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                            View Details
                          </button>
                          <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                            Download Files
                          </button>
                          <button className="bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                            <MessageSquare className="h-4 w-4" />
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Project Analytics</h2>
                  <p className="text-gray-600">Track your performance metrics and project history</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-blue-600">{analytics?.totalProjects || 0}</div>
                      <div className="text-sm text-gray-600">Total Projects</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-green-600">{analytics?.completedProjects || 0}</div>
                      <div className="text-sm text-gray-600">Completed</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-purple-600">{analytics?.activeProjects || 0}</div>
                      <div className="text-sm text-gray-600">Active Projects</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-orange-600">{analytics?.qualityScore || 0}%</div>
                      <div className="text-sm text-gray-600">Quality Score</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <TrendingUp className="h-5 w-5 mr-2" />
                        Performance Metrics
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Average Delivery Time</span>
                        <span className="font-semibold">{analytics?.averageDeliveryTime || '0 days'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Invested</span>
                        <span className="font-semibold">${analytics?.totalSpent || 0}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Project Success Rate</span>
                        <span className="font-semibold">{analytics?.qualityScore || 0}%</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Award className="h-5 w-5 mr-2" />
                        Loyalty Status
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">{analytics?.loyaltyPoints?.toLocaleString() || '0'}</div>
                        <div className="text-sm text-gray-600 mb-4">Loyalty Points</div>

                        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                          <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${Math.min((analytics?.loyaltyPoints || 0) / 5000 * 100, 100)}%` }}></div>
                        </div>
                        <div className="text-xs text-gray-600">
                          {analytics?.loyaltyPoints || 0} / 5000 points to {analytics?.nextTier || 'Gold Status'}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Priority Booking</span>
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Discounted Rates</span>
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Early Access</span>
                          <Zap className="h-4 w-4 text-purple-500" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === 'loyalty' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Loyalty Program</h2>
                  <p className="text-gray-600">Earn points with every project and unlock exclusive benefits</p>
                </div>

                <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold">{analytics?.loyaltyPoints?.toLocaleString() || '0'} Points</h3>
                        <p className="text-purple-100">Current Loyalty Balance</p>
                      </div>
                      <Trophy className="h-16 w-16 text-yellow-300" />
                    </div>

                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress to {analytics?.nextTier || 'Gold'} Tier</span>
                        <span>{analytics?.loyaltyPoints || 0}/5000</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-3">
                        <div className="bg-yellow-400 h-3 rounded-full" style={{ width: `${Math.min((analytics?.loyaltyPoints || 0) / 5000 * 100, 100)}%` }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <Award className="h-12 w-12 text-blue-500 mx-auto mb-3" />
                      <h3 className="font-bold mb-2">Priority Booking</h3>
                      <p className="text-sm text-gray-600">Skip the queue with priority project scheduling</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-3" />
                      <h3 className="font-bold mb-2">Discounted Rates</h3>
                      <p className="text-sm text-gray-600">Save 20% on all projects with loyalty discounts</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <Star className="h-12 w-12 text-purple-500 mx-auto mb-3" />
                      <h3 className="font-bold mb-2">Exclusive Access</h3>
                      <p className="text-sm text-gray-600">Early access to new features and premium services</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === 'messages' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Messages & Communication</h2>
                  <p className="text-gray-600">Stay connected with your project team</p>
                </div>

                <Card>
                  <CardContent className="p-6">
                    <div className="text-center py-12">
                      <MessageSquare className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Communication Hub</h3>
                      <p className="text-gray-600 mb-4">Your centralized messaging system with project teams</p>
                      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Open Message Center
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Account Settings</h2>
                  <p className="text-gray-600">Manage your profile and preferences</p>
                </div>

                <Card>
                  <CardContent className="p-6">
                    <div className="text-center py-12">
                      <Settings className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Profile Management</h3>
                      <p className="text-gray-600 mb-4">Update your account details and preferences</p>
                      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Edit Profile
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2025 Render Agency. All rights reserved.</p>
            <p className="mt-2 text-sm">Professional 3D Jewelry Rendering Services</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DashboardPage;
