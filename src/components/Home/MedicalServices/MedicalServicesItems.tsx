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
    <div className="w-full h-[300px] flex flex-row justify-between items-center">
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-[20px] w-[480px] h-[300px] shadow-2xl flex flex-col justify-around pr-10 cursor-pointer"
        >
          <Image src={item.image} alt="#" className="w-20 h-20" />
          <h4 className="font-bold text-[26px] text-[#105870]">{item.title}</h4>
          <p className="font-semibold text-[#347a91] text-[18px]">
            {item.desc}
          </p>
          <div className="flex flex-row flex-nowrap items-center gap-2" >
            <p className="text-[18px] text-[#105870] font-bold">ادامه مطلب</p>
            <ChevronLeft className="text-[#80C244]" size={22} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MedicalServicesItems;
