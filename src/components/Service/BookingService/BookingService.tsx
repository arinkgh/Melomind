import Image from "next/image";
import React from "react";
import online from "../../../../public/Images/online.svg";
import tel from "../../../../public/Images/tel.svg";
import meet from "../../../../public/Images/meet.svg";
import test from "../../../../public/Images/test.svg";
import { ReserveNow } from "@/components/common/Butttons/ReserveNow";

const BookingService = () => {
  const cards = [
    {
      image: online,
      title: "نوبت آنلاین",
      prices: [
        { time: "۳۰ دقیقه", price: "۵۰۰،۰۰۰ تومان" },
        { time: "۴۵ دقیقه", price: "۷۰۰،۰۰۰ تومان" },
      ],
    },
    {
      image: tel,
      title: "نوبت تلفنی",
      prices: [
        { time: "۳۰ دقیقه", price: "۵۰۰،۰۰۰ تومان" },
        { time: "۴۵ دقیقه", price: "۷۰۰،۰۰۰ تومان" },
      ],
    },
    {
      image: meet,
      title: "نوبت حضوری",
      prices: [
        { time: "۳۰ دقیقه", price: "۷۰۰،۰۰۰ تومان" },
        { time: "۴۵ دقیقه", price: "۹۰۰،۰۰۰ تومان" },
      ],
    },
    {
      image: test,
      title: "تست شخصیت",
      prices: [{ subtitle: "توضیحات کوتاه درباره تست شخصیت", price: "۲۰۰،۰۰۰ تومان" }],
    },
  ];

  return (
    <div className="container mx-auto rounded-[20px] mt-40 bg-half-svg h-auto py-16 flex flex-col items-center justify-center gap-10">
      {/* Title */}
      <div className="flex flex-col items-center justify-center text-center px-4">
        <p className="text-[#105870] text-lg md:text-xl font-semibold">
          مزیت‌ها و فواید ملومایند
        </p>
        <h3 className="text-white font-extrabold text-3xl md:text-5xl mt-2">
          تعرفه‌های رزرو
        </h3>
      </div>

      {/* Cards */}
      <div className="w-full flex flex-wrap justify-center gap-6 px-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-[20px] shadow w-[90%] sm:w-[300px] md:w-[320px] h-auto py-8 flex flex-col justify-center items-center gap-6"
          >
            <Image src={card.image} alt="#" className="w-16 h-16" />
            <h3 className="text-[#105870] text-xl md:text-2xl font-bold text-center">
              {card.title}
            </h3>

            {/* Test شخصیت */}
            {card.title === "تست شخصیت" ? (
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-[#89a1a8] text-xs text-center leading-5">
                  توضیحات کوتاه درباره <br /> تست شخصیت
                </p>
                <span className="text-[#80C244] font-bold text-2xl md:text-3xl whitespace-nowrap">
                  ۲۰۰،۰۰۰ تومان
                </span>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                {card.prices.map((item, idx) => (
                  <p key={idx} className="text-[#105870] font-bold text-lg md:text-xl">
                    {item.time}:{" "}
                    <span className="text-[#80C244]">{item.price}</span>
                  </p>
                ))}
              </div>
            )}

            <ReserveNow text="همین الان رزرو کن" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingService;
