// "use client";

// import * as React from "react";
// import { cva } from "class-variance-authority";
// import { cn } from "@/lib/utils";

// // Context for sidebar state
// const SidebarContext = React.createContext<{
//   open: boolean;
//   setOpen: (value: boolean) => void;
// } | null>(null);

// export function SidebarProvider({ children }: { children: React.ReactNode }) {
//   const [open, setOpen] = React.useState(false);
//   return (
//     <SidebarContext.Provider value={{ open, setOpen }}>
//       <div className="relative flex w-full">{children}</div>
//     </SidebarContext.Provider>
//   );
// }

// export function useSidebar() {
//   const ctx = React.useContext(SidebarContext);
//   if (!ctx) throw new Error("useSidebar must be used within SidebarProvider");
//   return ctx;
// }

// // ---------- Sidebar container ----------
// export function Sidebar({
//   children,
//   className,
// }: React.HTMLAttributes<HTMLDivElement>) {
//   const { open } = useSidebar();
//   return (
//     <aside
//       className={cn(
//         "fixed lg:relative z-50 transition-all duration-300 bg-background rounded-[20px] shadow p-4 flex-shrink-0",
//         open ? "right-0 w-64 h-full" : "-right-64 w-64",
//         "lg:right-0 lg:w-80 lg:h-auto lg:min-h-screen",
//         className
//       )}
//     >
//       {children}
//     </aside>
//   );
// }

// // ---------- Sidebar content ----------
// export function SidebarContent({ children }: { children: React.ReactNode }) {
//   return <div className="flex flex-col w-full gap-2">{children}</div>;
// }

// // ---------- Sidebar group ----------
// export function SidebarGroup({ children }: { children: React.ReactNode }) {
//   return <div className="flex flex-col w-full gap-3">{children}</div>;
// }

// export function SidebarGroupLabel({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return <div className="text-sm font-semibold text-secondary">{children}</div>;
// }

// export function SidebarGroupContent({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return <div className="flex flex-col w-full gap-2">{children}</div>;
// }

// // ---------- Sidebar menu ----------
// export function SidebarMenu({ children }: { children: React.ReactNode }) {
//   return <ul className="flex flex-col w-full gap-3">{children}</ul>;
// }

// export function SidebarMenuItem({ children }: { children: React.ReactNode }) {
//   return <li>{children}</li>;
// }

// export function SidebarMenuButton({
//   asChild,
//   children,
//   className,
// }: {
//   asChild?: boolean;
//   children: React.ReactNode;
//   className?: string;
// }) {
//   const Comp: any = asChild ? "span" : "button";
//   return (
//     <Comp
//       className={cn(
//         "flex items-center gap-3 w-full text-left rounded-lg transition focus:outline-none",
//         className
//       )}
//     >
//       {children}
//     </Comp>
//   );
// }

// // ---------- Sidebar trigger (hamburger) ----------
// export function SidebarTrigger({
//   className,
// }: {
//   className?: string;
// }) {
//   const { setOpen } = useSidebar();
//   return (
//     <button
//       onClick={() => setOpen((prev) => !prev)}
//       className={cn(
//         "p-2 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition lg:hidden",
//         className
//       )}
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={2}
//         stroke="currentColor"
//         className="w-6 h-6 text-secondary"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M4 6h16M4 12h16m-7 6h7"
//         />
//       </svg>
//     </button>
//   );
// }
