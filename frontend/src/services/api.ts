import axios from 'axios';
import { useUserStore } from "@/store/useUserStore";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const login = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/auth/login`, {email, password}, {withCredentials: true});

    useUserStore.getState().setRole(response.data.role);

    // Fetch and store user profile data
    try {
        const userData = await getUserData();
        useUserStore.getState().setUserData({
            id: userData.id,
            email: userData.email,
            fullName: userData.fullName
        });
    } catch (error) {
        console.warn('Failed to fetch user data after login:', error);
    }

    return response.data;
};

export const logout = async () => {
    const response = await axios.post(`${API_URL}/auth/logout`, {}, {withCredentials: true});

    useUserStore.getState().clearRole();
    return response.data;
};

export const getUserData = async () => {
    const response = await axios.get(`${API_URL}/profile/get`, {
        withCredentials: true,
    });
    return response.data;
};

export const updateProfileStep1 = async (profileData: {
    fullName?: string;
    companyName?: string;
}) => {
    const response = await axios.post(`${API_URL}/profile/step1`, profileData, {
        withCredentials: true,
    });
    return response.data;
};

export const updateProfileStep2 = async (profileData: {
    clientType?: string;
    primaryService?: string[];
    projectVolume?: string;
}) => {
    const response = await axios.post(`${API_URL}/profile/step2`, profileData, {
        withCredentials: true,
    });
    return response.data;
};

export const updateProfileStep3 = async (profileData: {
    cadSoftware?: string;
    requiredOutputs?: string[];
    referralSource?: string;
}) => {
    const response = await axios.post(`${API_URL}/profile/step3`, profileData, {
        withCredentials: true,
    });
    return response.data;
};

export const completeProfile = async (profileData: {
    fullName: string;
    companyName?: string;
    clientType: string;
    primaryService: string[];
    projectVolume: string;
    cadSoftware: string;
    requiredOutputs: string[];
    referralSource?: string;
}) => {
    const response = await axios.post(`${API_URL}/profile/complete`, profileData, {
        withCredentials: true,
    });
    return response.data;
};

export const submitContact = async (contactData: {
    name: string;
    email: string;
    company?: string;
    message: string;
}) => {
    const response = await axios.post(`${API_URL}/contact`, contactData);
    return response.data;
};

export const createProject = async (projectData: {
    serviceType: string;
    serviceDetail?: string;
    projectName: string;
    description?: string;
    files?: string[];
}) => {
    const response = await axios.post(`${API_URL}/project/create`, projectData, {
        withCredentials: true,
    });
    return response.data;
};

export const getUserProjects = async () => {
    const response = await axios.get(`${API_URL}/project/list`, {
        withCredentials: true,
    });
    return response.data;
};

export const getProjectById = async (projectId: number) => {
    const response = await axios.get(`${API_URL}/project/${projectId}`, {
        withCredentials: true,
    });
    return response.data;
};

export const updateProjectStatus = async (projectId: number, updateData: {
    status: string;
    projectManager?: string;
    estimatedDelivery?: string;
    progress?: number;
}) => {
    const response = await axios.put(`${API_URL}/project/${projectId}/status`, updateData, {
        withCredentials: true,
    });
    return response.data;
};

export const getProjectStatusText = async (status: string) => {
    const response = await axios.get(`${API_URL}/project/status-text/${status}`);
    return response.data;
};
