import React, { useState } from "react";
import jobCategory from "../Assets/datas/dataCategory";

const Category = () => {
  const [dataBlock] = useState({
    title: "Browse by category",
    text: "Recruitment Made Easy in 100 seconds",
  });
  return (
    <div className="max-w-screen-2xl mx-auto xl:px-24 px-4">
      <div className="md:pt-16 md:pb-10">
        <h1 className="text-4xl font-bold">Browse by category</h1>
        <h2 className="text-primary/70 pt-3">
          Recruitment Made Easy in 100 seconds
        </h2>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-6 ">
        {jobCategory.map((data) => (
          <div className="flex justify-center">
            <div className="block min-w-[18rem] rounded-lg bg-secondary text-primary shadow-secondary-1 border hover:bg-blue hover:cursor-pointer ">
              <div className="p-6 hover:text-white">
                <h5 className="mb-2 text-xl font-medium leading-tight">
                  {data.name}
                </h5>
                <p className="  text-sm ">
                  {data.jobsAvailable} Jobs available
                </p>
                <p className=" pt-2 text-sm pr-3 pb-3 hover:text-white">
                  Explore more
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
