import React from "react";
import InputField from "../InputField";
import { useDispatch, useSelector } from "react-redux";
import { setEmployment } from "../../Store/filterSlice";

const EmployementType = () => {
  const dispatch = useDispatch();
  const employment = useSelector((state) => state.filter.employment);
  const handleRadioChange = (e) => {
    dispatch(setEmployment(e.target.value));
  };
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Type of Employement</h4>

      <div>
        <InputField
          onChange={handleRadioChange}
          value=" "
          title="All"
          name="test5"
          id="test5"
          checked={employment === " "}
        />
        <InputField
          onChange={handleRadioChange}
          value="Full time"
          title="Full-time"
          name="test5"
          id="test5"
          checked={employment === "Full time"}
        />
        <InputField
          onChange={handleRadioChange}
          value="Temporary"
          title="Temporary"
          name="test5"
          id="test5"
          checked={employment === "Temporary"}
        />
        <InputField
          onChange={handleRadioChange}
          value="Part time"
          title="Part-time"
          name="test5"
          id="test5"
          checked={employment === "Part time"}
        />
        <InputField
          onChange={handleRadioChange}
          value="Remote"
          title="Remote"
          name="test5"
          id="test5"
          checked={employment === "Remote"}
        />
      </div>
    </div>
  );
};

export default EmployementType;
