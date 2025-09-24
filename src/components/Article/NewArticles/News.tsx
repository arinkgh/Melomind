import DetailTitles from "@/components/common/DetailTitles/DetailTitles";
import React from "react";
import family from "../../../../public/Images/family.svg";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";

const News = () => {
  const items = [
    {
      image: family,
      title: "عنوان برای اخبار",
      desc: "خدمات درمانی افسردگی، به افرادی که به این بیماری مبتلا هستند، ارائه می‌شود...",
    },
    {
      image: family,
      title: "عنوان برای اخبار",
      desc: "خدمات درمانی افسردگی، به افرادی که به این بیماری مبتلا هستند، ارائه می‌شود...",
    },
    {
      image: family,
      title: "عنوان برای اخبار",
      desc: "خدمات درمانی افسردگی، به افرادی که به این بیماری مبتلا هستند، ارائه می‌شود...",
    },
  ];

  return (
    <div className="w-full lg:w-[35%] flex flex-col justify-between mt-6 lg:mt-0">
      {/* Title */}
      <DetailTitles subtitle="اخبار و حواشی" title="جدیدترین اخبار" />

      {/* Items */}
      <div className="w-full flex flex-col gap-4 mt-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-center justify-between p-4 rounded-[20px] shadow cursor-pointer gap-3"
          >
            {/* Image */}
            <Image src={family} alt="#" className="w-16 h-16 sm:w-20 sm:h-20" />

            {/* Text */}
            <div className="flex flex-col w-[70%]">
              <p className="text-[#105870] text-base sm:text-lg md:text-xl font-bold">
                {item.title}
              </p>
              <span className="text-[#105870] text-sm sm:text-base md:text-lg">
                {item.desc}
              </span>
            </div>

            {/* Button */}
            <div className="border rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#76C144]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
