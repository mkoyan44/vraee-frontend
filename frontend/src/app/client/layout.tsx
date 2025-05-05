import React from "react";
import {Header} from "@/components/header/header";

export default function AdminLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
        <Header/>
        <main>
            LAYOUT CLIENT
            {children}
        </main>
        </>
    );
}
