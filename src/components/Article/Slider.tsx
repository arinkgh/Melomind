"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Modules
import { Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <div className="bg-custom-svg w-full h-[400px] md:h-[550px]">
      <div className="container mx-auto  h-[500px] mt-10 relative flex items-center justify-center">
        {/* Background green layers */}
        <div className="absolute inset-0 bg-[#AFED65] w-[97%] h-full mx-auto mt-4 rounded-[37px]"></div>
        <div className="absolute inset-3 bg-[#80C244] w-[98%] h-full mx-auto -mt-3 rounded-[20px]"></div>

        {/* Slider */}
        <div className="relative w-full h-[95%] -mt-7 z-10">
          <Swiper
            spaceBetween={30}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="h-full"
          >
            <SwiperSlide>
              <div className="flex items-center justify-center bg-[#444] h-full rounded-2xl text-white text-2xl font-bold">
                Slide 1
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center bg-[#666] h-full rounded-2xl text-white text-2xl font-bold">
                Slide 2
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center bg-[#888] h-full rounded-2xl text-white text-2xl font-bold">
                Slide 3
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Slider;


