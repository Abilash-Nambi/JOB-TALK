import React from "react";

const Button = ({ onClick, value, title, className, type }) => {
  return (
    <div>
      <button onClick={onClick} value={value} className={className} type={type}>
        {title}
      </button>
    </div>
  );
};

export default Button;
