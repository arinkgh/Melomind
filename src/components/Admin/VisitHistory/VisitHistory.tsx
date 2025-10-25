import AdminTitle from '@/components/common/AdminTitle/AdminTitle'
import React from 'react'
import mind from "@/../public/Images/mind.svg";
import alone from "@/../public/Images/alone.svg";
import online from "@/../public/Images/online.svg";
import meet from "@/../public/Images/meet.svg";
import Image from 'next/image';

const VisitHistory = () => {

    const items = [
    {
      id: 1,
      image: mind,
      title: "نوبت فردی - روان درمانی ",
      date: "۱۴۰۲ / ۰۲ / ۱۸",
      time: "۱۵:۳۰ - ۱۶:۰۰",
      price: "۵,۰۰۰,۰۰۰ ریال",
      meetType: "حضوری",
      meetTypeImg: meet,
    },
    {
      id: 2,
      image: alone,
      title: "نوبت زوج درمانی - ویزیت ",
      date: "۱۴۰۲ / ۰۶ / ۲۰",
      time: "۱۰:۳۰ - ۱۱:۰۰",
      price: "۷,۰۰۰,۰۰۰ ریال",
      meetType: "آنلاین",
      meetTypeImg: online,
    },
  ];


  return (
    <div  className="flex flex-col gap-8">
      {/* ===== Title ===== */}
      <AdminTitle
        subtitle="تاریخچه نوبت‌های من"
        title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
      />
      {/* ===== Reservation List ===== */}
            <div className="border-2 rounded-[20px] bg-background p-3 sm:p-4 flex flex-col gap-3 lg:h-140">
              {/* Header (visible from md) */}
              <div className="hidden md:flex font-bold w-full h-12 text-secondary">
                <div className="w-80 flex items-center px-3">عنوان</div>
                <div className="w-40 flex justify-center items-center">تاریخ</div>
                <div className="w-40 flex justify-center items-center">زمان</div>
                <div className="w-40 flex justify-center items-center">قیمت</div>
                <div className="w-40 flex justify-center items-center">نوع جلسه</div>
              </div>
      
              {/* Items */}
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-secondary/5 rounded-[20px] w-full flex flex-col md:flex-row md:h-12 cursor-pointer font-normal transition hover:bg-secondary/10"
                >
                  {/* Title */}
                  <div className="flex items-center gap-2 p-3 md:w-80">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-8 h-8 md:w-6 md:h-6"
                    />
                    <p className="text-secondary text-sm md:text-xs xl:text-base font-medium">
                      {item.title}
                    </p>
                  </div>
      
                  {/* Date */}
                  <div className="flex justify-between md:justify-center items-center p-3 md:w-40">
                    <span className="md:hidden text-secondary/70 font-semibold text-sm">
                      تاریخ:
                    </span>
                    <p className="text-secondary text-sm font-medium">{item.date}</p>
                  </div>
      
                  {/* Time */}
                  <div className="flex justify-between md:justify-center items-center p-3 md:w-40">
                    <span className="md:hidden text-secondary/70 font-semibold text-sm">
                      زمان:
                    </span>
                    <p className="text-secondary text-sm font-medium">{item.time}</p>
                  </div>
      
                  {/* Price */}
                  <div className="flex justify-between md:justify-center items-center p-3 md:w-40">
                    <span className="md:hidden text-secondary/70 font-semibold text-sm">
                      قیمت:
                    </span>
                    <p className="text-secondary text-sm font-medium">{item.price}</p>
                  </div>
      
                  {/* Meet Type */}
                  <div className="flex items-center gap-2 p-3 md:w-40">
                    <Image
                      src={item.meetTypeImg}
                      alt={item.meetType}
                      className="w-7 h-7 md:w-5 md:h-5"
                    />
                    <p className="text-secondary text-sm md:text-xs xl:text-base font-medium">
                      {item.meetType}
                    </p>
                  </div>
                </div>
              ))}
            </div>
    </div>
  )
}

export default VisitHistory
