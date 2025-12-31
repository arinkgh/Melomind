// // "use client";

// // import { visitTypes } from "@/utils/constants/ReservationCards";
// // import Image from "next/image";
// // import React from "react";

// // const VisitTypeCard = () => {
// //   return (
// //     <div className="mt-10 w-full flex flex-col md:flex-row items-center justify-center gap-4">
// //       {visitTypes.map(({ img, title, desc }, index) => (
// //         <div
// //           key={index}
// //           className="border-2 w-[85%] md:w-[45%] lg:w-[250px] h-[220px] sm:h-[240px] rounded-[20px] flex flex-col items-center justify-center shadow bg-background p-4 cursor-pointer hover:border-primary transition"
// //         >
// //           <Image src={img} alt={title} className="w-20 h-20" />
// //           <div className="flex flex-col items-center text-center">
// //             <h4 className="text-secondary font-bold text-xl sm:text-2xl">
// //               {title}
// //             </h4>
// //             <p className="text-[#10587080] text-sm sm:text-[18px] font-semibold mt-1">
// //               {desc}
// //             </p>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default VisitTypeCard;


// // src/components/reservation/VisitTypeCard.tsx
"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useReserveStore } from "@/store/reserve.store";
import { ServiceItem } from "@/services/reserve/reserve.types";

const VisitTypeCard: React.FC = () => {
  const router = useRouter();
const items = useReserveStore((s) => s.items);
const fetchServices = useReserveStore((s) => s.fetchServices);
const loading = useReserveStore((s) => s.loading);
const error = useReserveStore((s) => s.error);
const selectItem = useReserveStore((s) => s.selectItem);
const selectedType = useReserveStore((s) => s.selectedType);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  const typeItems = items.filter((i) => i.category === "type");

  const onClick = (item: ServiceItem) => {
    selectItem(item);
    router.push("/reservation/reservetype/meet-type"); // next step
  };

  if (loading && typeItems.length === 0)
    return <div className="py-8 text-center">در حال بارگذاری...</div>;

  if (error && typeItems.length === 0)
    return <div className="py-8 text-center text-red-500">{error}</div>;

  return (
    <div className="mt-10 w-full flex flex-col md:flex-row items-center justify-center gap-4">
      {typeItems.map((item) => {
        const isSelected = selectedType?.id === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onClick(item)}
            className={`border-2 w-[85%] md:w-[45%] lg:w-[250px] h-[220px] sm:h-[240px] rounded-[20px] flex flex-col items-center justify-center shadow bg-background p-4 cursor-pointer transition
              ${isSelected ? "border-primary scale-105" : "hover:border-primary"}`}
          >
            <div className="w-20 h-20 rounded-full bg-[#E6F6F8] flex items-center justify-center">
              <span className="text-xl font-bold">🩺</span>
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
            <p className="mt-2 font-semibold">{item.price?.toLocaleString()} تومان</p>
          </button>
        );
      })}
    </div>
  );
};

export default VisitTypeCard;




// "use client";

// import React, { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useReserveStore } from "@/store/reserve.store";
// import { ServiceItem } from "@/services/reserve/reserve.types";
// import type { ReserveState } from "@/store/reserve.store";

// const VisitTypeCard: React.FC = () => {
//   const router = useRouter();

// const items = useReserveStore((s) => s.items);
// const fetchServices = useReserveStore((s) => s.fetchServices);
// const loading = useReserveStore((s) => s.loading);
// const error = useReserveStore((s) => s.error);
// const selectItem = useReserveStore((s) => s.selectItem);
// const selectedType = useReserveStore((s) => s.selectedType);


//   useEffect(() => {
//     if (items.length === 0) {
//       fetchServices();
//     }
//   }, [items.length, fetchServices]);

//   const typeItems = items.filter((i) => i.category === "type");

//   const onClick = (item: ServiceItem) => {
//     selectItem(item);
//     router.push("/reservation/reservetype/meet-type");
//   };

//   if (loading && typeItems.length === 0)
//     return <div className="py-8 text-center">در حال بارگذاری...</div>;

//   if (error && typeItems.length === 0)
//     return (
//       <div className="py-8 text-center text-red-500">{error}</div>
//     );

//   return (
//     <div className="mt-10 w-full flex flex-col md:flex-row items-center justify-center gap-4">
//       {typeItems.map((item) => {
//         const isSelected = selectedType?.id === item.id;

//         return (
//           <button
//             key={item.id}
//             onClick={() => onClick(item)}
//             className={`border-2 w-[85%] md:w-[45%] lg:w-[250px]
//               h-[220px] sm:h-[240px] rounded-[20px]
//               flex flex-col items-center justify-center shadow bg-background p-4
//               transition
//               ${
//                 isSelected
//                   ? "border-primary scale-105"
//                   : "hover:border-primary"
//               }`}
//           >
//             <div className="w-20 h-20 rounded-full bg-[#E6F6F8] flex items-center justify-center">
//               <span className="text-xl font-bold">🩺</span>
//             </div>

//             <div className="flex flex-col items-center text-center mt-2 px-2">
//               <h4 className="text-secondary font-bold text-xl sm:text-2xl">
//                 {item.name}
//               </h4>
//               {item.short_desc && (
//                 <p className="text-[#10587080] text-sm sm:text-[18px] font-semibold mt-1">
//                   {item.short_desc}
//                 </p>
//               )}
//             </div>

//             <p className="mt-2 font-semibold">
//               {item.price.toLocaleString()} تومان
//             </p>
//           </button>
//         );
//       })}
//     </div>
//   );
// };

// export default VisitTypeCard;
