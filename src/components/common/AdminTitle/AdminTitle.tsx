import { TitleProps } from "@/types/TitleTypes";
import React from "react";


const AdminTitle = ({ subtitle, title }: TitleProps) => {
  return (
    <div className="h-auto w-full flex flex-col gap-2">
      <h3 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-black">
        {subtitle}
      </h3>
      <span className="text-secondary/80 text-[10px] md:text-[12px]  lg:text-[14px] font-semibold">
        {title}
      </span>
    </div>
  )
}

export default AdminTitle;
