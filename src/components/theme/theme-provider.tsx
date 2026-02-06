'use client';

import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useThemeStore } from '@/store/useUserStore';

interface ThemeProviderProps {
    children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
    const { theme, setTheme } = useThemeStore();
    const hasSyncedFromScript = useRef(false);

    useLayoutEffect(() => {
        const root = document.documentElement;
        const scriptTheme = root.getAttribute('data-theme');
        const fromScript = scriptTheme === 'light' || scriptTheme === 'dark';

        let toApply = theme;
        if (fromScript && !hasSyncedFromScript.current) {
            setTheme(scriptTheme as 'light' | 'dark');
            hasSyncedFromScript.current = true;
            toApply = scriptTheme;
        }

        root.classList.remove('scheme-light', 'scheme-dark');
        root.classList.add(`scheme-${toApply}`);
        root.setAttribute('data-theme', toApply);
    }, [theme, setTheme]);

    useEffect(() => {
        const root = document.documentElement;
        if (root.classList.contains('scheme-light') || root.classList.contains('scheme-dark')) {
            root.classList.add('theme-switching');
            const t = setTimeout(() => root.classList.remove('theme-switching'), 10);
            return () => clearTimeout(t);
        }
    }, [theme]);

    return <>{children}</>;
}
