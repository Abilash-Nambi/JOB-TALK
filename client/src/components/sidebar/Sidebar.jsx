import React from "react";
import Location from "./Location";
import Salary from "./Salary";
import JobPostingDate from "./JobPostingDate";
import WorkExperience from "./WorkExperience";
import EmployementType from "./EmployementType";

const Sidebar = () => {
  return (
    <div className="space-y-5">
      <h3 className="text-lg font-bold mb-2">Filters</h3>
      {/* <Location handleRadioChange={handleRadioChange} /> */}
      <Salary />
      <WorkExperience />
      <EmployementType />
      <JobPostingDate />
    </div>
  );
};

export default Sidebar;
