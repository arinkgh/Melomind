"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import online from '../../../../public/Images/facetime.svg';
import tel from '../../../../public/Images/children.svg';
import meet from '../../../../public/Images/springpackage.svg';import { ReservationBn } from '@/components/common/Butttons/ReservationBtn';



const services = [
  {
    id: 1,
    title: 'گروه درمانی',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.',
    image: online,
  },
  {
    id: 2,
    title: 'تست شخصیت',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.',
    image: tel,
  },
  {
    id: 3,
    title: 'ازدواج چیست',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.',
    image: meet,
  },
    {
    id: 4,
    title: 'آنلاین',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.',
    image: online,
  },
  {
    id: 5,
    title: 'تلفنی',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.',
    image: tel,
  },
  {
    id: 6,
    title: 'حضوری',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.',
    image: meet,
  },
];

const ListServiceSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={16}
      freeMode={true}
      pagination={{ clickable: true }}
    //   navigation={true}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      }}
      modules={[FreeMode, Pagination, Navigation]}
      className="mySwiper"
    >
      {services.map((service) => (
        <SwiperSlide key={service.id}>
          <div className="flex flex-col items-center justify-center gap-4 md:py-8 cursor-pointer">
            <Image
              src={service.image}
              alt={`${service.title} icon`}
              className="w-1/2 h-1/4 sm:h-40 object-contain"
            />
            {/* Text */}
            <h3 className="text-[#105870] font-bold text-lg sm:text-xl">
              {service.title}
            </h3>
            <p className="text-[#3c6775] text-sm sm:text-base leading-relaxed">
              {service.description}
            </p>
            {/* Button */}
            <ReservationBn text='ادامه مطلب'/>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ListServiceSlider;