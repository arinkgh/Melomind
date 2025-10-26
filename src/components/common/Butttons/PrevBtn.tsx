import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface PrevBtnProps {
  text: string;
  onClick?: () => void;
}

export function PrevBtn({ text, onClick }: PrevBtnProps) {
  return (
     <div className="flex flex-wrap items-center  md:flex-row">
      <Button 
      onClick={onClick}
      className="rounded-[110px] cursor-pointer font-bold border-2 w-[140px] text-center text-secondary bg-background hover:bg-background border-[#1058701A] py-6 px-4.5 flex flex-row justify-around">
        <ChevronRight className="w-6 h-6 text-primary/80" />
        {text}
      </Button>
    </div>
  );
}

