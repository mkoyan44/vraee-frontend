"use client"
import styles from "@/assets/styles/client/components/header.module.scss";
import {useBreakpoint} from '@/hooks/useBreakpoint';
import {useHasMounted} from '@/hooks/useHasMounted';

import React, {useState} from "react"
import Link from "next/link"
import Image from "next/image";
import {usePathname, useRouter} from 'next/navigation';
import Icon from "@/components/icon/icon";
import ThemeToggle from "@/components/theme/theme-toggle";
import { useUserStore, useThemeStore } from "@/store/useUserStore";

const menu: { label: string; href: string }[] = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Services",
        href: "/services",
    },
    {
        label: "How it works?",
        href: "/how-it-works",
    },
    {
        label: "Programs We Use",
        href: "/programs-we-use",
    },
    {
        label: "Pricing",
        href: "/pricing",
    },
    {
        label: "Portfolio",
        href: "/portfolio",
    },
    {
        label: "Contact us",
        href: "/contact",
    },
]

const Header: React.FC = () => {
    const pathname = usePathname();
    const router = useRouter();

    const { role } = useUserStore();
    const { theme } = useThemeStore();
    const isLoggedIn = !!role;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { isLaptop} = useBreakpoint();
    const hasMounted = useHasMounted();

    // Prevent hydration mismatch by ensuring consistent initial render
    React.useEffect(() => {
        setMounted(true);
    }, []);

    // If user is logged in, redirect to vraee-app
    React.useEffect(() => {
        if (isLoggedIn) {
            const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3001';
            window.location.href = `${appUrl}/projects`;
        }
    }, [isLoggedIn]);

    // Use consistent theme for SSR (default to light)
    const currentTheme = mounted ? theme : 'light';
    const logoSrc = currentTheme === 'dark' ? '/vraee-logo-dark.svg' : '/vraee-logo-light.svg';

    return (
        <header className={`${styles.header} background`}>
            <div className="container">
                <div className={styles.wrapper}>
                    <button
                        className={`${styles.burger}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                        suppressHydrationWarning
                    >
                        <span></span><span></span><span></span>
                    </button>
                    <Link 
                        href={'/'} 
                        className={styles.logo}
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Vraee Jewelry Studio Home"
                    >
                        <Image 
                            src={logoSrc} 
                            alt="Vraee Jewelry Studio Logo" 
                            width={'200'} 
                            height={'75'}
                            suppressHydrationWarning
                        />
                    </Link>
                    <nav className={`${styles.nav} ${isLaptop && isMenuOpen ? styles.open : ''}`}>
                        <ul className={styles.menu}>
                            {
                                menu.map((item, index) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className={`${styles.menu_link} ${isActive ? styles.current : ''}`}
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <span>
                                                    {item.label}
                                                </span>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        {
                            function () {
                                if (isLaptop && hasMounted) {
                                    return (
                                        <>
                                            <button
                                                className={`${styles.close}`}
                                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                                aria-label="Close menu"
                                            >
                                                <Icon icon={'close'}/>
                                            </button>
                                            <div className={styles.nav_buttons}>
                                                <Link 
                                                    href={'/login'} 
                                                    className={`${styles.header_link} hovered_link`}
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    Sign In
                                                </Link>
                                            </div>
                                        </>
                                    )
                                }
                                return null;
                            }()
                        }
                    </nav>
                    <div className={styles.buttons}>
                        <ThemeToggle />
                        <Link href={'/login'} className={`${styles.header_link} hovered_link`}>Sign In</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
