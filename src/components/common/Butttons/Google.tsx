import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

interface GoogleProps {
  text: string;
}

export function Google({ text }: GoogleProps) {
  return (
    <div className="flex flex-wrap items-center gap-1 md:flex-row">
      <Button className="text-secondary border-2 w-full bg-background rounded-[110px] cursor-pointer text-center font-bold transition-all duration-200 ease-in-out
          hover:scale-102 hover:bg-accent/60 py-6.5 px-4.5 flex flex-row justify-center items-center gap-2">
        {text}
        <FcGoogle  className="w-6 h-6" />
      </Button>
    </div>
  );
}
