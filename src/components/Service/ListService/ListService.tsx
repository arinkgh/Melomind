import React from 'react';
import ListServiceSlider from './ListServiceSlider';

const ListService = () => {
  return (
    <div className="bg-[#F1F7FA] rounded-2xl container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex flex-col items-center gap-6 sm:gap-8">
      {/* Title */}
      <div className="flex flex-col items-center text-center gap-4">
        <span className="text-secondary font-semibold text-base sm:text-lg lg:text-xl">
          خدمات درمانی
        </span>
        <h2 className="text-primary font-extrabold text-2xl sm:text-3xl lg:text-4xl">
          لیست خدمات ملومایند
        </h2>
      </div>
      {/* Slider */}
      <div className="w-full max-w-5xl">
        <ListServiceSlider />
      </div>
    </div>
  );
};

export default ListService;