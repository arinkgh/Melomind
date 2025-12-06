import { axiosClient } from "@/services/axios/axiosClient";
import {
  LoginRequest,
  RegisterRequest,
  VerifyOTPRequest,
  CheckUserResponse,
  SendOTPResponse,
  RegisterResponse,
  LoginResponse,
  LogoutResponse,
  VerifyOtpResponse,
} from "./auth.types";

export const authService = {
  checkUser: async (mobile: string): Promise<CheckUserResponse> => {
    const { data } = await axiosClient.post("/auth/check", { mobile });
    return data;
  },

  sendOtp: async (mobile: string): Promise<SendOTPResponse> => {
    const { data } = await axiosClient.post("/auth/send-otp", { mobile });
    return data;
  },

  verifyOtp: async (payload: VerifyOTPRequest): Promise<VerifyOtpResponse> => {
    const { data } = await axiosClient.post("/auth/verify-otp", payload);
    return data;
  },

  register: async (payload: RegisterRequest): Promise<RegisterResponse> => {
    const { data } = await axiosClient.post("/auth/register", payload);
    return data;
  },

  login: async (payload: LoginRequest): Promise<LoginResponse> => {
    const { data } = await axiosClient.post("/auth/login-pwd", payload);
    return data;
  },

  logout: async (token: string): Promise<LogoutResponse> => {
    const { data } = await axiosClient.post("/auth/logout", { token });
    return data;
  },
};
