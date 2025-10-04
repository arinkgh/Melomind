// import React from 'react'
// import Image from 'next/image'
// import mind from '../../../../public/Images/mind.svg'
// import alone from '../../../../public/Images/alone.svg'

// const VisitType = () => {
//   return (
//     <div  className="mt-10 w-full flex flex-col">
//       {/* items */}
//         <div className=' w-full h-[250px] flex flex-row gap-5 items-center justify-center'>
//             <div className='rounded-[20px] w-[250px] h-[240px] bg-white border-2 border-[#1058701A] cursor-pointer hover:border-secondary transition flex flex-col justify-center gap-2 items-center'>
//                 <Image src={mind} alt='#'/>
//                 <h3 className='text-primary text-2xl font-bold'>روان درمانی</h3>
//                 <p className='text-[#10587080] text-[18px] font-semibold'>توضیحات مختصر و مثال</p>
//             </div>

//              <div className='rounded-[20px] w-[250px] h-[240px] bg-white border-2 border-[#1058701A] cursor-pointer hover:border-secondary transition flex flex-col justify-center gap-2 items-center'>
//                 <Image src={alone} alt='#'/>
//                 <h3 className='text-primary text-2xl font-bold'> ویزیت</h3>
//                 <p className='text-[#10587080] text-[18px] font-semibold'>توضیحات مختصر و مثال</p>
//             </div>
//         </div>
//       {/* Text */}
//         <div className='bg-[#F1F7FA] rounded-[20px] w-full h-[130px] flex flex-col items-start gap-3 p-4 mt-6'>
//             <h3 className='text-primary text-[16px] font-bold'>تفاوت بین روان درمانی و ویزیت</h3>
//             <p className='text-[#10587080] text-[12px] font-semibold'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی</p>
//         </div>
//     </div>
//   )
// }

// export default VisitType

import React from 'react'
import Image from 'next/image'
import mind from '../../../../public/Images/mind.svg'
import alone from '../../../../public/Images/alone.svg'

const VisitType = () => {
  return (
    <div className="mt-10 w-full flex flex-col px-4 sm:px-6 md:px-0">
      {/* Items */}
      <div className="w-full flex flex-col sm:flex-row gap-5 items-center justify-center">
        
        <div className="rounded-[20px] w-full sm:w-[250px] h-[220px] sm:h-[240px] bg-white border-2 border-[#1058701A] cursor-pointer hover:border-secondary transition flex flex-col justify-center gap-2 items-center p-4">
          <Image src={mind} alt="#" className="w-20 h-20" />
          <h3 className="text-primary text-xl sm:text-2xl font-bold">روان درمانی</h3>
          <p className="text-[#10587080] text-sm sm:text-[18px] font-semibold text-center">
            توضیحات مختصر و مثال
          </p>
        </div>

        <div className="rounded-[20px] w-full sm:w-[250px] h-[220px] sm:h-[240px] bg-white border-2 border-[#1058701A] cursor-pointer hover:border-secondary transition flex flex-col justify-center gap-2 items-center p-4">
          <Image src={alone} alt="#" className="w-20 h-20" />
          <h3 className="text-primary text-xl sm:text-2xl font-bold">ویزیت</h3>
          <p className="text-[#10587080] text-sm sm:text-[18px] font-semibold text-center">
            توضیحات مختصر و مثال
          </p>
        </div>

      </div>

      {/* Text */}
      <div className="bg-[#F1F7FA] rounded-[20px] w-full min-h-[130px] flex flex-col gap-3 p-4 mt-6">
        <h3 className="text-primary text-sm sm:text-[16px] font-bold">
          تفاوت بین روان درمانی و ویزیت
        </h3>
        <p className="text-[#10587080] text-[11px] sm:text-[12px] md:text-[14px] font-semibold leading-relaxed">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
          در ستون و سطرآنچنان که لازم است...
        </p>
      </div>
    </div>
  )
}

export default VisitType
