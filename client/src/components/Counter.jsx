import React from "react";
import CountUp, { useCountUp } from "react-countup";

const Counter = ({ id, end }) => {
  useCountUp({
    ref: `${id}`,
    end: end,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
    duration: 5,
  });
  return (
    <div>
      {/* <CountUp end={100} enableScrollSpy /> */}
      <span id={id} />
    </div>
  );
};

export default Counter;
