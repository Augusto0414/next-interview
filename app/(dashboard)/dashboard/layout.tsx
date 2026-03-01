import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { Metadata } from "next";
import { ReactNode } from "react";
import { AppSidebar } from "./components/AppSideBar";

export const dashboardMetadata: Metadata = {
  title: "Dashboard - Entrevistas con IA",
  description:
    "Administra tus entrevistas automatizadas con IA, revisa reportes y optimiza tu proceso de reclutamiento.",
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="min-h-screen w-full">
        <div className="flex justify-between">
          <SidebarTrigger />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
