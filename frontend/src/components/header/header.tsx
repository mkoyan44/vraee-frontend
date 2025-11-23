"use client"
import styles from "@/assets/styles/client/components/header.module.scss";
import {useBreakpoint} from '@/hooks/useBreakpoint';
import {useHasMounted} from '@/hooks/useHasMounted';

import React, {useEffect, useState} from "react"
import Link from "next/link"
import Image from "next/image";
import {usePathname} from 'next/navigation';
import Icon from "@/components/icon/icon";

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
        href: "#",
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
        href: "#",
    },
]

const Header: React.FC = () => {
    const pathname = usePathname();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isLaptop} = useBreakpoint();
    const hasMounted = useHasMounted();
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
                        <Image src={'/logo.svg'} alt={''} width={'100'} height={'45'}/>
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
                                                <Link href={'/login'} className={`${styles.header_link} hovered_link`}>Sign
                                                    In</Link>
                                                <Link href={'#'} className="btn-primary">Create Order</Link>
                                            </div>
                                        </>
                                    )
                                }
                                return null;
                            }()
                        }
                    </nav>
                    <div className={styles.buttons}>
                        <Link href={'/login'} className={`${styles.header_link} hovered_link`}>Sign In</Link>
                        <Link href={'#'} className="btn-primary">Create Order</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
