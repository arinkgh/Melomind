import DetailTitles from "@/components/common/DetailTitles/DetailTitles";
import React from "react";

const AdditionalDescP3 = () => {
  const items = [
    "متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    "متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    "متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    "متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    "متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
  ];

  return (
    <div className="w-full lg:w-[50%] h-full flex flex-col justify-around items-start gap-6">
      <DetailTitles subtitle="مزیت‌ها و فواید ملومایند" title="روند درمانی" />

      <span className="text-[#105870] text-[16px] leading-relaxed">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ...
      </span>

      <div className="mt-4 w-full flex flex-col gap-6">
        {items.map((text, index) => (
          <div key={index} className="flex flex-row items-start gap-3 w-full">
            {/* Circle + Line */}
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-gray-400"></div>
              {index !== items.length - 1 && (
                <div className="w-[2px] h-10 bg-gray-300"></div>
              )}
            </div>

            {/* Text */}
            <p className="text-lg leading-relaxed">
              <span className="text-[#80C244] font-bold">
                مرحله {index + 1}:
              </span>{" "}
              <span className="text-[#105870] font-bold">{text}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdditionalDescP3;
