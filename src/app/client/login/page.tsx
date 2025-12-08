import React from "react";
import type {Metadata} from "next";
import AuthTabs from "./AuthTabs";

export const generateMetadata = (): Metadata => {
    return {
        title: "Login / Register",
        description: "Access your Render Agency account or create a new one to track project progress, view orders, and manage your 3D rendering services.",
        robots: {
            index: false,
            follow: false,
        },
        alternates: {
            canonical: "/login",
        },
    };
};

const Login = () => {
    return <AuthTabs />;
};

export default Login;
