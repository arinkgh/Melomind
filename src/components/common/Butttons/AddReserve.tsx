import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface ReservationBnProps {
  text: string;
}

export function AddReserve({ text }: ReservationBnProps) {
  return (
    <div className="flex flex-wrap items-center gap-1 md:flex-row">
      <Button className="text-secondary w-[200px] bg-background rounded-[110px] cursor-pointer  font-bold hover:bg-amber-50 shadow border-2 py-5.5 px-4.5 flex flex-row justify-around">
        
        {text}
        <ChevronLeft className="w-6 h-6 text-primary/80" />
      </Button>
    </div>
  );
}
