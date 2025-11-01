"use client";

import AdminTitle from "@/components/common/AdminTitle/AdminTitle";
import { SeeAll } from "@/components/common/Butttons/SeeAll";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const cards = [
  { img: "/Images/group.svg", title: "گروه 1", description: "توضیحات تستی" },
  { img: "/Images/person.svg", title: "گروه 2", description: "لورم ایپسوم" },
  { img: "/Images/couple.svg", title: "گروه 3", description: "نمونه متن" },
  { img: "/Images/test.svg", title: "4گروه ", description: "و غیره..." },
  { img: "/Images/meet.svg", title: "5گروه ", description: "لورم ایپسوم" },
  { img: "/Images/tel.svg", title: "6گروه ", description: "نمونه متن" },
  { img: "/Images/meet.svg", title: "7گروه ", description: "لورم ایپسوم" },
];

const comments = [
  {
    img: "/Images/online.svg",
    title: "گروه 1",
    description:
      "کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان. تستی",
  },
  {
    img: "/Images/meet.svg",
    title: "گروه 2",
    description:
      " کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان.",
  },
  {
    img: "/Images/tel.svg",
    title: "گروه 3",
    description:
      " کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان.",
  },
  {
    img: "/Images/test.svg",
    title: "4گروه ",
    description:
      "و کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان....",
  },
  {
    img: "/Images/meet.svg",
    title: "5گروه ",
    description:
      "لورjم کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان.",
  },
  { img: "/Images/tel.svg", title: "6گروه ", description: "نمونه متن" },
  { img: "/Images/meet.svg", title: "7گروه ", description: "لورم ایپسوم" },
];

const GroupTherapy = () => {
  return (
    <div className="flex flex-col gap-12 overflow-x-hidden"> 
      {/* title */}
      <div className="flex justify-between items-center">
        <AdminTitle
          subtitle="گروه درمانی"
          title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم..."
        />
        <SeeAll text="مشاهده همه" />
      </div>

      {/* slider 1 */}
      <div className="flex flex-col gap-5">
        <h3 className="text-secondary text-xl font-bold">لیست گروه‌ درمانی‌ها</h3>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
            dragFree: false,
            // containScroll: "trimSnaps", 
          }}
          className="w-full relative"
        >
          <CarouselContent className="min-w-0 flex gap-4">
            {cards.map((card, index) => (
              <CarouselItem
                key={index}
                className="
                  basis-[90%]
                  sm:basis-[70%]
                  md:basis-1/2
                  lg:basis-1/3
                  xl:basis-1/3
                  mx-auto
                  max-w-[350px]
                "
              >
                <div className="border-2 w-full h-[300px] rounded-[20px] flex flex-col items-center justify-around shadow bg-background py-6 cursor-pointer mx-auto">
                  <Image src={card.img} alt={card.title} width={80} height={80} />
                  <div className="flex flex-col items-center text-center">
                    <h4 className="text-secondary font-bold text-lg md:text-xl">
                      {card.title}
                    </h4>
                    <p className="text-secondary/80 text-sm md:text-base mt-1 line-clamp-2">
                      {card.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 bg-white shadow rounded-full cursor-pointer z-10">
            <ChevronLeft size={22} className="text-primary" />
          </CarouselPrevious>

          <CarouselNext className="right-2 top-1/2 -translate-y-1/2 bg-white shadow rounded-full cursor-pointer z-10">
            <ChevronRight size={22} className="text-primary" />
          </CarouselNext>
        </Carousel>
      </div>

      {/* slider 2 */}
      <div className="flex flex-col gap-5">
        <h3 className="text-secondary text-xl font-bold">
          نظرات کاربران درباره گروه‌ درمانی
        </h3>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
            dragFree: false,
            // containScroll: "trimSnaps", 
          }}
          className="w-full relative"
        >
          <CarouselContent className="min-w-0 flex gap-4">
            {comments.map((card, index) => (
              <CarouselItem
                key={index}
                className="
                  basis-[90%]
                  sm:basis-[70%]
                  md:basis-1/2
                  lg:basis-1/3
                  xl:basis-1/3
                  mx-auto
                  max-w-[350px]
                "
              >
                <div className="border-2 w-full h-[300px] rounded-[20px] flex flex-col items-stretch p-6 gap-4 justify-start shadow bg-background cursor-pointer mx-auto overflow-hidden">
                  <div className="flex flex-row items-center gap-2">
                    <Image
                      src={card.img}
                      alt={card.title}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <h4 className="text-secondary font-bold text-lg md:text-xl">
                      {card.title}
                    </h4>
                  </div>
                  <p className="text-secondary/80 text-sm md:text-base mt-1 line-clamp-3">
                    {card.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 bg-white shadow rounded-full cursor-pointer z-10">
            <ChevronLeft size={22} className="text-primary" />
          </CarouselPrevious>

          <CarouselNext className="right-2 top-1/2 -translate-y-1/2 bg-white shadow rounded-full cursor-pointer z-10">
            <ChevronRight size={22} className="text-primary" />
          </CarouselNext>
        </Carousel>
      </div>
    </div>
  );
};

export default GroupTherapy;
