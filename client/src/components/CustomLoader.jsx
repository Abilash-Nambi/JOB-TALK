import React from "react";
import "ldrs/infinity";

const CustomLoader = ({ isLoading }) => {
  console.log("🚀 + CustomLoader + isLoading:", isLoading);
  return (
    <div aria-live="polite" aria-busy={isLoading}>
      {isLoading && (
        <l-infinity
          size="55"
          stroke="4"
          stroke-length="0.15"
          bg-opacity="0.1"
          speed="1.3"
          color="#3575e2"
        ></l-infinity>
      )}
    </div>
  );
};

export default CustomLoader;
