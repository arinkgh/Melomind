import React from "react";
import { PrevBtn } from "../common/Butttons/PrevBtn";
import MainSlider from "./MainSlider";

const GroupTherapy = () => {
  return (
    <div className="bg-custom-svg  w-full">
      {/* <div className="mx-auto w-[50%] h-full flex flex-col justify-between gap-12"> */}
      <div className="mx-auto w-[95%] sm:w-[80%] md:w-[70%] lg:w-[50%] h-full flex flex-col justify-between gap-12">
        {/* Title */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-start justify-center gap-6 w-full text-center lg:text-right">
          {/* button */}
          <div className="flex items-center justify-center">
            <PrevBtn text="مرحله قبل" />
          </div>

          {/* text */}
          <div className="flex flex-col items-center lg:items-start justify-center gap-4">
            <h2 className="text-secondary text-3xl sm:text-4xl lg:text-5xl font-bold">
              گروه درمانی
            </h2>
            <p className="text-secondary/60 text-sm sm:text-[16px] md:text-[18px] font-semibold">
              برای رزرو نوبت گروه درمانی یکی از گروه‌های زیر را انتخاب کنید.
            </p>
          </div>
        </div>

        {/* Slider */}
        <div className=" w-full ">
          <MainSlider />
        </div>
      </div>
    </div>
  );
};

export default GroupTherapy;
