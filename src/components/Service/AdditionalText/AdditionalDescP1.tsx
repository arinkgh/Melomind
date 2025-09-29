import DetailTitles from "@/components/common/DetailTitles/DetailTitles";
import React from "react";
import check from "../../../../public/Images/Check.svg";
import Image from "next/image";
import Link from "next/link";

const AdditionalDescP1 = () => {
  return (
    <div className="w-full lg:w-[50%] h-full flex flex-col justify-around items-start gap-6">
      <DetailTitles
        subtitle="مزیت‌ها و فواید ملومایند"
        title="مزیت‌های ملومایند"
      />

      <span className="text-[#105870] text-[16px] leading-relaxed">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ...
      </span>

      <div className="mt-4 w-full flex flex-col gap-4">
        {[
          "مزیت شماره یک استفاده از خدمات ملومایند",
          "مزیت شماره دو استفاده از خدمات ملومایند",
          "مزیت شماره سه استفاده از خدمات ملومایند",
          "مزیت شماره چهار استفاده از خدمات ملومایند",
          "مزیت شماره پنج استفاده از خدمات ملومایند",
        ].map((text, index) => (
          <div
            key={index}
            className="flex flex-row justify-start items-start gap-2 w-full"
          >
            <Image src={check} alt="Check" className="w-8 h-8" />
            <Link href={`/${index + 1}`} className="text-[#105870] text-lg font-bold">
              {text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdditionalDescP1;
