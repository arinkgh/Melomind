import React from "react";

type DetailTitlesProps = {
  subtitle: string;
  title: string;
  className?: string; 
};

const DetailTitles = ({ subtitle, title }: { subtitle: string; title: string }) => {
  return (
    <div className="h-auto w-full flex flex-col gap-2">
      <span className="text-[#76C144] text-lg sm:text-xl md:text-2xl font-semibold">
        {subtitle}
      </span>
      <h3 className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black">
        {title}
      </h3>
    </div>
  )
}

export default DetailTitles;
