import React from "react";
import Dashboardheader from "../../components/Dashboard/DashboardHeader";

import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import BreadCrumb from "../../components/BreadCrumb";
import { deleteJob, myAllJobs } from "../../Services/api/JobEndPoints";
import ConfirmationModal from "../../components/ConfirmationModal";
import NoData from "../NoData";
import useToast from "../../hooks/useToast";
import useLoader from "../../hooks/useLoader";
import Input from "../../components/Input";
import { Loader } from "../../components/CustomLoader";
import { getAdminAllJob } from "../../Services/api/AdminEndpoints";

const DashBoardAllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [jobId, setJobId] = useState(null);
  const { successToast, errorToast } = useToast();
  const { isLoading, showLoader, hideLoader } = useLoader();
  const userDetials = useSelector((state) => state.user.user);

  useEffect(() => {
    fetchData();
  }, [search]);

  const fetchData = async () => {
    showLoader();
    const res = await getAdminAllJob(search);
    if ((res.status = 200)) {
      setJobs(res.data.data);
      setTimeout(() => {
        hideLoader();
      }, 2000);
    }
  };
  const handleDeleteButton = (id) => {
    setJobId(id);
    setIsModalOpen(!isModalOpen);
  };
  const handleDelete = async () => {
    const res = await deleteJob(jobId, successToast, errorToast);
    if (res.status === 200) {
      setIsModalOpen(false);
      fetchData();
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <Dashboardheader />
      <div className="container max-w-screen-2xl mx-auto xl:px-24 px-4  ">
        <div className="p-2 text-center ">
          <Input
            type="text"
            value={search}
            onChange={(e) => handleSearch(e)}
            placeholder="Search Job..."
            className=" border py-2 pl-3 text-grey-900 placeholder:text-grey-400 sm:text-sm  focus:outline-none lg:w-6/12 w-full"
          />

          <button className="text-white bg-blue px-8 rounded-md py-2 rounded-s-sm md:rounded-none">
            Search
          </button>
        </div>
        {jobs.length === 0 ? (
          <NoData text={"No Jobs Posted Yet..."} />
        ) : (
          <>
            <section className="py-1 bg-blueGray-50">
              <div className="w-full xl:w-8/14 mb-12 xl:mb-0 px-4 mx-auto mt-5 ">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded ">
                  <div className=" p-3">
                    <div>
                      <h3 className="font-semibold text-base text-blueGray-700 text-center ">
                        ALL JOBS
                      </h3>
                    </div>
                  </div>
                  {isLoading ? (
                    <div className="flex justify-center">
                      <Loader />
                    </div>
                  ) : (
                    <div className="block w-full overflow-x-auto">
                      <table className="items-center bg-transparent w-full border-collapse ">
                        <thead>
                          <tr>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              NO.
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              TITTLE
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              COMPANY NAME
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              SALARY
                            </th>
                            {/* <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              EDIT
                            </th> */}
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              DELETE
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              VIEW JOB
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {jobs.map((data, i) => (
                            <tr
                              key={i}
                              className="hover:shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]"
                            >
                              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                {i + 1}
                              </th>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                {data.jobTitle}
                              </td>
                              <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                {data.companyName}
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                                ${data.minPrice}-${data.maxPrice}
                              </td>
                              {/* <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <Link to={`/edit-job/${data._id}`}>
                                  <Button
                                    title="EDIT"
                                    className="bg-yellow-200 text-black active:bg-yellow-400 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  />
                                </Link>
                              </td> */}
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <Link to="">
                                  <Button
                                    title="DELETE"
                                    className="bg-red-600 text-white active:bg-red-800 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    onClick={() => handleDeleteButton(data._id)}
                                  />
                                </Link>
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <a
                                  href={`/job-details/${data._id}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Button
                                    title="VIEW JOB"
                                    className="bg-green-600 text-white active:bg-red-800 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  />
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <ConfirmationModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onConfirm={handleDelete}
                      />
                    </div>
                  )}
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default DashBoardAllJobs;
