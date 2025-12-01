import React, { useState } from "react";
import { LoginBtn } from "../common/Butttons/LoginBtn";
import { Input } from "@/components/ui/input";
import { MdOutlineEmail } from "react-icons/md";
import { useAuthStore } from  "@/store/auth.store";
import { authService } from "@/services/auth/auth.service";

const ForgetPassword = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const { setStep } = useAuthStore();

  const handleSubmit = async () => {
    const isEmail =
      value.includes("@") && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const isPhone = /^[0-9]{10,15}$/.test(value);

    if (!isEmail && !isPhone) {
      setError("لطفا یک شماره موبایل معتبر وارد کنید.");
      return;
    }

    setError("");

    try {
      const res = await authService.sendOtp(value);

      if (res.success) {
        setStep(5); // move to otp verification for forgot password
      } else {
        setError("خطا در ارسال کد تایید. لطفا دوباره تلاش کنید.");
      }
    } catch (err) {
      setError("خطا در ارسال کد تایید. لطفا دوباره تلاش کنید.");
      console.error(err);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* title */}
      <div className="flex flex-col items-center justify-center gap-5 mb-8 text-center px-4">
        <p className="text-secondary font-extrabold text-2xl md:text-4xl">
          فراموشی رمز عبور
        </p>
        <span className="text-secondary/60 font-semibold text-sm md:text-[18px]">
          برای تغییر رمز عبور، شماره موبایل خود را وارد کنید.
        </span>
      </div>

      {/* input */}
      <div className="relative w-full max-w-md md:max-w-3xl my-4 px-4 md:px-0">
        <MdOutlineEmail className="absolute right-4 top-1/2 -translate-y-1/2 text-primary text-2xl" />
        <Input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="لطفا شماره موبایل خود را وارد کنید"
          className="p-6 pr-12 rounded-[20px] bg-[#F8FAFB] text-secondary/50 placeholder:text-secondary/40"
        />
      </div>

      {/* error message */}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      {/* button */}
      <div onClick={handleSubmit} className="w-full max-w-3xl px-4 md:px-0">
        <LoginBtn text="تایید" />
      </div>
    </div>
  );
};

export default ForgetPassword;
