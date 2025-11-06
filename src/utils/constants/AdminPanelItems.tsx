import { MdDashboard } from "react-icons/md";
import { RiComputerLine, RiFolderHistoryLine } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";
import { PiFolderUser } from "react-icons/pi";


export const items = [
  { icon: <MdDashboard className="w-5 h-5" />, text: "داشبورد", href: "/admin/dashboard" },
  { icon: <FaUserGroup className="w-5 h-5" />, text: "گروه درمانی", href: "/admin/group-therapy" },
  { icon: <RiComputerLine className="w-5 h-5" />, text: "نوبت‌های من", href: "/admin/my-reservation" },
  { icon: <RiFolderHistoryLine className="w-5 h-5" />, text: "تاریخچه ویزیت", href: "/admin/visit-history" },
  { icon: <PiFolderUser className="w-5 h-5" />, text: "مشخصات کاربری", href: "/admin/profile" },
];