"use client";

import React, { useState } from "react";
import logo from "@/../public/Images/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const HeaderItems = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const items = [
    { title: "صفحه اصلی", link: "/" },
    { title: "درباره ما", link: "/about-us" },
    { title: "خدمات", link: "/service" },
    { title: "بلاگ", link: "/article" },
  ];

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div className="flex items-center justify-between w-[65%]">
      {/* Logo — visible only on md and larger */}
      <Image
        src={logo}
        alt="logo"
        className="hidden md:block md:w-[100px] md:h-[100px] lg:w-[130px] lg:h-[130px]"
      />

      {/* Desktop Menu */}
      <ul
        className="hidden md:flex font-bold flex-row justify-between items-center whitespace-nowrap text-secondary
        lg:text-[18px] lg:gap-14 md:text-[16px] md:gap-12"
      >
        {items.map((item, index) => {
          const isActive = pathname === item.link;
          return (
            <li
              key={index}
              className={`list-none transition hover:text-primary ${
                isActive ? "text-primary" : "text-secondary"
              }`}
            >
              <Link href={item.link}>{item.title}</Link>
            </li>
          );
        })}
      </ul>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-3xl text-secondary focus:outline-none"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-24 left-0 w-full bg-white shadow-lg z-50 border-t border-gray-200">
          <ul className="flex flex-col items-center py-4 space-y-3 font-semibold text-secondary">
            {items.map((item, index) => {
              const isActive = pathname === item.link;
              return (
                <li key={index}>
                  <Link
                    href={item.link}
                    className={`${
                      isActive ? "text-primary" : "text-secondary"
                    } hover:text-primary`}
                    onClick={() => setMenuOpen(false)} // close menu on click
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeaderItems;


