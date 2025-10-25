"use client";

import React, { useState } from "react";
import AdminTitle from "@/components/common/AdminTitle/AdminTitle";
import Image from "next/image";
import meet from "@/../public/Images/meet.svg";
import { Input } from "@/components/ui/input";
import { BiHide, BiShow } from "react-icons/bi";
import { IoLockClosedOutline } from "react-icons/io5";
import { BsPhone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { RiEditBoxFill } from "react-icons/ri";

const Profile = () => {
  const [lastpassword, setlastPassword] = useState("");
  const [showlastPassword, setShowlastPassword] = useState(false);

  const [newpassword, setnewPassword] = useState("");
  const [shownewPassword, setShownewPassword] = useState(false);

  const [repeatpassword, setrepeatPassword] = useState("");
  const [showrepeatPassword, setShowrepeatPassword] = useState(false);

  const [phone, setPhone] = useState("");

  // ✅ Allow only numbers for phone
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setPhone(value);
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* ===== Title ===== */}
      <AdminTitle
        subtitle="مشخصات کاربری"
        title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
      />

      {/* ===== Profile Info ===== */}
      <div className="flex flex-col gap-8 bg-white rounded-2xl p-6 shadow-sm w-full">
        {/* Picture */}
        <div className="flex justify-center md:justify-start">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-md">
            <Image
              src={meet}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ===== Info + Password Sections ===== */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* --- User Info --- */}
          <div className="w-full md:w-1/2 flex flex-col gap-3 p-4 rounded-xl bg-[#F8FAFB]">
            <p className="text-secondary font-bold text-lg mb-2">
              اطلاعات کاربری
            </p>

            {/* name */}
            <div className="flex items-center gap-1">
              <div className="relative w-full">
                <GoPerson className="absolute right-4 top-1/2 -translate-y-1/2 text-primary text-2xl" />
                <Input
                  type="text"
                  placeholder="نام کاربری خود را وارد کنید"
                  className="p-6 pr-12 rounded-[20px] bg-white text-secondary/50 placeholder:text-secondary/40"
                />
              </div>
              <RiEditBoxFill className="text-secondary/40 w-6 h-6 cursor-pointer" />
            </div>

            {/* email */}
            <div className="flex items-center gap-1">
              <div className="relative w-full">
                <MdOutlineEmail className="absolute right-4 top-1/2 -translate-y-1/2 text-primary text-2xl" />
                <Input
                  type="email"
                  placeholder="آدرس ایمیل خود را وارد کنید"
                  className="p-6 pr-12 rounded-[20px] bg-white text-secondary/50 placeholder:text-secondary/40"
                />
              </div>
              <RiEditBoxFill className="text-secondary/40 w-6 h-6 cursor-pointer" />
            </div>

            {/* phone */}
            <div className="flex items-center gap-1">
              <div className="relative w-full">
                <BsPhone className="absolute right-4 top-1/2 -translate-y-1/2 text-primary text-2xl" />
                <Input
                  type="text"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="تلفن همراه خود را وارد کنید"
                  className="p-6 pr-12 rounded-[20px] bg-white text-secondary/50 placeholder:text-secondary/40"
                  inputMode="numeric"
                />
              </div>
              <RiEditBoxFill className="text-secondary/40 w-6 h-6 cursor-pointer" />
            </div>
          </div>

          {/* --- Edit Password --- */}
          <div className="w-full md:w-1/2 flex flex-col gap-3 p-4 rounded-xl bg-[#F8FAFB]">
            <p className="text-secondary font-bold text-lg mb-2">
              ویرایش کلمه عبور
            </p>

            {/* old password */}
            <div className="relative w-full my-1">
              <IoLockClosedOutline className="absolute right-4 top-1/2 -translate-y-1/2 text-primary text-2xl" />
              <Input
                type={showlastPassword ? "text" : "password"}
                value={lastpassword}
                onChange={(e) => setlastPassword(e.target.value)}
                placeholder="کلمه عبور قبلی را وارد کنید"
                className="p-6 pr-12 rounded-[20px] bg-white text-secondary/50 placeholder:text-secondary/40"
              />
              {showlastPassword ? (
                <BiShow
                  onClick={() => setShowlastPassword(false)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/50 text-2xl cursor-pointer"
                />
              ) : (
                <BiHide
                  onClick={() => setShowlastPassword(true)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/20 text-2xl cursor-pointer"
                />
              )}
            </div>

            {/* new password */}
            <div className="relative w-full my-1">
              <IoLockClosedOutline className="absolute right-4 top-1/2 -translate-y-1/2 text-primary text-2xl" />
              <Input
                type={shownewPassword ? "text" : "password"}
                value={newpassword}
                onChange={(e) => setnewPassword(e.target.value)}
                placeholder="کلمه عبور جدید را وارد کنید"
                className="p-6 pr-12 rounded-[20px] bg-white text-secondary/50 placeholder:text-secondary/40"
              />
              {shownewPassword ? (
                <BiShow
                  onClick={() => setShownewPassword(false)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/50 text-2xl cursor-pointer"
                />
              ) : (
                <BiHide
                  onClick={() => setShownewPassword(true)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/20 text-2xl cursor-pointer"
                />
              )}
            </div>

            {/* repeat password */}
            <div className="relative w-full my-1">
              <IoLockClosedOutline className="absolute right-4 top-1/2 -translate-y-1/2 text-primary text-2xl" />
              <Input
                type={showrepeatPassword ? "text" : "password"}
                value={repeatpassword}
                onChange={(e) => setrepeatPassword(e.target.value)}
                placeholder="تکرار رمز عبور"
                className="p-6 pr-12 rounded-[20px] bg-white text-secondary/50 placeholder:text-secondary/40"
              />
              {showrepeatPassword ? (
                <BiShow
                  onClick={() => setShowrepeatPassword(false)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/50 text-2xl cursor-pointer"
                />
              ) : (
                <BiHide
                  onClick={() => setShowrepeatPassword(true)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/20 text-2xl cursor-pointer"
                />
              )}
            </div>
          </div>
        </div>

        {/* ===== Save Button ===== */}
        <div className="w-full flex justify-center md:justify-end mt-4">
          <button className="flex items-center justify-center w-full md:w-1/3 bg-primary/90 transition text-white font-bold hover:bg-primary gap-2 rounded-[110px] py-4 cursor-pointer">
            ذخیره تغییرات
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
