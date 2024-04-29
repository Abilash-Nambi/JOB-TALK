import React from "react";

const InputField = ({ onChange, value, name, title, id }) => {
  return (
    <div>
      <label className="sidebar-label-container">
        <input
          value={value}
          type="radio"
          name={name}
          id={id}
          onChange={onChange}
        />
        <span className="checkmark"></span>
        {title}
      </label>
    </div>
  );
};

export default InputField;
