import React, { useState } from "react";
import AppBradcrumb from "@/components/common/AppBradcrumb";
import { dashboardCards, employees } from "@/json";
import DashboardCard from "@/components/common/DashboardCard.jsx";
import SearchBar from "@/components/common/SearchBar";
import EmployeeGrid from "@/components/common/EmployeeGrid";

const Dashboard = () => {
  const [search, setSearch] = useState("");

  const hour = new Date().getHours();
  let greeting = "";
  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
  } else if (hour < 21) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night";
  }

  return (
    <section className="w-full">
      <AppBradcrumb />
      <div className="mb-5 flex flex-col gap-5">
        <div className="flex items-start flex-col gap-0">
          <p className="text-black font-semibold text-lg capitalize">
            {greeting}, Mukesh <span className="wave">🖐🏼</span>
          </p>
          <span className="text-black/50 text-sm">
            Manage and explore employee records efficiently.
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {dashboardCards.map((card) => (
            <DashboardCard key={card.title} {...card} />
          ))}
        </div>
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
        <EmployeeGrid search={search} rowData={employees} />
      </div>
    </section>
  );
};

export default Dashboard;
