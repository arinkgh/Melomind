"use client";

import { ReserveNow } from '@/components/common/Butttons/ReserveNow'
import { useRouter } from 'next/navigation';
import React from 'react'

const ReservePoster = () => {
   const router = useRouter();
  
      const handleReservationClick = () => {
      router.push("/reservation"); 
    };
  return (
    <div className='container mx-auto rounded-[20px] bg-[#F1F7FA] mt-40 h-[350px] flex flex-col md:flex-row justify-around items-center '>
      {/* text */}
      <div className='w-1/2 h-[60%] flex flex-col items-start gap-4'>
        <p className=' text-xl md:text-2xl font-semibold text-primary/80'>زندگی را آسان کن!</p>
        <h3>
          <span className='text-secondary text-3xl md:text-4xl lg:text-5xl font-extrabold'>همین الان میتونی با </span>
          <span className='text-primary/80 text-3xl md:text-4xl lg:text-5xl font-extrabold'>رزرو نوبت</span> <br/>
          <span className='text-secondary text-3xl md:text-4xl lg:text-5xl font-extrabold'>مشکلاتت رو حل کنی!</span>
        </h3>
      </div>
      {/* Button */}
      <ReserveNow text="همین الان رزرو کن" onClick={handleReservationClick}/>
      <div></div>
    </div>
  )
}

export default ReservePoster


