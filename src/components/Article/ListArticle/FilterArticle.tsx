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
    <div className=" w-[35%]">
      <Accordion type="multiple" className="w-full rounded-[20px]  shadow-xl">
        {/* CATEGORY  */}
        <AccordionItem value="category-1">
          <AccordionTrigger className="text-2xl font-extrabold text-[#105870] cursor-pointer">
            دسته بندی{" "}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            <label className="flex justify-between px-6 gap-2 cursor-pointer">
              <span className="text-xl font-semibold text-[#105870] hover:text-[#76C144] transition">
                اخبار{" "}
              </span>
              <Checkbox
                id="option1"
                className="border-2 rounded-[7px] border-[#e0e0e0] w-6 h-6  cursor-pointer"
              />
            </label>
            <label className="flex justify-between px-6 gap-2 cursor-pointer ">
              <span className="text-xl font-semibold text-[#105870] hover:text-[#76C144] transition">
                {" "}
                ارتقای آگهی
              </span>
              <Checkbox
                id="option2"
                className="border-2 rounded-[7px] border-[#e0e0e0] w-6 h-6  cursor-pointer"
              />
            </label>
            <label className="flex justify-between px-6 gap-2 cursor-pointer ">
              <span className="text-xl font-semibold text-[#105870] hover:text-[#76C144] transition">
                {" "}
                نقد فیلم و کتاب
              </span>
              <Checkbox
                id="option3"
                className="border-2 rounded-[7px] border-[#e0e0e0] w-6 h-6  cursor-pointer"
              />
            </label>
          </AccordionContent>
        </AccordionItem>

        {/* FILTERING */}
        <AccordionItem value="category-2">
          <AccordionTrigger  className="text-2xl font-extrabold text-[#105870] cursor-pointer">فیلتر کردن</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            <label className="flex justify-between px-6 gap-2 cursor-pointer">
              <span className="text-xl font-semibold text-[#105870] hover:text-[#76C144] transition">
                اعتیاد{" "}
              </span>
              <Checkbox
                id="option1"
                className="border-2 rounded-[7px] border-[#e0e0e0] w-6 h-6  cursor-pointer"
              />
            </label>
            <label className="flex justify-between px-6 gap-2 cursor-pointer">
              <span className="text-xl font-semibold text-[#105870] hover:text-[#76C144] transition">
                ازدواج{" "}
              </span>
              <Checkbox
                id="option1"
                className="border-2 rounded-[7px] border-[#e0e0e0] w-6 h-6  cursor-pointer"
              />
            </label>
            <label className="flex justify-between px-6 gap-2 cursor-pointer">
              <span className="text-xl font-semibold text-[#105870] hover:text-[#76C144] transition">
                کودک و نوجوان{" "}
              </span>
              <Checkbox
                id="option1"
                className="border-2 rounded-[7px] border-[#e0e0e0] w-6 h-6  cursor-pointer"
              />
            </label>
            <label className="flex justify-between px-6 gap-2 cursor-pointer">
              <span className="text-xl font-semibold text-[#105870] hover:text-[#76C144] transition">
                افسردگی{" "}
              </span>
              <Checkbox
                id="option1"
                className="border-2 rounded-[7px] border-[#e0e0e0] w-6 h-6  cursor-pointer"
              />
            </label>
            <label className="flex justify-between px-6 gap-2 cursor-pointer">
              <span className="text-xl font-semibold text-[#105870] hover:text-[#76C144] transition">
                زناشویی{" "}
              </span>
              <Checkbox
                id="option1"
                className="border-2 rounded-[7px] border-[#e0e0e0] w-6 h-6  cursor-pointer"
              />
            </label>
            <label className="flex justify-between px-6 gap-2 cursor-pointer">
              <span className="text-xl font-semibold text-[#105870] hover:text-[#76C144] transition">
                تربیت خانواده{" "}
              </span>
              <Checkbox
                id="option1"
                className="border-2 rounded-[7px] border-[#e0e0e0] w-6 h-6  cursor-pointer"
              />
            </label>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FilterArticle;
