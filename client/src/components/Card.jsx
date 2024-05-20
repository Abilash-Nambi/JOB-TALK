import React from "react";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import noImage from "../Assets/images/noImage.jpg";
import { FaArrowRight } from "react-icons/fa6";
import Button from "./Button";

const Card = ({ data }) => {
  const {
    companyName,
    jobTitle,
    companyLogo,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    postingDate,
    description,
    employmentType,
    _id,
  } = data;
  return (
    <div>
      <section className="card hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] delay-150">
        <Link to={"/"} className="flex gap-4 flex-col sm:flex-row items-start">
          {companyLogo ? (
            <img src={companyLogo} alt="" className="w-20 h-20" />
          ) : (
            <img src={noImage} alt="" className="w-20 h-20" />
          )}

          <div>
            <h4 className="text-blue mb-1 	text-transform: capitalize">
              {companyName}
            </h4>
            <h3 className="text-lg font-bold mb-2 text-primary">{jobTitle}</h3>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="flex items-center gap-2 text-primary/70">
                <CiLocationOn />
                {jobLocation}
              </span>
              <span className="flex items-center gap-2">
                <MdOutlineAccessTime />
                {employmentType}
              </span>
              <span className="flex items-center gap-2">
                <RiMoneyDollarCircleLine />
                {minPrice}-{maxPrice}k
              </span>
              <span className="flex items-center gap-2">
                <SlCalender />
                {postingDate}
              </span>
            </div>
            <p className="text-base line-clamp-2  text-primary/70">
              {description}
            </p>
            <Link to={`/job-details/${_id}`} className="justify-end flex">
              <Button
                title="VIEW JOB"
                icon={<FaArrowRight />}
                className="bg-blue text-white px-2 py-1  text-xs flex gap-2 items-center mt-2 rounded-sm hover:bg-[#172554] "
              />
            </Link>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Card;
