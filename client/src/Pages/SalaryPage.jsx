import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { useState } from "react";
import { useEffect } from "react";

const SalaryPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("salary.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container max-w-screen-2xl mx-auto xl:px-24 px-4 ">
      <BreadCrumb title={"Salary Estimate"} />
      <div className="mt-5">
        <div className="p-2 text-center mb-2 ">
          <input
            type="text"
            name="search"
            id="search"
            className=" border py-2 pl-3 focus:outline-none lg:w-6/12 mb-4 w-full"
          />
          <button className="bg-blue text-white font-semibold px-8 py-2 rounded-sm mb-4">
            Search
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 my-12 items-center ">
        {data.map((data) => (
          <div className="shadow px-4 py-8">
            <h4 className="font-semibold text-xl">{data.title}</h4>
            <p className="my-2 font-medium text-blue text-lg">{data.salary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalaryPage;
