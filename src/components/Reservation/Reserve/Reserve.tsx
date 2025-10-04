import ReserveTitle from "@/components/common/ReserveTitle/ReserveTitle";
import React from "react";
import ReserveType from "./ReserveType";
import VisitType from "./VisitType";

const Reserve = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Title */}
      <ReserveTitle
        title="رزرو نوبت"
        subtitle="برای رزرو نوبت در ملومایند ابتدا نوع رزرو را انتخاب کنید"
      />
      {/* Items */}


      {/* <ReserveType/> */}
      <VisitType/>
    </div>
  );
};

export default Reserve;
