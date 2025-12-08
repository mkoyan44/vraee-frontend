'use client';

import React, { useEffect } from 'react';
import { useThemeStore } from '@/store/useUserStore';

interface ThemeProviderProps {
    children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
    const { theme } = useThemeStore();

    useEffect(() => {
        // Temporarily disable animations during theme switch
        const root = document.documentElement;
        root.classList.add('theme-switching');

        // Use requestAnimationFrame to ensure the class is applied before making changes
        requestAnimationFrame(() => {
            // Remove any existing theme classes
            root.classList.remove('scheme-light', 'scheme-dark');
            // Add the current theme class
            root.classList.add(`scheme-${theme}`);
            // Also set data attribute as backup
            root.setAttribute('data-theme', theme);

            // Re-enable animations after a short delay
            setTimeout(() => {
                root.classList.remove('theme-switching');
            }, 10);
        });
    }, [theme]);

    return <>{children}</>;
}
