// import { authService } from "@/services/auth/auth.service";
// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// interface User {
//   name: string;
//   lastname: string;
//   mobile?: string;
//   email?: string;
// }

// interface AuthState {
//   token: string | null;
//   user: User | null;
//   step: number;
//   setToken: (token: string | null) => void;
//   setUser: (user: User | null) => void;
//   setStep: (step: number) => void;
//   logout: () => void;
//   mobile: string;
//   setMobile: (m: string) => void;
//   isNewUser: boolean;
//   setIsNewUser: (val: boolean) => void;
// }

// export const useAuthStore = create<AuthState>()(
//   persist(
//     (set) => ({
//       token: null,
//       user: null,
//       step: 1,
//       mobile: "",
//       isNewUser: false,

//       setToken: (token) => set({ token }),
//       setUser: (user) => set({ user }),
//       setStep: (step) => set({ step }),
//       setMobile: (mobile) => set({ mobile }),
//       setIsNewUser: (val) => set({ isNewUser: val }),

//       logout: async () => {
//         const token = useAuthStore.getState().token;

//         try {
//           if (token) {
//             await authService.logout(token);
//           }
//         } catch (err) {
//           console.error("Logout API error:", err);
//         }

//         set({
//           token: null,
//           user: null,
//           step: 1,
//           mobile: "",
//         });
//       },
//     }),
//     { name: "auth-storage" }
//   )
// );


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

      logout: async () => {
        const token = get().token;
        try {
          if (token) {
            await authService.logout(token);
          }
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
        // بعد از اینکه localStorage لود شد:
        state?.set({ hydrated: true });
      },
    }
  )
);
