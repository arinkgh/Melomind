import DetailTitles from "@/components/common/DetailTitles/DetailTitles";
import React from "react";
import { items3 } from "@/utils/constants/ServiceAddText";
const AdditionalDescP3 = () => {
  return (
    <div className="w-full lg:w-[50%] h-full flex flex-col justify-around items-start gap-6">
      <DetailTitles subtitle="مزیت‌ها و فواید ملومایند" title="روند درمانی" />

      <span className="text-secondary text-[16px] leading-relaxed">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ...
      </span>

      <div className="mt-4 w-full flex flex-col gap-6">
        {items3.map((text, index) => (
          <div key={index} className="flex flex-row items-start gap-3 w-full">
            {/* Circle + Line */}
            <div className="flex flex-col items-center">
              <div className="w-5 h-5 rounded-full shadow bg-gray-200"></div>
              {index !== items3.length - 1 && (
                <div className="w-[2px] h-6 bg-gray-100"></div>
              )}
            </div>

            {/* Text */}
            <p className="text-lg leading-relaxed">
              <span className="text-primary font-bold">مرحله {index + 1}:</span>{" "}
              <span className="text-secondary font-bold">{text}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdditionalDescP3;
