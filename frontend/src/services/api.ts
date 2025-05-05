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
    return response.data;
};

export const getUserData = async () => {
    const response = await axios.get(`${API_URL}/profile/get`, {
        withCredentials: true,
    });
    return response.data;
};