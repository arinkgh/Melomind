"use client";
import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import blog from "./../../../../public/Images/Blog.svg";
import DetailTitles from "@/components/common/DetailTitles/DetailTitles";

const ArticleSlider = () => {
  const OPTIONS: EmblaOptionsType = { loop: true, dragFree: true };
  const SLIDES = [
    {
      id: 1,
      title: "تیتر مقاله",
      description:
        "خدمات درمانی افسردگی، به افرادی که به این بیماری مبتلا هستند، ارائه می‌شود...",
      image: blog,
    },
    {
      id: 2,
      title: "تیتر مقاله",
      description:
        "خدمات درمانی افسردگی، به افرادی که به این بیماری مبتلا هستند، ارائه می‌شود...",
      image: blog,
    },
    {
      id: 3,
      title: "تیتر مقاله",
      description:
        "خدمات درمانی افسردگی، به افرادی که به این بیماری مبتلا هستند، ارائه می‌شود...",
      image: blog,
    },
    {
      id: 4,
      title: "تیتر مقاله",
      description:
        "خدمات درمانی افسردگی، به افرادی که به این بیماری مبتلا هستند، ارائه می‌شود...",
      image: blog,
    },
  ];

  return (
    <div className="w-full lg:w-[60%] flex flex-col gap-6">
      {/* title */}
      <DetailTitles subtitle="مقالات ملومایند" title="جدیدترین مقالات" />
      {/* slider */}
      <div className="w-full h-auto" dir="rtl">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
};

export default ArticleSlider;
