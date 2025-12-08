export type ServiceCategory = "group" | "type" | "meeting";

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  name: string;
  short_desc?: string;
  description?: string;
  price: number;
}

export interface ServicesListResponse {
  success: boolean;
  data: ServiceItem[];
}
