import React from 'react'
import { EnterBtn } from '../Butttons/EnterBtn'
import { ReservationBn } from '../Butttons/ReservationBtn'

const HeaderLogin = () => {
  return (
    <div className='w-[30%] flex flex-row gap-2 items-center justify-center'>
      <EnterBtn/>
      <ReservationBn/>
    </div>
  )
}

export default HeaderLogin
