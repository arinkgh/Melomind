"use client";

import React from "react";
import CircleNextBtn from "../common/Butttons/CircleNextBtn";
import Image from "next/image";
import { reservationItems } from "@/utils/constants/ReservationCards";

const ReservationCard = () => {
  return (
    <div className="mt-10 w-full flex flex-col md:flex-row md:flex-wrap lg:flex-row items-center justify-center md:justify-around gap-6 md:gap-8">
      {reservationItems.map(({ img, title, desc }, index) => (
        <div
          key={index}
          className="border-2 w-[85%] xl:w-[280px] md:h-[340px] rounded-[20px] flex flex-col items-center justify-around shadow bg-background py-6 cursor-pointer hover:border-primary transition"
        >
          <Image src={img} alt={title} className="w-20 h-20" />
          <div className="flex flex-col items-center text-center">
            <h4 className="text-secondary font-bold text-xl md:text-2xl">
              {title}
            </h4>
            <p className="text-secondary/80 text-[14px] md:text-[18px] mt-1">
              {desc}
            </p>
          </div>
          <CircleNextBtn />
        </div>
      ))}
    </div>
  );
};

export default ReservationCard;
