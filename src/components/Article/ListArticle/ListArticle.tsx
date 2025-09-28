import DetailTitles from "@/components/common/DetailTitles/DetailTitles";
import React from "react";
import FilterArticle from "./FilterArticle";
import CardArticle from "./CardArticle";

const ListArticle = () => {
  return (
    <div className="container mx-auto mt-20 flex flex-col gap-8 px-4">
      {/* Title */}
      <DetailTitles subtitle="مقالات ملومایند" title="لیست مقالات" />

      {/* Main layout */}
      <div className="w-full flex flex-col lg:flex-row gap-10">
        {/* Filter */}
        <div className="w-full lg:w-1/3">
          <FilterArticle />
        </div>

        {/* Cards */}
        <div className="w-full lg:w-2/3">
          <CardArticle />
        </div>
      </div>
    </div>
  );
};

export default ListArticle;
