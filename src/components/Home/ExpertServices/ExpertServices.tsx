// import React from "react";
// import ExpertServicesInfo from "./ExpertServicesInfo";
// import ExpertServicesCard from "./ExpertServicesCard";
// import ExpertServicesText from "./ExpertServicesText";


// const ExpertServices = () => {
//   return (
//     <div className='container mx-auto bg-[#F1F7FA] mt-80 rounded-[20px] h-[870px] relative flex justify-center items-end'>
//       {/* Info */}
//       <ExpertServicesInfo />
//       {/* Main */}
//       <div className="w-[80%] h-[70%]  flex flex-row flex-nowrap">
//         <ExpertServicesCard />
//         <ExpertServicesText />
//       </div>
//     </div>
//   );
// };

// export default ExpertServices;


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
      <div className="w-full lg:w-[80%] flex flex-col lg:flex-row gap-10 lg:gap-0 lg:mt-40 mt-30 mx-auto">
        <ExpertServicesCard />
        <ExpertServicesText />
      </div>
    </div>
  );
};

export default ExpertServices;
