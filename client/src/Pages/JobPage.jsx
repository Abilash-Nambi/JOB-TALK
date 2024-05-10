import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import { FaSuitcase } from "react-icons/fa";
import Button from "../components/Button";
import { useEffect } from "react";
import { getSingleJob } from "../Services/api/JobEndPoints";
import { useParams } from "react-router-dom";

const JobPage = () => {
  const [job, setJob] = useState({});
  let { id } = useParams();
  console.log("🚀 + JobPage + id:", id);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getSingleJob(id);
      setJob(response?.data?.data);
    } catch (error) {
      console.log("🚀 + fetchData + error:", error);
    }
  };

  // const {
  //   companyName,
  //   jobTitle,
  //   companyLogo,
  //   minPrice,
  //   maxPrice,
  //   salaryType,
  //   jobLocation,
  //   postingDate,
  //   description,
  //   employmentType,
  // } = job;
  return (
    <div className="container max-w-screen-2xl mx-auto xl:px-24 px-4">
      <div>
        <BreadCrumb title={"Job Details Page"} />
      </div>
      <div className="flex-col flex gap-2">
        <h5 className="text-base font-bold mt-2">Job ID:5626</h5>
        <h1 className="text-2xl text-blue">{job?.jobTitle}</h1>
        <span className="flex items-center gap-3">
          <FaSuitcase />
          <h5 className="text-1xl">Job type</h5>
        </span>
        <div className="flex items-center gap-3 ">
          <Button
            title={"JOB TYPE"}
            className={
              "bg-blue text-white px-4 py-2 hover:bg-[#172554] rounded-sm"
            }
          />
          <Button
            title={"APPLY NOW"}
            className={
              "bg-[#10b981] text-white px-4 py-2 hover:bg-[#064e3b] rounded-sm"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default JobPage;
