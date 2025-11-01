// CardsGrid.tsx
'use client'

import React from "react";
import Image from "next/image";

const cards = [
  { img: "/Images/online.svg", title: "Online Course" },
  { img: "/Images/group.svg", title: "Group Study" },
  { img: "/Images/couple.svg", title: "Couple Class" },
  { img: "/Images/solo.svg", title: "Solo Learning" },
  { img: "/Images/travel.svg", title: "Travel Course" },
  { img: "/Images/teacher.svg", title: "Top Teachers" },
  { img: "/Images/exam.svg", title: "Exam Prep" },
  { img: "/Images/reading.svg", title: "Reading Club" },
];

export default function CardsGrid() {
  return (
    <div className="w-full px-4 md:px-6 lg:px-10">
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-6
          justify-items-center
        "
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="
              bg-white shadow-md rounded-2xl flex flex-col items-center justify-center
              p-5
              sm:p-6
              md:p-5
              lg:p-4
              xl:p-5
              transition-all
              hover:shadow-lg
              max-w-[260px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[260px] xl:max-w-[280px]
              w-full
            "
          >
            <Image
              src={card.img}
              alt={card.title}
              width={80}
              height={80}
              className="object-contain"
            />
            <p className="mt-3 text-center font-medium text-gray-700">{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
