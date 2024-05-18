import React, { useState } from "react";
import jobCategory from "../Assets/datas/dataCategory";
import { FcAdvance } from "react-icons/fc";

const Category = () => {
  const [dataBlock] = useState({
    title: "Browse by category",
    text: "Recruitment Made Easy in 100 seconds",
  });
  return (
    <div className="max-w-screen-2xl mx-auto xl:px-24 px-4">
      <div className="md:pt-16 md:pb-10 pt-5 pb-5">
        <h1 className="text-4xl font-bold">Browse by category</h1>
        <h2 className="text-primary/70 pt-3">
          Recruitment Made Easy in 100 seconds
        </h2>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-6 ">
        {jobCategory.map((data) => (
          <div className="flex justify-center ">
            <div className="block min-w-[18rem] rounded-lg bg-secondary text-primary shadow-secondary-1 border hover:bg-blue hover:cursor-pointer transition-colors duration-300 ease-in-out bg-[#f5f5f5]">
              <div className="p-6 hover:text-white group">
                <h5 className="mb-2 text-xl font-medium leading-tight group-hover:text-white">
                  {data.name}
                </h5>
                <p className="text-sm group-hover:text-white">
                  {data.jobsAvailable} Jobs available
                </p>
                <p className="pt-2 text-sm pr-3 pb-3 flex items-center text-blue group-hover:text-white">
                  Explore more
                  <span className="pl-4 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 fill-current group-hover:text-white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                    </svg>
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
