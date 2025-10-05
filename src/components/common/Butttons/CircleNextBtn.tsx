import React from 'react'
import { ChevronLeft } from "lucide-react";

const CircleNextBtn = () => {
  return (
    <div className='border-2 rounded-[50%] w-12 h-12 flex items-center shadow'>
       <ChevronLeft className="w-6 h-6 text-primary/80 mx-auto" />
    </div>
  )
}

export default CircleNextBtn
