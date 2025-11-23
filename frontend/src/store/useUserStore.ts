import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type UserState = {
    role: string | null;
    setRole: (role: string) => void;
    clearRole: () => void;
};

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            role: null,
            setRole: (role) => set({ role }),
            clearRole: () => set({ role: null }),
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
