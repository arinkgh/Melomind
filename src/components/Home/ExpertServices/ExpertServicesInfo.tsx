import React from "react";

const ExpertServicesInfo = () => {
  return (
    <div className="bg-white w-[1200px] h-[240px] rounded-[20px] absolute -top-[90px] left-1/2 -translate-x-1/2 shadow flex flex-row flex-nowrap justify-center items-center">
      <div className="border-l-2 border-[#1058700F] w-[320px] h-[128px] flex flex-col justify-between items-center">
        <p className="font-bold text-[#80C244] text-5xl">+۱۰ سال</p>
        <p className="font-bold text-[#105870] text-2xl">سابقه درمانی</p>
        <p className="font-semibold text-[#9fa3a7] text-[16px]">
          سابقه کار و تجربه
        </p>
      </div>
      <div className="w-[360px] h-[128px] flex flex-col justify-between items-center">
        <p className="font-bold text-[#80C244] text-5xl">+۳۰،۰۰۰</p>
        <p className="font-bold text-[#105870] text-2xl">کاربر و مراجع کننده</p>
        <p className="font-semibold text-[#9fa3a7] text-[16px]">در سال اخیر</p>
      </div>
      <div className="border-r-2 border-[#1058700F] w-[320px] h-[128px]  flex flex-col justify-between items-center">
        <p className="font-bold text-[#80C244] text-5xl">+۹۸.۴ </p>
        <p className="font-bold text-[#105870] text-2xl">رضایت مراجعین</p>
        <p  className="font-semibold text-[#9fa3a7] text-[16px]">در سال اخیر</p>
      </div>
    </div>
  );
};

export default ExpertServicesInfo;
