import React from "react";
import { useEffect } from "react";
import Card from "../../components/Card";
import Sidebar from "../../components/Sidebar/Sidebar";
import NewsLetter from "../../components/NewsLetter";
import { getAllJob } from "../../Services/api/JobEndPoints";
import { useState } from "react";

const Jobs = () => {
  const [selectedCategory, setSelectedCategory] = useState(" ");
  const [jobs, setJobs] = useState([]);
  //console.log("🚀 + Home + jobs:", jobs);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getAllJob();
      setJobs(response.data.data);
    } catch (error) {
      console.log("🚀 + fetchData + error:", error);
    }
  };

  // filtered jobs
  // const filteredJobs = jobs?.filter((data) =>
  //   data?.jobTitle.toLowerCase().includes(query.toLowerCase())
  // );
  //Radio filtering

  const handleRadioChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  //Button based filtering
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  //main func
  // const filteredItems = () => {
  //   let filteredData = jobs;
  //   // if (query) {
  //   //   filteredData = filteredJobs;
  //   // }
  //   if (selectedCategory !== " ") {
  //     console.log("🚀 + filteredItems + selectedCategory:", selectedCategory);
  //     filteredData = filteredData.filter(
  //       ({
  //         jobLocation,
  //         salaryType,
  //         maxPrice,
  //         employmentType,
  //         postingDate,
  //         experienceLevel,
  //       }) => {
  //         return (
  //           jobLocation.toLowerCase() === selectedCategory.toLowerCase() ||
  //           salaryType.toLowerCase() === selectedCategory.toLowerCase() ||
  //           experienceLevel.toLowerCase() === selectedCategory.toLowerCase() ||
  //           employmentType.toLowerCase() === selectedCategory.toLowerCase() ||
  //           parseInt(maxPrice) <= parseInt(selectedCategory) ||
  //           postingDate >= selectedCategory
  //         );
  //       }
  //     );
  //   }

  //   return filteredData?.map((data, i) => <Card key={i} data={data} />);
  // };

  // const result = filteredItems(jobs, selectedCategory, query);
  return (
    <div>
      {/* <section> {result}</section> */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-4 py-12">
        <div className="bg-white p-4 rounded">
          <Sidebar
            handleClick={handleClick}
            handleRadioChange={handleRadioChange}
          />
        </div>

        <div className="bg-white p-4  rounded-sm col-span-2">
          <h3 className="text-lg font-bold mb-2">{jobs.length} Jobs</h3>
          {jobs.map((data, i) => (
            <Card key={i} data={data} />
          ))}
        </div>

        <div className="bg-white p-4 rounded">
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default Jobs;
