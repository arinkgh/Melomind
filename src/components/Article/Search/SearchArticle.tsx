import React from "react";
import { Search } from "lucide-react";

const SearchArticle = () => {
  return (
    <div className="border mx-8 md:container  md:mx-auto rounded-[20px] mt-40 md:mt-10 bg-[#F8FAFB] h-16 md:h-20 flex flex-row items-center  gap-3 px-4">
      {/* Icon */}
      <Search className="w-6 h-6 text-[#64a02c]" strokeWidth={2} />

      {/* Input */}
      <input
        type="text"
        placeholder="موضوع دلخواه خود را جستجو کنید"
        className="bg-transparent flex-1 outline-none font-semibold text-[#10587080] text-xl placeholder:text-[#10587080]"
      />
    </div>
  );
};

export default SearchArticle;


