"use client";
import { AddReserve } from '@/components/common/Butttons/AddReserve'
import { PrevBtn } from '@/components/common/Butttons/PrevBtn'
import { ReserveNow } from '@/components/common/Butttons/ReserveNow'
import ReserveTitle from '@/components/common/ReserveTitle/ReserveTitle'
import React from 'react'
import ReserveTable from './ReserveTable'
import FinalPrice from './FinalPrice'
import { useRouter } from 'next/navigation'

const Shop = () => {
    const router = useRouter();
        
          const handlenewReserveClick = () => {
            router.push("/reservation");
          };
        
           const handlelastpageClick = () => {
            router.push("/reservation/reservetype/meet-type/date");
          };
  return (
    <div className="bg-custom-svg w-full min-h-[700px] flex flex-col items-center justify-center gap-10 py-12">
      {/* title */}
      <ReserveTitle
        title="سبد خرید"
        subtitle="میتوانید نوبت‌های رزرو شده را ویرایش یا حذف و یا نوبت جدیدی رزرو کنید"
      />

      {/* Main Content */}
      <div className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto flex flex-col gap-50">
        {/* Reserve Table */}
        <ReserveTable />

        {/* Final Price */}
        <FinalPrice />
      </div>

      {/* Buttons */}
      <div className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] flex flex-col md:flex-row justify-center md:justify-between md:items-stretch items-center gap-4 mb-20 ">
        {/* Buttons stack column on mobile (user requested) */}
        <div className="w-full md:w-auto flex justify-center">
          <PrevBtn text="مرحله قبل" onClick={handlelastpageClick}/>
        </div>

        <div className="w-full md:w-auto flex flex-col md:flex-row gap-3 justify-center items-center">
          <AddReserve text="افزودن نوبت جدید" onClick={handlenewReserveClick}/>
          <ReserveNow text="پرداخت" />
        </div>
      </div>
    </div>
  )
}

export default Shop
