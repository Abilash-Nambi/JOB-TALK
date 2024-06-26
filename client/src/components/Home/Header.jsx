import React from "react";
import logo from "../../../public/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa6";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import DropDown from "../DropDown";
import { useSelector } from "react-redux";
import CustomLoader from "../CustomLoader";
import useLoader from "../../hooks/useLoader";
import useRouter from "../../hooks/useRouter";

const Header = () => {
  const [isTrue, setIsTrue] = useState(false);
  const [onHover, setOnHover] = useState(false);
  const { isLoading, showLoader, hideLoader } = useLoader();
  const { navigate } = useRouter();
  const userDetials = useSelector((state) => state.user.user);
  // console.log("🚀 + Header + userDetials:", userDetials);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const [show, setshow] = useState(true);

  const userName = userDetials?.userName;
  const handleChange = () => {
    setIsTrue(!isTrue);
  };

  const loaderFunc = (e) => {
    showLoader();
    if (e === "signUp") {
      setTimeout(() => {
        hideLoader(), navigate("/auth/sign-up");
      }, 3000);
    } else {
      setTimeout(() => {
        hideLoader(), navigate("/auth/sign-in");
      }, 3000);
    }
  };

  /* Desktop Menu */

  const navItemsEmployer = [
    {
      path: "/",
      title: "HOME",
    },
    {
      path: "/all-jobs",
      title: "ALL JOBS",
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
      path: "/My-application",
      title: "APPLICANTS APPLICATION",
    },
    {
      path: "/pricing",
      title: "SUBSCRIPTION",
    },
  ];
  const navItemsJodSeeker = [
    {
      path: "/",
      title: "HOME",
    },
    {
      path: "/all-jobs",
      title: "FIND YOUR NEXT JOB",
    },
    {
      path: "/My-application",
      title: "MY APPLICATION",
    },
    {
      path: "/salary",
      title: "SALARY ESTIMATE",
    },
  ];
  const navItemsAllUser = [
    {
      path: "/",
      title: "HOME",
    },
    {
      path: "/all-jobs",
      title: "FIND YOUR NEXT JOB",
    },
  ];

  const dropDownMenu = [
    {
      path: "",
      title: `${userDetials?.email}`,
    },
  ];

  return (
    <>
      {isLoading ? (
        <CustomLoader />
      ) : (
        <header className="max-w-screen-2xl  xl:px-24 px-4 ">
          <nav className="flex justify-between items-center">
            <Link
              to="/"
              className="flex items-center text-black gap-2 text-2xl"
            >
              <img src={logo} alt="" className="w-20 h-20" />
              {/* <span>Job Talk</span> */}
            </Link>
            {/* nav items for large devices */}

            <ul className="hidden md:flex gap-12">
              {isAuthenticated && userDetials?.role === "Employer"
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
                  userDetials?.role === "Job Seeker" &&
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
              {!isAuthenticated &&
                navItemsAllUser.map((data, i) => (
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
                  <Link
                    className="py-2 px-5 border rounded"
                    //to="/auth/sign-in"
                    onClick={loaderFunc}
                  >
                    Log in
                  </Link>
                  <Link
                    className="py-2 px-5 border rounded bg-blue text-white"
                    //to="/auth/sign-up"
                    onClick={() => loaderFunc("signUp")}
                  >
                    Sign up
                  </Link>
                </>
              ) : (
                <DropDown
                  title={`${userName?.toUpperCase()}`}
                  avatar="true"
                  dropDownMenu={dropDownMenu}
                  avatarTitle={userName?.slice(0, 2).toUpperCase()}
                />
              )}
            </div>

            {/* Mobile toggle */}
            <div className="md:hidden block relative">
              {isAuthenticated && (
                <DropDown
                  title={`${userName?.toUpperCase()}`}
                  avatar="true"
                  dropDownMenu={dropDownMenu}
                  avatarTitle={userName?.slice(0, 2).toUpperCase()}
                />
              )}

              <button onClick={handleChange}>
                {isTrue ? (
                  <FaXmark className="w-5 h-5 text-primary ml-2" />
                ) : (
                  <FaAlignRight className="w-5 h-5 text-primary ml-2" />
                )}
              </button>
            </div>
          </nav>

          {/* mobile menu*/}
          <div
            className={`absolute z-10 w-full px-4 bg-[azure] py-5 text-white ${
              isTrue ? "" : "hidden"
            }`}
          >
            <ul>
              {isAuthenticated && userDetials?.role === "Employer" ? (
                <>
                  {navItemsEmployer.map((data, i) => (
                    <li key={i} className="text-base ">
                      <NavLink
                        to={`${data.path}`}
                        className={({ isActive }) =>
                          isActive ? "active " : ""
                        }
                      >
                        {data.title}
                      </NavLink>
                    </li>
                  ))}
                </>
              ) : (
                isAuthenticated &&
                userDetials?.role === "Job Seeker" &&
                navItemsJodSeeker.map((data, i) => (
                  <li key={i} className="text-base">
                    <NavLink
                      to={`${data.path}`}
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      {data.title}
                    </NavLink>
                  </li>
                ))
              )}

              {!isAuthenticated && (
                <>
                  <li>
                    <Link to="/auth/sign-in" onClick={loaderFunc}>
                      Log in
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/auth/sign-up"
                      onClick={() => loaderFunc("signUp")}
                    >
                      Sign up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
