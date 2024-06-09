import React from "react";
import { InfinitySpin, ThreeDots } from "react-loader-spinner";

const CustomLoader = () => {
  return (
    <div
      aria-live="polite"
      aria-busy={true}
      className="items-center flex justify-center h-screen"
    >
      <InfinitySpin
        visible={true}
        width="200"
        color="#3575e2"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default CustomLoader;

export const Loader = () => {
  return (
    <ThreeDots
      visible={true}
      height="50"
      width="50"
      color="#3575e2"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};
