import React from "react";
import DashboardHeader from "../../components/Dashboard/DashboardHeader";
import DashboardCard from "../../components/Dashboard/DashboardCard";

const DashBoard = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="p-4 flex md:flex-row flex-col gap-6 justify-center w-full">
        <DashboardCard title={"Total Jobs"} data={44} />
        <DashboardCard title={"Total Active Jobs"} data={44} />
        <DashboardCard title={"Total Not Active Jobs"} data={44} />
        <DashboardCard title={"Total visited candidates"} data={44} />
      </div>
    </div>
  );
};

export default DashBoard;
