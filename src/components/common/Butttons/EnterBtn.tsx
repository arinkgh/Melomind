"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import Logo from "@/../public/Images/Logo.svg";
import LoginSteps from "@/components/Login/LoginSteps";

export function EnterBtn() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center gap-2">
        <Button
          onClick={() => setOpen(true)}
          className="
            flex items-center justify-center
            bg-background text-secondary border-2 font-bold hover:bg-background
            gap-2
            rounded-[110px] md:rounded-full lg:rounded-[110px]
            py-2 px-3 md:py-2 md:px-2 lg:py-5.5 lg:px-5 cursor-pointer
          "
        >
          <FaUser className="w-5 h-5" />
          <span className="inline lg:inline md:hidden">ورود/ثبت نام</span>
        </Button>
      </div>

      {/* Modal Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-secondary/40 backdrop-blur-sm flex items-center justify-center z-50 px-2"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl flex flex-col items-center gap-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-[85%] mx-auto items-center justify-center">
              <Image src={Logo} alt="LOGO" className="mx-auto" />
              <LoginSteps />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
