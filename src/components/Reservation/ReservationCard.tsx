// "use client";

// import React from "react";
// import CircleNextBtn from "../common/Butttons/CircleNextBtn";
// import Image from "next/image";
// import { reservationItems } from "@/utils/constants/ReservationCards";

// const ReservationCard = () => {
//   return (
//     <div className="mt-10 w-full flex flex-col md:flex-row md:flex-wrap lg:flex-row items-center justify-center md:justify-around gap-6 md:gap-8">
//       {reservationItems.map(({ img, title, desc }, index) => (
//         <div
//           key={index}
//           className="border-2 w-[85%] xl:w-[280px] md:h-[340px] rounded-[20px] flex flex-col items-center justify-around shadow bg-background py-6 cursor-pointer hover:border-primary transition"
//         >
//           <Image src={img} alt={title} className="w-20 h-20" />
//           <div className="flex flex-col items-center text-center">
//             <h4 className="text-secondary font-bold text-xl md:text-2xl">
//               {title}
//             </h4>
//             <p className="text-secondary/80 text-[14px] md:text-[18px] mt-1">
//               {desc}
//             </p>
//           </div>
//           <CircleNextBtn />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ReservationCard;


// src/components/reservation/ReservationCard.tsx
"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useReserveStore } from "@/store/reserve.store";
import { ServiceItem } from "@/services/reserve/reserve.types";

const ReservationCard: React.FC = () => {
  const router = useRouter();
  const { items, fetchServices, loading, error, selectItem, selectedGroup } =
    useReserveStore((s) => ({
      items: s.items,
      fetchServices: s.fetchServices,
      loading: s.loading,
      error: s.error,
      selectItem: s.selectItem,
      selectedGroup: s.selectedGroup,
    }));

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  const groupItems = items.filter((i) => i.category === "group");

  const onClick = (item: ServiceItem) => {
    selectItem(item);
    router.push("/reservation/reservetype"); // next step
  };

  if (loading && groupItems.length === 0)
    return <div className="py-8 text-center">در حال بارگذاری...</div>;

  if (error && groupItems.length === 0)
    return <div className="py-8 text-center text-red-500">{error}</div>;

  return (
    <div className="mt-10 w-full flex flex-col md:flex-row md:flex-wrap lg:flex-row items-center justify-center md:justify-around gap-6 md:gap-8">
      {groupItems.map((item) => {
        const isSelected = selectedGroup?.id === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onClick(item)}
            className={`border-2 w-[85%] xl:w-[280px] md:h-[340px] rounded-[20px] flex flex-col items-center justify-around shadow bg-background py-6 cursor-pointer transition
              ${isSelected ? "border-primary scale-105" : "hover:border-primary"}`}
          >
            {/* Simple placeholder image icon: you can replace with actual image if available */}
            <div className="w-20 h-20 rounded-full bg-[#E6F6F8] flex items-center justify-center">
              <span className="text-xl font-bold">📌</span>
            </div>

            <div className="flex flex-col items-center text-center px-4">
              <h4 className="text-secondary font-bold text-xl md:text-2xl">
                {item.name}
              </h4>
              {item.short_desc && (
                <p className="text-secondary/80 text-[14px] md:text-[18px] mt-1">
                  {item.short_desc}
                </p>
              )}
              <p className="mt-2 font-semibold">{item.price?.toLocaleString()} تومان</p>
            </div>

            <div className="text-sm text-muted">
              <span>انتخاب و ادامه</span>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default ReservationCard;
