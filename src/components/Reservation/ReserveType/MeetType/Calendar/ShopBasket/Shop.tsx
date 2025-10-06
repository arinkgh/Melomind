import { AddReserve } from '@/components/common/Butttons/AddReserve'
import { PrevBtn } from '@/components/common/Butttons/PrevBtn'
import { ReserveNow } from '@/components/common/Butttons/ReserveNow'
import ReserveTitle from '@/components/common/ReserveTitle/ReserveTitle'
import React from 'react'

const Shop = () => {
  return (
    <div className="bg-custom-svg w-full min-h-[700px] flex flex-col items-center justify-center gap-10 py-12">
      {/* title */}
      <ReserveTitle
        title="سبد خرید"
        subtitle="میتوانید نوبت‌های رزرو شده را ویرایش یا حذف و یا نوبت جدیدی رزرو کنید"
      />
      {/* Main Content */}
      <div className="w-[95%] sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto">
        {/* Calendar */}

        
      </div>
      {/* Buttons */}
        <div className="w-[95%] sm:w-[80%] md:w-[60%] lg:w-[50%] flex flex-col sm:flex-row justify-between items-center gap-4 mb-20">
          <PrevBtn text="مرحله قبل" />
          <div className='flex flex-col md:flex-row gap-2'>
            <AddReserve text='افزودن نوبت جدید'/>
            <ReserveNow text="ادامه مراحل رزرو" />
          </div>
        </div>
    </div>
  )
}

export default Shop
