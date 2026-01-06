// import Image from "next/image";
// import React from "react";
// import mind from "@/../public/Images/mind.svg";
// import alone from "@/../public/Images/alone.svg";
// import { FaRegTrashAlt } from "react-icons/fa";
// import { RiEditBoxFill } from "react-icons/ri";

// const ReserveTable = () => {
//   const items = [
//     {
//       id: 1,
//       image: mind,
//       title: "نوبت فردی - روان درمانی - آنلاین",
//       date: "۱۴۰۲ / ۰۲ / ۱۸",
//       time: "۱۵:۳۰ - ۱۶:۰۰",
//       price: "۵,۰۰۰,۰۰۰ ریال",
//     },
//     {
//       id: 2,
//       image: alone,
//       title: "نوبت زوج درمانی - ویزیت - حضوری",
//       date: "۱۴۰۲ / ۰۶ / ۲۰",
//       time: "۱۰:۳۰ - ۱۱:۰۰",
//       price: "۷,۰۰۰,۰۰۰ ریال",
//     },
//   ];

//   return (
//     <div className="border-2 rounded-[20px] w-full bg-background p-4 flex flex-col gap-3 overflow-hidden">
//       {/* Header */}
//       <div className="hidden md:flex font-bold w-full h-12 flex-row text-secondary">
//         <div className=" w-80 flex items-center px-3">عنوان</div>
//         <div className=" w-40 text-center flex items-center justify-center">
//           تاریخ
//         </div>
//         <div className=" w-40 text-center flex items-center justify-center">
//           زمان
//         </div>
//         <div className=" w-40 text-center flex items-center justify-center">
//           قیمت
//         </div>
//         <div className=" w-40 text-center flex items-center justify-center">
//           عملیات
//         </div>
//       </div>

//       {/* Items */}
//       {items.map((item) => (
//         <div
//           key={item.id}
//           className="bg-secondary/5  rounded-[20px] w-full flex flex-col lg:flex-row lg:h-12 cursor-pointer font-normal transition hover:bg-secondary/10"
//         >
//           {/* Title */}
//           <div className=" flex flex-row items-center gap-2 p-3 lg:w-80">
//             <Image
//               src={item.image}
//               alt={item.title}
//               className="w-8 h-8 lg:w-6 lg:h-6"
//             />
//             <p className="text-secondary text-lg md:text-xl lg:text-[14px] xl:text-base font-medium">
//               {item.title}
//             </p>
//           </div>

//           {/* Date */}
//           <div className=" flex items-center justify-between lg:justify-center p-3 lg:w-40">
//             <span className="lg:hidden text-secondary/70 font-semibold">
//               تاریخ:
//             </span>
//             <p className="text-secondary text-sm xl:text-base lg:whitespace-nowrap font-medium text-center">
//               {item.date}
//             </p>
//           </div>

//           {/* Time */}
//           <div className=" flex items-center justify-between lg:justify-center p-3 lg:w-40">
//             <span className="lg:hidden text-secondary/70 font-semibold">
//               زمان:
//             </span>
//             <p className="text-secondary text-sm xl:text-base font-medium text-center">
//               {item.time}
//             </p>
//           </div>

//           {/* Price */}
//           <div className=" flex items-center justify-between lg:justify-center p-3 lg:w-40">
//             <span className="lg:hidden text-secondary/70 font-semibold">
//               قیمت:
//             </span>
//             <p className="text-secondary text-sm xl:text-base font-medium text-center">
//               {item.price}
//             </p>
//           </div>

//           {/* Actions */}
//           <div className=" flex items-center justify-center gap-4 p-3 lg:w-40">
//             <RiEditBoxFill className="text-secondary/40 w-6 h-6" />
//             <FaRegTrashAlt className="text-[#FF2424] w-5 h-5" />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ReserveTable;




"use client";

import Image from "next/image";
import { FaRegTrashAlt } from "react-icons/fa";
import { RiEditBoxFill } from "react-icons/ri";
import { useReserveStore } from "@/store/reserve.store";

const ReserveTable = () => {
  const reservations = useReserveStore((s) => s.reservations);
  const remove = useReserveStore((s) => s.removeReservation);

  if (reservations.length === 0) return null;

  return (
    <div className="border-2 rounded-[20px] w-full bg-background p-4 flex flex-col gap-3">
      {reservations.map((item) => (
        <div
          key={item.id}
          className="bg-secondary/5 rounded-[20px] w-full flex flex-col lg:flex-row lg:h-12"
        >
          <div className="flex items-center gap-2 p-3 lg:w-80">
            <Image src="/Images/mind.svg" alt="" width={24} height={24} />
            <p className="text-secondary font-medium">
              {item.group?.name ?? "-"}
              {item.type?.name ?? "-"}
              {item.meeting?.name ?? "-"}
            </p>
          </div>
          

          <div className="p-3 lg:w-40 text-center">{item.date}</div>
          <div className="p-3 lg:w-40 text-center">{item.time}</div>
          <div className="p-3 lg:w-40 text-center">
            {item.price.toLocaleString()} تومان
          </div>

          <div className="p-3 lg:w-40 flex gap-4 justify-center">
            <RiEditBoxFill className="text-secondary/40 w-6 h-6" />
            <FaRegTrashAlt
              onClick={() => remove(item.id)}
              className="text-[#FF2424] w-5 h-5 cursor-pointer"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReserveTable;
