import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/Article/ListArticle/checkbox";

const FilterArticle = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* Accordion #1 */}
      <Accordion
        type="multiple"
        className="w-full rounded-[16px] shadow-lg p-4 bg-background"
      >
        <AccordionItem value="cat-1">
          <AccordionTrigger className="text-lg md:text-xl font-bold text-secondary cursor-pointer">
            دسته بندی
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            {[
              "اخبار",
              "ارتقای آگهی",
              "نقد فیلم و کتاب",
            ].map((label, i) => (
              <label
                key={i}
                className="flex items-center justify-between cursor-pointer px-6 gap-2 "
              >
                <span className="text-base md:text-lg font-medium text-secondary">
                  {label}
                </span>
                <Checkbox className="w-5 h-5 md:w-6 md:h-6 border-2 rounded-[7px] border-[#e0e0e0] cursor-pointer" />
              </label>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Accordion #2 */}
      <Accordion
        type="multiple"
        className="w-full rounded-[16px] shadow-lg p-4 bg-background"
      >
        <AccordionItem value="cat-2">
          <AccordionTrigger className="text-lg md:text-xl font-bold text-secondary cursor-pointer">
            فیلتر کردن
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            {[
              "اعتیاد",
              "ازدواج",
              "کودک و نوجوان",
              "افسردگی",
              "زناشویی",
              "تربیت خانواده",
            ].map((label, i) => (
              <label
                key={i}
                className="flex items-center justify-between cursor-pointer px-6 gap-2 "
              >
                <span className="text-base md:text-lg font-medium text-secondary">
                  {label}
                </span>
                <Checkbox className="w-5 h-5 md:w-6 md:h-6 border-2 rounded-[7px] border-[#e0e0e0] cursor-pointer" />
              </label>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FilterArticle;
