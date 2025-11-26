// API service functions for dashboard data
const API_BASE = 'http://localhost:3000/api';

export interface User {
  id: number;
  email: string;
  name?: string;
  fullName?: string;
  role: string;
  createdAt: string;
  updatedAt?: string;
  isProfileComplete?: boolean;
  companyName?: string;
}

export interface Project {
  id: number;
  projectName: string;
  description?: string;
  serviceType: string;
  serviceDetail: string;
  status: string;
  progress: number;
  userId: number;
  createdAt: string;
  updatedAt: string;
  files?: string[];
  estimatedDelivery?: string;
  projectManager?: string;
}

export interface Notification {
  id: number;
  type: string;
  message: string;
  createdAt: string;
  read?: boolean;
}

export interface Analytics {
  totalProjects: number;
  completedProjects: number;
  activeProjects: number;
  totalSpent: number;
  averageDeliveryTime: string;
  qualityScore: number;
  loyaltyPoints: number;
  nextTier: string;
}

// Check if user is authenticated
export const checkAuth = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE}/profile/get`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.ok;
  } catch (error) {
    console.error('Auth check failed:', error);
    return false;
  }
};

// Get user profile
export const getUserProfile = async (): Promise<User | null> => {
  try {
    const response = await fetch(`${API_BASE}/profile/get`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user profile');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
};

// Get user's projects
export const getUserProjects = async (): Promise<Project[]> => {
  try {
    const response = await fetch(`${API_BASE}/project/list`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }

    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

// Get specific project details
export const getProjectDetails = async (projectId: number): Promise<Project | null> => {
  try {
    const response = await fetch(`${API_BASE}/project/${projectId}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch project details');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching project details:', error);
    return null;
  }
};

// Create new project
export const createProject = async (projectData: {
  projectName: string;
  description?: string;
  serviceType: string;
  serviceDetail: string;
  files?: string[];
}): Promise<Project | null> => {
  try {
    const response = await fetch(`${API_BASE}/project/create`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectData),
    });

    if (!response.ok) {
      throw new Error('Failed to create project');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating project:', error);
    return null;
  }
};

// Update project status
export const updateProjectStatus = async (projectId: number, status: string): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE}/project/${projectId}/status`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    });

    return response.ok;
  } catch (error) {
    console.error('Error updating project status:', error);
    return false;
  }
};

// Calculate analytics from projects
export const calculateAnalytics = (projects: Project[]): Analytics => {
  const completed = projects.filter(p => p.status === 'COMPLETED').length;
  const active = projects.filter(p => p.status !== 'COMPLETED').length;
  const totalProjects = projects.length;

  // Mock calculations - in real app these would come from dedicated analytics endpoint
  const averageDeliveryTime = totalProjects > 0 ? (totalProjects * 4.2).toFixed(1) + ' days' : '0 days';

  return {
    totalProjects,
    completedProjects: completed,
    activeProjects: active,
    totalSpent: Math.round(totalProjects * 450), // Mock calculation
    averageDeliveryTime,
    qualityScore: Math.min(95 + Math.floor(Math.random() * 5), 100),
    loyaltyPoints: Math.round(completed * 250 + active * 50),
    nextTier: active > 5 ? 'Gold Status' : 'Platinum Status'
  };
};

// Generate mock notifications based on projects
export const generateNotifications = (projects: Project[]): Notification[] => {
  const notifications: Notification[] = [];

  projects.forEach(project => {
    if (project.status !== 'COMPLETED') {
      notifications.push({
        id: project.id * 10 + 1,
        type: 'project',
        message: `Your "${project.projectName}" project has progressed to ${project.status.replace('_', ' ').toLowerCase()} phase`,
        createdAt: new Date(Date.now() - Math.random() * 86400000 * 7).toISOString(), // Random time in last week
        read: false
      });
    }
  });

  // Add a welcome notification
  notifications.push({
    id: 999,
    type: 'system',
    message: 'Welcome to Render Agency! Your dashboard is ready with project tracking and real-time updates.',
    createdAt: new Date(Date.now() - 86400000 * 30).toISOString(), // 30 days ago
    read: false
  });

  return notifications.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};

// Logout function
export const logout = async (): Promise<void> => {
  try {
    await fetch(`${API_BASE}/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    });
    // Redirect to home will happen in component
  } catch (error) {
    console.error('Logout error:', error);
  }
};
