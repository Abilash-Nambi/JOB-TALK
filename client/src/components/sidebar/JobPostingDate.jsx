import React from "react";
import InputField from "../InputField";

const JobPostingDate = ({ handleRadioChange }) => {
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
          value=" "
          title="All Date"
          name="test3"
          id="test3"
        />
        <InputField
          onChange={handleRadioChange}
          value={lastTwentyFourHour}
          title="Last 24 hour"
          name="test3"
          id="test3"
        />
        <InputField
          onChange={handleRadioChange}
          value={lastSeveDays}
          title="last 7 Days"
          name="test3"
          id="test3"
        />
        <InputField
          onChange={handleRadioChange}
          value={lastThirtyDays}
          title={"Last Month"}
          name="test3"
          id="test3"
        />
      </div>
    </div>
  );
};

export default JobPostingDate;
