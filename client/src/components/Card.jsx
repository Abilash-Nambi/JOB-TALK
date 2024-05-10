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
  } = data;
  return (
    <div>
      <section className="card">
        <Link to={"/"} className="flex gap-4 flex-col sm:flex-row items-start">
          {companyLogo ? (
            <img src={companyLogo} alt="" className="w-20 h-20" />
          ) : (
            <img src={noImage} alt="" className="w-20 h-20" />
          )}

          <div>
            <h4 className="text-primary mb-1 ">{companyName}</h4>
            <h3 className="text-lg font-semibold mb-2">{jobTitle}</h3>
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
            <p className="text-base  text-primary/70">{description}</p>
            <Link to="/job-details" className="justify-end flex">
              <Button
                title="VIEW JOB"
                icon={<FaArrowRight />}
                className="bg-blue text-white px-2 py-1  text-xs flex gap-2 items-center mt-2 rounded-sm "
              />
            </Link>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Card;
