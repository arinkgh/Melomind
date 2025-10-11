import React from 'react'
import { PrevBtn } from '../common/Butttons/PrevBtn'
import MainSlider from './MainSlider'

const GroupTherapy = () => {
  return (
    <div className='bg-custom-svg h-[2000px] w-full'>
        <div className='mx-auto w-[50%] border h-full flex flex-col justify-between'>
            {/* Title */}
            <div className=' flex flex-row items-center gap-30 w-full h-[15%]'>
                {/* button */}
                <div className=' h-full flex  items-center justify-center  '>
                    <PrevBtn text="مرحله قبل"/>
                </div>
                {/* text */}
                <div className=' h-full flex flex-col items-center justify-center gap-4'>
                    <h2 className='text-secondary text-5xl font-bold'>گروه درمانی</h2>
                    <p className='text-secondary/60 text-[18px] font-semibold'>برای رزرو نوبت گروه درمانی یکی از گروه‌های زیر را انتخاب کنید.</p>
                </div>
            </div>
            {/* Slider */}
            <div className='border w-full h-[80%]'>
                <MainSlider/>
            </div>
        </div>
    </div>
  )
}

export default GroupTherapy

