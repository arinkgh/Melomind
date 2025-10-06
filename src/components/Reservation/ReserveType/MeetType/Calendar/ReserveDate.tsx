import { PrevBtn } from "@/components/common/Butttons/PrevBtn";
import { ReserveNow } from "@/components/common/Butttons/ReserveNow";
import ReserveTitle from "@/components/common/ReserveTitle/ReserveTitle";
import React from "react";
import Time from "./Time";
import CalendarBox from "./CalendarBox";

const ReserveDate = () => {
  return (
    <div className="bg-custom-svg w-full min-h-[700px] flex flex-col items-center justify-center gap-10 py-12">
      {/* title */}
      <ReserveTitle
        title="رزرو زمان ویزیت"
        subtitle="روز و ساعت رزرو خود را انتخاب کنید."
      />
      {/* Main Content */}
      <div className="w-[95%] sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto border-2 rounded-[20px] flex flex-row">
        {/* Time */}
        <Time/>
        {/* Calendar */}
        <CalendarBox/>
      </div>
      {/* Buttons */}
        <div className="w-[95%] sm:w-[80%] md:w-[60%] lg:w-[50%] flex flex-col sm:flex-row justify-between items-center gap-4 mb-20">
          <PrevBtn text="مرحله قبل" />
          <ReserveNow text="ادامه مراحل رزرو" />
        </div>
    </div>
  );
};

export default ReserveDate;
