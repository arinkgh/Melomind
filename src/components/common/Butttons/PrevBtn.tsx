import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface PrevBtnProps {
  text: string;
}

export function PrevBtn({ text }: PrevBtnProps) {
  return (
     <div className="flex flex-wrap items-center  md:flex-row">
      <Button className="rounded-[110px] cursor-pointer font-bold border-2 w-[140px] text-center text-primary bg-white hover:bg-white border-[#1058701A] py-6 px-4.5 flex flex-row justify-around">
        <ChevronRight className="w-6 h-6 text-[#76C144]" />
        {text}
      </Button>
    </div>
  );
}

