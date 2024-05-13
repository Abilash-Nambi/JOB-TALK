import React, { useState } from "react";
import {
  deleteApplication,
  jobSeekerGetApplication,
} from "../Services/api/ApplicationEndpoints";
import { useEffect } from "react";
import Button from "../components/Button";
import useToast from "../Hooks/useToast";

const MyApplication = () => {
  const [data, setData] = useState([]);
  const { errorToast, successToast } = useToast();
  console.log("🚀 + MyApplication + data:", data);

  const fetchData = async () => {
    const res = await jobSeekerGetApplication();
    setData(res.data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const res = await deleteApplication(id, successToast, errorToast);
    console.log("🚀 + handleDelete + res:", res);
    if (res.status === 200) {
      fetchData();
    }
  };

  return (
    <div className="container max-w-screen-2xl mx-auto xl:px-24 px-4 space-y-3 flex items-center flex-col">
      <h1 className="text-center p-4"> My Application</h1>

      {/* {data?.map((data, key) => (
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-10 mx-auto mt-5 border py-10">
          <div className="grid md:grid-cols-2 grid-rows-1 grid-cols-1 gap-4 ">
            <div key={key}>
              <ul>
                <li>Name : {data.name}</li>
                <li>Email : {data.email}</li>
                <li>Phone : {data.phone}</li>
                <li>Address : {data.address}</li>
                <li>Cover letter : {data.coverLetter}</li>
              </ul>
            </div>
            <div>
              <img src={data?.resume?.url} className="min-h-13" />
              <div className="text-right pt-3">
                <Button
                  title="Delete Application"
                  className="bg-blue text-white px-1 py-1 rounded-sm"
                  onClick={() => handleDelete(data._id)}
                />
              </div>
            </div>
          </div>
        </div>
      ))} */}

      {data.map((data, key) => (
        <div className="relative xl:w-8/12 flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md  max-w-[48rem] flex-col md:flex-row ">
          <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0 ">
            <img
              src={data?.resume?.url}
              alt="card-image"
              className="object-cover w-fit h-full"
            />
          </div>
          <div className="p-6">
            <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
              {data?.jobTitle}
            </h6>

            <ul key={key}>
              <li>
                <span className="text-bolder font-semibold ">Email :</span>{" "}
                {data.email}
              </li>
              <li>
                <span className="text-bold text-base font-semibold">
                  Name :
                </span>
                {data.name}
              </li>
              <li>
                <span className="text-bold text-base font-semibold">
                  Phone :
                </span>
                {data.phone}
              </li>
              <li>
                <span className="text-bold text-base font-semibold">
                  Address :
                </span>
                {data.address}
              </li>
              <li>
                <span className="text-bold text-base font-semibold">
                  Cover letter
                </span>
                : {data.coverLetter.slice(0, 150)}...
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyApplication;
