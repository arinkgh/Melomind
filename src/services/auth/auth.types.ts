// export interface LoginRequest {
//   mobile: string;
//   password: string;
// }

// export interface LoginResponse {
//   success: boolean;
//   token?: string;
//   message?: string;
// }

// export interface CheckUserResponse {
//   success: boolean;
//   data: {
//     exists: boolean;
//     code?: {
//       [mobile: string]: {
//         code: number;
//         expiry: string;
//       };
//     };
//   };
// }

// export interface RegisterRequest {
//   token?: string;
//   mobile: string;
//   name: string;
//   lastname: string;
//   email?: string;
//   password?: string;
// }

// export interface RegisterResponse {
//   success: boolean;
//   error_code?: number;
//   error_desc?: {
//     fa: string;
//     en: string;
//   };
//   data?: {
//     token?: string;
//   };
// }

// export interface VerifyOTPRequest {
//   mobile: string;
//   code: number;
//   forgot_password?: boolean;
// }

// export interface VerifyOTPResponse {
//   success: boolean;
//   token?: string;
//   data?: {
//     token?: string;
//   };
// }

// export interface ApiResponse<T = any> {
//   success?: boolean;
//   data?: T;
//   token?: string;
//   exists?: boolean;
// }




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

export type CheckUserResponse = ApiErrorResponse;

export interface SendOTPData {
  code: Record<string, { code: number; expiry: string }>;
}
export type SendOTPResponse =
  | ApiSuccessResponse<SendOTPData>
  | ApiErrorResponse;

export type VerifyOTPResponse = ApiErrorResponse;

export type RegisterResponse = ApiErrorResponse;

export type LoginResponse = ApiErrorResponse;
