import React from "react";

const Button = ({ onClick, value, title, className, type, ...rest }) => {
  return (
    <div>
      <button
        onClick={onClick}
        value={value}
        className={className}
        type={type}
        {...rest}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
