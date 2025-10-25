import React, { useState, useMemo } from "react";
import { LoginBtn } from "../common/Butttons/LoginBtn";
import { Input } from "@/components/ui/input";
import { IoLockClosedOutline } from "react-icons/io5";
import { BiHide, BiShow } from "react-icons/bi";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);

  // --- Password Strength Logic ---
  const checkStrength = (pass: string) => {
    let score = 0;
    if (pass.length >= 6) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass) || /[^A-Za-z0-9]/.test(pass)) score++;
    return score;
  };

  const strength = useMemo(() => checkStrength(password), [password]);

  const strengthLabels = ["ضعیف", "متوسط", "عالی"];
  const strengthColors = [
    { border: "border-[#DCAF0D]", bg: "bg-[#F4C51F]" },
    { border: "border-[#2D9CDB]", bg: "bg-[#2D9CDB]" },
    { border: "border-[#27AE60]", bg: "bg-[#27AE60]" },
  ];

  // ✅ Button Click Handler
  const handleSubmit = () => {
    console.log("New Password:", password);
    console.log("Repeat Password:", passwordRepeat);
    // Add your API request or logic here
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-0">
      
      {/* Title */}
      <div className="flex flex-col items-center justify-center gap-4 mb-8 text-center">
        <p className="text-secondary font-extrabold text-2xl md:text-4xl">
          رمز عبور جدید!
        </p>
        <span className="text-secondary/60 font-semibold text-sm md:text-lg">
          اطلاعات رمز عبور جدید خود را وارد کنید.
        </span>
      </div>

      {/* Password Input */}
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-3xl mb-3 px-4">
        <IoLockClosedOutline className="absolute right-4 top-1/2 -translate-y-1/2 text-primary text-xl md:text-2xl" />
        <Input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="کلمه عبور را وارد کنید"
          className="p-5 md:p-6 pr-12 rounded-[20px] bg-[#F8FAFB] text-secondary/50 placeholder:text-secondary/40"
        />
        {showPassword ? (
          <BiShow
            onClick={() => setShowPassword(false)}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/50 text-xl md:text-2xl cursor-pointer"
          />
        ) : (
          <BiHide
            onClick={() => setShowPassword(true)}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/20 text-xl md:text-2xl cursor-pointer"
          />
        )}
      </div>

      {/* Strength Meter */}
      <div className="flex flex-col items-center gap-3 mt-2">
        <p
          className={`font-bold ${
            strength === 0
              ? "text-[#DCAF0D]"
              : strength === 1
              ? "text-[#2D9CDB]"
              : strength === 2
              ? "text-[#27AE60]"
              : "text-secondary/50"
          }`}
        >
          {password ? strengthLabels[strength] : ""}
        </p>
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`w-[90px] sm:w-[120px] md:w-[174px] h-[10px] sm:h-[12px] rounded-md border-2 transition-all duration-300 ${
                strength > i - 1
                  ? `${strengthColors[strength].border} ${strengthColors[strength].bg}`
                  : "border-[#E3ECEF] bg-[#F8FAFB]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Repeat Password */}
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-3xl mt-6 mb-4 px-4">
        <IoLockClosedOutline className="absolute right-4 top-1/2 -translate-y-1/2 text-primary text-xl md:text-2xl" />
        <Input
          type={showPasswordRepeat ? "text" : "password"}
          value={passwordRepeat}
          onChange={(e) => setPasswordRepeat(e.target.value)}
          placeholder="تکرار رمز عبور"
          className="p-5 md:p-6 pr-12 rounded-[20px] bg-[#F8FAFB] text-secondary/50 placeholder:text-secondary/40"
        />
        {showPasswordRepeat ? (
          <BiShow
            onClick={() => setShowPasswordRepeat(false)}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/50 text-xl md:text-2xl cursor-pointer"
          />
        ) : (
          <BiHide
            onClick={() => setShowPasswordRepeat(true)}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/20 text-xl md:text-2xl cursor-pointer"
          />
        )}
      </div>

      {/* Submit Button */}
      <div className="w-full max-w-3xl mt-4">
        <LoginBtn text=" تغییر رمز عبور " onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default NewPassword;
