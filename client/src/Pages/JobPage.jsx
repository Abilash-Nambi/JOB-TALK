import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { FaSuitcase } from "react-icons/fa";

const JobPage = () => {
  return (
    <div className="container max-w-screen-2xl mx-auto xl:px-24 px-4">
      <div>
        <BreadCrumb title={"Job Details Page"} />
      </div>
      <div>
        <h5 className="text-base font-bold mt-2">Job ID:5626</h5>
        <h1 className="text-2xl text-blue">Software Developer</h1>
        <span>
          <FaSuitcase />
          <h5>Job Type</h5>
        </span>
      </div>
    </div>
  );
};

export default JobPage;
