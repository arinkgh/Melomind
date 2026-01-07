"use client";

import React, { useEffect, useMemo } from "react";
import { EnterBtn } from "../Butttons/EnterBtn";
import { ReservationBn } from "../Butttons/ReservationBtn";
import { useAuthStore } from "@/store/auth.store";
import { useRouter } from "next/navigation";

const HeaderLogin = () => {
  const router = useRouter();

  const hydrated = useAuthStore((state) => state.hydrated);
  const token = useAuthStore((state) => state.token);
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  console.log(token, user);
  const authData = useMemo(
    () => ({ hydrated, token, user, logout }),
    [hydrated, token, user, logout]
  );

  if (!authData.hydrated) return null;

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  const handleReservationClick = () => {
    router.push("/reservation");
  };

  return (
    <div className="flex flex-row gap-2 items-center justify-center">
      {token && user ? (
        <div className="flex flex-row gap-2 items-center justify-center">
          <button
            className="flex items-center justify-center bg-background text-secondary border-2 font-bold hover:bg-accent/60 gap-2 transition-all duration-100 ease-in-out hover:scale-102 rounded-[110px] py-2 px-3 md:py-2 md:px-2 lg:py-3.5 lg:px-3 cursor-pointer"
            onClick={() => router.push("/admin/dashboard")}
          >
            {user.name} {user.lastname}
          </button>

          <button
            className="text-background bg-gradient-to-b from-[#AFED65] to-[#80C244] gap-2 transition-all duration-100 ease-in-out hover:scale-102 rounded-[110px] py-2 px-3 md:py-2 md:px-2 lg:py-3.5 lg:px-3 cursor-pointer
          active:scale-95"
            onClick={handleLogout}
          >
            خروج
          </button>
        </div>
      ) : (
        <>
          <EnterBtn />
          <ReservationBn text="دریافت نوبت" onClick={handleReservationClick} />
        </>
      )}
    </div>
  );
};

export default HeaderLogin;
