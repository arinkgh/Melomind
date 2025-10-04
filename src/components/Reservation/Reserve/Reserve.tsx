import ReserveTitle from "@/components/common/ReserveTitle/ReserveTitle";
import React from "react";
import ReserveType from "./ReserveType";

const Reserve = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Title */}
      <ReserveTitle
        title="رزرو نوبت"
        subtitle="برای رزرو نوبت در ملومایند ابتدا نوع رزرو را انتخاب کنید"
      />
      {/* Items */}
      <ReserveType/>
    </div>
  );
};

export default Reserve;
