import Image from 'next/image'
import React from 'react'
import add1 from '../../../../public/Images/add1.svg'
import check from "../../../../public/Images/Check.svg";

const AdditionalImageP1 = () => {
  return (
    <div className="w-[40%] hidden lg:block">
      <div className="w-full max-w-[500px] mx-auto relative">
        <Image
          src={add1}
          alt="Hero background"
          className="w-full h-auto max-h-[500px] object-contain"
        />

        {/* Floating box */}
        <div className="flex flex-col gap-2 p-4 bg-white shadow-md w-40 sm:w-44 rounded-xl absolute -bottom-2 left-4 sm:left-6">
          <Image src={check} alt="Interface" className="w-10 h-10" />
          <p className="text-[#105870] font-semibold text-sm sm:text-base">
            مزیت‌های ملومایند
          </p>
          <p className="text-[#80C244] font-extrabold text-xl sm:text-2xl">
            +۱۰ مزایا
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdditionalImageP1;
