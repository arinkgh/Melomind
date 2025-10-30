import { Button } from "@/components/ui/button";

interface ReservationBnProps {
  text: string;
  onClick?: () => void;
}

export function ReservationBn({ text, onClick  }: ReservationBnProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button 
       onClick={onClick}
      className="text-background bg-gradient-to-b from-[#AFED65] to-[#80C244] rounded-[110px] cursor-pointer font-bold  md:py-5.5 md:px-4.5 sm:py-4 sm:px-3 transition-all duration-300 ease-in-out
          hover:scale-105 hover:from-[#9EDD4F] hover:to-[#6EAF39]
          active:scale-95">
        {text}
      </Button>
    </div>
  );
}

