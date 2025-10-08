"use client";
import React from "react";
import { PrevBtn } from "@/components/common/Butttons/PrevBtn";
import { ReserveNow } from "@/components/common/Butttons/ReserveNow";
import ReserveTitle from "@/components/common/ReserveTitle/ReserveTitle";
import Time from "./Time";
import CalendarBox from "./CalendarBox";

const ReserveDate = () => {
  return (
    <div className="bg-custom-svg w-full min-h-[700px] flex flex-col items-center justify-center gap-10 py-12">
      {/* Title */}
      <ReserveTitle
        title="رزرو زمان ویزیت"
        subtitle="روز و ساعت رزرو خود را انتخاب کنید."
      />

      {/* Main Content */}
      <div
        className="
          w-[95%] sm:w-[85%] md:w-[70%] lg:w-[55%]
          mx-auto border-2 bg-background rounded-[20px] 
          flex flex-col-reverse xl:flex-row items-center
          overflow-hidden
        "
      >
        {/* Time */}
        <Time
          startTime="08:00"
          endTime="20:00"
          divideMinutes={30}
          unavailableSlots={["10:00 - 10:30", "14:30 - 15:00"]}
        />

        {/* Calendar */}
        <CalendarBox />
      </div>

      {/* Buttons */}
      <div
        className="
          w-[95%] sm:w-[85%] md:w-[70%] lg:w-[55%]
          flex flex-col sm:flex-row justify-between items-center gap-4 mb-10
        "
      >
        <PrevBtn text="مرحله قبل" />
        <ReserveNow text="ادامه مراحل رزرو" />
      </div>
    </div>
  );
};

export default ReserveDate;
    