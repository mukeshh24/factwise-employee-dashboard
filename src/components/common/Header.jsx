import React from "react";
import { Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { SidebarTrigger } from "../ui/sidebar";
import { dashboardPageRoute } from "@/routes";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b h-18 fixed z-20 bg-zinc-50 top-0 left-0 w-full px-3 md:px-10 lg:px-40">
      <Link to="/" className="cursor-pointer">
        <span className="text-2xl font-bold text-black">
          Employee Dashboard
        </span>
      </Link>
      <div className="flex items-center gap-3 sm:gap-5">
        <SidebarTrigger className="md:hidden bg-black/4 p-4" />
        <Link
          to={dashboardPageRoute}
          className="cursor-pointer text-black/70 hover:text-black transition-all duration-300"
        >
          <Settings className="w-6 h-6" />
        </Link>
        <div className="flex items-center gap-2">
          <Avatar className="w-10 h-10 relative">
            <AvatarFallback className="text-black font-semibold text-lg capitalize">
              MS
            </AvatarFallback>
            <div className="h-3 w-3 bg-green-400 rounded-full absolute -bottom-1 right-1"></div>
          </Avatar>
          <div className="hidden md:flex items-start flex-col">
            <p className="text-black font-semibold text-sm capitalize">
              Mukesh Suthar
            </p>
            <span className="text-black/50 text-sm lowercase">
              mukeshsuthar@gmail.com
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
