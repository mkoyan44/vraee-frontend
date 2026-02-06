import React from "react";
import type {Metadata} from "next";
import LoginForm from "./LoginForm";

export const generateMetadata = (): Metadata => {
    return {
        title: "Login",
        description: "Access your Render Agency account to track project progress, view orders, and manage your 3D rendering services.",
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
    return <LoginForm />;
};

export default Login;

