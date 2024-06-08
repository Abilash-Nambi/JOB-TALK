import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../../components/Card";
import Sidebar from "../../components/Sidebar/Sidebar";
import NewsLetter from "../../components/NewsLetter";
import { getAllJob } from "../../Services/api/JobEndPoints";
import CardSkeleton from "../../components/Skeleton/CardSkeleton";
import Pagination from "../../components/Pagination";
import useScrollToTop from "../../Hooks/useScrollToTop";
import { useSelector } from "react-redux";

const Jobs = () => {
  const [selectedCategory, setSelectedCategory] = useState(" ");
  //console.log("🚀 + Jobs + selectedCategory:", selectedCategory);
  const [jobs, setJobs] = useState([]);
  const [totalPage, setTotalPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [skeleton, setskeleton] = useState(false);
  const employment = useSelector((state) => state.filter.employment);
  const experience = useSelector((state) => state.filter.experience);
  const salary = useSelector((state) => state.filter.salary);
  //console.log("🚀 + Jobs + experience:", salary);

  useEffect(() => {
    fetchData();
    useScrollToTop();
  }, [currentPage, employment, experience, salary]);

  const fetchData = async () => {
    setskeleton(true);
    try {
      const response = await getAllJob(
        currentPage,
        employment,
        experience,
        salary
      );
      setJobs(response?.data?.data);
      setTotalPage(response?.data?.totalPage);
      setCount(response?.data.count);

      setTimeout(() => {
        setskeleton(false);
      }, 2000);
    } catch (error) {
      console.log("🚀 + fetchData + error:", error);
    }
  };

  const handleRadioChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  //Button based filtering
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-4 py-12">
        <div className="bg-white p-4 rounded">
          <Sidebar
            handleClick={handleClick}
            handleRadioChange={handleRadioChange}
          />
        </div>

        <div className="bg-white p-4  rounded-sm col-span-2 ">
          <h3 className="text-lg font-bold mb-2">{count} Jobs</h3>

          {jobs?.map((data, i) =>
            skeleton ? <CardSkeleton /> : <Card key={i} data={data} />
          )}

          <Pagination
            totalPages={totalPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>

        <div className="bg-white p-4 rounded">
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default Jobs;
