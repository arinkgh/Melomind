import { ReserveNow } from '@/components/common/Butttons/ReserveNow'
import React from 'react'

const ReservePoster = () => {
  return (
    <div className='container mx-auto rounded-[20px] bg-[#F1F7FA] mt-40 h-[350px] flex flex-col md:flex-row justify-around items-center '>
      {/* text */}
      <div className='w-1/2 h-[60%] flex flex-col items-start gap-4'>
        <p className=' text-xl md:text-2xl font-semibold text-[#76C144]'>زندگی را آسان کن!</p>
        <h3>
          <span className='text-[#105870] text-3xl md:text-4xl lg:text-5xl font-extrabold'>همین الان میتونی با </span>
          <span className='text-[#76C144] text-3xl md:text-4xl lg:text-5xl font-extrabold'>رزرو نوبت</span> <br/>
          <span className='text-[#105870] text-3xl md:text-4xl lg:text-5xl font-extrabold'>مشکلاتت رو حل کنی!</span>
        </h3>
      </div>
      {/* Button */}
      <ReserveNow text="همین الان رزرو کن"/>
      <div></div>
    </div>
  )
}

export default ReservePoster


