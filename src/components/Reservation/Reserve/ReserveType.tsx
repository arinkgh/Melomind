import React from 'react'
import Image from 'next/image'
import group from '../../../../public/Images/group.svg'
import couple from '../../../../public/Images/couple.svg'
import person from '../../../../public/Images/person.svg'
import CircleNextBtn from '@/components/common/Butttons/CircleNextBtn'

const ReserveType = () => {
  return (
    <div className="mt-10 w-full flex flex-col md:flex-row md:flex-wrap lg:flex-row items-center justify-center md:justify-around gap-6 md:gap-8">
      
      {[ 
        { img: group, title: "نوبت گروه درمانی" },
        { img: couple, title: "نوبت زوج درمانی" },
        { img: person, title: "نوبت فردی" }
      ].map(({ img, title }, index) => (
        <div
          key={index}
          className="border-2 w-[85%]  lg:w-[280px] md:h-[340px] rounded-[20px] flex flex-col items-center justify-around shadow bg-white py-6 cursor-pointer"
        >
          <Image src={img} alt="#" className="w-20 h-20" />
          <div className="flex flex-col items-center text-center">
            <h4 className="text-primary font-bold text-xl md:text-2xl">
              {title}
            </h4>
            <p className="text-[#5e7177] text-[14px] md:text-[18px] mt-1">
              توضیحات مختصر و مثال
            </p>
          </div>
          <CircleNextBtn />
        </div>
      ))}
    </div>
  )
}

export default ReserveType
