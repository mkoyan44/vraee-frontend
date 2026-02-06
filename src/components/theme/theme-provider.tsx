'use client';

import React, { useEffect, useLayoutEffect } from 'react';
import { useThemeStore } from '@/store/useUserStore';

interface ThemeProviderProps {
    children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
    const { theme } = useThemeStore();

    // Use useLayoutEffect to apply theme synchronously before paint
    useLayoutEffect(() => {
        const root = document.documentElement;
        // Remove any existing theme classes
        root.classList.remove('scheme-light', 'scheme-dark');
        // Add the current theme class
        root.classList.add(`scheme-${theme}`);
        // Also set data attribute as backup
        root.setAttribute('data-theme', theme);
    }, [theme]);

    // Also handle theme changes with useEffect for smooth transitions
    useEffect(() => {
        // Temporarily disable animations during theme switch (only for changes, not initial load)
        const root = document.documentElement;
        if (root.classList.contains('scheme-light') || root.classList.contains('scheme-dark')) {
            root.classList.add('theme-switching');
            setTimeout(() => {
                root.classList.remove('theme-switching');
            }, 10);
        }
    }, [theme]);

    return <>{children}</>;
}
