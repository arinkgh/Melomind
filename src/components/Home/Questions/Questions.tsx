"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import QuestionsTitle from "./QuestionsTitle";

const Questions = () => {
  const items = [
    {
      title: "سوال شماره ۲ درباره مشکلات کودکان و نوجوانان؟",
      desc: "",
      number: "1",
    },
    {
      title: "سوال شماره ۱ درباره مشکلات خانوادگی؟",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است...",
      number: "2",
    },
    { title: "سوال شماره ۳ درباره مشکلات ازدواج؟", desc: "", number: "3" },
    { title: "سوال شماره ۴ درباره استرس و اضطراب؟", desc: "", number: "4" },
  ];

  return (
    <div className="container mx-auto mt-40 flex flex-col justify-between items-center gap-12" dir="rtl">
      {/* Title */}
      <QuestionsTitle />

      {/* Accordion */}
      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-6"
      >
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${item.number}`}
            className="w-full rounded-[20px] shadow-[#92B3BE1A] shadow-2xl p-6 cursor-pointer"
          >
            <AccordionTrigger className="flex items-center justify-between cursor-pointer text-right [&[data-state=open]>span]:text-[#76C144]">
              {/* Number + Title together */}
              <span className=" text-xl md:text-2xl font-bold text-[#105870] flex items-center gap-2">
                <span className="text-[#76C144]">{item.number}.</span>
                {item.title}
              </span>
            </AccordionTrigger>

            <AccordionContent>
              <p className="text-[#6997a8] font-semibold text-[18px] leading-relaxed text-right">
                {item.desc || "پاسخی برای این سوال ثبت نشده است."}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Questions;

