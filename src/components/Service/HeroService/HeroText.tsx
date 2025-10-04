import { ReserveNow } from "@/components/common/Butttons/ReserveNow";
import DetailTitles from "@/components/common/DetailTitles/DetailTitles";
import React from "react";
import Image from "next/image";
import online from "../../../../public/Images/online.svg";
import meet from "../../../../public/Images/meet.svg";
import tel from "../../../../public/Images/tel.svg";

const HeroText = () => {
  return (
    <div className="w-full flex flex-col gap-6 sm:gap-8 px-4 sm:px-6">
      {/* Title */}
      <DetailTitles subtitle="خدمات ملومایند" title="چگونگی خدمات ملومایند" />
      {/* Items */}
      <div className="w-full flex flex-col gap-4 sm:gap-6">
        {/* Item1 */}
        <div className="flex items-start gap-4 sm:gap-6 p-3 sm:p-4">
          {/* icon */}
          <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0 lg:mt-4">
            <Image src={online} alt="Online" className="w-full h-full object-contain" />
          </div>
          {/* text */}
          <div className="flex-1 flex flex-col gap-2">
            <h4 className="text-primary font-bold text-lg sm:text-xl lg:text-2xl">
              آنلاین
            </h4>
            <p className="text-primary text-sm sm:text-base lg:text-lg leading-relaxed">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و ...
            </p>
          </div>
        </div>
        {/* Item2 */}
        <div className="flex items-start gap-4 sm:gap-6 p-3 sm:p-4">
          {/* icon */}
          <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0 lg:mt-4">
            <Image src={tel} alt="Tel" className="w-full h-full object-contain" />
          </div>
          {/* text */}
          <div className="flex-1 flex flex-col gap-2">
            <h4 className="text-primary font-bold text-lg sm:text-xl lg:text-2xl">
              تلفنی
            </h4>
            <p className="text-primary text-sm sm:text-base lg:text-lg leading-relaxed">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و ...
            </p>
          </div>
        </div>
        {/* Item3 */}
        <div className="flex items-start gap-4 sm:gap-6 p-3 sm:p-4">
          {/* icon */}
          <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0 lg:mt-4">
            <Image src={meet} alt="Meet" className="w-full h-full object-contain" />
          </div>
          {/* text */}
          <div className="flex-1 flex flex-col gap-2">
            <h4 className="text-primary font-bold text-lg sm:text-xl lg:text-2xl">
              حضوری
            </h4>
            <p className="text-primary text-sm sm:text-base lg:text-lg leading-relaxed">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و ...
            </p>
          </div>
        </div>
      </div>
      {/* Button */}
      <div className="mt-4 sm:mt-6">
        <ReserveNow text="همین الان رزرو کن" />
      </div>
    </div>
  );
};

export default HeroText;