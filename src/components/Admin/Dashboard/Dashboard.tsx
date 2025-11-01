"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ReserveNow } from "@/components/common/Butttons/ReserveNow";
import { SeeAll } from "@/components/common/Butttons/SeeAll";
import { FaRegTrashAlt } from "react-icons/fa";
import { RiEditBoxFill } from "react-icons/ri";

import online from "@/../public/Images/online.svg";
import tel from "@/../public/Images/tel.svg";
import meet from "@/../public/Images/meet.svg";
import test from "@/../public/Images/test.svg";
import mind from "@/../public/Images/mind.svg";
import alone from "@/../public/Images/alone.svg";

const Dashboard = () => {
  const router = useRouter();

  const handleReservationClick = () => {
    router.push("/reservation");
  };

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
      prices: [
        { subtitle: "توضیحات کوتاه درباره تست شخصیت", price: "۲۰۰،۰۰۰ تومان" },
      ],
    },
  ];

  const items = [
    {
      id: 1,
      image: mind,
      title: "نوبت فردی - روان درمانی - آنلاین",
      date: "۱۴۰۲ / ۰۲ / ۱۸",
      time: "۱۵:۳۰ - ۱۶:۰۰",
      price: "۵,۰۰۰,۰۰۰ ریال",
    },
    {
      id: 2,
      image: alone,
      title: "نوبت زوج درمانی - ویزیت - حضوری",
      date: "۱۴۰۲ / ۰۶ / ۲۰",
      time: "۱۰:۳۰ - ۱۱:۰۰",
      price: "۷,۰۰۰,۰۰۰ ریال",
    },
  ];

  return (
    <div className="container mx-auto px-4 flex flex-col gap-8">
      {/* Welcome Section */}
      <section className="w-full rounded-[20px] bg-half-svg p-4 sm:p-5 md:p-6 flex items-center justify-between">
        <div className="flex flex-col justify-center items-start">
          <p className="text-secondary text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
            خوش آمدی مهدی جان!
          </p>
          <h3 className="text-white font-extrabold text-xl sm:text-2xl md:text-3xl">
            تو لیاقت شاد زیستن را داری.
          </h3>
        </div>
      </section>

      {/* Current Reservations */}
      <section className="w-full rounded-[20px] bg-background p-4 md:p-6 shadow-lg flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-secondary font-bold text-lg sm:text-xl md:text-2xl">
            نوبت‌های جاری من
          </h2>
          <SeeAll text="مشاهده همه" />
        </div>

        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-secondary/5 rounded-[20px] transition hover:bg-secondary/10 flex flex-col md:flex-row w-full"
            >
              {/* Title */}
              <div className="flex items-center gap-3 p-3 md:w-1/4">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-7 h-7 md:w-6 md:h-6"
                />
                <p className="text-secondary text-sm md:text-base font-medium">
                  {item.title}
                </p>
              </div>

              {/* Date */}
              <div className="flex justify-between md:justify-center items-center p-3 md:w-1/4">
                <span className="md:hidden text-secondary/70 font-semibold">
                  تاریخ:
                </span>
                <p className="text-secondary text-sm md:text-base font-medium text-center">
                  {item.date}
                </p>
              </div>

              {/* Time */}
              <div className="flex justify-between md:justify-center items-center p-3 md:w-1/4">
                <span className="md:hidden text-secondary/70 font-semibold">
                  زمان:
                </span>
                <p className="text-secondary text-sm md:text-base font-medium text-center">
                  {item.time}
                </p>
              </div>

              {/* Price */}
              <div className="flex justify-between md:justify-center items-center p-3 md:w-1/4">
                <span className="md:hidden text-secondary/70 font-semibold">
                  قیمت:
                </span>
                <p className="text-secondary text-sm md:text-base font-medium text-center">
                  {item.price}
                </p>
              </div>

              {/* Actions */}
              <div className="flex justify-center items-center gap-4 p-3 border-t md:border-t-0 md:w-[80px]">
                <RiEditBoxFill className="text-secondary/40 w-5 h-5 md:w-6 md:h-6" />
                <FaRegTrashAlt className="text-[#FF2424] w-4 h-4 md:w-5 md:h-5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reservation Types */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-background rounded-[20px] shadow-md p-3 lg:p-4 flex flex-col justify-center items-center gap-2 lg:gap-3 hover:shadow-lg transition"
          >
            <Image
              src={card.image}
              alt="#"
              className="w-10 h-10 lg:w-14 lg:h-14"
            />
            <h3 className="text-secondary text-sm lg:text-base font-bold text-center">
              {card.title}
            </h3>

            {card.title === "تست شخصیت" ? (
              <div className="flex flex-col items-center gap-1">
                <p className="text-secondary/80 text-xs lg:text-sm text-center">
                  {card.prices[0].subtitle}
                </p>
                <span className="text-primary font-bold text-base lg:text-lg">
                  {card.prices[0].price}
                </span>
                <ReserveNow text="همین الان رزرو کن" />
              </div>
            ) : (
              <div className="flex flex-col items-center gap-1">
                {card.prices.map((p, i) => (
                  <p
                    key={i}
                    className="text-secondary font-bold text-xs lg:text-sm text-center"
                  >
                    {p.time}: <span className="text-primary">{p.price}</span>
                  </p>
                ))}
                <ReserveNow
                  text="همین الان رزرو کن"
                  onClick={handleReservationClick}
                />
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Dashboard;
