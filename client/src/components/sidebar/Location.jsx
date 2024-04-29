import React from "react";
import InputField from "../InputField";

const Location = ({ handleRadioChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>

      <div>
        <InputField
          onChange={handleRadioChange}
          value=" "
          title="All"
          name="test"
          id="test"
        />
        <InputField
          onChange={handleRadioChange}
          value="london"
          title="London"
          name="test"
          id="test"
        />
        <InputField
          onChange={handleRadioChange}
          value="Seattle"
          title="Seattle"
          name="test"
          id="test"
        />
        <InputField
          onChange={handleRadioChange}
          value="Boston"
          title="Boston"
          name="test"
          id="test"
        />
        <InputField
          onChange={handleRadioChange}
          value="San Francisco"
          title="San Francisco"
          name="test"
          id="test"
        />
        <InputField
          onChange={handleRadioChange}
          value="Brussels"
          title="Brussels"
          name="test"
          id="test"
        />
      </div>
    </div>
  );
};

export default Location;
