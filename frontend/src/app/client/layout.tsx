import React from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "@/assets/styles/client/app.scss";
import { Inter } from 'next/font/google'
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const inter = Inter({
    variable: "--font-inter",
    subsets: ['latin'],
    display: 'swap',
})

export default function AdminLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div id="root" className={`${inter.variable} scheme-light`}>
        <Header/>
        <main>
            LAYOUT CLIENT
            {children}
        </main>
        <Footer/>
        </div>
    );
}
