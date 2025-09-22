import React from "react";
import HeroText from "./HeroText";
import HeroImg from "./HeroImg";

const Hero = () => {
  return (
    <div className="bg-custom-svg  w-full h-[400px] md:h-[550px]">
      <div className="container mx-auto  flex flex-row md:justify-between justify-center items-center mt-22">
        <HeroText />
        <HeroImg />
      </div>
    </div>
  );
};

export default Hero;
