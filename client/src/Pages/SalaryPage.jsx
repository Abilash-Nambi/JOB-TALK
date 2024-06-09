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

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 my-12 items-center ">
        {data.map((data) => (
          <div className="shadow px-4 py-8 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] delay-150 ">
            <h4 className="font-semibold text-xl">{data.title}</h4>
            <p className="my-2 font-medium text-blue text-lg">{data.salary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalaryPage;
