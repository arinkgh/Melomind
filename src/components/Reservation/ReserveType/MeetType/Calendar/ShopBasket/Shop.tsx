
"use client";

import { AddReserve } from "@/components/common/Butttons/AddReserve";
import { PrevBtn } from "@/components/common/Butttons/PrevBtn";
import { ReserveNow } from "@/components/common/Butttons/ReserveNow";
import ReserveTitle from "@/components/common/ReserveTitle/ReserveTitle";
import ReserveTable from "./ReserveTable";
import FinalPrice from "./FinalPrice";
import { useRouter } from "next/navigation";
import { useReserveStore } from "@/store/reserve.store";
import { reserveApi } from "@/services/reserve/reserve.service";

const Shop = () => {
  const router = useRouter();
  const reservations = useReserveStore((s) => s.reservations);

  const handleAddNewReserve = () => {
    router.push("/reservation");
  };

  const handleLastPageClick = () => {
    router.push("/reservation/reservetype/meet-type/date");
  };

  const handlePay = async () => {
    const token = localStorage.getItem("token"); // یا از auth store
    if (!token) return;

    try {
      for (const reservation of reservations) {
        await reserveApi.addReserve({
          token,
          session: new Date().toISOString(),
          services: reservation.services,
        });
      }

      router.push("/reservation/success");
    } catch (error) {
      console.error("Reserve error:", error);
    }
  };

  return (
    <div className="bg-custom-svg w-full min-h-[700px] flex flex-col items-center justify-center gap-10 py-12">
      <ReserveTitle
        title="سبد خرید"
        subtitle="میتوانید نوبت‌های رزرو شده را ویرایش یا حذف و یا نوبت جدیدی رزرو کنید"
      />

      <div className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto flex flex-col gap-6">
        <ReserveTable />
        <FinalPrice />
      </div>

      <div className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] flex flex-col md:flex-row justify-center md:justify-between gap-4 mb-20">
        <PrevBtn text="مرحله قبل" onClick={handleLastPageClick} />

        <div className="flex gap-3">
          <AddReserve text="افزودن نوبت جدید" onClick={handleAddNewReserve} />
          <ReserveNow text="پرداخت" onClick={handlePay} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
