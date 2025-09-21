// import React from "react";
// import HeroSvg from "../../../../public/Images/BG.svg";
// import Image from "next/image";
// import check from "../../../../public/Images/Check.svg";
// import interfaced from "../../../../public/Images/Interface.svg";

// const HeroImg = () => {
//   return (
//     <div className="h-[420px] w-[40%] relative">
//       <Image src={HeroSvg} alt="#" className="w-[50%] h-[80%] m-auto" />
//       {/* items */}
//       <div className="bg-white shadow h-[150px] w-[165px] rounded-[20px] absolute bottom-0 right-16 flex flex-col gap-1.5 pr-6">
//         <Image src={check} alt="#" className="w-12 h-12 pt-1.5"/>
//         <p className="text-[#105870] font-semibold text-[16px]">
//           سابقه کار و تجربه
//         </p>
//         <p className="text-[#80C244] font-bold text-[24px]">+۱۰ سال</p>
//       </div>
//       <div className="bg-white shadow h-[150px] w-[165px] rounded-[20px] absolute bottom-8 left-16 flex flex-col gap-1.5 pr-6">
//         <Image src={interfaced} alt="#" className="w-12 h-12 pt-1.5" />
//         <p className="text-[#105870] font-semibold text-[16px]">
//           رضایت مراجعین
//         </p>
//         <p className="text-[#80C244] font-bold text-[24px]">۹۸ درصد</p>
//       </div>
//     </div>
//   );
// };

// export default HeroImg;


import React from "react";
import HeroSvg from "../../../../public/Images/BG.svg";
import Image from "next/image";
import check from "../../../../public/Images/Check.svg";
import interfaced from "../../../../public/Images/Interface.svg";

const HeroImg = () => {
  return (
    <div className="hidden md:block md:h-[420px] md:w-[60%] lg:w-[40%] relative">
      {/* Hero background image */}
      <Image
        src={HeroSvg}
        alt="hero background"
        className="w-[60%] h-[80%] m-auto object-contain"
      />

      {/* Floating boxes - only visible on lg */}
      <div className="hidden lg:flex flex-col gap-1.5 pr-6 bg-white shadow-md h-[150px] w-[165px] rounded-[20px] absolute bottom-0 right-16">
        <Image src={check} alt="check" className="w-12 h-12 pt-1.5" />
        <p className="text-[#105870] font-semibold text-[16px]">سابقه کار و تجربه</p>
        <p className="text-[#80C244] font-bold text-[24px]">+۱۰ سال</p>
      </div>

      <div className="hidden lg:flex flex-col gap-1.5 pr-6 bg-white shadow-md h-[150px] w-[165px] rounded-[20px] absolute bottom-8 left-16">
        <Image src={interfaced} alt="interface" className="w-12 h-12 pt-1.5" />
        <p className="text-[#105870] font-semibold text-[16px]">رضایت مراجعین</p>
        <p className="text-[#80C244] font-bold text-[24px]">۹۸ درصد</p>
      </div>
    </div>
  );
};

export default HeroImg;
