import React from "react";
import logo from "../../../public/images/logo.png";
import avatar from "../../assets/images/avatar.jpeg";
import { Link } from "react-router-dom";

const DashboardSidebar = () => {
  const dashBoardItems = [
    {
      path: "/admin/dashboard/home",
      title: "HOME",
    },
    {
      path: "/admin/dashboard/all-jobs",
      title: "ALL JOBS",
    },
    {
      path: "/admin/dashboard/active",
      title: "ALL ACTIVE JOBS",
    },
    {
      path: "/admin/dashboard/in-active",
      title: "ALL INACTIVE JOBS",
    },
  ];
  return (
    <div>
      <div className="items-center flex ">
        <img src={logo} alt="" className="w-20 " />
        <h1 className="text-white text-lg font-bold pb-3">Jobtalk DashBoard</h1>
      </div>
      <div className="items-center flex flex-col justify-center">
        <img src={avatar} alt="" className="w-[50%] rounded-full" />
        <h1 className="text-white font-bold">Welcome Admin</h1>
      </div>
      <div className="pt-3">
        <ul className="items-center flex flex-col justify-center gap-5">
          {dashBoardItems.map((data, index) => (
            <li key={index} className="w-full">
              <Link to={`${data.path}`} className="text-white block py-2">
                {data.title}
              </Link>
              <span className="block border-t border-white-300 mt-2"></span>
            </li>
          ))}
        </ul>

        {}
      </div>
    </div>
  );
};

export default DashboardSidebar;
