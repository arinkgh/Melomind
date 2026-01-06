"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useReserveStore } from "@/store/reserve.store";
import { ServiceItem } from "@/services/reserve/reserve.types";

const MeetTypeCard: React.FC = () => {
  const router = useRouter();
  const items = useReserveStore((s) => s.items);
  const fetchServices = useReserveStore((s) => s.fetchServices);
  const loading = useReserveStore((s) => s.loading);
  const error = useReserveStore((s) => s.error);
  const selectItem = useReserveStore((s) => s.selectItem);
  const selectedMeeting = useReserveStore((s) => s.selectedMeeting);

  useEffect(() => {
    if (items.length === 0) {
      fetchServices();
    }
  }, [items.length, fetchServices]);

  const meetItems = items.filter((i) => i.category === "meeting");

  const onClick = (item: ServiceItem) => {
    selectItem(item);
    router.push("/reservation/reservetype/meet-type/date");
  };

  if (loading && meetItems.length === 0)
    return <div className="py-8 text-center">در حال بارگذاری...</div>;

  if (error && meetItems.length === 0)
    return <div className="py-8 text-center text-red-500">{error}</div>;

  return (
    <div className="mt-10 w-full flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-4">
      {meetItems.map((item) => {
        const isSelected = selectedMeeting?.id === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onClick(item)}
            className={`border-2 w-[85%] md:w-[45%] lg:w-[250px] h-[220px] sm:h-[240px] rounded-[20px] flex flex-col items-center justify-center shadow bg-background p-4 cursor-pointer transition
              ${
                isSelected ? "border-primary scale-105" : "hover:border-primary"
              }`}
          >
            <div className="w-20 h-20 rounded-full bg-[#E6F6F8] flex items-center justify-center">
              <span className="text-xl font-bold">💬</span>
            </div>

            <div className="flex flex-col items-center text-center mt-2 px-2">
              <h4 className="text-secondary font-bold text-xl sm:text-2xl">
                {item.name}
              </h4>
              {item.short_desc && (
                <p className="text-[#10587080] text-sm sm:text-[18px] font-semibold mt-1">
                  {item.short_desc}
                </p>
              )}
            </div>
            <p className="mt-2 font-semibold">
              {item.price?.toLocaleString()} تومان
            </p>
          </button>
        );
      })}
    </div>
  );
};

export default MeetTypeCard;
