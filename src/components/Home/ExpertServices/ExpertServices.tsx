import React from "react";
import ExpertServicesInfo from "./ExpertServicesInfo";
import ExpertServicesCard from "./ExpertServicesCard";
import ExpertServicesText from "./ExpertServicesText";


const ExpertServices = () => {
  return (
    <div className='container mx-auto bg-[#F1F7FA] mt-80 rounded-[20px] h-[870px] relative flex justify-center items-end'>
      {/* Info */}
      <ExpertServicesInfo />
      {/* Main */}
      <div className="w-[80%] h-[70%]  flex flex-row flex-nowrap">
        <ExpertServicesCard />
        <ExpertServicesText />
      </div>
    </div>
  );
};

export default ExpertServices;
