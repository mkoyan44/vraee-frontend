"use client";

import { useEffect } from "react";

/**
 * On refresh or initial load, ensure the page starts at the top.
 * Disables browser scroll restoration so refresh doesn't jump to a previous position.
 */
export default function ScrollRestorationFix() {
    useEffect(() => {
        if (typeof window === "undefined") return;
        window.history.scrollRestoration = "manual";
        window.scrollTo(0, 0);
        const raf = requestAnimationFrame(() => {
            window.scrollTo(0, 0);
        });
        return () => cancelAnimationFrame(raf);
    }, []);
    return null;
}
