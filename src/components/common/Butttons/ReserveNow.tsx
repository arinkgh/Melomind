import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface ReservationBnProps {
  text: string;
}

export function ReserveNow({ text }: ReservationBnProps) {
  return (
    <div className="flex flex-wrap items-center gap-1 md:flex-row">
      <Button className="text-white w-[200px] bg-gradient-to-b from-[#AFED65] to-[#80C244] rounded-[110px] cursor-pointer  font-bold hover:bg-[#68ac29] py-5.5 px-4.5 flex flex-row justify-around">
        {text}
        <ChevronLeft className="w-6 h-6 text-[#76C144]" />
      </Button>
    </div>
  );
}
