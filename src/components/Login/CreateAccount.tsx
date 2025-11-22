import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { MdOutlineEmail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { BiHide, BiShow } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";
import { FaUser, FaUserTie } from "react-icons/fa";
import { ReserveNow } from "../common/Butttons/ReserveNow";
import { Google } from "../common/Butttons/Google";
import { useAuthStore } from "@/services/auth/auth.store";

const CreateAccount = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  // const registerUser = useAuthStore((s) => s.registerUser);

  // const handleRegister = () => {
  //   const payload = {
  //     mobile: phone,
  //     name,
  //     lastname,
  //     email,
  //     password,
  //   };

  //   registerUser(payload);
  // };

  const { registerUser, otpToken, mobile } = useAuthStore();

  const handleRegister = async () => {
  if (!otpToken) {
    alert("ابتدا کد را تایید کنید.");
    return;
  }

  const payload = {
    token: otpToken,
    mobile: phone || mobile, // phone از input یا از store
    name,
    lastname,
    email,
    password,
  };

  const ok = await registerUser(payload);
  if (ok) {
    // ثبت‌نام موفق — جلو برو (مثلاً مرحله ورود یا داشبورد)
    alert("success")
  } else {
    // خطا — پیام مناسب نشان بده
    alert("error")
  }
};

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setPhone(value);
  };

  const handleRegisterWithGoogle = () => {
    console.log("Register with Google clicked");
  };

  const handleEnterAccount = () => {
    console.log("Go to Login page");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 px-4">
      {/* title */}
      <div className="flex flex-col items-center justify-center gap-5 mb-8 text-center">
        <p className="text-secondary font-extrabold text-2xl md:text-4xl">
          ایجاد حساب کاربری
        </p>
        <span className="text-secondary/60 font-semibold text-sm md:text-[18px]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است...
        </span>
      </div>

      {/* inputs */}
      <div className="flex flex-col w-full items-center">
        {/* name & lastname side by side */}
        <div className="flex w-full max-w-md md:max-w-3xl gap-4 my-4">
          {/* Name */}
          <div className="relative flex-1">
            <FaUser className="absolute right-4 top-1/2 -translate-y-1/2 text-primary text-xl" />
            <Input
              type="text"
              placeholder="نام خود را وارد کنید"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-6 pr-12 rounded-[20px] bg-[#F8FAFB] text-secondary/50 placeholder:text-secondary/40"
            />
          </div>

          {/* Lastname */}
          <div className="relative flex-1">
            <FaUserTie className="absolute right-4 top-1/2 -translate-y-1/2 text-primary text-xl" />
            <Input
              type="text"
              placeholder="نام خانوادگی خود را وارد کنید"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="p-6 pr-12 rounded-[20px] bg-[#F8FAFB] text-secondary/50 placeholder:text-secondary/40"
            />
          </div>
        </div>

        {/* email */}
        <div className="relative w-full max-w-md md:max-w-3xl my-4">
          <MdOutlineEmail className="absolute right-4 top-1/2 -translate-y-1/2 text-primary text-2xl" />
          <Input
            type="email"
            placeholder="آدرس ایمیل خود را وارد کنید"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-6 pr-12 rounded-[20px] bg-[#F8FAFB] text-secondary/50 placeholder:text-secondary/40"
          />
        </div>

        {/* phone */}
        <div className="relative w-full max-w-md md:max-w-3xl my-4">
          <BsPhone className="absolute right-4 top-1/2 -translate-y-1/2 text-primary text-2xl" />
          <Input
            type="text"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="تلفن همراه خود را وارد کنید"
            className="p-6 pr-12 rounded-[20px] bg-[#F8FAFB] text-secondary/50 placeholder:text-secondary/40"
            inputMode="numeric"
          />
        </div>

        {/* password */}
        <div className="relative w-full max-w-md md:max-w-3xl my-2">
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
      </div>

      {/* buttons */}
      <div className="flex flex-col md:flex-row w-full gap-4 items-center justify-center">
        <div onClick={handleRegisterWithGoogle}>
          <Google text="ثبت نام با گوگل " />
        </div>
        <div onClick={handleRegister}>
          <ReserveNow text="ثبت نام " />
        </div>
      </div>

      {/* Enter */}
      <p
        className="text-primary/80 font-semibold text-[16px] md:text-[18px] cursor-pointer"
        onClick={handleEnterAccount}
      >
        ورود به حساب
      </p>
    </div>
  );
};

export default CreateAccount;
