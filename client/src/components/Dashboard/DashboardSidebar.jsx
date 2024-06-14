import React from "react";
import logo from "../../../public/images/logo.png";
const DashboardSidebar = () => {
  return (
    <div>
      <div className="items-center flex ">
        <img src={logo} alt="" className="w-20 " />
        <h1 className="text-white text-lg font-bold pb-3">Jobtalk DashBoard</h1>
      </div>
      <div></div>
    </div>
  );
};

export default DashboardSidebar;
