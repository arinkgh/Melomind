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
    <div className='border w-[60%] flex flex-row justify-between items-center'>
        {/* logo */}
      <Image
        src = {logo}
        alt = "logo"
        className='border'
      />
      {/* items */}
      <div className='flex border text-[18px] gap-14 font-bold flex-row justify-between items-center whitespace-nowrap text-[#105870]'>
        {items.map((item, index) => (
            <li
            key={index}
            className='hover:text-[#80C244] transition list-none'
            >
                <Link href={item.link}>{item.title}</Link>
            </li>
        ))}
      </div>
    </div>
  )
}

export default HeaderItems
