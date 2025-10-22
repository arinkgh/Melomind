// import AdminTitle from '@/components/common/AdminTitle/AdminTitle'
// import React from 'react'
// import mind from "@/../public/Images/mind.svg";
// import alone from "@/../public/Images/alone.svg";
// import { FaRegTrashAlt } from "react-icons/fa";
// import { RiEditBoxFill } from "react-icons/ri";
// import Image from 'next/image';
// import online from "@/../public/Images/online.svg";
// import meet from "@/../public/Images/meet.svg";

// const MyReservation = () => {

//       const items = [
//     {
//       id: 1,
//       image: mind,
//       title: "نوبت فردی - روان درمانی - آنلاین",
//       date: "۱۴۰۲ / ۰۲ / ۱۸",
//       time: "۱۵:۳۰ - ۱۶:۰۰",
//       price: "۵,۰۰۰,۰۰۰ ریال",
//       meetType: "حضوری",
//       meetTypeImg: meet,
//     },
//     {
//       id: 2,
//       image: alone,
//       title: "نوبت زوج درمانی - ویزیت - حضوری",
//       date: "۱۴۰۲ / ۰۶ / ۲۰",
//       time: "۱۰:۳۰ - ۱۱:۰۰",
//       price: "۷,۰۰۰,۰۰۰ ریال",
//       meetType: "آنلاین",
//       meetTypeImg: online,
//     },
//   ];

//   return (
//     <div className='flex flex-col gap-8'>
//       {/* title */}
//       <AdminTitle subtitle='نوبت‌های جاری من' title='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، '/>
//       {/* main */}
//       <div className="border-2 rounded-[20px] w-full h-100 bg-background p-4 flex flex-col gap-3 overflow-hidden">
//             {/* Header */}
//             <div className="hidden md:flex font-bold w-full h-12 flex-row text-secondary">
//               <div className=" w-80 flex items-center px-3">عنوان</div>
//               <div className=" w-40 text-center flex items-center justify-center">
//                 تاریخ
//               </div>
//               <div className=" w-40 text-center flex items-center justify-center">
//                 زمان
//               </div>
//               <div className=" w-40 text-center flex items-center justify-center">
//                 قیمت
//               </div>
//                <div className=" w-40 text-center flex items-center justify-center">
//                 نوع جلسه
//               </div>
//               <div className=" w-40 text-center flex items-center justify-center">
//                 عملیات
//               </div>
//             </div>

//             {/* Items */}
//             {items.map((item) => (
//               <div
//                 key={item.id}
//                 className="bg-secondary/5  rounded-[20px] w-full flex flex-col lg:flex-row lg:h-12 cursor-pointer font-normal transition hover:bg-secondary/10"
//               >
//                 {/* Title */}
//                 <div className=" flex flex-row items-center gap-2 p-3 lg:w-80">
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     className="w-8 h-8 lg:w-6 lg:h-6"
//                   />
//                   <p className="text-secondary text-sm lg:text-[10px] xl:text-base font-medium">
//                     {item.title}
//                   </p>
//                 </div>

//                 {/* Date */}
//                 <div className=" flex items-center justify-between lg:justify-center p-3 lg:w-40">
//                   <span className="lg:hidden text-secondary/70 font-semibold">
//                     تاریخ:
//                   </span>
//                   <p className="text-secondary text-sm xl:text-base lg:whitespace-nowrap font-medium text-center">
//                     {item.date}
//                   </p>
//                 </div>

//                 {/* Time */}
//                 <div className=" flex items-center justify-between lg:justify-center p-3 lg:w-40">
//                   <span className="lg:hidden text-secondary/70 font-semibold">
//                     زمان:
//                   </span>
//                   <p className="text-secondary text-sm xl:text-base font-medium text-center">
//                     {item.time}
//                   </p>
//                 </div>

//                 {/* Price */}
//                 <div className=" flex items-center justify-between lg:justify-center p-3 lg:w-40">
//                   <span className="lg:hidden text-secondary/70 font-semibold">
//                     قیمت:
//                   </span>
//                   <p className="text-secondary text-sm xl:text-base font-medium text-center">
//                     {item.price}
//                   </p>
//                 </div>

//                 {/* Meet Type */}
//                 <div className=" flex flex-row items-center gap-2 p-3 lg:w-40">
//                   <Image
//                     src={item.meetTypeImg}
//                     alt={item.meetType}
//                     className="w-8 h-8 lg:w-6 lg:h-6"
//                   />
//                   <p className="text-secondary text-sm lg:text-[10px] xl:text-base font-medium">
//                     {item.meetType}
//                   </p>
//                 </div>

//                 {/* Actions */}
//                 <div className=" flex items-center justify-center gap-4 p-3 lg:w-40">
//                   <RiEditBoxFill className="text-secondary/40 w-6 h-6" />
//                   <FaRegTrashAlt className="text-[#FF2424] w-5 h-5" />
//                 </div>
//               </div>
//             ))}
//           </div>
//     </div>
//   )
// }

// export default MyReservation

"use client";

import React, { useState } from "react";
import AdminTitle from "@/components/common/AdminTitle/AdminTitle";
import mind from "@/../public/Images/mind.svg";
import alone from "@/../public/Images/alone.svg";
import { FaRegTrashAlt } from "react-icons/fa";
import { RiEditBoxFill } from "react-icons/ri";
import Image from "next/image";
import online from "@/../public/Images/online.svg";
import meet from "@/../public/Images/meet.svg";
import deleteimg from "@/../public/Images/delete.svg";

