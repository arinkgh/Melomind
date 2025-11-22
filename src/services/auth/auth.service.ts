import { axiosClient } from '@/services/axios/axiosClient';
import {
  LoginRequest,
  LoginResponse,
  CheckUserResponse,
  RegisterRequest,
  RegisterResponse
} from "./auth.types";

// export const authService = {
//   checkUser: async (mobile: string) => {
//     const { data } = await axiosClient.post<CheckUserResponse>(
//       "/auth/check",
//       { mobile }
//     );
//     return data;
//   },

//   login: async (payload: LoginRequest) => {
//     const { data } = await axiosClient.post<LoginResponse>(
//       "/auth/login",
//       payload
//     );
//     return data;
//   },

//   register: async (payload: RegisterRequest) => {
//     const { data } = await axiosClient.post<RegisterResponse>(
//       "/auth/register",
//       payload
//     );
//     return data;
//   },
// };



export const authService = {
  checkUser: async (mobile: string) => {
    const { data } = await axiosClient.post('/auth/check', { mobile });
    return data;
  },

  sendOtp: async (mobile: string) => {
    const { data } = await axiosClient.post('/auth/send-otp', { mobile });
    return data;
  },

  verifyOtp: async (payload: { mobile: string; code: number; forgot_password?: boolean }) => {
    const { data } = await axiosClient.post('/auth/verify-otp', payload);
    return data;
  },

  register: async (payload: {
    token: string;
    mobile: string;
    name: string;
    lastname: string;
    email?: string;
    password?: string;
  }) => {
    const { data } = await axiosClient.post('/auth/register', payload);
    return data;
  },

  login: async (payload: { mobile: string; password?: string }) => {
    const { data } = await axiosClient.post('/auth/login', payload);
    return data;
  },
};
