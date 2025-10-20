"use client";

import GroupTherapy from '@/components/Admin/GroupTherapy/GroupTherapy';
import React from 'react'

const page = () => {
  return (
    <div className="flex-1 p-4 lg:p-6 min-h-screen flex flex-col gap-6">
        {/* group-therapy card container */}
      <div className="w-full bg-background rounded-[20px] shadow p-4 lg:p-6">
        <GroupTherapy/>
      </div>
    </div>
  )
}

export default page
