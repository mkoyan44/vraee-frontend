'use client';

import React, { useState, useEffect } from 'react';
import { useThemeStore } from '@/store/useUserStore';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useThemeStore();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch by only rendering theme-dependent content after mount
    useEffect(() => {
        setMounted(true);
    }, []);

    // Default to light theme for SSR - ensure consistent server/client rendering
    const currentTheme = mounted ? theme : 'light';
    const isDark = mounted && theme === 'dark';

    // Render consistent structure on server and client
    return (
        <button
            onClick={toggleTheme}
            className="relative inline-flex items-center w-11 h-6 rounded-full transition-all duration-200 overflow-hidden"
            suppressHydrationWarning
            style={{
                backgroundColor: isDark 
                    ? 'rgba(var(--btn-primary-bg), 0.2)' 
                    : 'rgba(var(--btn-primary-bg), 0.1)',
                border: `1px solid ${isDark 
                    ? 'rgba(var(--btn-primary-bg), 0.3)' 
                    : 'rgba(var(--btn-primary-bg), 0.2)'}`,
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = isDark 
                    ? 'rgba(var(--btn-primary-bg), 0.25)' 
                    : 'rgba(var(--btn-primary-bg), 0.15)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = isDark 
                    ? 'rgba(var(--btn-primary-bg), 0.2)' 
                    : 'rgba(var(--btn-primary-bg), 0.1)';
            }}
            aria-label="Toggle theme"
        >
            {mounted ? (
                <div
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full flex items-center justify-center transition-all duration-200 ease-in-out"
                    style={{
                        left: isDark ? 'calc(100% - 18px)' : '4px',
                        backgroundColor: 'rgb(var(--btn-primary-bg))',
                        color: 'rgb(var(--btn-primary-text))',
                    }}
                >
                    {isDark ? (
                        <Sun className="w-2.5 h-2.5" />
                    ) : (
                        <Moon className="w-2.5 h-2.5" />
                    )}
                </div>
            ) : (
                <div
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full flex items-center justify-center transition-all duration-200 ease-in-out"
                    style={{
                        left: '4px',
                        backgroundColor: 'rgb(var(--btn-primary-bg))',
                        color: 'rgb(var(--btn-primary-text))',
                    }}
                >
                    <Moon className="w-2.5 h-2.5" />
                </div>
            )}
            <span className="sr-only">{isDark ? 'Switch to light theme' : 'Switch to dark theme'}</span>
        </button>
    );
}
