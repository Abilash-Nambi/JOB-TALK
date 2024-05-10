import React from "react";

const Button = ({ onClick, value, title, className, type, icon, ...rest }) => {
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
        {icon && <span className="">{icon}</span>}
      </button>
    </div>
  );
};

export default Button;
