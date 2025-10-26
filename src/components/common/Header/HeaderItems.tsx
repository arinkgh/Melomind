'use client'; 
import React from 'react';
import logo from '@/../public/Images/Logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const HeaderItems = () => {
  const pathname = usePathname(); 
  const items = [
    { title: 'صفحه اصلی', link: '/home' },
    { title: 'درباره ما', link: '/about-us' },
    { title: 'خدمات', link: '/service' },
    { title: 'بلاگ', link: '/article' },
  ];

  return (
    <div className='w-[65%] flex flex-row justify-between items-center'>
      {/* logo */}
      <Image
        src={logo}
        alt='logo'
        className='lg:w-[150px] lg:h-[150px] md:w-[100px] md:h-[100px] md:block sm:hidden'
      />

      {/* items */}
      <div className='flex font-bold flex-row justify-between items-center whitespace-nowrap text-secondary 
      lg:text-[18px] lg:gap-14 sm:text-[14px] sm:gap-10'>
        {items.map((item, index) => {
          const isActive = pathname === item.link; 
          return (
            <li
              key={index}
              className={`list-none transition hover:text-primary ${
                isActive ? 'text-primary' : 'text-secondary'
              }`}
            >
              <Link href={item.link}>{item.title}</Link>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderItems;
