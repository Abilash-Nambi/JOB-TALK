import React from "react";
import DashboardSidebar from "../../components/Dashboard/DashboardSidebar";
import DashboardMain from "../../components/Dashboard/DashboardMain";
const DashBoard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-5 h-screen">
        <div className="bg-[#1f2937] p-4 h-full md:col-span-1">
          <DashboardSidebar />
        </div>
        <div className="bg-slate-400 p-4 h-full md:col-span-4">
          <DashboardMain />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
