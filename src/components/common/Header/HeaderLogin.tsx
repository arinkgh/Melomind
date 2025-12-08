"use client";

import React, { useEffect, useMemo } from "react";
import { EnterBtn } from "../Butttons/EnterBtn";
import { ReservationBn } from "../Butttons/ReservationBtn";
import { useAuthStore } from "@/store/auth.store";
import { useRouter } from "next/navigation";


const HeaderLogin = () => {
  const router = useRouter();

  // const { hydrated, token, user, logout } = useAuthStore();

  const hydrated = useAuthStore((state) => state.hydrated);
  const token = useAuthStore((state) => state.token);
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const authData = useMemo(
    () => ({ hydrated, token, user, logout }),
    [hydrated, token, user, logout]
  );

  if (!authData.hydrated) return null;


//   useEffect(() => {
//   console.log("Auth changed", { hydrated, token, user });
// }, [hydrated, token, user]);


//   if (!hydrated) return null;

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  const handleReservationClick = () => {
    router.push("/reservation");
  };

  if (token && user) {
    return (
      <div className="flex flex-row gap-4 items-center">
        <button
          className="flex items-center justify-center bg-background text-secondary border-2 font-bold hover:bg-accent/60 gap-2 transition-all duration-100 ease-in-out hover:scale-102 rounded-[110px] py-2 px-3 cursor-pointer"
          onClick={() => router.push("/profile")}
        >
          {user.name} {user.lastname}
        </button>

        <button
          className="px-4 py-2 bg-red-500 text-white rounded-xl"
          onClick={handleLogout}
        >
          خروج
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-row gap-2 items-center justify-center">
      <EnterBtn />
      <ReservationBn text="دریافت نوبت" onClick={handleReservationClick} />
    </div>
  );
};

export default HeaderLogin;
