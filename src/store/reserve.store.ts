"use client";

import {create} from "zustand";
import { persist } from "zustand/middleware";
import { ServiceItem } from "@/services/reserve/reserve.types";
import { reserveService } from "@/services/reserve/reserve.service";

type Nullable<T> = T | null;

interface ReserveState {
  items: ServiceItem[];         
  loading: boolean;
  error?: string | null;

  selectedGroup: Nullable<ServiceItem>;
  selectedType: Nullable<ServiceItem>;
  selectedMeeting: Nullable<ServiceItem>;

  fetchServices: () => Promise<void>;
  selectItem: (item: ServiceItem) => void;
  clearSelections: () => void;
  setError: (err?: string | null) => void;
}

export const useReserveStore = create<ReserveState>()(
  persist(
    (set, get) => ({
      items: [],
      loading: false,
      error: null,
      selectedGroup: null,
      selectedType: null,
      selectedMeeting: null,

      setError: (err) => set({ error: err }),

      fetchServices: async () => {
        if (get().items.length > 0) return;
        set({ loading: true, error: null });
        try {
          const items = await reserveService.getServicesList();
          set({ items, loading: false });
        } catch (error: any) {
          const message =
            error?.message ?? "خطا در دریافت لیست سرویس‌ها";
          set({ error: message, loading: false });
        }
      },

      selectItem: (item: ServiceItem) => {
        // set selection based on category
        if (item.category === "group") {
          set({ selectedGroup: item });
          // clear later steps if user changes earlier step
          set({ selectedType: null, selectedMeeting: null });
        } else if (item.category === "type") {
          set({ selectedType: item });
          set({ selectedMeeting: null });
        } else if (item.category === "meeting") {
          set({ selectedMeeting: item });
        }
      },

      clearSelections: () =>
        set({
          selectedGroup: null,
          selectedType: null,
          selectedMeeting: null,
        }),
    }),
    {
      name: "reserve-storage-v1",
      // persist selections & items. If you want to only persist selections, you can customize `partialize`.
      partialize: (state) => ({
        items: state.items,
        selectedGroup: state.selectedGroup,
        selectedType: state.selectedType,
        selectedMeeting: state.selectedMeeting,
      }),
    }
  )
);
