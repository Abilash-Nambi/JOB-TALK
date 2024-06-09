import React from "react";
//import "ldrs/infinity";
import { InfinitySpin } from "react-loader-spinner";

const CustomLoader = () => {
  return (
    // <div
    //   aria-live="polite"
    //   aria-busy={true}
    //   className="items-center flex justify-center h-screen"
    // >
    //   <l-infinity
    //     size="55"
    //     stroke="4"
    //     stroke-length="0.15"
    //     bg-opacity="0.1"
    //     speed="1.3"
    //     color="#3575e2"
    //   ></l-infinity>
    // </div>
    <InfinitySpin
      visible={true}
      width="200"
      color="#4fa94d"
      ariaLabel="infinity-spin-loading"
    />
  );
};

export default CustomLoader;

import "ldrs/dotWave";

export const Loader = () => {
  return <l-dot-wave size="47" speed="1" color="#3575e2"></l-dot-wave>;
};
