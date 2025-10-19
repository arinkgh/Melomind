import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface SeeAllProps {
  text: string;
}

export function SeeAll({ text }: SeeAllProps) {
  return (
     <div className="flex flex-wrap items-center  md:flex-row">
      <Button className="rounded-[110px] cursor-pointer font-bold border-2 w-[140px] text-center text-secondary bg-background hover:bg-background border-[#1058701A] py-5 px-4.5 flex flex-row justify-around">
        {text}
        <ChevronLeft className="w-6 h-6 text-primary/80" />
      </Button>
    </div>
  );
}
