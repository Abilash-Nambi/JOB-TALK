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
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const userName = userDetials?.userName;
  const handleChange = () => {
    setIsTrue(!isTrue);
  };

  const navItems = [
    {
      path: "/",
      title: "Start a search",
    },
    {
      path: "/my-job",
      title: "My Jobs",
    },
    {
      path: "/salary",
      title: "Salary Estimate",
    },
    {
      path: "/post-job",
      title: "Post A Job",
    },
  ];

  const dropDownMenu = [
    // {
    //   path: "/sign-in",
    //   title: "Log Out",
    // },
  ];

  return (
    <header className="max-w-screen-2xl mx-auto xl:px-24 px-4">
      <nav className="flex justify-between py-4 items-center">
        <a href="/" className="flex items-center text-black gap-2 text-2xl">
          <img src={logo} alt="" className="w-20 h-20" />
          {/* <span>Job Talk</span> */}
        </a>
        {/* nav items for large devices */}

        <ul className="hidden md:flex gap-12">
          {isAuthenticated &&
            navItems.map((data, i) => (
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
              <Link className="py-2 px-5 border rounded" to="/sign-in">
                Log in
              </Link>
              <Link
                className="py-2 px-5 border rounded bg-blue text-white"
                to="/sign-up"
              >
                Sign up
              </Link>
            </>
          ) : (
            <DropDown
              title={`${userName}`}
              avatar="true"
              dropDownMenu={dropDownMenu}
              avatarTitle={userName}
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
          {navItems.map((data, i) => (
            <li key={i} className="text-base text-white ">
              <NavLink
                to={`${data.path}`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {data.title}
              </NavLink>
            </li>
          ))}
          {dropDownMenu.map((data, i) => (
            <li key={i} className="text-base text-white ">
              <NavLink
                to={`${data.path}`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {data.title}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/sign-in" className="text-white">
              Log in
            </Link>
          </li>
          <li>
            <Link to="/sign-up" className="text-white">
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
