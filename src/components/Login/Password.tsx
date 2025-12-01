import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { IoLockClosedOutline } from "react-icons/io5";
import { BiHide, BiShow } from "react-icons/bi";
import { LoginBtn } from "../common/Butttons/LoginBtn";
import { useAuthStore } from "@/store/auth.store";
import { authService } from "@/services/auth/auth.service";

const Password = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const { mobile, setToken, setUser, setStep } = useAuthStore();

  const handleSubmit = async () => {
    setError("");

    try {
      const res = await authService.login({ mobile, password });

      if (res.success) {
        setToken(res.token);
        setUser(res.data.user);
        setStep(8);
      } else {
        setError("اطلاعات کاربری نادرست می‌باشد!");
      }
    } catch (err) {
      setError("خطا در ارتباط با سرور. لطفا دوباره تلاش کنید.");
      console.error(err);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center text-center">
      {/* title */}
      <div className="flex flex-col items-center gap-3 md:gap-5 mb-6 md:mb-8 px-4">
        <p className="text-secondary font-extrabold text-2xl md:text-4xl">
          ورود با رمز عبور
        </p>
        <span className="text-secondary/80 font-semibold text-sm md:text-[18px]">
          برای وارد شدن به سامانه رمز عبور خود را وارد کنید
        </span>
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-red-500 text-sm md:text-[16px] mb-2">{error}</p>
      )}

      {/* Password input */}
      <div className="relative w-full max-w-md md:max-w-3xl my-2 px-4 md:px-0">
        <IoLockClosedOutline className="absolute right-4 top-1/2 -translate-y-1/2 text-primary text-2xl" />
        <Input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="کلمه عبور را وارد کنید"
          className="p-6 pr-12 rounded-[20px] bg-[#F8FAFB] text-secondary/50 placeholder:text-secondary/40"
        />
        {showPassword ? (
          <BiShow
            onClick={() => setShowPassword(false)}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/50 text-2xl cursor-pointer"
          />
        ) : (
          <BiHide
            onClick={() => setShowPassword(true)}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/20 text-2xl cursor-pointer"
          />
        )}
      </div>

      {/* Login button */}
      <div
        className="w-full max-w-3xl px-4 md:px-0 mt-3"
        onClick={handleSubmit}
      >
        <LoginBtn text=" تایید " />
      </div>

      {/* Options */}
      <div className="flex flex-row justify-around items-center gap-10 md:gap-16 mt-4 px-4 text-sm md:text-[16px]">
        <p
          className="text-secondary cursor-pointer"
          onClick={() => useAuthStore.setState({ step: 4 })}
        >
          فراموشی رمز عبور
        </p>

        <p
          className="text-secondary cursor-pointer"
          onClick={() => useAuthStore.setState({ step: 2 })}
        >
          ورود با رمز یکبار مصرف
        </p>
      </div>
    </div>
  );
};

export default Password;
