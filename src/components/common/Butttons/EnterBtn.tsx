import { Button } from "@/components/ui/button";
export function EnterBtn() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button className=" bg-white text-[#105870] rounded-[110px] cursor-pointer border-2 font-bold hover:bg-white py-5.5 px-4.5">
        ورود/ثبت نام
      </Button>
    </div>
  );
}
