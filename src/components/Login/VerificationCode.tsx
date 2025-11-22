// import React, { useState, useEffect } from "react";
// import VerificationCodeInput from "./VerificationCodeInput";
// import { LoginBtn } from "../common/Butttons/LoginBtn";


// const getPhoneNumber = () => "09123456789";

// const VerificationCode = ({ onConfirm, onEnterWithPin }: { onConfirm?: () => void; onEnterWithPin?: () => void }) => {
//   const phoneNumber = getPhoneNumber();

//   const [timeLeft, setTimeLeft] = useState(60);
//   const [canResend, setCanResend] = useState(false);

//   useEffect(() => {
//     if (timeLeft > 0) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     } else {
//       setCanResend(true);
//     }
//   }, [timeLeft]);

//   const handleResend = () => {
//     if (!canResend) return;
//     alert("کد جدید ارسال شد ✅");
//     setTimeLeft(60);
//     setCanResend(false);
//   };

//   return (
//     <div className="w-full flex flex-col items-center justify-between gap-4 md:gap-6 text-center">

//       <h2 className="text-secondary font-extrabold text-2xl md:text-4xl">
//         کد تایید را وارد کنید
//       </h2>

//       <p className="text-secondary font-semibold text-base md:text-[18px]">
//         کد تایید برای شماره <span className="text-primary/80">{phoneNumber}</span> پیامک شد
//       </p>

//       {/* input verification code */}
//       <VerificationCodeInput />

//       {/* Timer or Resend */}
//       <p
//         className={`text-secondary font-medium text-sm md:text-[16px] ${
//           canResend ? "text-primary cursor-pointer" : "opacity-70"
//         }`}
//         onClick={canResend ? handleResend : undefined}
//       >
//         {canResend ? "دریافت مجدد کد" : `ارسال مجدد تا ${timeLeft} ثانیه`}
//       </p>

//       {/* Confirm Button */}
//       <div className="w-full max-w-3xl px-4 md:px-0" onClick={onConfirm}>
//         <LoginBtn text="تایید" />
//       </div>

//       {/* Enter with PIN */}
//       <p
//         className="text-secondary font-semibold text-[16px] md:text-[18px] cursor-pointer"
//         onClick={onEnterWithPin}
//       >
//         ورود با رمز عبور
//       </p>
//     </div>
//   );
// };

// export default VerificationCode;



"use client";

import React, { useState, useEffect } from "react";
import VerificationCodeInput from "./VerificationCodeInput";
import { LoginBtn } from "../common/Butttons/LoginBtn";
import { useAuthStore } from "@/services/auth/auth.store";

interface Props {
  onSuccessNewUser?: () => void;       // هدایت به CreateAccount
  onSuccessExistingUser?: () => void;  // هدایت به صفحه ورود یا داشبورد
}

const VerificationCode = ({ onSuccessNewUser, onSuccessExistingUser }: Props) => {
  const { mobile, verifyOtp, isNewUser } = useAuthStore(); // از Zustand
  const [otp, setOtp] = useState(""); // از input گرفته می‌شود
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);

  // تایمر
  useEffect(() => {
    if (timeLeft > 0) {
      const t = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(t);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  // ارسال مجدد کد
  const handleResend = () => {
    if (!canResend) return;

    // اینجا باید sendOtp را صدا بزنید → اگر در Store دارید
    alert("کد جدید ارسال شد");
    setTimeLeft(60);
    setCanResend(false);
  };

  // تایید کد
  const handleConfirm = async () => {
    if (otp.length !== 6) {
      alert("کد باید ۶ رقمی باشد");
      return;
    }

    const ok = await verifyOtp(mobile, Number(otp), false);

    if (!ok) {
      alert("کد اشتباه یا منقضی شده است");
      return;
    }

    // 🔥 اینجا بر اساس مقدار isNewUser تصمیم می‌گیریم
    if (isNewUser) {
      onSuccessNewUser && onSuccessNewUser(); // هدایت به CreateAccount
    } else {
      onSuccessExistingUser && onSuccessExistingUser(); // هدایت به Dashboard/Password Login
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-between gap-4 md:gap-6 text-center">

      <h2 className="text-secondary font-extrabold text-2xl md:text-4xl">
        کد تایید را وارد کنید
      </h2>

      <p className="text-secondary font-semibold text-base md:text-[18px]">
        کد تایید برای شماره{" "}
        <span className="text-primary/80">{mobile}</span> ارسال شد
      </p>

      {/* OTP Input */}
      <VerificationCodeInput
        value={otp}
        onChange={(v) => setOtp(v)}
      />

      {/* Timer Or Resend */}
      <p
        className={`text-secondary font-medium text-sm md:text-[16px] ${
          canResend ? "text-primary cursor-pointer" : "opacity-70"
        }`}
        onClick={canResend ? handleResend : undefined}
      >
        {canResend ? "دریافت مجدد کد" : `ارسال مجدد تا ${timeLeft} ثانیه`}
      </p>

      {/* Confirm */}
      <div className="w-full max-w-3xl px-4 md:px-0">
        <div onClick={handleConfirm}>
          <LoginBtn text="تایید" />
        </div>
      </div>

      {/* Login with PIN */}
      <p
        className="text-secondary font-semibold text-[16px] md:text-[18px] cursor-pointer"
        onClick={onSuccessExistingUser}
      >
        ورود با رمز عبور
      </p>
    </div>
  );
};

export default VerificationCode;
