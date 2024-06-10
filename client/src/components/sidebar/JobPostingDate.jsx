import React from "react";
import InputField from "../InputField";
import { useDispatch, useSelector } from "react-redux";
import { setDatePosted } from "../../Store/filterSlice";

const JobPostingDate = () => {
  const dispatch = useDispatch();
  const datePosted = useSelector((state) => state.filter.datePosted);
  console.log("🚀 + JobPostingDate + datePosted:", datePosted);
  const handleRadioChange = (e) => {
    dispatch(setDatePosted(e.target.value));
  };
  const now = new Date();

  const lastTwentyFourHour = new Date(now - 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);
  const lastSeveDays = new Date(now - 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);
  const lastThirtyDays = new Date(now - 30 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);

  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Date of Posting</h4>

      <div>
        <InputField
          onChange={handleRadioChange}
          checked={datePosted === " "}
          title="All Date"
          name="test3"
          id="test3"
          value={" "}
        />
        <InputField
          onChange={handleRadioChange}
          checked={datePosted === lastTwentyFourHour.toString()}
          title="Last 24 hour"
          name="test3"
          id="test3"
          value={lastTwentyFourHour}
        />
        <InputField
          onChange={handleRadioChange}
          checked={datePosted === lastSeveDays.toString()}
          title="last 7 Days"
          name="test3"
          id="test3"
          value={lastSeveDays}
        />
        <InputField
          onChange={handleRadioChange}
          checked={datePosted === lastThirtyDays.toString()}
          title={"Last Month"}
          name="test3"
          id="test3"
          value={lastThirtyDays}
        />
      </div>
    </div>
  );
};

export default JobPostingDate;
