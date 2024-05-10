import React from "react";

const Avatar = ({ title }) => {
  return (
    <div>
      <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-medium text-gray-600 dark:text-gray-300">
          {title}
        </span>
      </div>
    </div>
  );
};

export default Avatar;
