import OtpInput from "react-otp-input";
import React from "react";

const CustomOtpInput = ({ otp, setOtp }) => {
  return (
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
      inputStyle={{
        width: "38px",
        height: "38px",
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none",
        backgroundColor: "transparent",
        outline: "none",
        border: "1px solid black",
      }}
    />
  );
};

export default CustomOtpInput;
