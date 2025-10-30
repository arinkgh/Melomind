import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface ReservationBnProps {
  text: string;
  onClick?: () => void;
}

export function ReserveNow({ text, onClick }: ReservationBnProps) {
  return (
    <div className="flex flex-wrap items-center gap-1 md:flex-row">
      <Button 
       onClick={onClick}
      className="text-background w-[200px] bg-gradient-to-b from-[#AFED65] to-primary rounded-[110px] cursor-pointer text-center font-bold transition-all duration-300 ease-in-out
          hover:scale-105 hover:from-[#9EDD4F] hover:to-[#6EAF39]
          active:scale-95 py-6.5 px-4.5 flex flex-row justify-center items-center">
        {text}
        <ChevronLeft className="w-6 h-6 text-primary/80" />
      </Button>
    </div>
  );
}
