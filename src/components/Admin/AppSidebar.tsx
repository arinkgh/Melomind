// "use client";

// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/components/ui/sidebar";

// import { MdDashboard } from "react-icons/md";
// import { RiComputerLine, RiFolderHistoryLine } from "react-icons/ri";
// import { FaUserGroup } from "react-icons/fa6";
// import { PiFolderUser } from "react-icons/pi";

// const items = [
//   { icon: MdDashboard, text: "داشبورد", href: "/admin/dashboard" },
//   { icon: FaUserGroup, text: "گروه درمانی", href: "/admin/group-therapy" },
//   { icon: RiComputerLine, text: "نوبت‌های من", href: "/admin/my-reservation" },
//   { icon: RiFolderHistoryLine, text: "تاریخچه ویزیت", href: "/admin/visit-history" },
//   { icon: PiFolderUser, text: "مشخصات کاربری", href: "/admin/profile" },
// ];

// export function AppSidebar() {
//   const pathname = usePathname();

//   return (
//     <Sidebar className="bg-background rounded-[20px] p-4 shadow w-64 lg:w-80 h-full lg:min-h-screen">
//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {items.map((item) => {
//                 const isActive = pathname === item.href;
//                 return (
//                   <SidebarMenuItem key={item.href}>
//                     <SidebarMenuButton asChild>
//                       <Link
//                         href={item.href}
//                         className={`flex items-center gap-3 p-3 rounded-lg transition ${
//                           isActive
//                             ? "text-primary bg-white/10 font-semibold"
//                             : "text-secondary hover:text-primary hover:bg-white/5"
//                         }`}
//                       >
//                         <item.icon
//                           className={`w-6 h-6 ${
//                             isActive ? "text-primary" : "text-secondary"
//                           }`}
//                         />
//                         <span className="text-base">{item.text}</span>
//                       </Link>
//                     </SidebarMenuButton>
//                   </SidebarMenuItem>
//                 );
//               })}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>
//     </Sidebar>
//   );
// }
