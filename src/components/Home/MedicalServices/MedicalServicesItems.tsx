import React from "react";
import depressionImg from "../../../../public/Images/depression.svg";
import addictionImg from "../../../../public/Images/addicted.svg";
import anxietyImg from "../../../../public/Images/anxiety.svg";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";

const MedicalServicesItems = () => {
  const items = [
    {
      image: depressionImg,
      title: "افسردگی",
      desc: "خدمات درمانی افسردگی، به افرادی که به این بیماری مبتلا هستند، ارائه می‌شود...",
    },
    {
      image: addictionImg,
      title: "اعتیاد",
      desc: "خدمات درمانی اعتیاد، به عنوان سرویس حیاتی در جامعه، به افرادی که با مشکلات...",
    },
    {
      image: anxietyImg,
      title: "اضطراب",
      desc: "خدمات درمانی اضطراب، تحت عنوان یک راهکار مؤثر برای کمک به افرادی که با اضطراب...",
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-[20px] shadow-2xl flex flex-col justify-between p-6 cursor-pointer h-auto min-h-[280px]"
        >
          <Image src={item.image} alt={item.title} className="w-16 h-16 md:w-20 md:h-20" />
          <h4 className="font-bold text-xl md:text-2xl text-primary mt-3">
            {item.title}
          </h4>
          <p className="font-semibold text-[#347a91] text-sm md:text-base lg:text-lg flex-grow">
            {item.desc}
          </p>
          <div className="flex items-center gap-2 mt-4">
            <p className="text-sm md:text-base lg:text-lg text-primary font-bold">
              ادامه مطلب
            </p>
            <ChevronLeft className="text-secondary" size={20} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MedicalServicesItems;
