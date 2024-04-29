import React from "react";

const Button = ({ onClick, value, title, className }) => {
  return (
    <div>
      <button onClick={onClick} value={value} className={className}>
        {title}
      </button>
    </div>
  );
};

export default Button;
