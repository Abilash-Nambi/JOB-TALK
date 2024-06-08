import React from "react";
import image from "../assets/images/Nodata.png";

const NoData = ({ text }) => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <p className="text-2xl pt-2">{text}</p>
      <img src={image} alt="no-data" className="max-w-[27rem] object-cover" />
    </div>
  );
};

export default NoData;
