import Image from "next/image";
import React from "react";
import earth from "@/../public/Images/earth.svg";
import { ReserveNow } from "@/components/common/Butttons/ReserveNow";

const OnlineGuide = () => {
  return (
    <div className="bg-custom-svg w-full py-10">
      <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto min-h-[450px] mt-10 flex flex-col lg:flex-row justify-between items-center lg:items-stretch gap-6">
        
        {/* text */}
        <div className="w-full lg:w-2/3 flex flex-col justify-between gap-6 text-center lg:text-right">
          <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
            راهنمای ورود به جلسه آنلاین
          </h2>
          <p className="text-secondary/40 text-sm sm:text-base md:text-[16px] font-semibold leading-relaxed">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد...
          </p>

          {/* button */}
          <div className="flex justify-center lg:justify-start">
            <ReserveNow text="ادامه" />
          </div>
        </div>

        {/* image */}
        <div className="flex justify-center lg:justify-end w-full lg:w-auto">
          <Image src={earth} alt="earth" className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-auto" />
        </div>
      </div>
    </div>
  );
};

export default OnlineGuide;
