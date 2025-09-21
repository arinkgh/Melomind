import React from 'react'
import logo from '../../../../public/Images/Logo.svg'
import Image from "next/image";
import Link from 'next/link';
const HeaderItems = () => {
    const items = [
        {title: "صفحه اصلی", link: "#"},
        {title: "درباره ما ", link: "aboutus"},
        {title: "خدمات", link: "services"},
        {title: " بلاگ", link: "blog"}
    ]
  return (
    <div className='w-[65%] flex flex-row justify-between items-center'>
        {/* logo */}
      <Image
        src = {logo}
        alt = "logo"
        className='lg:w-[150px] lg:h-[150px] md:w-[100px] md:h-[100px] md:block sm:hidden'
      />
      {/* items */}
      <div className='flex font-bold flex-row justify-between items-center whitespace-nowrap text-[#105870] 
      lg:text-[18px] lg:gap-14  sm:text-[14px] sm:gap-10'>
        {items.map((item, index) => (
            <li
            key={index}
            className='hover:text-[#80C244] transition  list-none'
            >
                <Link href={item.link}>{item.title}</Link>
            </li>
        ))}
      </div>
    </div>
  )
}

export default HeaderItems
