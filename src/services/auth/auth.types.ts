export interface LoginRequest {
  mobile: string;
  password: string;
}


export interface LoginResponse {
  success: boolean;
  token?: string;
  message?: string;
}

export interface CheckUserResponse {
  success: boolean;
  data: {
    exists: boolean;
    code?: {
      [mobile: string]: {
        code: number;
        expiry: string;
      }
    }
  };
}

export interface RegisterRequest {
  token: string;
  mobile: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  success: boolean;
  error_code?: number;
  error_desc?: {
    fa: string;
    en: string;
  };
}