import React from "react";
import AdditionalImageP1 from "./AdditionalImageP1";
import AdditionalDescP1 from "./AdditionalDescP1";
import AdditionalImageP2 from "./AdditionalImageP2";
import AdditionalImageP3 from "./AdditionalImageP3";
import AdditionalDescP2 from "./AdditionalDescP2";
import AdditionalDescP3 from "./AdditionalDescP3";

const AdditionalText = () => {
  return (
    <div className="container mx-auto mt-20 flex flex-col items-center justify-center gap-40 px-4">
      {/* Part 1 */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-20">
        <AdditionalImageP1 />
        <AdditionalDescP1 />
      </div>
      {/* Part 2 */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-10">
        <AdditionalDescP2 />
        <AdditionalImageP2/>
      </div>
      {/* Part 3 */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-20">
        <AdditionalImageP3 />
        <AdditionalDescP3 />
      </div>
    </div>
  );
};

export default AdditionalText;
