"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";
import Image from "next/image";
import CircleNextBtn from "../../common/Butttons/CircleNextBtn";
import group from "@/../public/Images/group.svg";
import couple from "@/../public/Images/couple.svg";
import person from "@/../public/Images/person.svg";

// Dynamic cards data
const cards = [
  { img: group, title: "گروه پنیک", description: "توضیحات مختصر و مثال" },
  {
    img: couple,
    title: " گروه والدین ADHD",
    description: "توضیحات مختصر و مثال",
  },
  {
    img: person,
    title: " گروه سوگواران حیوانات خانگی",
    description: "توضیحات مختصر و مثال",
  },
  { img: group, title: " گروه افسردگی", description: "توضیحات مختصر و مثال" },
  { img: couple, title: " گروه پنیک", description: "توضیحات مختصر و مثال" },
  {
    img: person,
    title: " گروه والدین ADHD",
    description: "توضیحات مختصر و مثال",
  },
  { img: group, title: " گروه افسردگی", description: "توضیحات مختصر و مثال" },
  { img: couple, title: " گروه پنیک", description: "توضیحات مختصر و مثال" },
  {
    img: person,
    title: " گروه والدین ADHD",
    description: "توضیحات مختصر و مثال",
  },
  { img: group, title: "گروه پنیک", description: "توضیحات مختصر و مثال" },
  {
    img: couple,
    title: " گروه والدین ADHD",
    description: "توضیحات مختصر و مثال",
  },
  {
    img: person,
    title: " گروه سوگواران حیوانات خانگی",
    description: "توضیحات مختصر و مثال",
  },
  { img: group, title: " گروه افسردگی", description: "توضیحات مختصر و مثال" },
  { img: couple, title: " گروه پنیک", description: "توضیحات مختصر و مثال" },
  {
    img: person,
    title: " گروه والدین ADHD",
    description: "توضیحات مختصر و مثال",
  },
  { img: group, title: " گروه افسردگی", description: "توضیحات مختصر و مثال" },
  { img: couple, title: " گروه پنیک", description: "توضیحات مختصر و مثال" },
  {
    img: person,
    title: " گروه والدین ADHD",
    description: "توضیحات مختصر و مثال",
  },
];

const MainSlider = () => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Grid, Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            grid: { rows: 2, fill: "row" },
          },
          640: {
            slidesPerView: 2,
            grid: { rows: 3, fill: "row" },
          },
          1024: {
            slidesPerView: 2,
            grid: { rows: 3, fill: "row" },
          },
          1280: {
            slidesPerView: 3,
            grid: { rows: 3, fill: "row" },
          },
        }}
        className="mySwiper"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div
              className="
              hover:scale-105 transition
              w-[90%] sm:w-[85%] 
              md:w-[260px] md:h-[330px]
              lg:w-[230px] lg:h-[300px]   
              xl:w-[280px] xl:h-[340px]   
              rounded-[20px] flex flex-col items-center justify-around  bg-background py-6 cursor-pointer mx-auto"
            >
              <Image
                src={card.img}
                alt={card.title}
                width={80}
                height={80}
                className="w-20 h-20"
              />
              <div className="flex flex-col items-center text-center px-4">
                <h4 className="text-secondary font-bold text-lg sm:text-xl md:text-2xl">
                  {card.title}
                </h4>
                <p className="text-secondary/80 text-[12px] sm:text-[14px] md:text-[18px] mt-1">
                  {card.description}
                </p>
              </div>
              <CircleNextBtn />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainSlider;
