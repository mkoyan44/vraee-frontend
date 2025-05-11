"use client"

import { useEffect, useState } from 'react';

type Breakpoints = {
    isMobile: boolean;     // <= 767px
    isTablet: boolean;     // <= 1023px
    isLaptop: boolean;     // <= 1199px
    isDesktop: boolean;    // >= 1200px
    custom: boolean;
};

export function useBreakpoint(customQuery = '(max-width: 999px)'): Breakpoints {
    const getMatches = (query: string) =>
        typeof window !== 'undefined' ? window.matchMedia(query).matches : false;

    const [matches, setMatches] = useState<Breakpoints>({
        isMobile: getMatches('(max-width: 767px)'),
        isTablet: getMatches('(max-width: 1023px)'),
        isLaptop: getMatches('(max-width: 1199px)'),
        isDesktop: getMatches('(min-width: 1200px)'),
        custom: getMatches(customQuery),
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const queries = {
            isMobile: window.matchMedia('(max-width: 767px)'),
            isTablet: window.matchMedia('(max-width: 1023px)'),
            isLaptop: window.matchMedia('(max-width: 1199px)'),
            isDesktop: window.matchMedia('(min-width: 1200px)'),
            custom: window.matchMedia(customQuery),
        };

        const handleChange = () => {
            setMatches({
                isMobile: queries.isMobile.matches,
                isTablet: queries.isTablet.matches,
                isLaptop: queries.isLaptop.matches,
                isDesktop: queries.isDesktop.matches,
                custom: queries.custom.matches,
            });
        };

        Object.values(queries).forEach((mq) => {
            mq.addEventListener('change', handleChange);
        });

        // начальная установка
        handleChange();

        return () => {
            Object.values(queries).forEach((mq) => {
                mq.removeEventListener('change', handleChange);
            });
        };
    }, [customQuery]);

    return matches;
}
