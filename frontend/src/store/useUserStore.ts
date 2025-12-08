import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type UserState = {
    role: string | null;
    userData: {
        id: number;
        email: string;
        fullName?: string;
    } | null;
    setRole: (role: string) => void;
    setUserData: (data: { id: number; email: string; fullName?: string }) => void;
    clearRole: () => void;
    clearUserData: () => void;
};

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            role: null,
            userData: null,
            setRole: (role) => set({ role }),
            setUserData: (userData) => set({ userData }),
            clearRole: () => set({ role: null, userData: null }),
            clearUserData: () => set({ userData: null }),
        }),
        {
            name: "user-role",
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);

// Theme store
export type Theme = 'light' | 'dark';

type ThemeState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
};

export const useThemeStore = create<ThemeState>()(
    persist(
        (set, get) => ({
            theme: 'light', // default to light
            setTheme: (theme) => set({ theme }),
            toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
        }),
        {
            name: "theme",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
