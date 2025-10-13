import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface ReservationBnProps {
  text: string;
}

export function LoginBtn({ text }: ReservationBnProps) {
  return (
    <div className="flex flex-wrap items-center gap-1 md:flex-row">
      <Button className="text-background w-full bg-gradient-to-b from-[#AFED65] to-primary rounded-[110px] cursor-pointer text-center font-bold hover:bg-[#68ac29] py-6.5 px-4.5 flex flex-row justify-center items-center gap-2">
        {text}
        <ChevronLeft className="w-6 h-6 text-primary/80" />
      </Button>
    </div>
  );
}
