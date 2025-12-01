// Response
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
  user: string; 
}

export interface LoginSuccessResponse {
  success: true;
  token: string;
  data: LoginSuccessData;
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
  exists: boolean;
}

// Response payloads
export interface CheckUserData {
  exists: boolean;
}

export type CheckUserResponse =
  | ApiSuccessResponse<CheckUserData>
  | ApiErrorResponse;;

export interface SendOTPData {
  code: Record<string, { code: number; expiry: string }>;
}
export type SendOTPResponse =
  | ApiSuccessResponse<SendOTPData>
  | ApiErrorResponse;

export type VerifyOTPResponse = ApiErrorResponse;

export type RegisterResponse = ApiErrorResponse;

export type LoginResponse = LoginSuccessResponse | ApiErrorResponse;
