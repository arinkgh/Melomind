import Image from 'next/image'
import React from 'react'
import meet from "@/../public/Images/meet.svg"
import online from '@/../public/Images/online.svg'
import tel from '@/../public/Images/tel.svg'

const MeetTypeCard = () => {
  return (
      <div className="mt-10 w-full flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-4">
      {[
        { img: meet, title: "حضوری" },
        { img: online, title: "آنلاین" },
        { img: tel, title: "تلفنی" },
      ].map(({ img, title }, index) => (
        <div
          key={index}
          className="border-2 w-[85%] md:w-[45%] lg:w-[250px] h-[220px] sm:h-[240px] rounded-[20px] flex flex-col items-center justify-center shadow bg-background p-4 cursor-pointer hover:border-primary transition"
        >
          <Image src={img} alt="#" className="w-20 h-20" />
          <div className="flex flex-col items-center text-center">
            <h4 className="text-secondary font-bold text-xl sm:text-2xl">
              {title}
            </h4>
            <p className="text-[#10587080] text-sm sm:text-[18px] font-semibold mt-1">
              توضیحات مختصر و مثال
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MeetTypeCard
