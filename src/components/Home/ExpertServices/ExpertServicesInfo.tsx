import React from "react";

const ExpertServicesInfo = () => {
  return (
    <div className="bg-background w-[95%]  rounded-[20px] absolute -top-24 left-1/2 -translate-x-1/2 shadow flex flex-col md:flex-row justify-center items-center gap-6 px-6 py-12">
      <div className="flex flex-col items-center md:border-l md:border-[#1058700F] md:w-1/3">
        <p className="font-bold text-primary text-4xl md:text-5xl">+۱۰ سال</p>
        <p className="font-bold text-secondary text-xl md:text-2xl">سابقه درمانی</p>
        <p className="font-semibold text-[#9fa3a7] text-sm md:text-[16px]">سابقه کار و تجربه</p>
      </div>
      <div className="flex flex-col items-center md:w-1/3">
        <p className="font-bold text-primary text-4xl md:text-5xl">+۳۰،۰۰۰</p>
        <p className="font-bold text-secondary text-xl md:text-2xl">کاربر و مراجع کننده</p>
        <p className="font-semibold text-[#9fa3a7] text-sm md:text-[16px]">در سال اخیر</p>
      </div>
      <div className="flex flex-col items-center md:border-r md:border-[#1058700F] md:w-1/3">
        <p className="font-bold text-primary text-4xl md:text-5xl">+۹۸.۴</p>
        <p className="font-bold text-secondary text-xl md:text-2xl">رضایت مراجعین</p>
        <p className="font-semibold text-[#9fa3a7] text-sm md:text-[16px]">در سال اخیر</p>
      </div>
    </div>
  );
};

export default ExpertServicesInfo;
