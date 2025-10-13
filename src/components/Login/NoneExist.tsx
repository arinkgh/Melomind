import React, { useEffect, useState } from 'react'
import VerificationCodeInput from './VerificationCodeInput'
import { LoginBtn } from '../common/Butttons/LoginBtn'


const getPhoneNumber = () => "09123456789";
const NoneExist = ({ onConfirm, onEnterWithPin }: { onConfirm?: () => void; onEnterWithPin?: () => void }) => {
      const phoneNumber = getPhoneNumber();
    
      const [timeLeft, setTimeLeft] = useState(60);
      const [canResend, setCanResend] = useState(false);
    
      useEffect(() => {
        if (timeLeft > 0) {
          const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
          return () => clearTimeout(timer);
        } else {
          setCanResend(true);
        }
      }, [timeLeft]);
    
      const handleResend = () => {
        if (!canResend) return;
        alert("کد جدید ارسال شد ✅");
        setTimeLeft(60);
        setCanResend(false);
      };
  return (
    <div className="w-full flex flex-col items-center justify-between gap-4 md:gap-6 text-center">
      <h2 className="text-secondary font-extrabold text-2xl md:text-4xl">
        حساب کاربری وجود ندارد!
      </h2>

      <p className="text-secondary font-semibold text-base md:text-[18px]">
         حساب کاربری با شماره<span className="text-primary/80">{phoneNumber}</span>  وجود ندارد؛ برای ساخت حساب جدید، کد تایید ارسال شده به این شماره را وارد نمایید
      </p>

      {/* input verification code */}
      <VerificationCodeInput />

      {/* Timer or Resend */}
      <p
        className={`text-secondary font-medium text-sm md:text-[16px] ${
          canResend ? "text-primary cursor-pointer" : "opacity-70"
        }`}
        onClick={canResend ? handleResend : undefined}
      >
        {canResend ? "دریافت مجدد کد" : `ارسال مجدد تا ${timeLeft} ثانیه`}
      </p>

      {/* Confirm Button */}
      <div className="w-full max-w-3xl px-4 md:px-0" onClick={onConfirm}>
        <LoginBtn text="ادامه" />
      </div>
    </div>
  )
}

export default NoneExist
