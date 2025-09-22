import React from 'react'
import { ReservationBn } from '../../common/Butttons/ReservationBtn'

const HeroText = () => {
  return (
    <div className='lg:h-[380px] md:h-[340px] w-[80%] md:w-[40%] flex flex-col justify-between gap-6 md:gap-0 '>
      <p className='text-[#80C244] lg:text-2xl text-[18px]  font-semibold'>
        متخصص اعصاب و روان (روانپزشک)
      </p>
      <h3 className='text-[#105870] lg:text-7xl text-5xl font-extrabold whitespace-nowrap'>
        دکتر نرجس اقبالی
      </h3>
      <p className='text-[#105870] font-semibold lg:text-[18px] text-xs'>
         پزشک متخصص مغز و اعصاب و روانپزشک با بیش از ۱۰ سال تجربه. او به بیماران با مشکلاتی مانند صرع، افسردگی، اضطراب کمک می‌کند.
دکتر اقبالی با استفاده از روش‌های مدرن و تحقیقاتی به بیماران خود کمک می‌کند تا بهبودی در کیفیت زندگی خود بیابند.
      </p>
      <ReservationBn text="دریافت نوبت"/>
    </div>
  )
}

export default HeroText
