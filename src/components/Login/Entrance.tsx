import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { MdOutlineEmail } from "react-icons/md";
import { LoginBtn } from "../common/Butttons/LoginBtn";
import { useAuthStore } from "@/store/auth.store";
import { authService } from "@/services/auth/auth.service";

const Entrance: React.FC = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const { setMobile, setStep, setIsNewUser } = useAuthStore();

  const handleSubmit = async () => {
    const cleaned = value.replace(/[^0-9]/g, "");
    const isPhone = /^[0-9]{10,15}$/.test(cleaned);

    if (!isPhone) {
      setError("لطفا یک شماره موبایل معتبر وارد کنید.");
      return;
    }

    setError("");

    try {
      const res = await authService.checkUser(cleaned);

      if (res.success && res.data.exists) {
        setIsNewUser(false);
        setStep(2);
      } else {
        setIsNewUser(true);
        setStep(7);
      }
      setMobile(cleaned);
    } catch (err) {
      setError(
        "خطا در ارتباط با سرور یا ارسال اطلاعات. لطفا دوباره تلاش کنید."
      );
      console.error(err);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-5 mb-8 text-center px-4">
        <p className="text-secondary font-extrabold text-2xl md:text-4xl">
          ورود | ثبت نام
        </p>
        <span className="text-secondary/60 font-semibold text-sm md:text-[18px]">
          برای ورود یا ثبت نام اطلاعات زیر را وارد کنید.
        </span>
      </div>

      <div className="relative w-full max-w-md md:max-w-3xl my-4 px-4 md:px-0">
        <MdOutlineEmail className="absolute right-4 top-1/2 -translate-y-1/2 text-primary text-2xl" />
        <Input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="لطفا شماره موبایل خود را وارد کنید"
          className="p-6 pr-12 rounded-[20px] bg-[#F8FAFB] text-secondary/80"
        />
      </div>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      <div onClick={handleSubmit} className="w-full max-w-3xl px-4 md:px-0">
        <LoginBtn text="ورود به حساب" />
      </div>
    </div>
  );
};

export default Entrance;
