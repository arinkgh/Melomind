
"use client";

import React from "react";
import Dashboard from "@/components/Admin/Dashboard/Dashboard";

const Page = () => {
  return (
    <div className="flex-1 p-4 lg:p-6 min-h-screen flex flex-col gap-6">
      {/* Dashboard card container */}
      <div className="w-full bg-background rounded-[20px] shadow p-4 lg:p-6">
        <Dashboard />
      </div>
    </div>
  );
};

export default Page;
