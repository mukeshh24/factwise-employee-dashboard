import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../ui/sidebar";
import { Link, NavLink } from "react-router-dom";
import { dashboardPageRoute } from "@/routes";
import { House, Lightbulb, Sparkles } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";

export const AppSidebar = () => {
  const { setOpenMobile } = useSidebar();

  return (
    <Sidebar>
      <SidebarHeader className="flex items-start justify-center h-18 border-b px-4">
        <Link
          to={dashboardPageRoute}
          className="flex items-center cursor-pointer"
        >
          <span className="text-2xl font-bold text-black">
            Employee Dashboard
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent className="px-3">
        <SidebarGroup className="py-5">
          <div className="flex items-center gap-2">
            <Avatar className="w-10 h-10">
              <AvatarFallback className="text-black font-semibold text-sm capitalize">
                MS
              </AvatarFallback>
            </Avatar>
            <div className="flex items-start flex-col">
              <p className="text-black font-semibold text-sm capitalize">
                Welcome back, Mukesh 👋
              </p>
              <p className="text-black/50 text-[12px] flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-black" />
                <span>Manage your workforce efficiently.</span>
              </p>
            </div>
          </div>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarMenu className="px-5">
            <SidebarMenuItem className="mb-2">
              <SidebarMenuButton asChild className="w-full">
                <NavLink
                  to={dashboardPageRoute}
                  onClick={() => setOpenMobile(false)}
                  className="flex items-center gap-2 w-full py-2 px-1 rounded-sm"
                >
                  <House className="h-5 w-5 text-black" />
                  <span className="text-sm">Dashboard</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup className="pt-60 lg:pt-75">
          <div className="bg-black/4 p-5 flex flex-col gap-2 rounded">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-zinc-200 rounded">
                <Lightbulb className="h-5 w-5 text-black" />
              </div>
              <div className="flex items-start flex-col">
                <p className="text-black font-semibold text-sm">Quick Tips</p>
              </div>
            </div>
            <div className="flex items-start flex-col">
              <p className="text-black/50 font-normal text-sm">
                Use AG Grid filters
              </p>
              <p className="text-black/50 font-normal text-sm">
                Click column headers to sort
              </p>
              <p className="text-black/50 font-normal text-sm">
                Export employee data
              </p>
            </div>
          </div>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
