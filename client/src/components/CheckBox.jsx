import React from "react";

const CheckBox = ({ title, value, onChange }) => {
  return (
    <div>
      <div className="flex items-center me-4">
        <input
          onChange={onChange}
          id="red-checkbox"
          type="checkbox"
          value={value}
          className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="red-checkbox"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {title}
        </label>
      </div>
    </div>
  );
};

export default CheckBox;
