"use client";

import { authService } from "@/services/auth/auth.service";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  name: string;
  lastname: string;
  mobile?: string;
  email?: string;
}

interface AuthState {
  token: string | null;
  user: User | null;
  step: number;

  mobile: string;
  isNewUser: boolean;
  hydrated: boolean;

  setToken: (token: string | null) => void;
  setUser: (user: User | null) => void;
  setStep: (step: number) => void;
  setMobile: (mobile: string) => void;
  setIsNewUser: (val: boolean) => void;

  setHydrated: () => void;

  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      token: null,
      user: null,
      step: 1,
      mobile: "",
      isNewUser: false,
      hydrated: false,

      setToken: (token) => set({ token }),
      setUser: (user) => set({ user }),
      setStep: (step) => set({ step }),
      setMobile: (mobile) => set({ mobile }),
      setIsNewUser: (val) => set({ isNewUser: val }),

      setHydrated: () => set({ hydrated: true }),

      logout: async () => {
        const token = get().token;
        try {
          if (token) await authService.logout(token);
        } catch (e) {
          console.error("Logout API error:", e);
        }
        set({
          token: null,
          user: null,
          step: 1,
          mobile: "",
          isNewUser: false,
        });
      },
    }),
    {
      name: "auth-storage",

      onRehydrateStorage: () => (state) => {
        if (!state) return;

        if (typeof state.setHydrated === "function") {
          state.setHydrated();
        }
      },
    }
  )
);
