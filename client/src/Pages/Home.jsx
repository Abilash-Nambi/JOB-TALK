import React from "react";
import Banner from "../components/Home/Banner";
import { useState } from "react";
// import { useEffect } from "react";
// import Card from "../components/Card";
// import Jobs from "./Jobs";
// import Sidebar from "../components/sidebar/Sidebar";
// import NewsLetter from "../components/NewsLetter";
// import axios from "axios";
// import { getAllJob } from "../Services/api/JobEndPoints";
import Category from "../components/Home/Category";
import IntroSection from "../components/Home/IntroSection";

const Home = () => {
  const [query, setQuerry] = useState("");
  // const [selectedCategory, setSelectedCategory] = useState(" ");
  // const [jobs, setJobs] = useState([]);
  // //console.log("🚀 + Home + jobs:", jobs);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await getAllJob();
  //     setJobs(response.data.data);
  //   } catch (error) {
  //     console.log("🚀 + fetchData + error:", error);
  //   }
  // };

  const handleInputChange = (e) => {
    setQuerry((prev) => e.target.value);
  };

  // // filtered jobs
  // const filteredJobs = jobs?.filter((data) =>
  //   data?.jobTitle.toLowerCase().includes(query.toLowerCase())
  // );
  // //Radio filtering

  // const handleRadioChange = (e) => {
  //   setSelectedCategory(e.target.value);
  // };

  // //Button based filtering
  // const handleClick = (e) => {
  //   setSelectedCategory(e.target.value);
  // };

  // //main func
  // const filteredItems = () => {
  //   let filteredData = jobs;
  //   if (query) {
  //     filteredData = filteredJobs;
  //   }
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
      <Banner query={query} handleInputChange={handleInputChange} />
      <Category />
      <IntroSection />
    </div>
  );
};

export default Home;
