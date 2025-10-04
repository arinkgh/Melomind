"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/Images/Logo.svg";

const Footer = () => {
  return (
    <footer className="container mx-auto mt-24 p-6">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* col-1 */}
        <div className="w-full lg:w-1/4 flex flex-col gap-4 items-center lg:items-start text-center lg:text-right">
          <Image src={logo} alt="Melomind Logo" className="w-32 h-auto" />
          <p className="font-semibold text-[16px] text-primary leading-relaxed">
            مراجعه به یک مرکز مشاوره و روانشناسی می‌تواند به افراد کمک کند تا
            بهترین راه‌حل‌ها را برای مشکلاتشان پیدا کنند و به زندگی سالم‌تری
            دست یابند.
          </p>
        </div>

        {/* col-2 */}
        <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start gap-3">
          <h4 className="font-black text-xl text-[#76C144]">لینک‌های مهم</h4>
          <Link href="/" className="font-semibold text-[18px] text-primary hover:text-[#76C144]">
            صفحه اصلی
          </Link>
          <Link href="/about" className="font-semibold text-[18px] text-primary hover:text-[#76C144]">
            درباره ما
          </Link>
          <Link href="/services" className="font-semibold text-[18px] text-primary hover:text-[#76C144]">
            خدمات
          </Link>
          <Link href="/blog" className="font-semibold text-[18px] text-primary hover:text-[#76C144]">
            بلاگ
          </Link>
        </div>

        {/* col-3 */}
        <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start gap-3">
          <h4 className="font-black text-xl text-[#76C144]">مسیرهای ارتباطی</h4>
          <a href="tel:01144430438" className="font-semibold text-[18px] text-primary hover:text-[#76C144]">
            شماره تلفن: ۰۱۱۴۴۴۳۰۴۳۸
          </a>
          <a href="tel:09385668186" className="font-semibold text-[18px] text-primary hover:text-[#76C144]">
            شماره موبایل: ۰۹۳۸۵۶۶۸۱۸۶
          </a>
          <a
            href="https://instagram.com/melomind.ir"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[18px] text-primary hover:text-[#76C144]"
          >
            اینستاگرام: Melomind.ir
          </a>
          <a
            href="mailto:info@melomind.ir"
            className="font-semibold text-[18px] text-primary hover:text-[#76C144]"
          >
            ایمیل: info@melomind.ir
          </a>
        </div>

        {/* col-4 */}
        <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start gap-3">
          <h4 className="font-black text-xl text-[#76C144]">آدرس</h4>
          <p className="font-semibold text-[16px] text-primary leading-relaxed">
            مازندران، ساری، بلوار خزر، روبروی فرش مشهد، ساختمان پزشکان اکسیر،
            طبقه پنجم، واحد 511
          </p>
        </div>
      </div>

      {/* bottom copyright */}
      <div className="mt-10 text-center text-primary text-sm border-t pt-4">
        © {new Date().getFullYear()} Melomind. تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
};

export default Footer;
