// import React from 'react'

// const FinalPrice = () => {

//   return (
//     <div className=' rounded-[20px] w-full h-[130px] bg-secondary/5 flex justify-between p-8'>
//       <div className='border h-full w-1/3 flex flex-col justify-between'>
//         <p className='text-secondary text-[18px] font-extrabold'>قیمت: { ۱۲,۰۰۰,۰۰۰} ریال</p>
//         <p className='text-secondary text-[18px] font-extrabold'>قیمت نهایی: <span className='text-primary font-bold text-3xl'>{۱۱,۵۰۰,۰۰۰} ریال</span></p>
//       </div>

//       <div className='border h-full w-1/3 flex flex-col justify-between'>
//         <p className='text-secondary text-[18px] font-extrabold'>تخفیف: {۵۰۰,۰۰۰} ریال</p>

//       </div>
//     </div>
//   )
// }

// export default FinalPrice
   

import React from "react";

const FinalPrice = () => {
  const priceData = {
    totalPrice: 12000000,
    discount: 500000,
    finalPrice: 11500000,
  };

  const formatNumber = (num: number) =>
    num.toLocaleString("fa-IR");  

  return (
    <div className="rounded-[20px] w-full bg-secondary/5 flex flex-col md:flex-row justify-between gap-15 p-6">
      {/* Left box */}
      <div className="w-full md:w-1/2 flex flex-col justify-between gap-3">
        <p className="text-secondary text-[18px] font-extrabold">
          قیمت: {formatNumber(priceData.totalPrice)} ریال
        </p>
        <p className="text-secondary text-[18px] font-extrabold">
          قیمت نهایی:{" "}
          <span className="text-primary font-bold text-3xl">
            {formatNumber(priceData.finalPrice)} ریال
          </span>
        </p>
      </div>

      {/* Right box */}
      <div className="w-full md:w-1/2 flex flex-col justify-between gap-3">
        <p className="text-secondary text-[18px] font-extrabold">
          تخفیف: {formatNumber(priceData.discount)} ریال
        </p>
        <div className="border-2 rounded-[90px] bg-background h-[48px] w-[320px]">

        </div>
      </div>
    </div>
  );
};

export default FinalPrice;
