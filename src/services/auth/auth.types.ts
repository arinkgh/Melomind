// Response
export interface User {
  name: string;
  lastname: string;
  mobile?: string;
  email?: string;
}
export interface ErrorDescription {
  fa: string;
  en: string;
}

export interface ApiErrorResponse {
  success: false;
  error_code: number;
  error_desc: ErrorDescription;
}

export interface ApiSuccessResponse<T> {
  success: true;
  data: T;
}

export interface ApiSuccessEmpty {
  success: true;
}

export interface LoginSuccessData {
  user: User;
}

export interface LoginSuccessResponse {
  success: true;
  token: string;
  data: {
    user: User;
  };
}

export interface VerifyOTPSuccessData {
  user: string;
}

export interface VerifyOtpSuccessResponse {
  success: true;
  data: {
    token: string;
  };
}

export interface VerifyOtpErrorResponse {
  success: false;
  error_code: number;
  error_desc: {
    fa: string;
    en: string;
  };
}

// Request
export interface LoginRequest {
  mobile: string;
  password: string;
}

export interface RegisterRequest {
  mobile: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
}

export interface VerifyOTPRequest {
  mobile: string;
  code: number;
  forgot_password: boolean;
}

// Response payloads
export interface CheckUserData {
  exists: boolean;
}

export type CheckUserResponse =
  | ApiSuccessResponse<CheckUserData>
  | ApiErrorResponse;

export interface SendOTPData {
  code: Record<string, { code: number; expiry: string }>;
}
export type SendOTPResponse =
  | ApiSuccessResponse<SendOTPData>
  | ApiErrorResponse;


export type VerifyOtpResponse = VerifyOtpSuccessResponse | VerifyOtpErrorResponse;

export type RegisterResponse = ApiErrorResponse;

export type LoginResponse = LoginSuccessResponse | ApiErrorResponse;

export type LogoutResponse = ApiSuccessEmpty | ApiErrorResponse;
