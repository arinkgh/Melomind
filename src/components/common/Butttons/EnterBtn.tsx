import { Button } from "@/components/ui/button";
import { FaUser } from "react-icons/fa";

export function EnterBtn() {
  return (
    <div className="flex items-center gap-2">
      <Button
        className="
          flex items-center justify-center
          bg-background text-secondary border-2 font-bold hover:bg-background
          gap-2
          rounded-[110px] md:rounded-full lg:rounded-[110px]
          py-2 px-3 md:py-2 md:px-2 lg:py-4 lg:px-5
        "
      >
        <FaUser className="w-5 h-5" />
        {/* Text: show on sm and lg, hide on md */}
        <span className="inline lg:inline md:hidden">ورود/ثبت نام</span>
      </Button>
    </div>
  );
}
