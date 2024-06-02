import React, { useState } from "react";
import {
  deleteApplication,
  employerGetApplication,
  jobSeekerGetApplication,
} from "../../Services/api/ApplicationEndpoints";
import { useEffect } from "react";
import Button from "../../components/Button";
import useToast from "../../Hooks/useToast";
import ResumeModal from "../../components/Application/ResumeModal";
import ConfirmationModal from "../../components/ConfirmationModal";
import { useSelector } from "react-redux";
import NoData from "../NoData";
import BreadCrumb from "../../components/BreadCrumb";
const MyApplication = () => {
  const [data, setData] = useState([]);
  const { errorToast, successToast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applicationId, setapplication] = useState(null);

  const userDetials = useSelector((state) => state.user.user);
  console.log("🚀 + MyApplication + userDetials:", userDetials.role);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const fetchDataUser = async () => {
    const res = await jobSeekerGetApplication();
    setData(res.data.data);
  };
  const fetchDataEmployer = async () => {
    const res = await employerGetApplication();
    setData(res.data.data);
  };
  useEffect(() => {
    if (userDetials?.role == "Employer") {
      fetchDataEmployer();
    } else {
      fetchDataUser();
    }
  }, []);

  const handleDelete = async () => {
    const res = await deleteApplication(
      applicationId,
      successToast,
      errorToast
    );
    console.log("🚀 + handleDelete + res:", res);
    if (res.status === 200) {
      fetchData();
      setIsModalOpen(false);
    }
  };

  return (
    <div className="container max-w-screen-2xl mx-auto xl:px-24 px-4 space-y-3 flex items-center flex-col">
      <div>
        <BreadCrumb title={"My Application Page"} />
      </div>
      {data.length === 0 ? (
        <NoData />
      ) : (
        <>
          <h1 className="text-center p-4"> My Application</h1>
          {data.map((data, key) => (
            <div className="relative min-w-[19em] xl:w-8/12 flex bg-clip-border rounded-xl bg-[#FAFAFA] text-gray-700 shadow-md  max-w-[48rem] flex-col md:flex-row border hover: cursor-pointer">
              <div className="relative  md:w-2/5 m-0 overflow-hidden text-gray-700 bg-orange-100 rounded-r-none bg-clip-border rounded-xl shrink-0 ">
                <img
                  src={data?.resume?.url}
                  alt="card-image"
                  className="object-cover min-w-[215px] h-[280px] "
                  onClick={() => {
                    setIsOpen(true), setImageUrl(data?.resume?.url);
                  }}
                />
              </div>
              <div className="p-6 md:w-[25rem]">
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
              <div className="flex md:flex-col-reverse flex-row-reverse pr-4 pb-3">
                <Button
                  onClick={() => {
                    setapplication(data._id), setIsModalOpen(true);
                  }}
                  title="DELETE"
                  className="bg-red-600 text-white active:bg-red-800 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                />
              </div>
            </div>
          ))}
          <ResumeModal
            isOpen={isOpen}
            onClose={closeModal}
            imageUrl={imageUrl}
          />
          <ConfirmationModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onConfirm={handleDelete}
          />
        </>
      )}
    </div>
  );
};

export default MyApplication;
