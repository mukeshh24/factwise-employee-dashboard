import React from "react";

const DashboardCard = ({ title, value, icon: Icon, iconBg, iconColor }) => {
  return (
    <div className="flex items-center gap-2 bg-black/4 p-5 rounded group">
      <div
        className={`w-10 h-10 flex items-center justify-center ${iconBg} rounded`}
      >
        <Icon
          className={`h-5 w-5 ${iconColor} group-hover:scale-120 transition-all duration-300`}
        />
      </div>
      <div className="flex items-start flex-col gap-0">
        <p className="text-black font-semibold text-sm">{value}</p>
        <span className="text-black/50 text-sm">{title}</span>
      </div>
    </div>
  );
};

export default DashboardCard;
