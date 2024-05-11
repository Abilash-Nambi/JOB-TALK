import React from "react";
import logo from "../../public/images/logo.jpg";
import { Link, NavLink } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa6";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import DropDown from "./DropDown";
import { useSelector } from "react-redux";

const Header = () => {
  const [isTrue, setIsTrue] = useState(false);
  const [onHover, setOnHover] = useState(false);
  const userDetials = useSelector((state) => state.user.user);
  // console.log("🚀 + Header + userDetials:", userDetials);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const userName = userDetials?.userName;
  const handleChange = () => {
    setIsTrue(!isTrue);
  };

  const navItemsEmployer = [
    {
      path: "/",
      title: "START A SEARCH",
    },
    {
      path: "/my-job",
      title: "VIEW YOUR JOBS",
    },
    {
      path: "/salary",
      title: "SALARY ESTIMATE",
    },
    {
      path: "/post-job",
      title: "POST A JOB",
    },
    {
      path: " ",
      title: "APPLICANTS APPLICATION",
    },
  ];
  const navItemsJodSeeker = [
    {
      path: "/",
      title: "START A SEARCH",
    },
    {
      path: "/my-job",
      title: "MY APPLICATION",
    },
  ];

  const dropDownMenu = [
    {
      path: "",
      title: `${userDetials?.email}`,
    },
  ];

  return (
    <header className="max-w-screen-2xl mx-auto xl:px-24 px-4">
      <nav className="flex justify-between py-4 items-center">
        <Link to="/" className="flex items-center text-black gap-2 text-2xl">
          <img src={logo} alt="" className="w-20 h-20" />
          {/* <span>Job Talk</span> */}
        </Link>
        {/* nav items for large devices */}

        <ul className="hidden md:flex gap-12">
          {isAuthenticated && userDetials.role === "Employer"
            ? navItemsEmployer.map((data, i) => (
                <li key={i} className="text-base">
                  <NavLink
                    to={`${data.path}`}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {data.title}
                  </NavLink>
                </li>
              ))
            : isAuthenticated &&
              userDetials.role === "Job Seeker" &&
              navItemsJodSeeker.map((data, i) => (
                <li key={i} className="text-base">
                  <NavLink
                    to={`${data.path}`}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {data.title}
                  </NavLink>
                </li>
              ))}
        </ul>

        {/* signin and signup */}

        <div className="hidden text-base text-primary font-medium space-x-5 md:block">
          {!isAuthenticated ? (
            <>
              <Link className="py-2 px-5 border rounded" to="/auth/sign-in">
                Log in
              </Link>
              <Link
                className="py-2 px-5 border rounded bg-blue text-white"
                to="/auth/sign-up"
              >
                Sign up
              </Link>
            </>
          ) : (
            <DropDown
              title={`${userName.toUpperCase()}`}
              avatar="true"
              dropDownMenu={dropDownMenu}
              avatarTitle={userName.slice(0, 2).toUpperCase()}
            />
          )}
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden block">
          <button onClick={handleChange}>
            {isTrue ? (
              <FaXmark className="w-5 h-5 text-primary" />
            ) : (
              <FaAlignRight className="w-5 h-5 text-primary" />
            )}
          </button>
        </div>
      </nav>

      {/* mobile menu*/}
      <div
        className={`px-4 bg-black py-5 text-white ${isTrue ? "" : "hidden"}`}
      >
        <ul>
          {isAuthenticated && userDetials.role === "Employer"
            ? navItemsEmployer.map((data, i) => (
                <li key={i} className="text-base">
                  <NavLink
                    to={`${data.path}`}
                    className={({ isActive }) => (isActive ? "active " : "")}
                  >
                    {data.title}
                  </NavLink>
                </li>
              ))
            : isAuthenticated &&
              userDetials.role === "Job Seeker" &&
              navItemsJodSeeker.map((data, i) => (
                <li key={i} className="text-base">
                  <NavLink
                    to={`${data.path}`}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {data.title}
                  </NavLink>
                </li>
              ))}
          <li>
            <Link to="/auth/sign-in" className="text-white">
              Log in
            </Link>
          </li>
          <li>
            <Link to="/auth/sign-up" className="text-white">
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
