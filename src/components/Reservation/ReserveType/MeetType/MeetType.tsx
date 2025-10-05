import { PrevBtn } from '@/components/common/Butttons/PrevBtn'
import { ReserveNow } from '@/components/common/Butttons/ReserveNow'
import ReserveTitle from '@/components/common/ReserveTitle/ReserveTitle'
import React from 'react'
import MeetTypeCard from './MeetTypeCard'

const MeetType = () => {
  return (
    <div className="bg-custom-svg w-full min-h-[700px] flex flex-col items-center justify-center gap-10 py-12">
      {/* title */}
      <ReserveTitle
        title="نوع جلسه برگزاری"
        subtitle="لطفا نوع جلسه خود را مشخص کنید."
      />
      {/* Main Content */}
      <div className="w-[95%] sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto">
        {/* Card */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center">
          <MeetTypeCard />
        </div>
        {/* Text */}
        <div className="bg-[#F1F7FA] rounded-[20px] w-full min-h-[130px] flex flex-col gap-3 p-4 mt-6">
          <h3 className="text-secondary text-sm sm:text-[16px] font-bold">
            تفاوت بین روان درمانی و ویزیت
          </h3>
          <p className="text-[#10587080] text-[11px] sm:text-[12px] md:text-[14px] font-semibold leading-relaxed">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است...
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="w-[95%] sm:w-[80%] md:w-[60%] lg:w-[50%] flex flex-col sm:flex-row justify-between items-center gap-4 mb-20">
        <PrevBtn text="مرحله قبل" />
        <ReserveNow text="ادامه مراحل رزرو" />
      </div>
    </div>
  )
}

export default MeetType
