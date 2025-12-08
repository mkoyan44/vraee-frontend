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
import { logout } from "@/services/api";
import ProjectCreationModal from "@/components/modal/project-creation-modal";

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

    const { role, userData } = useUserStore();
    const { theme } = useThemeStore();
    const isLoggedIn = !!role;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { isLaptop} = useBreakpoint();
    const hasMounted = useHasMounted();

    const handleLogout = async () => {
        try {
            await logout();
            router.push('/');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <header className={`${styles.header} background`}>
            <div className="container">
                <div className={styles.wrapper}>
                    <button
                        className={`${styles.burger}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span></span><span></span><span></span>
                    </button>
                    <Link href={'/'} className={styles.logo}>
                        <Image src={theme === 'dark' ? '/vraee-logo-dark.svg' : '/vraee-logo-light.svg'} alt={''} width={'200'} height={'75'}/>
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
                                                className={`${styles.menu_link} ${isActive ? styles.current : ''}`}>
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
                                            >
                                                <Icon icon={'close'}/>
                                            </button>
                                            <div className={styles.nav_buttons}>
                                                {isLoggedIn ? (
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                                        <Link href={'/profile'} className={`${styles.header_link} hovered_link`}>
                                                            {userData?.fullName ? `Hi, ${userData.fullName}` : 'Profile'}
                                                        </Link>
                                                        <button
                                                            onClick={handleLogout}
                                                            className={`${styles.header_link} hovered_link`}
                                                            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                                                        >
                                                            Logout
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <Link href={'/login'} className={`${styles.header_link} hovered_link`}>Sign In</Link>
                                                )}
                                            </div>
                                            <button
                                                onClick={() => {
                                                    if (isLoggedIn) {
                                                        setIsModalOpen(true);
                                                    } else {
                                                        router.push('/login');
                                                    }
                                                }}
                                                className="btn-primary"
                                                style={{ marginTop: '16px' }}
                                            >
                                                Open Project
                                            </button>
                                        </>
                                    )
                                }
                                return null;
                            }()
                        }
                    </nav>
                    <div className={styles.buttons}>
                        <ThemeToggle />
                        {isLoggedIn ? (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <Link href={'/profile'} className={`${styles.header_link} hovered_link`}>
                                    {userData?.fullName ? `Hi, ${userData.fullName}` : 'Profile'}
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className={`${styles.header_link} hovered_link`}
                                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <Link href={'/login'} className={`${styles.header_link} hovered_link`}>Sign In</Link>
                        )}
                        <button
                            onClick={() => {
                                if (isLoggedIn) {
                                    setIsModalOpen(true);
                                } else {
                                    router.push('/login');
                                }
                            }}
                            className="btn-primary"
                        >
                            Open Project
                        </button>
                    </div>
                </div>
            </div>
            <ProjectCreationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </header>
    )
}

export default Header;
