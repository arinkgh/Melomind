import React from "react";
import HeroSvg from "@/../public/Images/BG.svg";
import Image from "next/image";
import check from "@/../public/Images/Check.svg";
import interfaced from "@/../public/Images/Interface.svg";

const HeroImg = () => {
  return (
    <div className="hidden md:block md:h-[420px] md:w-[60%] lg:w-[40%] relative">
      {/* Hero background image */}
      <Image
        src={HeroSvg}
        alt="hero background"
        className="w-[70%] h-[80%] m-auto object-contain"
      />

      {/* Floating boxes */}
      <div
        className="flex flex-col gap-1.5 pr-4 bg-background shadow-md rounded-[16px] 
        absolute bottom-0 right-6 
        md:h-[110px] md:w-[130px] lg:h-[150px] lg:w-[165px]"
      >
        <Image
          src={check}
          alt="check"
          className="w-8 h-8 md:pt-1 lg:w-12 lg:h-12 lg:pt-1.5"
        />
        <p className="text-secondary font-semibold md:text-[13px] lg:text-[16px]">
          سابقه کار و تجربه
        </p>
        <p className="text-primary font-bold md:text-[18px] lg:text-[24px]">+۱۰ سال</p>
      </div>

      <div
        className="flex flex-col gap-1.5 pr-4 bg-background shadow-md rounded-[16px] 
        absolute bottom-8 left-6 
        md:h-[110px] md:w-[130px] lg:h-[150px] lg:w-[165px]"
      >
        <Image
          src={interfaced}
          alt="interface"
          className="w-8 h-8 md:pt-1 lg:w-12 lg:h-12 lg:pt-1.5"
        />
        <p className="text-secondary font-semibold md:text-[13px] lg:text-[16px]">
          رضایت مراجعین
        </p>
        <p className="text-primary font-bold md:text-[18px] lg:text-[24px]">
          ۹۸ درصد
        </p>
      </div>
    </div>
  );
};

export default HeroImg;
