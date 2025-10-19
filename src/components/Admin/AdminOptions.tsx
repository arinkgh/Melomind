import Link from "next/link";
import React from "react";
import { MdDashboard } from "react-icons/md";
import { RiComputerLine, RiFolderHistoryLine } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";
import { PiFolderUser } from "react-icons/pi";


const AdminOptions = () => {
  return (
    <div className=" h-160 w-80 shadow bg-background rounded-[20px] p-6">
      <ul className=" flex flex-col gap-6">
        <li className="flex flex-row p-1 gap-4 text-secondary hover:text-primary transition text-[18px] cursor-pointer">
          <MdDashboard className="w-6 h-6" />
          <Link href="/about">داشبورد</Link>
        </li>
        <li className="flex flex-row p-1 gap-4 text-secondary hover:text-primary transition text-[18px] cursor-pointer">
          <FaUserGroup className="w-6 h-6" />
          <Link href="/about">گروه درمانی</Link>
        </li>
        <li className="flex flex-row p-1 gap-4 text-secondary hover:text-primary transition text-[18px] cursor-pointer">
          <RiComputerLine className="w-6 h-6" />
          <Link href="/about">نوبت‌های من</Link>
        </li>
        <li className="flex flex-row p-1 gap-4 text-secondary hover:text-primary transition text-[18px] cursor-pointer">
          <RiFolderHistoryLine className="w-6 h-6" />
          <Link href="/about">تاریخچه ویزیت</Link>
        </li>
        <li className="flex flex-row p-1 gap-4 text-secondary hover:text-primary transition text-[18px] cursor-pointer">
          <PiFolderUser className="w-6 h-6" />
          <Link href="/about">مشخصات کاربری</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminOptions;
