import React from 'react'
import MedicalServicesItems from './MedicalServicesItems'

const MedicalServices = () => {
  return (
    <div className='container mx-auto mt-3 flex flex-col items-center justify-center gap-20'>
        {/* Title */}
        <div className='h-30 w-1/2 flex flex-col items-center justify-center gap-2'>
            <p className='text-[#76C144] text-2xl font-semibold'>خدمات درمانی</p>
            <h4 className='text-[#105870] font-bold text-5xl'>راهی برای بهبود سلامت روحی و روانی</h4>
        </div>
      {/* Items */}
      <MedicalServicesItems/>
    </div>
  )
}

export default MedicalServices
