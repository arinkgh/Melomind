
"use client";

import React from "react";
import Profile from "@/components/Admin/Profile/Profile";

const Page = () => {
  return (
    <div className="flex-1 p-4 lg:p-6 min-h-screen flex flex-col gap-6">
      {/* profile card container */}
      <div className="w-full bg-background rounded-[20px] shadow p-4 lg:p-6">
        <Profile/>
      </div>
    </div>
  );
};

export default Page;