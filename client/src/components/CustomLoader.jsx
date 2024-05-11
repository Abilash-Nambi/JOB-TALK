import React from "react";
import "ldrs/infinity";

const CustomLoader = () => {
  return (
    <div
      aria-live="polite"
      aria-busy={true}
      className="items-center flex justify-center h-screen"
    >
      <l-infinity
        size="55"
        stroke="4"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="1.3"
        color="#3575e2"
      ></l-infinity>
    </div>
  );
};

export default CustomLoader;
