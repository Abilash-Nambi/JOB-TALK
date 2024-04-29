import React from "react";
import Banner from "../components/Banner";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../components/Card";
import Jobs from "./Jobs";
import Sidebar from "../components/sidebar/Sidebar";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  const [query, setQuerry] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(" ");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const handleInputChange = (e) => {
    setQuerry((prev) => e.target.value);
  };

  // filtered jobs
  const filteredJobs = jobs.filter((data) =>
    data?.jobTitle.toLowerCase().includes(query.toLowerCase())
  );
  //Radio filtering

  const handleRadioChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  //Button based filtering
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  //main func
  const filteredItems = () => {
    let filteredData = jobs;
    if (query) {
      filteredData = filteredJobs;
    }
    if (selectedCategory !== " ") {
      console.log("🚀 + filteredItems + selectedCategory:", selectedCategory);
      filteredData = filteredData.filter(
        ({
          jobLocation,
          salaryType,
          maxPrice,
          employmentType,
          postingDate,
          experienceLevel,
        }) => {
          return (
            jobLocation.toLowerCase() === selectedCategory.toLowerCase() ||
            salaryType.toLowerCase() === selectedCategory.toLowerCase() ||
            experienceLevel.toLowerCase() === selectedCategory.toLowerCase() ||
            employmentType.toLowerCase() === selectedCategory.toLowerCase() ||
            parseInt(maxPrice) <= parseInt(selectedCategory) ||
            postingDate >= selectedCategory
          );
        }
      );
    }

    return filteredData.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredItems(jobs, selectedCategory, query);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-4 py-12">
        <div className="bg-white p-4 rounded">
          <Sidebar
            handleClick={handleClick}
            handleRadioChange={handleRadioChange}
          />
        </div>

        <div className="bg-white p-4  rounded-sm col-span-2">
          <Jobs result={result} />
        </div>

        <div className="bg-white p-4 rounded">
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default Home;
