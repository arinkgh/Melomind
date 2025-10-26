"use client";

import React, { useState } from "react";
import AdminOptions from "@/components/Admin/AdminOptions";
import { HiMenuAlt3 } from "react-icons/hi";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-custom-svg flex justify-center">
      {/* Container to center everything */}
      <div className="container mx-auto flex relative lg:gap-6">
        {/* Sidebar */}
        <div
          className={`fixed lg:relative z-50 bg-background rounded-[20px] shadow p-4 transition-all duration-300
            ${sidebarOpen ? "right-0 w-64 h-full" : "-right-64 w-64"}
            lg:right-0 lg:w-80 lg:h-auto lg:min-h-screen flex-shrink-0`}
        >
          <AdminOptions onNavigate={() => setSidebarOpen(false)} />
        </div>

        {/* Backdrop for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <div className="flex-1 flex flex-col p-4 lg:p-6">
          {/* Mobile Hamburger */}
          <div className="lg:hidden mb-4 self-start">
            <HiMenuAlt3
              className="w-8 h-8 cursor-pointer text-secondary"
              onClick={() => setSidebarOpen(true)}
            />
          </div>

          {/* Children pages */}
          <div className="w-full flex flex-col">{children}</div>
        </div>
      </div>
    </div>
  );
}



















// "use client";

// import React from "react";
// import {
//   SidebarProvider,
//   SidebarTrigger,
//   useSidebar,
// } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/Admin/AppSidebar";

// // 👇 Create a simple overlay that listens for clicks outside the sidebar
// function SidebarBackdrop() {
//   const { open, setOpen } = useSidebar();

//   if (!open) return null;

//   return (
//     <div
//       className="fixed inset-0 bg-black/30 z-40 lg:hidden"
//       onClick={() => setOpen(false)}
//     />
//   );
// }

// export default function AdminLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="w-full min-h-screen bg-custom-svg flex justify-center">
//       <SidebarProvider>
//         <div className="container mx-auto flex relative lg:gap-6">
//           {/* Sidebar */}
//           <AppSidebar />

//           {/* Overlay for mobile — closes sidebar on click */}
//           <SidebarBackdrop />

//           {/* Main Content */}
//           <main className="flex-1 flex flex-col p-4 lg:p-6">
//             {/* Hamburger for mobile */}
//             <div className="lg:hidden mb-4 self-start">
//               <SidebarTrigger className="p-2 border rounded-lg shadow-sm" />
//             </div>

//             {/* Children pages */}
//             <div className="w-full flex flex-col">{children}</div>
//           </main>
//         </div>
//       </SidebarProvider>
//     </div>
//   );
// }
