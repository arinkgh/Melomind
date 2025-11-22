// import { create } from "zustand";
// import { authService } from "./auth.service";

// interface AuthState {
//   step: number;
//   mobile: string;

//   setMobile: (m: string) => void;
//   checkUserAndGoNext: (mobile: string) => Promise<void>;
//   registerUser: (payload: {
//     token: string;
//     mobile: string;
//     name: string;
//     lastname: string;
//     email: string;
//     password: string;
//   }) => Promise<void>;
// }

// export const useAuthStore = create<AuthState>((set) => ({
//   step: 1,
//   mobile: "",

//   setMobile: (mobile) => set({ mobile }),

//   checkUserAndGoNext: async (mobile) => {
//     try {
//       const res = await authService.checkUser(mobile);

//       if (res.data.exists) {
//         set({ step: 2, mobile });
//       } else {
//         set({ step: 7, mobile });
//       }
//     } catch (error) {
//       console.log(" API error:", error);
//     }
//   },
//   registerUser: async (payload) => {
//     try {
//       const res = await authService.register(payload);

//       if (res.success) {
//         set({ step: 2, mobile: payload.mobile });
//       } else {
//         console.log("Registration failed:", res.error_desc?.fa);
//       }
//     } catch (err) {
//       console.log("Register API Error:", err);
//     }
//   },
// }));



// services/auth/auth.store.ts
import { create } from "zustand";
import { authService } from "./auth.service";

interface AuthState {
  step: number; // 1: entrance, 2: verification, 7: create account, 9: logged in (example)
  mobile: string;
  otpToken?: string | null;
  setMobile: (m: string) => void;
  checkUserAndSendOtp: (mobile: string) => Promise<void>;
  sendOtp: (mobile: string) => Promise<void>;
  verifyOtp: (mobile: string, code: number, forgot_password?: boolean) => Promise<boolean>;
  registerUser: (payload: {
    token: string;
    mobile: string;
    name: string;
    lastname: string;
    email?: string;
    password?: string;
  }) => Promise<boolean>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  step: 1,
  mobile: "",
  otpToken: null,

  setMobile: (mobile) => set({ mobile }),

  checkUserAndSendOtp: async (mobile) => {
    try {
      const res = await authService.checkUser(mobile);

      // اگر exists باشه یعنی کاربر قبلا ثبت شده — ما باز هم باید OTP بفرستیم برای ورود
      if (res.data.exists) {
        await get().sendOtp(mobile);
        set({ step: 2, mobile }); // step 2 = verification
      } else {
        // کاربر جدید — ارسال OTP برای ثبت‌نام
        await get().sendOtp(mobile);
        set({ step: 7, mobile }); // یا می‌تونی مستقیم به صفحه ثبت‌نام بری ولی پیشنهاد: به verification برو سپس بعد از verify→register
      }
    } catch (error) {
      console.log("checkUserAndSendOtp error:", error);
    }
  },

  sendOtp: async (mobile) => {
    try {
      const res = await authService.sendOtp(mobile);
      if (res.success) {
        // معمولاً send-otp فقط موفقیت را برمی‌گرداند (توکن بعد از verify داده می‌شود)
        console.log("OTP sent", res);
      } else {
        console.log("sendOtp failed:", res);
      }
    } catch (err) {
      console.log("sendOtp API error:", err);
    }
  },

  verifyOtp: async (mobile, code, forgot_password = false) => {
    try {
      const res = await authService.verifyOtp({ mobile, code, forgot_password });
      if (res.success && res.data?.token) {
        // ذخیره توکن موقتی برای ثبت‌نام یا ادامه فلو
        set({ otpToken: res.data.token, step: 9 }); // step 9 = verified / logged-in depending on API
        return true;
      } else {
        console.log("verifyOtp failed:", res);
        return false;
      }
    } catch (err) {
      console.log("verifyOtp API error:", err);
      return false;
    }
  },

  registerUser: async (payload) => {
    try {
      const res = await authService.register(payload);
      if (res.success) {
        // بعد از ثبت‌نام موفق معمولا backend ی توکن نهایی می‌ده
        set({ step: 2, mobile: payload.mobile }); // یا هر step لازم
        return true;
      } else {
        console.log("register failed:", res.error_desc);
        return false;
      }
    } catch (err) {
      console.log("register API error:", err);
      return false;
    }
  },
}));
