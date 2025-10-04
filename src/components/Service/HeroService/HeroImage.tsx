import React from "react";
import HeroSvg from "../../../../public/Images/heroservice.svg";
import Image from "next/image";
import check from "../../../../public/Images/Check.svg";
import interfaced from "../../../../public/Images/Interface.svg";

const HeroImage = () => {
  return (
    <div className="w-full max-w-[500px] mx-auto relative hidden lg:block">
      {/* Hero background image */}
      <Image
        src={HeroSvg}
        alt="Hero background"
        className="w-full h-auto max-h-[500px] object-contain"
      />

      {/* Floating boxes */}
      <div className="flex flex-col gap-2 p-4 bg-white shadow-md w-40 sm:w-44 rounded-xl absolute bottom-0 right-4 sm:right-6">
        <Image src={check} alt="Check" className="w-10 h-10" />
        <p className="text-primary font-semibold text-sm sm:text-base">
          سابقه کار و تجربه
        </p>
        <p className="text-secondary font-bold text-lg sm:text-2xl">+۱۰ سال</p>
      </div>

      <div className="flex flex-col gap-2 p-4 bg-white shadow-md w-40 sm:w-44 rounded-xl absolute bottom-8 left-4 sm:left-6">
        <Image src={interfaced} alt="Interface" className="w-10 h-10" />
        <p className="text-primary font-semibold text-sm sm:text-base">
          رضایت مراجعین
        </p>
        <p className="text-secondary font-bold text-lg sm:text-2xl">۹۸ درصد</p>
      </div>
    </div>
  );
};

export default HeroImage;