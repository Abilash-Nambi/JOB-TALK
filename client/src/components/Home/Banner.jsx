import React from "react";
import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import Button from "../Button";
import useToast from "../../hooks/useToast";
import DropDown from "../DropDown";
import CustomDropDown from "../CustomDropDown";
import { Link } from "react-router-dom";

const Banner = ({ query, handleInputChange, data }) => {
  const { successToast, errorToast, warningToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const dropDownMenu = [
    {
      path: "",
      title: "Trivandrum",
    },
    {
      path: "",
      title: "Chennai",
    },
    {
      path: "",
      title: "Bengaluru",
    },
  ];

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,30,0.7)] to-[rgba(10,10,30,0.3)] "></div>
      <div className="container max-w-screen-2xl mx-auto xl:px-24 px-4 md:py-20 py-14 banner-background ">
        <form>
          <div className=" md:pt-5 md:pb-40 relative z-1 ">
            <h1 className="text-5xl font-bold text-white mb-3 ">
              Find your <span className="text-blue">new job</span> today
            </h1>
            <p className="text-lg text-white mb-8">
              Thousands of jobs in the computer, engineering and technology
              sectors are waiting for you
            </p>

            <div className="flex gap-2 md:gap-0 flex-wrap">
              <div className="flex rounded shadow-sm  md:w-1/2 w-full ring-1 ring-inset focus-within:ring-inset focus-within:ring-2 ">
                <input
                  value={query}
                  type="text"
                  placeholder="What are you looking for..."
                  className="block flex-1 border-0  py-1.5 pl-8 text-grey-900 placeholder:text-grey-400 sm:text-sm sm:leading-6  outline-none"
                  onChange={handleInputChange}
                />
                <IoIosSearch className="absolute mt-2.5 ml-2 text-grey-400" />
                {/* <DropDown title={"Location"} dropDownMenu={dropDownMenu} /> */}
              </div>

              {/* <div className="flex rounded shadow-sm  md:w-1/3 w-full ring-1 ring-inset focus-within:ring-inset focus-within:ring-2 rounded-e-none">
                <input
                  type="text"
                  placeholder="Location"
                  className="block flex-1 border-0  py-1.5 pl-8 text-grey-900 placeholder:text-grey-400 sm:text-sm sm:leading-6  outline-none"
                  onChange={handleInputChange}
                />
                <CiLocationOn className="absolute mt-2.5 ml-2 text-grey-400" />
              </div> */}

              <Button
                title="Search"
                className="text-white bg-blue px-8 rounded py-2 rounded-s-sm md:rounded-none"
                onClick={(e) => handleSubmit(e)}
              />
            </div>
            {data?.length >= 1 && query.length >= 1 && (
              <div>
                <ul className="bg-white lg:w-[50%] mt-1 p-3  rounded-md cursor-pointer absolute">
                  {data?.map((data) => (
                    <li>
                      <Link
                        to={`/job-details/${data._id}`}
                        className="hover:text-blue"
                      >
                        {data.jobTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Banner;
