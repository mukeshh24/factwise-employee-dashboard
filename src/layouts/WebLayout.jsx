import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/common/AppSidebar";
import Header from "@/components/common/Header";
import { Outlet } from "react-router-dom";

const WebLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full bg-white text-zinc-800">
        <Header />
        <section className="relative w-full min-h-screen pt-20 pb-5 px-5">
          <Outlet />
        </section>
      </main>
    </SidebarProvider>
  );
};

export default WebLayout;
