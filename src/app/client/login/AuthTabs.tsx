"use client";

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthTabs = () => {
    const [activeTab, setActiveTab] = useState("login");

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-background to-muted/20">
            <div className="w-full max-w-lg">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-2 mb-8">
                        <TabsTrigger value="login" className="text-sm font-medium">Sign In</TabsTrigger>
                        <TabsTrigger value="register" className="text-sm font-medium">Create Account</TabsTrigger>
                    </TabsList>

                    <TabsContent value="login" className="space-y-0">
                        <LoginForm />
                    </TabsContent>

                    <TabsContent value="register" className="space-y-0">
                        <RegisterForm />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default AuthTabs;
