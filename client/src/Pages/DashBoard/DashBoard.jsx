import React from "react";
import DashboardHeader from "../../components/Dashboard/DashboardHeader";
import DashboardCard from "../../components/Dashboard/DashboardCard";
import { adminJobCount } from "../../Services/api/AdminEndpoints";
import { useState } from "react";
import { useEffect } from "react";

const DashBoard = () => {
  const [jobs, setJobs] = useState([]);
  console.log("🚀 + DashBoard + jobs:", jobs);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await adminJobCount();
    if ((res.status = 200)) {
      const { data } = res;
      setJobs(data);
      //console.log("🚀 + fetchData + res.data.data:", res.data);
      //console.log("🚀 + fetchData + totalCount:", totalCount);
    }
  };

  return (
    <div>
      <DashboardHeader />
      <div className="p-4 flex md:flex-row flex-col gap-6 justify-center w-full">
        <DashboardCard title={"Total Jobs"} data={jobs?.alljobs} />
        <DashboardCard title={"Total Active Jobs"} data={jobs?.allActiveJobs} />
        <DashboardCard
          title={"Total Not Active Jobs"}
          data={jobs?.allInActiveJobs}
        />
        <DashboardCard title={"Total visits this week"} data={440} />
      </div>
    </div>
  );
};

export default DashBoard;
