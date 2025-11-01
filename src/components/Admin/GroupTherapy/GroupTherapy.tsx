"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AdminTitle from "@/components/common/AdminTitle/AdminTitle";
import { SeeAll } from "@/components/common/Butttons/SeeAll";
import CardsGrid from "./CardsGrid";

const cards = [
  { img: "/Images/group.svg", title: "گروه 1", description: "توضیحات تستی" },
  { img: "/Images/person.svg", title: "گروه 2", description: "لورم ایپسوم" },
  { img: "/Images/couple.svg", title: "گروه 3", description: "نمونه متن" },
  { img: "/Images/test.svg", title: "گروه 4", description: "و غیره..." },
  { img: "/Images/meet.svg", title: "گروه 5", description: "لورم ایپسوم" },
  { img: "/Images/tel.svg", title: "گروه 6", description: "نمونه متن" },
  { img: "/Images/meet.svg", title: "گروه 7", description: "لورم ایپسوم" },
];

const comments = [
  {
    img: "/Images/online.svg",
    title: "گروه 1",
    description:
      "کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.",
  },
  {
    img: "/Images/meet.svg",
    title: "گروه 2",
    description:
      "کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.",
  },
  {
    img: "/Images/tel.svg",
    title: "گروه 3",
    description:
      "کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.",
  },
  {
    img: "/Images/test.svg",
    title: "گروه 4",
    description:
      "کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.",
  },
  {
    img: "/Images/meet.svg",
    title: "گروه 5",
    description:
      "کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.",
  },
];

const GroupTherapy = () => {
  return (
    <div className="flex flex-col gap-12 container mx-auto px-4">
      {/* Title */}
      <div className="flex lg:flex-row  justify-between items-center  gap-4">
        <AdminTitle
          subtitle="گروه درمانی"
          title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم..."
        />
        <SeeAll text="مشاهده همه" />
      </div>

      {/* Slider 1 */}
      <div className="flex flex-col gap-5 max-w-250">
        <h3 className="text-secondary text-xl font-bold">
          لیست گروه‌ درمانی‌ها
        </h3>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-button-prev1",
              nextEl: ".swiper-button-next1",
            }}
            spaceBetween={10}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1.3 },
              640: { slidesPerView: 1.8 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.2 },
              1280: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {cards.map((card, index) => (
              

              <SwiperSlide key={index} className="!flex justify-center">
                <div className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] h-[220px] rounded-[20px] flex flex-col items-center justify-around bg-background py-6 cursor-pointer">
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={60}
                    height={60}
                  />
                  <div className="flex flex-col items-center text-center">
                    <h4 className="text-secondary font-bold text-base md:text-lg">
                      {card.title}
                    </h4>
                    <p className="text-secondary/80 text-xs md:text-sm mt-1 line-clamp-2">
                      {card.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Arrows */}
          <div className="swiper-button-prev1 absolute left-1 top-1/2 -translate-y-1/2 bg-white shadow rounded-full cursor-pointer z-10 flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10">
            <ChevronLeft size={18} className="text-primary" />
          </div>
          <div className="swiper-button-next1 absolute right-1 top-1/2 -translate-y-1/2 bg-white shadow rounded-full cursor-pointer z-10 flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10">
            <ChevronRight size={18} className="text-primary" />
          </div>
        </div>
      </div>

      {/* Slider 2 */}
      <div className="flex flex-col gap-5 max-w-250">
        <h3 className="text-secondary text-xl font-bold">
          نظرات کاربران درباره گروه‌ درمانی
        </h3>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-button-prev2",
              nextEl: ".swiper-button-next2",
            }}
            spaceBetween={10}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1.3 },
              640: { slidesPerView: 1.8 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.2 },
              1280: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {comments.map((card, index) => (
             

              <SwiperSlide key={index} className="!flex justify-center">
                <div className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] h-[220px] rounded-[20px] flex flex-col items-stretch p-5 gap-3 justify-start bg-background cursor-pointer overflow-hidden">
                  <div className="flex flex-row items-center gap-2">
                    <Image
                      src={card.img}
                      alt={card.title}
                      width={35}
                      height={35}
                      className="rounded-full"
                    />
                    <h4 className="text-secondary font-bold text-base md:text-lg">
                      {card.title}
                    </h4>
                  </div>
                  <p className="text-secondary/80 text-xs md:text-sm mt-1 line-clamp-3">
                    {card.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Arrows */}
          <div className="swiper-button-prev2 absolute left-1 top-1/2 -translate-y-1/2 bg-white shadow rounded-full cursor-pointer z-10 flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10">
            <ChevronLeft size={18} className="text-primary" />
          </div>
          <div className="swiper-button-next2 absolute right-1 top-1/2 -translate-y-1/2 bg-white shadow rounded-full cursor-pointer z-10 flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10">
            <ChevronRight size={18} className="text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupTherapy;






