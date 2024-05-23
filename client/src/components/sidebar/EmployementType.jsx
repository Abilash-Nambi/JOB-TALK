import React from "react";
import InputField from "../InputField";
import { useDispatch } from "react-redux";
import { setEmployment } from "../../Store/filterSlice";

const EmployementType = () => {
  const dispatch = useDispatch();
  const handleRadioChange = (e) => {
    dispatch(setEmployment(e.target.value));
  };
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Type of Employement</h4>

      <div>
        <InputField
          onChange={handleRadioChange}
          value="Full time"
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
          value="Part time"
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
