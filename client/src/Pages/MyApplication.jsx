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
    <div className="container max-w-screen-2xl mx-auto xl:px-24 px-4">
      <h1 className="text-center p-4"> My Application</h1>

      {data?.map((data, key) => (
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
      ))}
    </div>
  );
};

export default MyApplication;
