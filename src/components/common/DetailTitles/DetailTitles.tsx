import { TitleProps } from "@/types/TitleTypes";
import React from "react";


const DetailTitles = ({ subtitle, title }: TitleProps) => {
  return (
    <div className="h-auto w-full flex flex-col gap-2">
      <span className="text-primary/80 text-lg sm:text-xl md:text-2xl font-semibold">
        {subtitle}
      </span>
      <h3 className="text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black">
        {title}
      </h3>
    </div>
  )
}

export default DetailTitles;
