import React from "react";

const Button = ({ onClick, value, title }) => {
  return (
    <div>
      <button
        onClick={onClick}
        value={value}
        className="px-4 border text-base hover:bg-blue hover:text-white"
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
