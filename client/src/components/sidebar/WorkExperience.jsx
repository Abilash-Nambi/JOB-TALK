import React from "react";
import InputField from "../InputField";
import { useDispatch, useSelector } from "react-redux";
import { setExperience } from "../../Store/filterSlice";

const WorkExperience = () => {
  const dispatch = useDispatch();
  const experience = useSelector((state) => state.filter.experience);
  const handleRadioChange = (e) => {
    dispatch(setExperience(e.target.value));
  };
  return (
    <div>
      <h4 className="text-lg font-medium mb-2"> Experience</h4>

      <div>
        <InputField
          onChange={handleRadioChange}
          value=" "
          title="Any experience"
          name="test4"
          id="test4"
          checked={experience === " "}
        />
        <InputField
          onChange={handleRadioChange}
          value="Internship"
          title="Internship"
          name="test4"
          id="test4"
          checked={experience === "Internship"}
        />
        <InputField
          onChange={handleRadioChange}
          value="Work remotely"
          title="Work remotely"
          name="test4"
          id="test4"
          checked={experience === "Work remotely"}
        />
      </div>
    </div>
  );
};

export default WorkExperience;
