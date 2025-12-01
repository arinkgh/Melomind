import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  name: string;
  lastname: string;
}

interface AuthState {
  token: string | null;
  user: User | null;
  step: number;
  setToken: (token: string | null) => void;
  setUser: (user: User | null) => void;
  setStep: (step: number) => void;
  logout: () => void;
  mobile: string;
  setMobile: (m: string) => void;
  isNewUser: boolean;
  setIsNewUser: (val: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      step: 1,
      mobile: "",
      isNewUser: false,

      setToken: (token) => set({ token }),
      setUser: (user) => set({ user }),
      setStep: (step) => set({ step }),
      setMobile: (mobile) => set({ mobile }),
      setIsNewUser: (val) => set({ isNewUser: val }),

      logout: () =>
        set({
          token: null,
          user: null,
          step: 1,
          mobile: "",
        }),
    }),
    {
      name: "auth-storage",
    }
  )
);
