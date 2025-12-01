// import { create } from "zustand";
// import { authService } from "./auth.service";
// import axios from "axios";

// interface AuthState {
//   step: number;
//   mobile: string;
//   otpToken?: string | null;
//   isNewUser: boolean;
//   setMobile: (m: string) => void;

//   checkMobile: (mobile: string) => Promise<boolean>;

//   tryLogin: (mobile: string, password: string) => Promise<boolean>;
//   registerUser: (payload: {
//     token?: string;
//     mobile: string;
//     name: string;
//     lastname: string;
//     email?: string;
//     password?: string;
//   }) => Promise<boolean>;
//   sendOtp: (mobile: string) => Promise<boolean>;
//   verifyOtp: (
//     mobile: string,
//     code: number,
//     forgot_password?: boolean
//   ) => Promise<boolean>;

//   reset: () => void;
// }

// export const useAuthStore = create<AuthState>((set, get) => ({
//   step: 1,
//   mobile: "",
//   otpToken: null,
//   isNewUser: false,

//   setMobile: (mobile) => set({ mobile }),
  

//   reset: () => set({ step: 1, mobile: "", otpToken: null, isNewUser: false }),

//   checkMobile: async (mobile: string): Promise<boolean> => {
//     try {
//       const res = await authService.checkUser(mobile);
//       if (res.success && res.data.exists) {
//         set({ step: 2, mobile, isNewUser: false });
//         return true;
//       } else {
//         set({ step: 7, mobile, isNewUser: true });
//         return true;
//       }
//     } catch (err) {
//       console.error("checkMobile API error:", err);
//       return false;
//     }
//   },

//   tryLogin: async (mobile, password) => {
//     try {
//       const res = await authService.login({ mobile, password });
//       if (res.success) {
//         set({ step: 8, mobile, otpToken: res.token ?? null, isNewUser: false });
//         return true;
//       } else {
//         if (res.error_code === 1202) {
//           set({ step: 7, mobile, isNewUser: true });
//           return false;
//         }
//         console.log("Login failed:", res.error_desc?.fa);
//         return false;
//       }
//     } catch (err) {
//       console.error("Login API error:", err);
//       return false;
//     }
//   },

//   registerUser: async (payload) => {
//     try {
//       const res = await authService.register(payload);

//       if (res.success) {
//         set({ step: 2, mobile: payload.mobile, isNewUser: false });

//         const sent = await get().sendOtp(payload.mobile);

//         if (!sent) {
//           console.log(" ارسال OTP بعد از ثبت‌نام موفق نبود");
//           return false;
//         }

//         console.log(" ثبت‌نام و ارسال OTP با موفقیت انجام شد");
//         return true;
//       }

//       console.log(" Registration failed:", res.error_desc?.fa);
//       return false;
//     } catch (err) {
//       console.error("Register API error:", err);
//       return false;
//     }
//   },

//   sendOtp: async (mobile) => {
//     try {
//       const res = await authService.sendOtp(mobile);

//       if (res.success) {
//         console.log(
//           " OTP SENT:",
//           res.otp ?? res.data?.otp ?? " API did not return OTP field"
//         );

//         return true;
//       }

//       console.log(" sendOtp failed:", res.error_desc?.fa);
//       return false;
//     } catch (err) {
//       console.error("sendOtp API error:", err);
//       return false;
//     }
//   },

//   verifyOtp: async (mobile, code, forgot_password = false) => {
//     try {
//       const res = await authService.verifyOtp({
//         mobile,
//         code,
//         forgot_password,
//       });

//       if (res.success) {
//         if (res.otp || res.data?.otp) {
//           console.log(" OTP (from verify):", res.otp ?? res.data?.otp);
//         }

//         set({ step: 8, otpToken: res.token ?? null });
//         return true;
//       }

//       console.log("verifyOtp failed:", res.error_desc?.fa);
//       return false;
//     } catch (err) {
//       console.error("verifyOtp API error:", err);
//       return false;
//     }   
//   },
// }));













// import { create } from "zustand";
// import { authService } from "./auth.service";

// const savedToken =
//   typeof window !== "undefined" ? localStorage.getItem("token") : null;
// const savedUser =
//   typeof window !== "undefined"
//     ? (() => {
//         const raw = localStorage.getItem("user");
//         if (!raw || raw === "undefined" || raw === "null") return null;

//         try {
//           return JSON.parse(raw);
//         } catch (err) {
//           console.error("Invalid JSON in localStorage 'user':", raw);
//           return null;
//         }
//       })()
//     : null;


// interface AuthState {
//   step: number;
//   mobile: string;
//   token: string | null;
//   user: any | null; 
//   isNewUser: boolean;

//   setMobile: (m: string) => void;

//   loginSuccess: (token: string, user: any) => void;
//   logout: () => void;

//   checkMobile: (mobile: string) => Promise<boolean>;

//   tryLogin: (mobile: string, password: string) => Promise<boolean>;
//   registerUser: (payload: any) => Promise<boolean>;
//   sendOtp: (mobile: string) => Promise<boolean>;
//   verifyOtp: (mobile: string, code: number) => Promise<boolean>;

//   reset: () => void;
// }

// export const useAuthStore = create<AuthState>((set, get) => ({
//   step: 1,
//   mobile: "",
//   token: savedToken,
//   user: savedUser,
//   isNewUser: false,

