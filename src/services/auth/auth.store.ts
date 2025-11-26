import { create } from "zustand";
import { authService } from "./auth.service";

interface AuthState {
  step: number;
  mobile: string;
  otpToken?: string | null;
  isNewUser: boolean;
  setMobile: (m: string) => void;

  checkMobile: (mobile: string) => Promise<boolean>;

  tryLogin: (mobile: string, password: string) => Promise<boolean>;
  registerUser: (payload: {
    token?: string;
    mobile: string;
    name: string;
    lastname: string;
    email?: string;
    password?: string;
  }) => Promise<boolean>;
  sendOtp: (mobile: string) => Promise<boolean>;
  verifyOtp: (
    mobile: string,
    code: number,
    forgot_password?: boolean
  ) => Promise<boolean>;

  reset: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  step: 1,
  mobile: "",
  otpToken: null,
  isNewUser: false,

  setMobile: (mobile) => set({ mobile }),

  reset: () => set({ step: 1, mobile: "", otpToken: null, isNewUser: false }),

  checkMobile: async (mobile: string): Promise<boolean> => {
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
      console.error("checkMobile API error:", err);
      return false;
    }
  },

  tryLogin: async (mobile, password) => {
    try {
      const res = await authService.login({ mobile, password });
      if (res.success) {
        set({ step: 8, mobile, otpToken: res.token ?? null, isNewUser: false });
        return true;
      } else {
        if (res.error_code === 1202) {
          set({ step: 7, mobile, isNewUser: true });
          return false;
        }
        console.log("Login failed:", res.error_desc?.fa);
        return false;
      }
    } catch (err) {
      console.error("Login API error:", err);
      return false;
    }
  },

  registerUser: async (payload) => {
    try {
      const res = await authService.register(payload);
      if (res.success) {
        set({ step: 2, mobile: payload.mobile, isNewUser: false });
        const sent = await get().sendOtp(payload.mobile);
        if (!sent) {
          console.log("Failed to send OTP after register");
          return false;
        }
        return true;
      } else {
        console.log("Registration failed:", res.error_desc?.fa);
        return false;
      }
    } catch (err) {
      console.error("Register API error:", err);
      return false;
    }
  },

  sendOtp: async (mobile) => {
    try {
      const res = await authService.sendOtp(mobile);

      if (res.success) {
        console.log("OTP CODE:", res.otp); 
        return true;
      }

      console.log("sendOtp failed:", res.error_desc?.fa);
      return false;
    } catch (err) {
      console.error("sendOtp API error:", err);
      return false;
    }
  },

  verifyOtp: async (mobile, code, forgot_password = false) => {
    try {
      const res = await authService.verifyOtp({
        mobile,
        code,
        forgot_password,
      });
      if (res.success) {
        set({ step: 8, otpToken: res.token ?? null });
        return true;
      }
      console.log("verifyOtp failed:", res.error_desc?.fa);
      return false;
    } catch (err) {
      console.error("verifyOtp API error:", err);
      return false;
    }
  },
}));
