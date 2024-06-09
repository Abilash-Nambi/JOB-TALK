import React from "react";
//import "ldrs/infinity";
import { InfinitySpin, ThreeDots } from "react-loader-spinner";

const CustomLoader = () => {
  return (
    <div
      aria-live="polite"
      aria-busy={true}
      className="items-center flex justify-center h-screen"
    >
      {/* <l-infinity
        size="55"
        stroke="4"
       stroke-length="0.15"
        bg-opacity="0.1"
        speed="1.3"
        color="#3575e2"
      ></l-infinity> */}
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

import "ldrs/dotWave";

export const Loader = () => {
  return (
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="#3575e2"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};
