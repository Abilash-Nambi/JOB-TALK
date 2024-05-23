import React from "react";
import Button from "../Button";
import InputField from "../InputField";
import { useDispatch } from "react-redux";
import { setSalary } from "../../Store/filterSlice";
import { useSelector } from "react-redux";

const Salary = () => {
  const dispatch = useDispatch();
  const salary = useSelector((state) => state.filter.salary);
  const handleRadioChange = (e) => {
    dispatch(setSalary(e.target.value));
  };
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Salary</h4>
      {/* <div className="flex flex-wrap mb-2">
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
      </div> */}

      <div>
        <InputField
          onChange={handleRadioChange}
          value=" "
          title="All"
          name="test2"
          id="test2"
          checked={salary == null}
        />
        <InputField
          onChange={handleRadioChange}
          value={30000}
          title="> 30000k"
          name="test2"
          id="test2"
          checked={salary == 30000}
        />
        <InputField
          onChange={handleRadioChange}
          value={50000}
          title="> 50000k"
          name="test2"
          id="test2"
          checked={salary == 50000}
        />
        <InputField
          onChange={handleRadioChange}
          value={80000}
          title="> 80000k"
          name="test2"
          id="test2"
          checked={salary == 80000}
        />
        <InputField
          onChange={handleRadioChange}
          value={100000}
          title="> 100000k"
          name="test2"
          id="test2"
          checked={salary == 100000}
        />
      </div>
    </div>
  );
};

export default Salary;
