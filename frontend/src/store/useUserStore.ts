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