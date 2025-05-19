import React from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "@/assets/styles/client/app.scss";
import {Inter} from 'next/font/google'
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const inter = Inter({
    variable: "--font-inter",
    subsets: ['latin'],
    display: 'swap',
})

type Props = {
    children: React.ReactNode;
    rootClass?: string;
    colorScheme?: string;
};

export default function ClientLayout({ children, rootClass = "", colorScheme="scheme-light" }: Props) {
    return (
        <div id="root" className={`${inter.variable} ${colorScheme} ${rootClass}`}>
            <Header />
            LAYOUT CLIENT
            <main>{children}</main>
            <Footer />
        </div>
    );
}