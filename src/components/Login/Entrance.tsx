import React from 'react'
import { LoginBtn } from '../common/Butttons/LoginBtn'

const Entrance = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
        {/* title */}
        <div className='flex flex-col items-center justify-center gap-5 mb-16'>
            <p className='text-secondary font-extrabold text-4xl'>ورود  |  ثبت نام</p>
            <span className='text-secondary/60 font-semibold text-[18px]'>برای ورود یا ثبت نام در ملومایند اطلاعات زیر را کامل کنید.</span>
        </div>
        {/* input */}
        
        {/* button */}
        <LoginBtn text='ورود به حساب'/>
    </div>
  )
}

export default Entrance
