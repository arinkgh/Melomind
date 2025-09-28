import { ReserveNow } from "@/components/common/Butttons/ReserveNow";
import DetailTitles from "@/components/common/DetailTitles/DetailTitles";
import React from "react";
import Image from "next/image";
import online from "../../../../public/Images/online.svg";
import meet from "../../../../public/Images/meet.svg";
import tel from "../../../../public/Images/tel.svg";

const HeroText = () => {
  return (
    <div 
    // className=" h-full w-1/2 flex flex-col gap-10"
     className="w-full md:w-1/2 flex flex-col gap-8 px-4 md:px-0"
    >
      {/* Title */}
      <DetailTitles subtitle="خدمات ملومایند" title="چگونگی خدمات ملومایند" />
      {/* Items */}
      <div 
    //   className=" w-full h-[300px] flex flex-col gap-2 mb-7"
      className="w-full flex flex-col gap-4 mb-7">
        {/* Item1 */}
        <div 
        // className=" flex flex-row justify-start gap-4 p-2"
        className="flex items-start gap-4 p-2"
        >
          {/* icon */}
          <div 
        //   className=" h-full w-[10%]"
           className="w-10 h-10 flex-shrink-0">
            <Image src={online} alt="Online" className="w-[90%] h-[90%]" />
          </div>
          {/* text */}
          <div className=" w-[80%] h-full flex flex-col justify-between">
            <h4 
            // className="text-[#105870] font-bold text-2xl"
            className="text-[#105870] font-bold text-xl md:text-2xl"
            >آنلاین</h4>
            <p className="text-[18px] text-[#105870]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و ...
            </p>
          </div>
        </div>
        {/* Item2 */}
        <div 
        // className=" flex flex-row justify-start gap-4 p-2"
         className="flex items-start gap-4 p-2">
          {/* icon */}
          <div 
        //   className=" h-full w-[10%]"
           className="w-10 h-10 flex-shrink-0">
            <Image src={tel} alt="tel" className="w-[90%] h-[90%]" />
          </div>
          {/* text */}
          <div className=" w-[80%] h-full flex flex-col justify-between">
            <h4 
            // className="text-[#105870] font-bold text-2xl"
            className="text-[#105870] font-bold text-xl md:text-2xl">تلفنی</h4>
            <p
            //  className="text-[18px] text-[#105870]"
              className="text-[#105870] text-sm md:text-[18px] leading-relaxed">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و ...
            </p>
          </div>
        </div>
        {/* Item3 */}
        <div 
        // className=" flex flex-row justify-start gap-4 p-2"
         className="flex items-start gap-4 p-2">
          {/* icon */}
          <div 
        //   className=" h-full w-[10%]"
           className="w-10 h-10 flex-shrink-0">
            <Image src={meet} alt="meet" className="w-[90%] h-[90%]" />
          </div>
          {/* text */}
          <div className=" w-[80%] h-full flex flex-col justify-between">
            <h4 
            // className="text-[#105870] font-bold text-2xl"
            className="text-[#105870] font-bold text-xl md:text-2xl"
            >حضوری</h4>
            <p
            //  className="text-[18px] text-[#105870]"
            className="text-[#105870] text-sm md:text-[18px] leading-relaxed">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و ...
            </p>
          </div>
        </div>
      </div>
      {/* Button */}
      <div className="mt-4">
  <ReserveNow text="همین الان رزرو کن" />
</div>

    </div>
  );
};

export default HeroText;
