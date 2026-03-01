import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { LayoutDashboard, LogOut, Settings, Users } from "lucide-react";

import { BtnCreateInterView } from "@/components/shared/BtnCreateInterView";
import Link from "next/link";

const items = [
  {
    label: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Users",
    url: "/users",
    icon: Users,
  },
  {
    label: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="px-4 py-2">
        <h2 className="text-lg font-semibold">My App</h2>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <BtnCreateInterView />
        </SidebarGroup>
        <SidebarGroup>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton asChild>
                  <Link href={item.url} className="flex items-center gap-2">
                    <item.icon className="h-10 w-10 text-3xl" />
                    <span className="ml-2">{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <LogOut className="h-10 w-10 text-3xl" />
              <span className="ml-2">Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
