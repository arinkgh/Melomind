// "use client";

// import React from "react";
// import { EnterBtn } from "../Butttons/EnterBtn";
// import { ReservationBn } from "../Butttons/ReservationBtn";
// import { useRouter } from "next/navigation";

// const HeaderLogin = () => {
//   const router = useRouter();

//   const handleReservationClick = () => {
//     router.push("/reservation");
//   };

//   return (
//     <div className="flex flex-row gap-2 items-center justify-center">
//       <EnterBtn />
//       <ReservationBn text="دریافت نوبت" onClick={handleReservationClick} />
//     </div>
//   );
// };

// export default HeaderLogin;









// "use client";

// import React from "react";
// import { EnterBtn } from "../Butttons/EnterBtn";
// import { ReservationBn } from "../Butttons/ReservationBtn";
// import { useAuthStore } from "@/services/auth/auth.store";
// import { useRouter } from "next/navigation";

// const HeaderLogin = () => {
//   const router = useRouter();
//   const { token, user, logout } = useAuthStore();

//   const handleReservationClick = () => {
//     router.push("/reservation");
//   };

//   const handleLogout = () => {
//     logout();
//     router.push("/"); 
//   };

//   if (token && user) {
//     return (
//       <div className="flex flex-row gap-4 items-center">
//         <button
//           className="
//             flex items-center justify-center
//             bg-background text-secondary border-2 font-bold hover:bg-accent/60
//             gap-2 transition-all duration-100 ease-in-out
//           hover:scale-102
//             rounded-[110px] md:rounded-full lg:rounded-[110px]
//             py-2 px-3 md:py-2 md:px-2 lg:py-5.5 lg:px-5 cursor-pointer
//           "
//           onClick={() => router.push("/profile")}
//         >
//           {user.name} {user.lastname}
//         </button>

//         <button
//           className="px-4 py-2 bg-red-500 text-white rounded-xl"
//           onClick={handleLogout}
//         >
//           خروج
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-row gap-2 items-center justify-center">
//       <EnterBtn />
//       <ReservationBn text="دریافت نوبت" onClick={handleReservationClick} />
//     </div>
//   );
// };

// export default HeaderLogin;









"use client";

import React, { useEffect } from "react";
import { EnterBtn } from "../Butttons/EnterBtn";
import { ReservationBn } from "../Butttons/ReservationBtn";
import { useAuthStore } from "@/services/auth/auth.store";
import { useRouter } from "next/navigation";

const HeaderLogin = () => {
  const router = useRouter();
  const { token, user, logout } = useAuthStore();

  const hydrate = useAuthStore((state) => state.hydrate);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUserRaw = localStorage.getItem("user");

    if (!savedToken || !savedUserRaw) return;

    // اعتبارسنجی مقدار ذخیره شده
    if (
      savedUserRaw === "undefined" ||
      savedUserRaw === "null" ||
      savedUserRaw.trim() === ""
    ) {
      console.warn("Invalid stored user value:", savedUserRaw);
      return;
    }

    try {
      const parsedUser = JSON.parse(savedUserRaw);
      hydrate(savedToken, parsedUser);
    } catch (e) {  
      console.error("Failed to parse stored user", e);
    }
  }, [hydrate]);

  const handleReservationClick = () => {
    router.push("/reservation");
  };

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  if (token && user) {
    return (
      <div className="flex flex-row gap-4 items-center">
        <button
          className="
            flex items-center justify-center
            bg-background text-secondary border-2 font-bold hover:bg-accent/60
            gap-2 transition-all duration-100 ease-in-out
            hover:scale-102
            rounded-[110px]
            py-2 px-3 cursor-pointer
          "
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
