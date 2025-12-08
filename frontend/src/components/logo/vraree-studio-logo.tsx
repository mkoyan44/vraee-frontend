'use client';

import React from 'react';
import Image from 'next/image';
import { useThemeStore } from '@/store/useUserStore';

interface VrareeStudioLogoProps {
    width?: number;
    height?: number;
    className?: string;
}

export default function VrareeStudioLogo({
    width = 75,
    height = 16,
    className = ""
}: VrareeStudioLogoProps) {
    const { theme } = useThemeStore();

    const logoSrc = theme === 'dark'
        ? '/vraree-studio-dark.svg'
        : '/vraree-studio-light.svg';

    return (
        <Image
            src={logoSrc}
            alt="Vraree Studio"
            width={width}
            height={height}
            className={className}
            priority
        />
    );
}
