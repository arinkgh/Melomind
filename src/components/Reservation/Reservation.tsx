import React from "react";
import { PrevBtn } from "../common/Butttons/PrevBtn";
import { ReserveNow } from "../common/Butttons/ReserveNow";
import ReserveTitle from "../common/ReserveTitle/ReserveTitle";
import ReservationCard from "./ReservationCard";

const Reservation = () => {
  return (
    <div className="bg-custom-svg w-full min-h-[700px] flex flex-col items-center justify-center gap-10 py-12">
      {/* title */}
      <ReserveTitle
        title="رزرو نوبت"
        subtitle="برای رزرو نوبت در ملومایند ابتدا نوع رزرو را انتخاب کنید"
      />
      {/* Main Content */}
      <div className="w-[95%] sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto">
        <ReservationCard />
      </div>

      {/* Buttons */}
      <div className="w-[95%] sm:w-[80%] md:w-[60%] lg:w-[50%] flex flex-col sm:flex-row justify-between items-center gap-4 mb-20">
        <PrevBtn text="مرحله قبل" />
        <ReserveNow text="ادامه مراحل رزرو" />
      </div>
    </div>
  );
};

export default Reservation;
