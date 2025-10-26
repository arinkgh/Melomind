"use client";

import React from "react";
import online from "@/../public/Images/online.svg";
import tel from "@/../public/Images/tel.svg";
import meet from "@/../public/Images/meet.svg";
import test from "@/../public/Images/test.svg";
import Image from "next/image";
import { ReserveNow } from "@/components/common/Butttons/ReserveNow";
import { SeeAll } from "@/components/common/Butttons/SeeAll";
import { FaRegTrashAlt } from "react-icons/fa";
import { RiEditBoxFill } from "react-icons/ri";
import mind from "@/../public/Images/mind.svg";
import alone from "@/../public/Images/alone.svg";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const cards = [
    { image: online, title: "نوبت آنلاین", prices: [{ time: "۳۰ دقیقه", price: "۵۰۰،۰۰۰ تومان" }, { time: "۴۵ دقیقه", price: "۷۰۰،۰۰۰ تومان" }] },
    { image: tel, title: "نوبت تلفنی", prices: [{ time: "۳۰ دقیقه", price: "۵۰۰،۰۰۰ تومان" }, { time: "۴۵ دقیقه", price: "۷۰۰،۰۰۰ تومان" }] },
    { image: meet, title: "نوبت حضوری", prices: [{ time: "۳۰ دقیقه", price: "۷۰۰،۰۰۰ تومان" }, { time: "۴۵ دقیقه", price: "۹۰۰،۰۰۰ تومان" }] },
    { image: test, title: "تست شخصیت", prices: [{ subtitle: "توضیحات کوتاه درباره تست شخصیت", price: "۲۰۰،۰۰۰ تومان" }] },
  ];

  const items = [
    { id: 1, image: mind, title: "نوبت فردی - روان درمانی - آنلاین", date: "۱۴۰۲ / ۰۲ / ۱۸", time: "۱۵:۳۰ - ۱۶:۰۰", price: "۵,۰۰۰,۰۰۰ ریال" },
    { id: 2, image: alone, title: "نوبت زوج درمانی - ویزیت - حضوری", date: "۱۴۰۲ / ۰۶ / ۲۰", time: "۱۰:۳۰ - ۱۱:۰۰", price: "۷,۰۰۰,۰۰۰ ریال" },
  ];

    const router = useRouter();
  
      const handleReservationClick = () => {
      router.push("/reservation"); 
    };

  return (
    <div className="flex flex-col gap-6">
      {/* Welcome */}
      <div className="w-full h-[130px] rounded-[20px] bg-half-svg flex p-4 lg:p-6">
        <div className="flex flex-col justify-center items-start text-start w-full">
          <p className="text-secondary text-[18px] lg:text-[20px] font-semibold">
            خوش آمدی مهدی جان!
          </p>
          <h3 className="text-white font-extrabold text-2xl md:text-3xl">
            تو لیاقت شاد زیستن را داری.
          </h3>
        </div>
      </div>

      {/* Current reservations */}
      <div className="w-full rounded-[20px] flex flex-col p-4 lg:p-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-secondary font-bold text-xl lg:text-2xl">نوبت‌های جاری من</h2>
          <SeeAll text="مشاهده همه" />
        </div>

        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-secondary/5 flex flex-col lg:flex-row rounded-[20px] w-full cursor-pointer transition hover:bg-secondary/10"
            >
              <div className="flex gap-2 items-center p-3 lg:w-80">
                <Image src={item.image} alt={item.title} className="w-8 h-8 lg:w-6 lg:h-6" />
                <p className="text-secondary text-sm md:text-[12px] lg:text-base font-medium">{item.title}</p>
              </div>

              <div className="flex justify-between p-3 lg:w-40">
                <span className="lg:hidden text-secondary/70 font-semibold">تاریخ:</span>
                <p className="text-secondary text-sm lg:text-base font-medium text-center">{item.date}</p>
              </div>

              <div className="flex justify-between p-3 lg:w-40">
                <span className="lg:hidden text-secondary/70 font-semibold">زمان:</span>
                <p className="text-secondary text-sm lg:text-base font-medium text-center">{item.time}</p>
              </div>

              <div className="flex justify-between p-3 lg:w-40">
                <span className="lg:hidden text-secondary/70 font-semibold">قیمت:</span>
                <p className="text-secondary text-sm lg:text-base font-medium text-center">{item.price}</p>
              </div>

              <div className="flex justify-center items-center gap-4 p-3 lg:w-40">
                <RiEditBoxFill className="text-secondary/40 w-6 h-6" />
                <FaRegTrashAlt className="text-[#FF2424] w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reservation types */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-background rounded-[20px] shadow-md p-4 lg:p-6 flex flex-col justify-center items-center gap-3"
          >
            <Image src={card.image} alt="#" className="w-16 h-16" />
            <h3 className="text-secondary text-lg lg:text-xl font-bold text-center">{card.title}</h3>

            {card.title === "تست شخصیت" ? (
              <div className="flex flex-col items-center gap-1">
                <p className="text-secondary/80 text-sm text-center">{card.prices[0].subtitle}</p>
                <span className="text-primary font-bold text-lg lg:text-xl">{card.prices[0].price}</span>
                <ReserveNow text="همین الان رزرو کن" />
              </div>
            ) : (
              <div className="flex flex-col gap-1 items-center">
                {card.prices.map((p, i) => (
                  <p key={i} className="text-secondary font-bold text-sm lg:text-base text-center">
                    {p.time}: <span className="text-primary">{p.price}</span>
                  </p>
                ))}
                <ReserveNow text="همین الان رزرو کن"  onClick={handleReservationClick} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
