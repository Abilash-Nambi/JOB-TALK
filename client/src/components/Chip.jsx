import React from "react";

const Chip = ({ title }) => {
  return (
    <div>
      <div className="inline-flex items-center bg-gray-200 text-gray-800 text-xs font-sm px-2 py-1 rounded-full">
        <span>{title}</span>
      </div>
    </div>
  );
};

export default Chip;
