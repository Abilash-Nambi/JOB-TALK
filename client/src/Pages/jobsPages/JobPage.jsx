import React, { useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import { FaSuitcase } from "react-icons/fa";
import Button from "../../components/Button";
import { useEffect } from "react";
import { getSingleJob } from "../../Services/api/JobEndPoints";
import { Link, useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { date } from "../../Utils/dateFormat";
import { AiTwotoneHourglass } from "react-icons/ai";
import JobSkeleton from "../../components/Skeleton/JobSkeleton";
import useScrollToTop from "../../hooks/useScrollToTop";
import { useSelector } from "react-redux";

const JobPage = () => {
  const [job, setJob] = useState({});
  const [loading, setLoading] = useState(true);
  let { id } = useParams();

  const { user } = useSelector((state) => state?.user);
  console.log("🚀 + JobPage + user:", user);

  useEffect(() => {
    fetchData();
    useScrollToTop();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getSingleJob(id);
      setJob(response?.data?.data);

      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } catch (error) {
      console.log("🚀 + fetchData + error:", error);
    }
  };

  return (
    <>
      {loading ? (
        <JobSkeleton />
      ) : (
        <div className="container max-w-screen-2xl mx-auto xl:px-24 px-4 h-screen">
          <div>
            <BreadCrumb title={"Job Details Page"} />
          </div>
          <div className="flex-row flex  justify-between  border p-3 mt-2">
            <div className="space-y-2">
              <h5 className="text-base font-bold mt-2">Job ID:5626</h5>
              <h1 className="text-2xl text-blue">{job?.jobTitle}</h1>
              <span className="flex items-center gap-3">
                <FaSuitcase />
                <h5 className="text-1xl">Job type</h5>
              </span>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="flex items-center gap-2  text-primary/70">
                  <MdOutlineAccessTime />
                  {job.employmentType}
                </span>
                <span className="flex items-center gap-2 text-primary/70 text-transform: capitalize">
                  <CiLocationOn />
                  {job.jobLocation}
                </span>

                <span className="flex items-center gap-2  text-primary/70">
                  <RiMoneyDollarCircleLine />
                  {job.minPrice}-{job.maxPrice}k
                </span>
                <span className="flex items-center gap-2  text-primary/70">
                  <SlCalender />
                  Posted: {date(job.jobPostedOn)}
                </span>
                <span className="flex items-center gap-2  text-primary/70">
                  <AiTwotoneHourglass />
                  {job.experienceLevel}
                </span>
              </div>
              {user?.role === "Job Seeker" && (
                <div className="flex items-center gap-3  text-primary/70">
                  <Button
                    title={"JOB TYPE"}
                    className={
                      "bg-blue text-white px-4 py-2 hover:bg-[#172554] rounded-sm"
                    }
                  />
                  <Link to={`/job-application/${id}`}>
                    <Button
                      title={"APPLY NOW"}
                      className={
                        "bg-[#10b981] text-white px-4 py-2 hover:bg-[#064e3b] rounded-sm"
                      }
                    />
                  </Link>
                </div>
              )}
            </div>
            <div className="pt-5 md:pr-[5em] text-center">
              {job.companyLogo ? (
                <img src={job.companyLogo} alt="" className="w-20 h-20" />
              ) : (
                <img src={job.noImage} alt="" className="w-20 h-20" />
              )}
              {job.companyName}
            </div>
          </div>
          <div className="space-y-3 mt-3">
            <h1 className="text-xl">Job description</h1>
            <h5>{job.description}</h5>
          </div>
        </div>
      )}
    </>
  );
};

export default JobPage;