//   setMobile: (mobile) => set({ mobile }),

 
//   loginSuccess: (token, user) => {
//     console.log("loginSuccess called:", token, user);
//     localStorage.setItem("token", token);
//     localStorage.setItem("user", JSON.stringify(user));

//     set({ token, user, step: 8 });
//   },

//   logout: () => {
//     console.log("logout called");
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     set({ token: null, user: null, step: 1 });
//   },

//   reset: () => set({ step: 1, mobile: "", token: null, user: null }),

//   checkMobile: async (mobile) => {
//     try {
//       const res = await authService.checkUser(mobile);

//       if (res.success && res.data.exists) {
//         set({ step: 2, mobile, isNewUser: false });
//         return true;
//       } else {
//         set({ step: 7, mobile, isNewUser: true });
//         return true;
//       }
//     } catch (err) {
//       console.error("checkMobile error:", err);
//       return false;
//     }
//   },

//   tryLogin: async (mobile, password) => {
//     try {
//       const res = await authService.login({ mobile, password });

//       if (res.success) {
//         get().loginSuccess(res.token, res.data.user);
//         console.log("loginSuccess called with token and user");
//         return true;
//       }

//       return false;
//     } catch (err) {
//       console.error("tryLogin error:", err);
//       return false;
//     }
//   },

//   registerUser: async (payload) => {
//     try {
//       const res = await authService.register(payload);

//       if (res.success) {
//         set({ step: 2, mobile: payload.mobile, isNewUser: false });

//         return await get().sendOtp(payload.mobile);
//       }

//       return false;
//     } catch (err) {
//       console.error("registerUser error:", err);
//       return false;
//     }
//   },

//   sendOtp: async (mobile) => {
//     try {
//       const res = await authService.sendOtp(mobile);
//       return res.success;
//     } catch (err) {
//       console.error("sendOtp error:", err);
//       return false;
//     }
//   },

//   verifyOtp: async (mobile, code) => {
//     try {
//       const res = await authService.verifyOtp({
//         mobile,
//         code,
//         forgot_password: false,
//       });

//       if (res.success) {
        
//         get().loginSuccess(res.token, res.data.user);
//         return true;
//       }

//       return false;
//     } catch (err) {
//       console.error("verifyOtp error:", err);
//       return false;
//     }
//   },
// }));







import { create } from "zustand";
import { persist } from "zustand/middleware";
import { authService } from "./auth.service";

interface AuthState {
  step: number;
  mobile: string;
  token: string | null;
  user: any | null;
  isNewUser: boolean;

  setMobile: (mobile: string) => void;
  loginSuccess: (token: string, user: any) => void;
  logout: () => void;

  checkMobile: (mobile: string) => Promise<boolean>;
  tryLogin: (mobile: string, password: string) => Promise<boolean>;
  registerUser: (payload: any) => Promise<boolean>;
  sendOtp: (mobile: string) => Promise<boolean>;
  verifyOtp: (mobile: string, code: number) => Promise<boolean>;

  reset: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      step: 1,
      mobile: "",
      token: null,
      user: null,
      isNewUser: false,

      setMobile: (mobile) => set({ mobile }),

      loginSuccess: (token, user) => {
        set({ token, user, step: 8, isNewUser: false });
      },

      logout: () => {
        set({ token: null, user: null, step: 1, mobile: "", isNewUser: false });
      },

      reset: () =>
        set({ step: 1, mobile: "", token: null, user: null, isNewUser: false }),

      checkMobile: async (mobile) => {
        try {
          const res = await authService.checkUser(mobile);

          if (res.success && res.data.exists) {
            set({ step: 2, mobile, isNewUser: false });
            return true;
          } else {
            set({ step: 7, mobile, isNewUser: true });
            return true;
          }
        } catch (err) {
          console.error("checkMobile error:", err);
          return false;
        }
      },

      tryLogin: async (mobile, password) => {
        try {
          const res = await authService.login({ mobile, password });
          if (res.success) {
            get().loginSuccess(res.token, res.data.user);
            console.log("Login API result:", res);
            return true;
          }
          return false;
        } catch (err) {
          console.error("tryLogin error:", err);
          return false;
        }
      },

      registerUser: async (payload) => {
        try {
          const res = await authService.register(payload);
          if (res.success) {
            set({ step: 2, mobile: payload.mobile, isNewUser: false });
            return await get().sendOtp(payload.mobile);
          }
          return false;
        } catch (err) {
          console.error("registerUser error:", err);
          return false;
        }
      },

      sendOtp: async (mobile) => {
        try {
          const res = await authService.sendOtp(mobile);
          return res.success;
        } catch (err) {
          console.error("sendOtp error:", err);
          return false;
        }
      },

      verifyOtp: async (mobile, code) => {
        try {
          const res = await authService.verifyOtp({
            mobile,
            code,
            forgot_password: false,
          });
          if (res.success) {
            get().loginSuccess(res.token, res.data.user);
            return true;
          }
          return false;
        } catch (err) {
          console.error("verifyOtp error:", err);
          return false;
        }
      },
    }),

    {
      name: "auth-storage",
      partialize: (state) => ({
        token: state.token,
        user: state.user,
      }),
    }
  )
);
