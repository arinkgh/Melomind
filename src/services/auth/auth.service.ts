import { axiosClient } from "@/services/axios/axiosClient";
import {
  LoginRequest,
  CheckUserResponse,
  RegisterRequest,
  VerifyOTPRequest,
} from "./auth.types";

export const authService = {
  checkUser: async (mobile: string): Promise<CheckUserResponse> => {
    const { data } = await axiosClient.post("/auth/check", { mobile });
    return data;
  },

  sendOtp: async (mobile: string) => {
    const { data } = await axiosClient.post("/auth/send-otp", { mobile });
    return data;
  },

  verifyOtp: async (payload: VerifyOTPRequest) => {
    const { data } = await axiosClient.post("/auth/verify-otp", payload);
    return data;
  },

  register: async (payload: RegisterRequest) => {
    const { data } = await axiosClient.post("/auth/register", payload);
    return data;
  },

  login: async (payload: LoginRequest) => {
    const { data } = await axiosClient.post("/auth/login", payload);
    return data;
  },
};
