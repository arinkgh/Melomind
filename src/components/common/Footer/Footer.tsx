"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { col1, col2, col3, col4 } from "@/utils/constants/FooterItems";



const Footer = () => {
  return (
    <footer className="container mx-auto mt-24 p-6">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* col-1 */}
        <div className="w-full lg:w-1/4 flex flex-col gap-4 items-center lg:items-start text-center lg:text-right">
          <Image src={col1.image} alt="Melomind Logo" className="w-32 h-auto" />
          <p className="font-semibold text-[16px] text-secondary leading-relaxed">
            {col1.text}
          </p>
        </div>

        {/* col-2 */}
        <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start gap-3">
          <h4 className="font-black text-xl text-primary/80">{col2.title}</h4>
          {col2.items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="font-semibold text-[18px] text-secondary hover:text-primary/80"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* col-3 */}
        <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start gap-3">
          <h4 className="font-black text-xl text-primary/80">{col3.title}</h4>
          {col3.items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.target || "_self"}
              rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
              className="font-semibold text-[18px] text-secondary hover:text-primary/80"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* col-4 */}
        <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start gap-3">
          <h4 className="font-black text-xl text-primary/80">{col4.title}</h4>
          <p className="font-semibold text-[16px] text-secondary leading-relaxed">
            {col4.text}
          </p>
        </div>
      </div>

      {/* bottom copyright */}
      <div className="mt-10 text-center text-secondary text-sm border-t pt-4">
        © {new Date().getFullYear()} Melomind. تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
};

export default Footer;
