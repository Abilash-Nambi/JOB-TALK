import React from "react";
import DashboardSidebar from "../components/Dashboard/DashboardSidebar";
import { Outlet } from "react-router-dom";

const DashBoardLayout = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-5 h-screen">
        <div className="bg-[#1f2937] p-4 h-full md:col-span-1">
          <DashboardSidebar />
        </div>
        <div className="bg-slate-400  h-full md:col-span-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
