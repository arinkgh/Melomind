
"use client";

import React from "react";
import MyReservation from "@/components/Admin/MyReservation/MyReservation";

const Page = () => {
  return (
    <div className="flex-1 p-4 lg:p-6 min-h-screen flex flex-col gap-6">
      {/* my reservation card container */}
      <div className="w-full bg-background rounded-[20px] shadow p-4 lg:p-6">
        <MyReservation/>
      </div>
    </div>
  );
};

export default Page;
