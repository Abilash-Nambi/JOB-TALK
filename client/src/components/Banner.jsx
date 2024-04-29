import React from "react";
import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
const Banner = ({ query, handleInputChange }) => {
  return (
    <div className="container max-w-screen-2xl mx-auto xl:px-24 px-4 md:py-20 py-14">
      <h1 className="text-5xl font-bold text-primary mb-3">
        Find your <span className="text-blue">new job</span> today
      </h1>
      <p className="text-lg text-black/70 mb-8">
        Thousands of jobs in the computer, engineering and technology sectors
        are waiting for you
      </p>

      <form>
        <div className="flex gap-2 md:gap-0 flex-wrap">
          <div className="flex rounded shadow-sm  md:w-1/2 w-full ring-1 ring-inset focus-within:ring-inset focus-within:ring-2 ">
            <input
              value={query}
              type="text"
              placeholder="What are you looking for..."
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-grey-900 placeholder:text-grey-400 sm:text-sm sm:leading-6  outline-none"
              onChange={handleInputChange}
            />
            <IoIosSearch className="absolute mt-2.5 ml-2 text-grey-400" />
          </div>
          <div className="flex rounded shadow-sm  md:w-1/3 w-full ring-1 ring-inset focus-within:ring-inset focus-within:ring-2 rounded-e-none">
            <input
              type="text"
              placeholder="Location"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-grey-900 placeholder:text-grey-400 sm:text-sm sm:leading-6  outline-none"
              onChange={handleInputChange}
            />
            <CiLocationOn className="absolute mt-2.5 ml-2 text-grey-400" />
          </div>
          <button className="text-white bg-blue px-8 rounded py-2 rounded-s-sm md:rounded-none">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Banner;
