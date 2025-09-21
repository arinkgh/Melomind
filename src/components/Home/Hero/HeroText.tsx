import React from 'react'
import { ReservationBn } from '../../common/Butttons/ReservationBtn'

const HeroText = () => {
  return (
    <div className='h-[380px] w-[40%] flex flex-col justify-between '>
      <p className='text-[#80C244] text-2xl font-semibold'>
        متخصص اعصاب و روان (روانپزشک)
      </p>
      <h3 className='text-[#105870] text-7xl font-extrabold whitespace-nowrap'>
        دکتر نرجس اقبالی
      </h3>
      <p className='text-[#105870] font-semibold text-[18px]'>
         پزشک متخصص مغز و اعصاب و روانپزشک با بیش از ۱۰ سال تجربه. او به بیماران با مشکلاتی مانند صرع، افسردگی، اضطراب کمک می‌کند.
دکتر اقبالی با استفاده از روش‌های مدرن و تحقیقاتی به بیماران خود کمک می‌کند تا بهبودی در کیفیت زندگی خود بیابند.
      </p>
      <ReservationBn text="دریافت نوبت"/>
    </div>
  )
}

export default HeroText
