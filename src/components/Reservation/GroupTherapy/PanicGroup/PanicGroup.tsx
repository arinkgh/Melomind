import Image from "next/image";
import React from "react";
import articleimg from "@/../public/Images/artilecard.svg";
import { ReserveNow } from "@/components/common/Butttons/ReserveNow";
const PanicGroup = () => {
  return (
    <div className="bg-custom-svg w-full">
      <div className="container mx-auto flex flex-col items-center gap-30 mb-100">
        {/* image */}
        <div className=" w-[80%] h-[200px] md:h-[300px] lg:h-[544px] relative flex items-center justify-center">
          {/* Background green layers */}
          <div className="absolute inset-0 bg-primary/80 w-[97%] h-full  mx-auto mt-4 rounded-[37px] hidden lg:block "></div>
          <div className="absolute inset-3 bg-primary w-[98%] h-full  mx-auto -mt-3 rounded-[20px] hidden lg:block"></div>
          {/* Image */}
          <Image
            src={articleimg}
            alt="#"
            className="relative w-full h-[95%] -mt-7 z-10 object-contain"
          />
        </div>
        {/* info */}
        <div className=" w-full flex flex-col justify-around items-center gap-20">
          {/* title */}
          <div className="flex flex-col justify-center gap-6 w-full items-center">
            <p className="text-primary/80 text-[20px] font-semibold">
              گروه درمانی
            </p>
            <h2 className="text-secondary font-extrabold text-6xl">
              گروه پنیک
            </h2>
            <p className="text-secondary/70 text-[20px] font-semibold">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است
            </p>
          </div>
          {/* main */}
          <div className="border-2 border-secondary/10 bg-background w-[70%]  rounded-[20px] p-4 flex flex-col gap-2.5">
            <div className="bg-secondary/5 rounded-[10px] w-full h-12 flex flex-row justify-between items-center p-6">
              <span className="text-secondary font-bold text-[16px]">
                تعداد جلسات
              </span>
              <span className="text-secondary font-bold text-[16px]">15</span>
            </div>
            <div className="bg-secondary/5 rounded-[10px] w-full h-12 flex flex-row justify-between items-center p-6">
              <span className="text-secondary font-bold text-[16px]">
                جلسه آتی
              </span>
              <span className="text-secondary font-bold text-[16px]">
                جلسه 5
              </span>
            </div>
            <div className="bg-secondary/5 rounded-[10px] w-full h-12 flex flex-row justify-between items-center p-6">
              <span className="text-secondary font-bold text-[16px]">
                ظرفیت باز
              </span>
              <span className="text-secondary font-bold text-[16px]">
                1 نفر
              </span>
            </div>
            <div className="bg-secondary/5 rounded-[10px] w-full h-12 flex flex-row justify-between items-center p-6">
              <span className="text-secondary font-bold text-[16px]">
                تاریخ شروع
              </span>
              <span className="text-secondary font-bold text-[16px]">
                1402/11/01
              </span>
            </div>
            <div className="bg-secondary/5 rounded-[10px] w-full h-12 flex flex-row justify-between items-center p-6">
              <span className="text-secondary font-bold text-[16px]">
                زمان و روز تشکیل
              </span>
              <span className="text-secondary font-bold text-[16px]">
                سه شنبه ها- ساعت 5 عصر
              </span>
            </div>
            <div className="bg-secondary/5 rounded-[10px] w-full h-12 flex flex-row justify-between items-center p-6">
              <span className="text-secondary font-bold text-[16px]">
                نوع جلسات
              </span>
              <span className="text-secondary font-bold text-[16px]">
                حضوری
              </span>
            </div>
            <div className="bg-secondary/5 rounded-[10px] w-full h-12 flex flex-row justify-between items-center p-6">
              <span className="text-secondary font-bold text-[16px]">
                مبلغ هر جلسه
              </span>
              <span className="text-secondary font-bold text-[16px]">
                250/000 تومان
              </span>
            </div>
          </div>
          {/* button */}
          <ReserveNow text="ثبت نام کنید" />
        </div>
        {/* desc */}
        <div className="w-full flex flex-col justify-between items-center gap-20">
          <div className="flex flex-col gap-5">
            <h3 className="text-secondary font-bold text-2xl">
              گروه درمانی چیست:
            </h3>
            <p className="text-secondary/40 text-[16px]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <p className="text-secondary/40 text-[16px]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
              گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
              که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
              متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
              و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
              طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
              الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
              صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
              شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
              دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
              اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
          <div  className="flex flex-col gap-5">
            <h3 className="text-secondary font-bold text-2xl">
              گروه درمانی پنیک چیست:
            </h3>
            <p className="text-secondary/40  text-[16px]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <p className="text-secondary/40 text-[16px]">
              تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
              طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت
              می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
              شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
              دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
              اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanicGroup;
