import { TitleProps } from '@/types/TitleTypes'
import React from 'react'


const ReserveTitle = ({ subtitle, title }: TitleProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 py-6">
      <h2 className="text-secondary font-extrabold text-3xl md:text-4xl lg:text-5xl text-center">
        {title}
      </h2>
      <p className="text-[#5f8896] font-semibold text-sm md:text-base lg:text-lg text-center">
        {subtitle}
      </p>
    </div>
  )
}

export default ReserveTitle
