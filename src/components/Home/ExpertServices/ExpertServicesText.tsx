import React from "react";
import Image from "next/image";
import sign from "../../../../public/Images/sign.svg";
import { ReservationBn } from "@/components/common/Butttons/ReservationBtn";

const ExpertServicesText = () => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col lg:gap-0 gap-4 justify-around px-4 lg:px-10 mt-8 lg:mt-0">
      <div className="flex flex-col gap-4">
        <Image src={sign} alt="#" className="w-16 h-16" />
        <p className="text-[#76C144] font-semibold text-xl md:text-2xl">خدمات ویژه</p>
        <h3 className="text-3xl md:text-5xl text-primary font-bold">خدمات مختص ما</h3>
        <p className="font-semibold text-[16px] md:text-[18px] text-[#7795a8] leading-relaxed">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله...
        </p>
      </div>
      <ReservationBn text="صفحه خدمات" />
    </div>
  );
};

export default ExpertServicesText;
