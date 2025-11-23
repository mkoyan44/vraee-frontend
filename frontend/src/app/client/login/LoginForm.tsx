"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import { login } from '@/services/api';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await login(email, password);
            router.push('/profile');
        } catch (err) {
            console.error(err);
            setError('Неверный email или пароль');
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
                        {error && <p>{error}</p>}
                    </CardContent>
                    <CardFooter className="mt-4 justify-end"><Button type="submit">Submit</Button></CardFooter>
                </form>
            </Card>
        </div>
    );
};

export default LoginForm;
