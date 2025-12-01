import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  step: number;
  mobile: string;
  token: string | null;
  user: string | null;
  isNewUser: boolean;

  setMobile: (mobile: string) => void;
  setStep: (step: number) => void;
  setToken: (token: string | null) => void;
  setUser: (user: string | null) => void;
  setIsNewUser: (bool: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      step: 1,
      mobile: "",
      token: null,
      user: null,
      isNewUser: false,

      setMobile: (mobile) => set({ mobile }),
      setStep: (step) => set({ step }),
      setToken: (token) => set({ token }),
      setUser: (user) => set({ user }),
      setIsNewUser: (isNew) => set({ isNewUser: isNew }),

      logout: () =>
        set({ step: 1, mobile: "", token: null, user: null, isNewUser: false }),
    }),
    {
      name: "auth-storage",
      partialize: (s) => ({ token: s.token, user: s.user }),
    }
  )
);
