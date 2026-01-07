// import React from "react";
// import { FaCheck } from "react-icons/fa6";

// const FinalPrice = () => {
//   const priceData = {
//     totalPrice: 12000000,
//     discount: 500000,
//     finalPrice: 11500000,
//     discountCode: "Firstreserve1402",
//   };

//   const formatNumber = (num) => num.toLocaleString("fa-IR");

//   return (
//     <div className="rounded-[20px] w-full bg-secondary/5 flex flex-col md:flex-row justify-between gap-6 p-6">
//       {/* Left box */}
//       <div className="w-full md:w-1/2 flex flex-col justify-between gap-3">
//         <p className="text-secondary text-[18px] font-extrabold">
//           قیمت: {formatNumber(priceData.totalPrice)} ریال
//         </p>
//         <p className="text-secondary text-[18px] font-extrabold">
//           قیمت نهایی:{" "}
//           <span className="text-primary font-bold text-3xl">
//             {formatNumber(priceData.finalPrice)} ریال
//           </span>
//         </p>
//       </div>

//       {/* Right box */}
//       <div className="w-full md:w-1/2 flex flex-col justify-between gap-3">
//         <p className="text-secondary text-[18px] font-extrabold">
//           تخفیف: {formatNumber(priceData.discount)} ریال
//         </p>

//         {/* Discount code area - responsive: full width on mobile */}
//         <div className="w-full flex flex-col sm:flex-row gap-3 items-center">
//           <div className="flex-1">
//             <div className="rounded-[90px] bg-background h-[48px] w-full flex items-center justify-between px-4">
//               <p className="text-secondary/80 text-[16px] font-bold truncate">
//                 کد تخفیف: <span className="text-secondary">{priceData.discountCode}</span>
//               </p>
//               <div className="bg-primary/70 rounded-full flex items-center justify-center w-8 h-8">
//                 <FaCheck className="text-background" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FinalPrice;





// import React, { useMemo } from "react";
// import { FaCheck } from "react-icons/fa6";
// import { useReserveStore } from "@/store/reserve.store";

// const FinalPrice = () => {
//   const reservations = useReserveStore((s) => s.reservations);

//   const { totalPrice, discount, finalPrice } = useMemo(() => {
//     const total = reservations.reduce(
//       (sum, r) => sum + r.price,
//       0
//     );

//     const discount = total > 0 ? 500_000 : 0; // مثال
//     return {
//       totalPrice: total,
//       discount,
//       finalPrice: total - discount,
//     };
//   }, [reservations]);

//   const formatNumber = (num: number) =>
//     num.toLocaleString("fa-IR");

//   if (reservations.length === 0) return null;

//   return (
//     <div className="rounded-[20px] w-full bg-secondary/5 flex flex-col md:flex-row justify-between gap-6 p-6">
//       {/* Left */}
//       <div className="w-full md:w-1/2 flex flex-col gap-3">
//         <p className="text-secondary text-[18px] font-extrabold">
//           قیمت: {formatNumber(totalPrice)} ریال
//         </p>

//         <p className="text-secondary text-[18px] font-extrabold">
//           قیمت نهایی:
//           <span className="text-primary font-bold text-3xl block">
//             {formatNumber(finalPrice)} ریال
//           </span>
//         </p>
//       </div>

//       {/* Right */}
//       <div className="w-full md:w-1/2 flex flex-col gap-3">
//         <p className="text-secondary text-[18px] font-extrabold">
//           تخفیف: {formatNumber(discount)} ریال
//         </p>

//         <div className="rounded-[90px] bg-background h-[48px] flex items-center justify-between px-4">
//           <p className="text-secondary/80 text-[16px] font-bold">
//             کد تخفیف: <span className="text-secondary">Firstreserve1402</span>
//           </p>
//           <div className="bg-primary/70 rounded-full w-8 h-8 flex items-center justify-center">
//             <FaCheck className="text-background" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FinalPrice;




import { useMemo } from "react";
import { useReserveStore } from "@/store/reserve.store";
import { FaCheck } from "react-icons/fa6";

const FinalPrice = () => {
  const { reservations, items } = useReserveStore();

  const getService = (id: string) =>
    items.find((s) => s.id === id);

  const totalPrice = useMemo(() => {
    return reservations.reduce((sum, r) => {
      return (
        sum +
        r.services.reduce(
          (s, id) => s + (getService(id)?.price ?? 0),
          0
        )
      );
    }, 0);
  }, [reservations, items]);

  const discount = totalPrice ? 500_000 : 0;
  const finalPrice = totalPrice - discount;

  if (!reservations.length) return null;

  return (
    <div className="rounded-[20px] w-full bg-secondary/5 flex flex-col md:flex-row justify-between gap-6 p-6">
      <div>
        <p className="text-secondary font-bold">
          قیمت نهایی:
          <span className="text-primary text-3xl block">
            {finalPrice.toLocaleString("fa-IR")} ریال
          </span>
        </p>
      </div>

      <div className="flex items-center gap-2">
        <span>کد تخفیف: Firstreserve1402</span>
        <FaCheck />
      </div>
    </div>
  );
};

export default FinalPrice;
