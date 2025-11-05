"use client";

import React from "react";
import AdminOptions from "@/components/Admin/AdminOptions";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen bg-custom-svg flex justify-center">
      <div className="container mx-auto flex flex-col lg:flex-row lg:gap-6 p-4 lg:p-6">
        {/* Sidebar for lg+ */}
        <div className="hidden lg:block lg:w-80">
          <AdminOptions />
        </div>

        {/* Topbar for mobile */}
        <div className="block lg:hidden w-full mb-4">
          <AdminOptions horizontal />
        </div>

        {/* Main content */}
        <div className="flex-1 w-full flex flex-col">{children}</div>
      </div>
    </div>
  );
}























// "use client";

// import React, { useState } from "react";
// import AdminOptions from "@/components/Admin/AdminOptions";
// import { HiMenuAlt3 } from "react-icons/hi";

// export default function AdminLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="w-full min-h-screen bg-custom-svg flex justify-center">
//       {/* Container to center everything */}
//       <div className="container mx-auto flex relative lg:gap-6">
//         {/* Sidebar */}
//         <div
//           className={`fixed lg:relative z-50 bg-background rounded-[20px] shadow p-4 transition-all duration-300
//             ${sidebarOpen ? "right-0 w-64 h-full" : "-right-64 w-64"}
//             lg:right-0 lg:w-80 lg:h-auto lg:min-h-screen flex-shrink-0`}
//         >
//           <AdminOptions onNavigate={() => setSidebarOpen(false)} />
//         </div>

//         {/* Backdrop for mobile */}
//         {sidebarOpen && (
//           <div
//             className="fixed inset-0 bg-black/30 z-40 lg:hidden"
//             onClick={() => setSidebarOpen(false)}
//           />
//         )}

//         {/* Main content */}
//         <div className="flex-1 flex flex-col p-4 lg:p-6">
//           {/* Mobile Hamburger */}
//           <div className="lg:hidden mb-4 self-start">
//             <HiMenuAlt3
//               className="w-8 h-8 cursor-pointer text-secondary"
//               onClick={() => setSidebarOpen(true)}
//             />
//           </div>

//           {/* Children pages */}
//           <div className="w-full flex flex-col">{children}</div>
//         </div>
//       </div>
//     </div>
//   );
// }





