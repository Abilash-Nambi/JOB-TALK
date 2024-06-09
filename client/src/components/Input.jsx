import React from "react";

const Input = ({ className, value, onChange, id, placeholder, type }) => {
  return (
    <input
      type={type || "text"}
      className={className}
      value={value}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
