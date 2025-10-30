"use client";

import React from "react";
import { EnterBtn } from "../Butttons/EnterBtn";
import { ReservationBn } from "../Butttons/ReservationBtn";
import { useRouter } from "next/navigation";

const HeaderLogin = () => {
  const router = useRouter();

  const handleReservationClick = () => {
    router.push("/reservation");
  };

  return (
    <div className="flex flex-row gap-2 items-center justify-center">
      <EnterBtn />
      <ReservationBn text="دریافت نوبت" onClick={handleReservationClick} />
    </div>
  );
};

export default HeaderLogin;

