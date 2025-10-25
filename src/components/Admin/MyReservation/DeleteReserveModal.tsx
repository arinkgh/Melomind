"use client";

import Image from "next/image";
import React, { useState } from "react";
import deleteimg from "@/../public/Images/delete.svg";
import success from "@/../public/Images/success.svg";

const DeleteReserveModal = ({
  selectedItem,
  setOpen,
}: {
  selectedItem: any;
  setOpen: (v: boolean) => void;
}) => {
  const [isDeleted, setIsDeleted] = useState(false);

  if (!selectedItem) return null;

  return (
    <div className="w-full flex flex-col items-center justify-center text-center gap-6">
      {!isDeleted ? (
        <>
          {/* Delete icon */}
          <Image
            src={deleteimg}
            alt="delete"
            width={100}
            height={100}
            className="mx-auto mb-4 w-20 sm:w-28 md:w-32"
          />

          {/* Title */}
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-secondary leading-relaxed">
            آیا مایل به حذف رزرو نوبت خود هستید؟
          </h2>

          {/* Reservation info */}
          <div className="w-full rounded-[20px] bg-secondary/5 p-4 sm:p-6 flex flex-col items-center justify-center gap-3">
            <div className="flex flex-row items-center justify-center gap-2 p-3">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <p className="text-secondary text-sm sm:text-base font-bold">
                {selectedItem.title}
              </p>
            </div>

            <div className="border-2 rounded-[20px] bg-background flex flex-col sm:flex-row w-full items-center justify-between sm:justify-around gap-3 p-4 sm:p-3">
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-secondary/40 font-bold text-xs sm:text-sm">
                  تاریخ
                </span>
                <p className="text-secondary text-sm font-bold">
                  {selectedItem.date}
                </p>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-secondary/40 font-bold text-xs sm:text-sm">
                  زمان
                </span>
                <p className="text-secondary text-sm font-bold">
                  {selectedItem.time}
                </p>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-secondary/40 font-bold text-xs sm:text-sm">
                  قیمت
                </span>
                <p className="text-secondary text-sm font-bold">
                  {selectedItem.price}
                </p>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-secondary/40 font-bold text-xs sm:text-sm">
                  نوع جلسه
                </span>
                <p className="text-secondary text-sm font-bold">
                  {selectedItem.meetType}
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center flex-col sm:flex-row gap-3 sm:gap-4 mt-6 w-full">
            <button
            className=" flex items-center justify-center bg-background text-secondary border-2 font-bold hover:bg-background gap-2 rounded-[110px] md:rounded-full lg:rounded-[110px] py-2 px-18 md:py-2 md:px-16 lg:py-4 lg:px-24 cursor-pointer "
            >
              انصراف
            </button>
            <button
             className=" flex items-center justify-center bg-primary/90 transition text-white font-bold hover:bg-primary gap-2 rounded-[110px] md:rounded-full lg:rounded-[110px] py-2 px-18 md:py-2 md:px-2 lg:py-4 lg:px-24 cursor-pointer "
              onClick={() => setIsDeleted(true)}
            >
              حذف شود
            </button>
          </div>
        </>
      ) : (
        //  Success view
        <div className="flex flex-col items-center justify-center gap-6 p-4 sm:p-6 text-center">
          <Image
            src={success}
            alt="success"
            width={100}
            height={100}
            className="mx-auto mb-2 opacity-80 w-20 sm:w-28 md:w-32"
          />
          <h2 className="text-secondary font-bold text-xl sm:text-3xl">
            ثبت موفق
          </h2>
          <p className="text-secondary/80 text-sm sm:text-base leading-relaxed">
            درخواست شما با موفقیت ثبت گردید؛ <br />
            کارشناسان ما جهت عودت مبلغ دریافتی با شما تماس خواهند گرفت.
          </p>

          <button
           className=" flex items-center justify-center bg-primary/80 transition text-white font-bold hover:bg-primary gap-2 rounded-[110px] md:rounded-full lg:rounded-[110px] py-6 px-24 md:py-2 md:px-2 lg:py-4 lg:px-26 cursor-pointer "
            onClick={() => setOpen(false)}
          >
            باشه!
          </button>
        </div>
      )}
    </div>
  );
};

export default DeleteReserveModal;
