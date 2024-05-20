import React from "react";
import InputField from "../../components/InputField";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Button from "../../components/Button";
import { useSelector } from "react-redux";
import BreadCrumb from "../../components/BreadCrumb";
import { myAllJobs } from "../../Services/api/JobEndPoints";
import ConfirmationModal from "../../components/ConfirmationModal";

const MyJobs = () => {
  const [jobs, setJobs] = useState([]);
  const userDetials = useSelector((state) => state.user.user);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await myAllJobs();
    setJobs(res.data.data);
    console.log("🚀 + fetchData + res:", res.data.data);
  };
  const handleDelete = (id) => {
    <ConfirmationModal />;
  };

  return (
    <div className="container max-w-screen-2xl mx-auto xl:px-24 px-4  ">
      <div>
        <BreadCrumb title={"My Job  Page"} />
      </div>
      <h1 className="text-center p-4"> All My Jobs</h1>
      <div className="p-2 text-center ">
        <input
          //value={query}
          type="text"
          placeholder="Search Job..."
          className=" border py-2 pl-3 text-grey-900 placeholder:text-grey-400 sm:text-sm  focus:outline-none lg:w-6/12 w-full"
          //onChange={handleInputChange}
        />
        <button className="text-white bg-blue px-8 rounded-md py-2 rounded-s-sm md:rounded-none">
          Search
        </button>
      </div>

      <section className="py-1 bg-blueGray-50">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-blueGray-700 ">
                    All jobs
                  </h3>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  {userDetials.role === "Employer" && (
                    <Link to="/post-job">
                      <Button
                        title="Post a new job"
                        className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      />
                    </Link>
                  )}
                </div>
              </div>
            </div>

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
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      EDIT
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      DELETE
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {jobs.map((data, i) => (
                    <tr key={i}>
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
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <Link to="/edit-job">
                          <Button
                            title="EDIT"
                            className="bg-yellow-200 text-black active:bg-yellow-400 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          />
                        </Link>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <Link to="">
                          <Button
                            title="DELETE"
                            className="bg-red-600 text-white active:bg-red-800 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            onClick={() => handleDelete(data._id)}
                          />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyJobs;
