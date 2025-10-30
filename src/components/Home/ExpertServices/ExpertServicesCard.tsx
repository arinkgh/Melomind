import React from "react";
import group from "@/../public/Images/facetime.svg";
import springpackage from "@/../public/Images/springpackage.svg";
import book from "@/../public/Images/bookmovie.svg";
import child from "@/../public/Images/children.svg";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";

const ExpertServicesCard = () => {
  const itemsRight = [
    { image: group, title: "گروه درمانی", desc: "توضیحات مختصر و مثال" },
    { image: book, title: "پکیج بهاری", desc: "توضیحات مختصر و مثال" },
  ];

  const itemsLeft = [
    { image: child, title: "کودک و نوجوان", desc: "توضیحات مختصر و مثال" },
    { image: springpackage, title: "نقد فیلم و کتاب", desc: "توضیحات مختصر و مثال" },
  ];

  return (
    <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-6  md:mt-0 mt-50 ">
      {/* right */}
      <div className="flex-1 flex flex-col gap-6">
        {itemsRight.map((item, index) => (
          <div
            key={index}
            className="w-full bg-background rounded-[20px] shadow p-4 flex flex-col justify-around hover:shadow-lg transition cursor-pointer h-[240px]"
          >
            <Image src={item.image} alt="#" 
            // className="w-12 h-12" 
            />
            <div className="flex flex-row justify-between items-center mt-4 whitespace-nowrap">
              <div>
                <p className="text-secondary font-bold text-xl">{item.title}</p>
                <p className="text-secondary/80 text-[16px] mt-2">{item.desc}</p>
              </div>
              <div className="w-12 h-12 border rounded-full flex items-center justify-center bg-background">
                <ChevronLeft className="w-6 h-6 text-primary/80" />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* left */}
      <div className="flex-1 flex flex-col gap-6 lg:mt-7 lg:self-end">
        {itemsLeft.map((item, index) => (
          <div
            key={index}
            className="w-full bg-background rounded-[20px] shadow p-4 flex flex-col justify-around hover:shadow-lg transition cursor-pointer h-[240px]"
          >
            <Image src={item.image} alt="#" 
            // className="w-12 h-12"
             />
            <div className="flex flex-row justify-between items-center mt-4 whitespace-nowrap">
              <div>
                <p className="text-secondary font-bold text-xl">{item.title}</p>
                <p className="text-secondary/80 text-[16px] mt-2">{item.desc}</p>
              </div>
              <div className="w-12 h-12 border rounded-full flex items-center justify-center bg-background">
                <ChevronLeft className="w-6 h-6 text-primary/80" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertServicesCard;
