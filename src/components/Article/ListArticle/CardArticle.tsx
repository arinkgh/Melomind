import { subscribe } from "diagnostics_channel";
import React from "react";
import articleimg from "../../../../public/Images/artilecard.svg";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
const CardArticle = () => {
  const items = [
    {
      image: articleimg,
      title: "تیتر مربوط به مقاله اعتیاد",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع...",
      shareDate: "۱۲ اردیبهشت ۱۴۰۲",
      subscribeCount: "۸،۴۵۶ نفر",
      category: "دسته‌ بندی  اعتیاد",
    },
    {
      image: articleimg,
      title: "تیتر مربوط به مقاله اعتیاد",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع...",
      shareDate: "۱۲ اردیبهشت ۱۴۰۲",
      subscribeCount: "۸،۴۵۶ نفر",
      category: "دسته‌ بندی  اعتیاد",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-10">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="w-full rounded-xl shadow-lg p-12 md:p-8 flex flex-col gap-6 bg-white"
        >
          {/* Image */}
          <div className="relative w-full h-48 md:h-64">
            <Image
              src={item.image}
              alt={item.title}
              className="object-cover rounded-md"
              fill
            />
          </div>

          {/* Text section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg md:text-2xl font-bold text-[#105870]">
              {item.title}
            </h3>
            <p className="text-sm md:text-base text-[#5b8e9e] leading-relaxed">
              {item.desc}
            </p>

            {/* Footer */}
            <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0 mt-4">
              {/* Left info section */}
              <div className="flex flex-wrap gap-4 items-center">
                {/* Category */}
                <div className="py-2 px-4 rounded-full bg-[#e0fac1]">
                  <p className="text-[#70aa3a] text-sm md:text-base">
                    {item.category}
                  </p>
                </div>

                {/* Share date */}
                <div className="flex items-center gap-3">
                  <div className="border rounded-full w-10 h-10 flex items-center justify-center">
                    <CiCalendar className="text-xl text-[#76C144]" />
                  </div>
                  <div className="flex flex-col text-xs md:text-sm">
                    <span className="text-[#85adb9]">تاریخ انتشار</span>
                    <span className="text-[#105870] font-bold">
                      {item.shareDate}
                    </span>
                  </div>
                </div>

                {/* Views */}
                <div className="flex items-center gap-3">
                  <div className="border rounded-full w-10 h-10 flex items-center justify-center">
                    <MdOutlineRemoveRedEye className="text-xl text-[#76C144]" />
                  </div>
                  <div className="flex flex-col text-xs md:text-sm">
                    <span className="text-[#85adb9]">تعداد بازدید</span>
                    <span className="text-[#105870] font-bold">
                      {item.subscribeCount}
                    </span>
                  </div>
                </div>
              </div>

              {/* Button */}
              <Button className="w-full md:w-auto flex items-center justify-center gap-2 py-6 px-16 rounded-full bg-white border-2 cursor-pointer hover:bg-white">
                <p className="text-[#105870] font-medium text-sm md:text-lg">
                  ادامه مطلب
                </p>
                <ChevronLeft className="w-6 h-6 text-[#76C144]" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardArticle;
