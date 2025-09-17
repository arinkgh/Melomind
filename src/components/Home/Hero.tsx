import React from "react";
import HeroText from "./HeroText";
import HeroImg from "./HeroImg";

const Hero = () => {
  return (
    <div className="bg-custom-svg  w-full  border h-[550px]">
      <div className="container mx-auto  flex flex-row justify-between items-center mt-22 font-iranyekan">
        <HeroText />
        <HeroImg />
      </div>
    </div>
  );
};

export default Hero;
