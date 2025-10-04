import React from 'react'
import MedicalServicesItems from './MedicalServicesItems'

const MedicalServices = () => {
  return (
    <div className="container mx-auto mt-0 md:mt-6 flex flex-col items-center justify-center gap-10 md:gap-16 lg:gap-20 px-4">
      {/* Title */}
      <div className="flex flex-col items-center justify-center gap-2 text-center w-full md:w-3/4 lg:w-1/2">
        <p className="text-[#76C144] text-lg md:text-xl lg:text-2xl font-semibold">
          خدمات درمانی
        </p>
        <h4 className="text-primary font-bold text-2xl md:text-3xl lg:text-5xl leading-snug whitespace-nowrap">
          راهی برای بهبود سلامت روحی و روانی
        </h4>
      </div>

      {/* Items */}
      <MedicalServicesItems />
    </div>
  )
}

export default MedicalServices
