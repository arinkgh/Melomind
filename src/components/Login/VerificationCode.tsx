"use client";

import React, { useState, useEffect } from "react";
import VerificationCodeInput from "./VerificationCodeInput";
import { LoginBtn } from "../common/Butttons/LoginBtn";
import { useAuthStore } from "@/services/auth/auth.store";

const VerificationCode = () => {
  const { mobile, verifyOtp, sendOtp, isNewUser, set } = useAuthStore();
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    setTimeLeft(60);
    setCanResend(false);
  }, [mobile]);

  useEffect(() => {
    if (timeLeft > 0) {
      const t = setTimeout(() => setTimeLeft((v) => v - 1), 1000);
      return () => clearTimeout(t);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const handleResend = async () => {
    if (!canResend) return;
    const ok = await sendOtp(mobile);
    if (ok) {
      setTimeLeft(60);
      setCanResend(false);
    } else {
      alert("خطا در ارسال مجدد کد");
    }
  };

  const handleConfirm = async () => {
    if (otp.length !== 6) {
      alert("کد باید ۶ رقمی باشد");
      return;
    }
    setLoading(true);

    const ok = await verifyOtp(mobile, Number(otp), false);
    setLoading(false);

    if (!ok) {
      alert("کد اشتباه یا منقضی شده است");
      return;
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-between gap-4 md:gap-6 text-center">
      <h2 className="text-secondary font-extrabold text-2xl md:text-4xl">
        کد تایید را وارد کنید
      </h2>

      <p className="text-secondary font-semibold text-base md:text-[18px]">
        کد تایید برای شماره <span className="text-primary/80">{mobile}</span> ارسال شد
      </p>

      <VerificationCodeInput onComplete={(code) => setOtp(code)} />

      <p
        className={`text-secondary font-medium text-sm md:text-[16px] ${
          canResend ? "text-primary cursor-pointer" : "opacity-70"
        }`}
        onClick={canResend ? handleResend : undefined}
      >
        {canResend ? "دریافت مجدد کد" : `ارسال مجدد تا ${timeLeft} ثانیه`}
      </p>

      <div className="w-full max-w-3xl px-4 md:px-0">
        <div onClick={handleConfirm}>
          <LoginBtn text={loading ? "در حال بررسی..." : "تایید"} />
        </div>
      </div>

      {/* ورود با رمز عبور */}
      <p
        className="text-secondary font-semibold text-[16px] md:text-[18px] cursor-pointer"
        onClick={() => useAuthStore.setState({ step: 3 })} 
      >
        ورود با رمز عبور
      </p>
    </div>
  );
};

export default VerificationCode;
