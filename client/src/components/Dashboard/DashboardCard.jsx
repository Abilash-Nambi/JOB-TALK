import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
const DashboardCard = ({ title, data }) => {
  return (
    <div>
      <div className="h-[150px] w-[250px] bg-white rounded-lg shadow-md p-4 text-center">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>

        <span className="flex flex-row items-center justify-center">
          <FaLongArrowAltUp className="text-green-500" />
          <h1 className="text-5xl text-gray-600">{data}</h1>
        </span>
      </div>
    </div>
  );
};

export default DashboardCard;
