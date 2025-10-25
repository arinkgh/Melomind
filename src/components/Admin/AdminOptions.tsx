"use client";

import Link from "next/link";
import React from "react";
import { MdDashboard } from "react-icons/md";
import { RiComputerLine, RiFolderHistoryLine } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";
import { PiFolderUser } from "react-icons/pi";

interface Props {
  onNavigate?: () => void;
}

const items = [
  { icon: <MdDashboard className="w-6 h-6" />, text: "داشبورد", href: "/admin/dashboard" },
  { icon: <FaUserGroup className="w-6 h-6" />, text: "گروه درمانی", href: "/admin/group-therapy" },
  { icon: <RiComputerLine className="w-6 h-6" />, text: "نوبت‌های من", href: "/admin/my-reservation" },
  { icon: <RiFolderHistoryLine className="w-6 h-6" />, text: "تاریخچه ویزیت", href: "/admin/visit-history" },
  { icon: <PiFolderUser className="w-6 h-6" />, text: "مشخصات کاربری", href: "/about" },
];

export default function AdminOptions({ onNavigate }: Props) {
  return (
    <div className="bg-background rounded-[20px] p-4 w-full">
      <ul className="flex flex-col gap-3">
        {items.map((it, idx) => (
          <li key={idx}>
            <Link
              href={it.href}
              onClick={() => onNavigate?.()}
              className="flex items-center gap-3 p-3 rounded-lg text-secondary hover:bg-white/5 hover:text-primary transition"
            >
              {it.icon}
              <span className="text-base">{it.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
