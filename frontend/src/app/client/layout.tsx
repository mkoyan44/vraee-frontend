import React from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "@/assets/styles/client/app.scss";
import {Inter} from 'next/font/google'
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import ThemeProvider from "@/components/theme/theme-provider";

const inter = Inter({
    variable: "--font-inter",
    subsets: ['latin'],
    display: 'swap',
})

type Props = {
    children: React.ReactNode;
    rootClass?: string;
};

export default function ClientLayout({ children, rootClass = "" }: Props) {
    return (
        <ThemeProvider>
            <div id="root" className={`${inter.variable} ${rootClass}`}>
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </ThemeProvider>
    );
}
