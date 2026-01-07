import axios from "axios";
import { ServicesListResponse, ServiceItem } from "./reserve.types";

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ?? "";

const client = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10_000,
});

export const reserveService = {
  async getServicesList(): Promise<ServiceItem[]> {
    const res = await client.get<ServicesListResponse>("/services/list");
    if (!res.data || !res.data.success) {
      throw new Error("Failed to fetch services list");
    }
    return res.data.data;
  },
};


interface AddReservePayload {
  token: string;
  session: string;
  services: string[];
}

export const reserveApi = {
  addReserve: (payload: AddReservePayload) =>
    client.post("/user/reserves/add", payload),
};

