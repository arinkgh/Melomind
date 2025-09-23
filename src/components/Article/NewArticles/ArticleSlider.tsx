// import React from 'react'

// const ArticleSlider = () => {
//   return (
//     <div className='border h-full w-[65%] flex flex-col justify-between'>
//         {/* Title */}
//         <div className='border h-[20%] w-full flex flex-col'>
//             <span className='text-[#76C144] text-2xl font-semibold'>مقالات ملومایند</span>
//             <h3 className='text-[#105870] text-5xl font-black'>جدیدترین مقالات</h3>
//         </div>
//         {/* Slider */}
//         <div className='border w-full h-[75%]'>

//         </div>
      
//     </div>
//   )
// }

// export default ArticleSlider

"use client";
import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import blog from "./../../../../public/Images/Blog.svg"

const ArticleSlider = () => {
  const OPTIONS: EmblaOptionsType = { loop: true, dragFree: true };
  const SLIDES = [
    { id: 1, title: "تیتر مقاله", description: "خدمات درمانی افسردگی، به افرادی که به این بیماری مبتلا هستند، ارائه می‌شود...", image: blog },
    { id: 2, title: "تیتر مقاله", description: "خدمات درمانی افسردگی، به افرادی که به این بیماری مبتلا هستند، ارائه می‌شود...", image: blog },
    { id: 3, title: "تیتر مقاله", description: "خدمات درمانی افسردگی، به افرادی که به این بیماری مبتلا هستند، ارائه می‌شود...", image: blog },
    { id: 4, title: "تیتر مقاله", description: "خدمات درمانی افسردگی، به افرادی که به این بیماری مبتلا هستند، ارائه می‌شود..."   , image: blog },
  ];

  return (
    <div className="border h-full w-[65%] flex flex-col justify-between">
      <div className="border h-[20%] w-full flex flex-col">
        <span className="text-[#76C144] text-2xl font-semibold">مقالات ملومایند</span>
        <h3 className="text-[#105870] text-5xl font-black">جدیدترین مقالات</h3>
      </div>

      <div className="border w-full h-[75%]" dir="rtl">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
};

export default ArticleSlider;
