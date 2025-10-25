
"use client";

import React from "react";
import VisitHistory from "@/components/Admin/VisitHistory/VisitHistory";

const Page = () => {
  return (
    <div className="flex-1 p-4 lg:p-6 min-h-screen flex flex-col gap-6">
      {/* visit history card container */}
      <div className="w-full bg-background rounded-[20px] shadow p-4 lg:p-6">
        <VisitHistory/>
      </div>
    </div>
  );
};

export default Page;
