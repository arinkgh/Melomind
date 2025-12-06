// "use client";

// import React, { useEffect, useState } from "react";
// import { EnterBtn } from "../Butttons/EnterBtn";
// import { ReservationBn } from "../Butttons/ReservationBtn";
// import { useAuthStore } from "@/store/auth.store";
// import { useRouter } from "next/navigation";

// const HeaderLogin = () => {
//   const router = useRouter();

//   const token = useAuthStore((s) => s.token);
//   const user = useAuthStore((s) => s.user);
//   const logout = useAuthStore((s) => s.logout);

//   const [hydrated, setHydrated] = useState(false);

//   useEffect(() => {
//     setHydrated(true);
//     console.log("hydrated Zustand:", useAuthStore.getState());
//   }, []);

//   if (!hydrated) return null;

//   const handleReservationClick = () => {
//     router.push("/reservation");
//   };

//   const handleLogout = () => {
//     logout();
//     router.push("/");
//   };

//   // IF USER LOGGED IN
//   if (token && user) {
//     return (
//       <div className="flex flex-row gap-4 items-center">
//         <button
//           className="flex items-center justify-center bg-background text-secondary border-2 font-bold hover:bg-accent/60 gap-2 transition-all duration-100 ease-in-out hover:scale-102 rounded-[110px] py-2 px-3 cursor-pointer"
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

//   // IF USER NOT LOGGED IN
//   return (
//     <div className="flex flex-row gap-2 items-center justify-center">
//       <EnterBtn />
//       <ReservationBn text="دریافت نوبت" onClick={handleReservationClick} />
//     </div>
//   );
// };

// export default HeaderLogin;





// "use client";

// import React, { useEffect, useState } from "react";
// import { EnterBtn } from "../Butttons/EnterBtn";
// import { ReservationBn } from "../Butttons/ReservationBtn";
// import { useAuthStore } from "@/store/auth.store";
// import { useRouter } from "next/navigation";

// const HeaderLogin = () => {
//   const router = useRouter();
//   const [hydrated, setHydrated] = useState(false);

//   // separate subscriptions — simple & type-safe
//   const token = useAuthStore((s) => s.token);
//   const user = useAuthStore((s) => s.user);
//   const logout = useAuthStore((s) => s.logout);

//   useEffect(() => {
//     // wait for client mount to avoid SSR mismatch
//     setHydrated(true);
//   }, []);

//   if (!hydrated) return null;

//   const handleLogout = async () => {
//     await logout();
//     router.push("/");
//   };

//   if (token && user) {
//     return (
//       <div className="flex flex-row gap-4 items-center">
//         <button
//           className="flex items-center justify-center bg-background text-secondary border-2 font-bold hover:bg-accent/60 gap-2 transition-all duration-100 ease-in-out hover:scale-102 rounded-[110px] py-2 px-3 cursor-pointer"
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
//       <ReservationBn text="دریافت نوبت" onClick={() => router.push("/reservation")} />
//     </div>
//   );
// };

// export default HeaderLogin;



"use client";

import React from "react";
import { EnterBtn } from "../Butttons/EnterBtn";
import { ReservationBn } from "../Butttons/ReservationBtn";
import { useAuthStore } from "@/store/auth.store";
import { useRouter } from "next/navigation";

const HeaderLogin = () => {
  const router = useRouter();

  const hydrated = useAuthStore((s) => s.hydrated);
  const token = useAuthStore((s) => s.token);
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);

  if (!hydrated) return null; // منتظر لود از localStorage

  const handleLogout = async () => {
    await logout();
    router.push("/");
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
      <ReservationBn
        text="دریافت نوبت"
        onClick={() => router.push("/reservation")}
      />
    </div>
  );
};

export default HeaderLogin;
