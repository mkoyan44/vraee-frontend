'use client';

import React from 'react';
import { useThemeStore } from '@/store/useUserStore';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useThemeStore();

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle flex items-center justify-center w-12 h-6 bg-gray-300 rounded-full p-1 transition-all duration-200 ease-in-out hover:bg-gray-400"
            aria-label="Toggle theme"
        >
            <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                    theme === 'dark' ? 'translate-x-6 bg-gray-800' : 'translate-x-0'
                }`}
            />
            <span className="sr-only">{theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}</span>
        </button>
    );
}