const MyReservation = () => {
  // 🔹 State for modal open/close
  const [open, setOpen] = useState(false);

  // 🔹 Optional: track which item is being deleted
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      id: 1,
      image: mind,
      title: "نوبت فردی - روان درمانی - آنلاین",
      date: "۱۴۰۲ / ۰۲ / ۱۸",
      time: "۱۵:۳۰ - ۱۶:۰۰",
      price: "۵,۰۰۰,۰۰۰ ریال",
      meetType: "حضوری",
      meetTypeImg: meet,
    },
    {
      id: 2,
      image: alone,
      title: "نوبت زوج درمانی - ویزیت - حضوری",
      date: "۱۴۰۲ / ۰۶ / ۲۰",
      time: "۱۰:۳۰ - ۱۱:۰۰",
      price: "۷,۰۰۰,۰۰۰ ریال",
      meetType: "آنلاین",
      meetTypeImg: online,
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* ===== Title ===== */}
      <AdminTitle
        subtitle="نوبت‌های جاری من"
        title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،"
      />

      {/* ===== Reservation List ===== */}
      <div className="border-2 rounded-[20px] w-full bg-background p-4 flex flex-col gap-3 overflow-hidden">
        {/* Header */}
        <div className="hidden md:flex font-bold w-full h-12 flex-row text-secondary">
          <div className="w-80 flex items-center px-3">عنوان</div>
          <div className="w-40 text-center flex items-center justify-center">
            تاریخ
          </div>
          <div className="w-40 text-center flex items-center justify-center">
            زمان
          </div>
          <div className="w-40 text-center flex items-center justify-center">
            قیمت
          </div>
          <div className="w-40 text-center flex items-center justify-center">
            نوع جلسه
          </div>
          <div className="w-40 text-center flex items-center justify-center">
            عملیات
          </div>
        </div>

        {/* Items */}
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-secondary/5 rounded-[20px] w-full flex flex-col lg:flex-row lg:h-12 cursor-pointer font-normal transition hover:bg-secondary/10"
          >
            {/* Title */}
            <div className="flex flex-row items-center gap-2 p-3 lg:w-80">
              <Image
                src={item.image}
                alt={item.title}
                className="w-8 h-8 lg:w-6 lg:h-6"
              />
              <p className="text-secondary text-sm lg:text-[10px] xl:text-base font-medium">
                {item.title}
              </p>
            </div>

            {/* Date */}
            <div className="flex items-center justify-between lg:justify-center p-3 lg:w-40">
              <span className="lg:hidden text-secondary/70 font-semibold">
                تاریخ:
              </span>
              <p className="text-secondary text-sm xl:text-base font-medium text-center">
                {item.date}
              </p>
            </div>

            {/* Time */}
            <div className="flex items-center justify-between lg:justify-center p-3 lg:w-40">
              <span className="lg:hidden text-secondary/70 font-semibold">
                زمان:
              </span>
              <p className="text-secondary text-sm xl:text-base font-medium text-center">
                {item.time}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between lg:justify-center p-3 lg:w-40">
              <span className="lg:hidden text-secondary/70 font-semibold">
                قیمت:
              </span>
              <p className="text-secondary text-sm xl:text-base font-medium text-center">
                {item.price}
              </p>
            </div>

            {/* Meet Type */}
            <div className="flex flex-row items-center gap-2 p-3 lg:w-40">
              <Image
                src={item.meetTypeImg}
                alt={item.meetType}
                className="w-8 h-8 lg:w-6 lg:h-6"
              />
              <p className="text-secondary text-sm lg:text-[10px] xl:text-base font-medium">
                {item.meetType}
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-center gap-4 p-3 lg:w-40">
              <RiEditBoxFill className="text-secondary/40 w-6 h-6 cursor-pointer" />
              <FaRegTrashAlt
                className="text-[#FF2424] w-5 h-5 cursor-pointer"
                onClick={() => {
                  setSelectedItem(item);
                  setOpen(true);
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* ===== Modal ===== */}
      {open && (
        <div
          className="fixed inset-0 bg-secondary/40 backdrop-blur-sm flex items-center justify-center z-50 px-2"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl flex flex-col items-center gap-14"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Example modal content */}
            <div className="w-[85%] mx-auto items-center justify-center text-center flex flex-col gap-4">
              <Image
                src={deleteimg}
                alt="Logo"
                width={120}
                height={120}
                className="mx-auto mb-4"
              />
              {/* title */}
              <h2 className="text-3xl font-bold text-secondary mb-2">
                آیا مایل به حذف رزرو نوبت خود هستید؟{" "}
              </h2>
              {/* reserve option */}
              <div className="w-[90%] rounded-[20px] bg-secondary/5 p-6">

              </div>
              {/* buttons */}
              <div className="flex justify-center gap-4 ">
                <button
                  className="
            flex items-center justify-center
            bg-background text-secondary border-2 font-bold hover:bg-background
            gap-2
            rounded-[110px] md:rounded-full lg:rounded-[110px]
            py-2 px-3 md:py-2 md:px-2 lg:py-4 lg:px-26 cursor-pointer
          "
                  onClick={() => setOpen(false)}
                >
                  انصراف
                </button>
                <button
                  className="
            flex items-center justify-center
            bg-primary/90 transition text-white  font-bold hover:bg-primary
            gap-2
            rounded-[110px] md:rounded-full lg:rounded-[110px]
            py-2 px-3 md:py-2 md:px-2 lg:py-4 lg:px-26 cursor-pointer
          "
                  onClick={() => {
                    // 🔥 handle delete logic here
                    setOpen(false);
                  }}
                >
                  حذف شود
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyReservation;
