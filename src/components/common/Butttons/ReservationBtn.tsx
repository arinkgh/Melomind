import { Button } from "@/components/ui/button";

interface ReservationBnProps {
  text: string;
}

export function ReservationBn({ text }: ReservationBnProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button className="text-white bg-gradient-to-b from-[#AFED65] to-[#80C244] rounded-[110px] cursor-pointer font-bold hover:bg-[#68ac29] py-5.5 px-4.5">
        {text}
      </Button>
    </div>
  );
}
