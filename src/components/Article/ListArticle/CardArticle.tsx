// import { subscribe } from "diagnostics_channel";
// import React from "react";
// import articleimg from "../../../../public/Images/artilecard.svg";
// import Image from "next/image";
// import { CiCalendar } from "react-icons/ci";
// import { Button } from "@/components/ui/button"
// import { ChevronLeft } from "lucide-react";
// import { MdOutlineRemoveRedEye } from "react-icons/md";

// const CardArticle = () => {
//   const items = [
//     {
//       image: articleimg,
//       title: "تیتر مربوط به مقاله اعتیاد",
//       desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع...",
//       shareDate: "۱۲ اردیبهشت ۱۴۰۲",
//       subscribeCount: "۸،۴۵۶ نفر",
//       category: "دسته‌ بندی  اعتیاد",
//     },
//     {
//       image: articleimg,
//       title: "تیتر مربوط به مقاله اعتیاد",
//       desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع...",
//       shareDate: "۱۲ اردیبهشت ۱۴۰۲",
//       subscribeCount: "۸،۴۵۶ نفر",
//       category: "دسته‌ بندی  اعتیاد",
//     },
//   ];
//   return (
//     <div className=" w-[60%] gap-12 flex flex-col">
//       {items.map((item, index) => (
//         <div
//           key={index}
//           className=" w-full rounded-[12px] shadow-xl flex flex-col p-10 gap-8 cursor-pointer "
//         >
//           {/* image */}
//           <div className=" w-full h-[70%] relative"><Image src={item.image} alt="#" className="object-contain"/></div>
          
//           {/* text */}
//           <div className=" w-full h-1/2 flex flex-col gap-4">
//             <h3 className="text-[#105870] font-extrabold text-[28px] whitespace-nowrap">
//               {item.title}
//             </h3>
//             <p className="text-[#5b8e9e] text-[18px]">{item.desc}</p>
//             {/* text items */}
//             <div className="flex flex-row justify-between  mt-4">
//               {/* items part */}
//               <div className=" flex flex-row  h-full gap-5">
//                 {/* category */} 
//                 <div className=" py-4 px-6 rounded-[50px] bg-[#e0fac1]">
//                   <p className="text-[#70aa3a]">{item.category}</p>
//                 </div>
//                 {/* Share Date */}
//                 <div className=" flex flex-row justify-between items-center gap-4">
//                   {/* icon */}
//                   <div className="border-2 rounded-[50%] flex items-center justify-center w-12 h-12">
//                     <CiCalendar className="w-6 h-6 text-[#80C244] font-bold text-2xl" />
//                   </div>
//                   {/* text */}
//                   <div className="flex flex-col">
//                     <span className="text-[#85adb9] font-semibold text-xs">
//                       تاریخ انتشار
//                     </span>
//                     <span className="text-[#105870] font-bold text-[14px]">
//                       {item.shareDate}
//                     </span>
//                   </div>
//                 </div>
//                 {/* Subscribe */}
//                 <div className=" flex flex-row justify-between items-center gap-4">
//                   {/* icon */}
//                   <div className="border-2 rounded-[50%] flex items-center justify-center w-12 h-12">
//                     <MdOutlineRemoveRedEye  className="w-6 h-6 text-[#80C244] font-bold text-2xl" />
//                   </div>
//                   {/* text */}
//                   <div className="flex flex-col">
//                     <span className="text-[#85adb9] font-semibold text-xs">
//                       تعداد بازدید{" "}
//                     </span>
//                     <span className="text-[#105870] font-bold text-[14px]">
//                       {item.subscribeCount}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* button part */}
//               <Button className="border-2 flex flex-row w-[180px] gap-1 items-center justify-center py-6 px-16 bg-white hover:bg-white rounded-[50px] cursor-pointer">
//                 <p className="text-[#105870] font-semibold text-[18px]">ادامه مطلب</p>
//                 <ChevronLeft className=" font-bold text-[#76C144] w-12 h-12" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardArticle;

import { subscribe } from "diagnostics_channel";
import React from "react";
import articleimg from "../../../../public/Images/artilecard.svg";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
const CardArticle = () => {
  const items = [
    {
      image: articleimg,
      title: "تیتر مربوط به مقاله اعتیاد",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع...",
      shareDate: "۱۲ اردیبهشت ۱۴۰۲",
      subscribeCount: "۸،۴۵۶ نفر",
      category: "دسته‌ بندی  اعتیاد",
    },
    {
      image: articleimg,
      title: "تیتر مربوط به مقاله اعتیاد",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع...",
      shareDate: "۱۲ اردیبهشت ۱۴۰۲",
      subscribeCount: "۸،۴۵۶ نفر",
      category: "دسته‌ بندی  اعتیاد",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-10">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="w-full rounded-xl shadow-lg p-12 md:p-8 flex flex-col gap-6 bg-white"
        >
          {/* Image */}
          <div className="relative w-full h-48 md:h-64">
            <Image
              src={item.image}
              alt={item.title}
              className="object-cover rounded-md"
              fill
            />
          </div>

          {/* Text section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg md:text-2xl font-bold text-[#105870]">
              {item.title}
            </h3>
            <p className="text-sm md:text-base text-[#5b8e9e] leading-relaxed">
              {item.desc}
            </p>

            {/* Footer */}
            <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0 mt-4">
              {/* Left info section */}
              <div className="flex flex-wrap gap-4 items-center">
                {/* Category */}
                <div className="py-2 px-4 rounded-full bg-[#e0fac1]">
                  <p className="text-[#70aa3a] text-sm md:text-base">
                    {item.category}
                  </p>
                </div>

                {/* Share date */}
                <div className="flex items-center gap-3">
                  <div className="border rounded-full w-10 h-10 flex items-center justify-center">
                    <CiCalendar className="text-xl text-[#76C144]" />
                  </div>
                  <div className="flex flex-col text-xs md:text-sm">
                    <span className="text-[#85adb9]">تاریخ انتشار</span>
                    <span className="text-[#105870] font-bold">
                      {item.shareDate}
                    </span>
                  </div>
                </div>

                {/* Views */}
                <div className="flex items-center gap-3">
                  <div className="border rounded-full w-10 h-10 flex items-center justify-center">
                    <MdOutlineRemoveRedEye className="text-xl text-[#76C144]" />
                  </div>
                  <div className="flex flex-col text-xs md:text-sm">
                    <span className="text-[#85adb9]">تعداد بازدید</span>
                    <span className="text-[#105870] font-bold">
                      {item.subscribeCount}
                    </span>
                  </div>
                </div>
              </div>

              {/* Button */}
              <Button className="w-full md:w-auto flex items-center justify-center gap-2 py-6 px-16 rounded-full bg-white border-2 cursor-pointer hover:bg-white">
                <p className="text-[#105870] font-medium text-sm md:text-lg">
                  ادامه مطلب
                </p>
                <ChevronLeft className="w-6 h-6 text-[#76C144]" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardArticle;
