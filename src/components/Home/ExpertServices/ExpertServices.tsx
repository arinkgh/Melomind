
import React from "react";
import ExpertServicesInfo from "./ExpertServicesInfo";
import ExpertServicesCard from "./ExpertServicesCard";
import ExpertServicesText from "./ExpertServicesText";

const ExpertServices = () => {
  return (
    <div className="container mx-auto bg-[#F1F7FA] mt-60 rounded-[20px] relative flex flex-col items-center lg:items-end lg:h-[870px] px-4 py-12">
      {/* Info */}
      <ExpertServicesInfo />
      {/* Main */}
      <div className="w-full lg:w-[80%] flex flex-col lg:flex-row gap-10 lg:gap-24 lg:mt-40 mt-30 mx-auto">
        <ExpertServicesCard />
        <ExpertServicesText />
      </div>
    </div>
  );
};

export default ExpertServices;

