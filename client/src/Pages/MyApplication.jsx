import React, { useState } from "react";
import {
  deleteApplication,
  getApplication,
} from "../Services/api/ApplicationEndpoints";
import { useEffect } from "react";
import Button from "../components/Button";
import useToast from "../Hooks/useToast";

const MyApplication = () => {
  const [data, setData] = useState([]);
  const { errorToast, successToast } = useToast();
  console.log("🚀 + MyApplication + data:", data);

  const fetchData = async () => {
    const res = await getApplication();
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

      {data.map((data) => (
        <div class="relative xl:w-8/12 flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md  max-w-[48rem] flex-row ">
          <div class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
            <img
              src={data?.resume?.url}
              alt="card-image"
              class="object-cover w-full h-full"
            />
          </div>
          <div class="p-6">
            <h6 class="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
              startups
            </h6>

            <ul>
              <li>Name : {data.name}</li>
              <li>Email : {data.email}</li>
              <li>Phone : {data.phone}</li>
              <li>Address : {data.address}</li>
              <li>Cover letter : {data.coverLetter}</li>
            </ul>
            {/* <a href="#" class="inline-block">
              <button
                class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                type="button"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </a> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyApplication;
