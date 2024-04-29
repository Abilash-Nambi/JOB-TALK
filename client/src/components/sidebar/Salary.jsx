import React from "react";
import Button from "../Button";
import InputField from "../InputField";

const Salary = ({ handleRadioChange, handleClick }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Salary</h4>
      <div className="flex flex-wrap mb-2">
        <Button
          onClick={handleClick}
          value=" "
          title="Hourly"
          className="px-4 border text-base hover:bg-blue hover:text-white"
        />
        <Button
          onClick={handleClick}
          value="Monthly"
          title="Monthly"
          className="px-4 border text-base hover:bg-blue hover:text-white"
        />
        <Button
          onClick={handleClick}
          value="Yearly"
          title="Yearly"
          className="px-4 border text-base hover:bg-blue hover:text-white"
        />
      </div>

      <div>
        <InputField
          onChange={handleRadioChange}
          value=" "
          title="All"
          name="test2"
          id="test2"
        />
        <InputField
          onChange={handleRadioChange}
          value={30}
          title="< 30000k"
          name="test2"
          id="test2"
        />
        <InputField
          onChange={handleRadioChange}
          value={50}
          title="< 50000k"
          name="test2"
          id="test2"
        />
        <InputField
          onChange={handleRadioChange}
          value={80}
          title="< 80000k"
          name="test2"
          id="test2"
        />
        <InputField
          onChange={handleRadioChange}
          value={100}
          title="< 100000k"
          name="test2"
          id="test2"
        />
      </div>
    </div>
  );
};

export default Salary;
