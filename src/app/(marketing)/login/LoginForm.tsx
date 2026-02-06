"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import { login } from '@/services/api';
import { useUserStore } from '@/store/useUserStore';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setError('');
        try {
            const response = await login(email, password);
            // Redirect all users to vraee-app after login
            const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3001';
            const userRole = response?.role || useUserStore.getState().role;
            if (userRole === 'admin') {
                window.location.href = `${appUrl}/admin/users`;
            } else {
                window.location.href = `${appUrl}/projects`;
            }
        } catch (err: any) {
            console.error('Login error:', err);
            let errorMessage = 'Invalid email or password';
            if (err.response?.data?.message) {
                errorMessage = err.response.data.message;
            } else if (err.message) {
                errorMessage = err.message;
            } else if (err.code === 'ERR_NETWORK' || err.code === 'ECONNREFUSED') {
                errorMessage = 'Cannot connect to server. Please make sure the backend API is running on port 3000.';
            }
            setError(errorMessage);
        }
    };

    return (
        <div className="flex items-center justify-center h-full mh-full-screen">
            <Card className="w-[650px]">
                <CardHeader>
                    <CardTitle className="text-lg">Login</CardTitle>
                    <CardDescription>Enter your login and password to log in</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-1.5">
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                        </div>
                        {error && (
                            <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                                <p className="text-sm" style={{ color: 'rgb(239, 68, 68)' }}>
                                    {error}
                                </p>
                            </div>
                        )}
                    </CardContent>
                    <CardFooter className="mt-4 flex flex-col sm:flex-row gap-3 sm:justify-between items-stretch sm:items-center">
                        <Link 
                            href="/register" 
                            className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-center"
                        >
                            Request Account Access
                        </Link>
                        <button 
                            type="submit"
                            className="btn-primary px-6 py-3 rounded-lg font-semibold"
                        >
                            Sign In
                        </button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
};

export default LoginForm;

