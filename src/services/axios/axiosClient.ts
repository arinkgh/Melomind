// import axios from "axios";

// export const axiosClient = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
//   withCredentials: false,
//   timeout: 10000,
// });


import axios from "axios";

export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 15000,
  withCredentials: false,
});

// --- REQUEST INTERCEPTOR ---
axiosClient.interceptors.request.use(
  (config) => {
    // Prevent errors during SSR
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    // Always send JSON
    config.headers["Content-Type"] = "application/json";

    return config;
  },
  (error) => Promise.reject(error)
);

// --- RESPONSE INTERCEPTOR ---
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle expired token
    if (error?.response?.status === 401) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
        window.location.href = "/auth/entrance"; // redirect to login step1
      }
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
