import React from "react";
import InputField from "../InputField";

const EmployementType = ({ handleRadioChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Type of Employement</h4>

      <div>
        <InputField
          onChange={handleRadioChange}
          value=" "
          title="Any experience"
          name="test5"
          id="test5"
        />
        <InputField
          onChange={handleRadioChange}
          value="Full-time"
          title="Full-time"
          name="test5"
          id="test5"
        />
        <InputField
          onChange={handleRadioChange}
          value="Temporary"
          title="Temporary"
          name="test5"
          id="test5"
        />
        <InputField
          onChange={handleRadioChange}
          value="Part-time"
          title="Part-time"
          name="test5"
          id="test5"
        />
        <InputField
          onChange={handleRadioChange}
          value="Remote"
          title="Remote"
          name="test5"
          id="test5"
        />
      </div>
    </div>
  );
};

export default EmployementType;
