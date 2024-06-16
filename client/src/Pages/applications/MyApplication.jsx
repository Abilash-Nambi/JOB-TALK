import React, { useState } from "react";
import {
  deleteApplication,
  employerGetApplication,
  jobSeekerGetApplication,
} from "../../Services/api/ApplicationEndpoints";
import { useEffect } from "react";
import Button from "../../components/Button";
import useToast from "../../hooks/useToast";
import useLoader from "../../hooks/useLoader";
import ResumeModal from "../../components/Application/ResumeModal";
import ConfirmationModal from "../../components/ConfirmationModal";
import { useSelector } from "react-redux";
import NoData from "../NoData";
import BreadCrumb from "../../components/BreadCrumb";
import { Loader } from "../../components/CustomLoader";
import { logIn } from "../../Store/userAuthSlice";
import { useDispatch } from "react-redux";
import { getProfile } from "../../Services/api/UserEndpoints";
const MyApplication = () => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log("🚀 + MyApplication + isModalOpen:", isModalOpen);
  const [applicationId, setapplication] = useState(null);
  const [jobId, setJobId] = useState(null);
  const { errorToast, successToast } = useToast();
  const { isLoading, showLoader, hideLoader } = useLoader();
  const dispatch = useDispatch();
  const userDetials = useSelector((state) => state.user.user);
  console.log("🚀 + MyApplication + userDetials:", userDetials.role);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const fetchDataUser = async () => {
    showLoader();
    const res = await jobSeekerGetApplication();
    if (res.status === 200) {
      setData(res.data.data);
      setTimeout(() => {
        hideLoader();
      }, 2000);
    }
  };
  const fetchDataEmployer = async () => {
    showLoader();
    const res = await employerGetApplication();
    if (res.status === 200) {
      setData(res.data.data);
      setTimeout(() => {
        hideLoader();
      }, 2000);
    }
  };
  useEffect(() => {
    if (userDetials?.role == "Employer") {
      fetchDataEmployer();
    } else {
      fetchDataUser();
    }
  }, []);

  const handleDelete = async () => {
    const id = jobId;
    console.log("🚀 + handleDelete + jobId:", id);
    const res = await deleteApplication(
      applicationId,
      id,
      successToast,
      errorToast
    );
    //console.log("🚀 + handleDelete + res:", res);
    if (res.status === 200) {
      if (userDetials?.role == "Employer") {
        fetchDataEmployer();
      } else {
        fetchDataUser();
        const response = await getProfile();
        if (response.status === 200) {
          dispatch(logIn(response.data.data));
        }
      }

      setIsModalOpen(false);
    }
  };

  return (
    <div className="container max-w-screen-2xl mx-auto xl:px-24 px-4 space-y-3 ">
      <div>
        <BreadCrumb title={"My Applications Page"} />
      </div>
      {data.length === 0 ? (
        <NoData text={"No Application found"} />
      ) : (
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-center p-4"> Applications</h1>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {" "}
              {data.map((data, key) => (
                <div className="relative min-w-[19em] xl:w-8/12 flex bg-clip-border rounded-xl bg-[#FAFAFA] text-gray-700 shadow-md  max-w-[48rem] flex-col md:flex-row border hover: cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
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
                    <h6 className="block mb-1 font-sans  antialiased  leading-relaxed tracking-normal text-blue uppercase text-sm font-semibold">
                      {data?.companyName}
                    </h6>
                    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                      {data?.jobTitle}
                    </h6>

                    <ul key={key}>
                      <li>
                        <span className="text-bolder font-semibold ">
                          Email :
                        </span>{" "}
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

                  <div
                    className={`flex md:flex-col-reverse flex-row-reverse pr-4 pb-3 ${
                      userDetials?.role == "Employer" ? "hidden" : "block"
                    } `}
                  >
                    <Button
                      onClick={() => {
                        setapplication(data._id),
                          setJobId(data.jobId),
                          setIsModalOpen(true);
                      }}
                      title="DELETE"
                      className="bg-red-600 text-white active:bg-red-800 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
              ))}
            </>
          )}

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
        </div>
      )}
    </div>
  );
};

export default MyApplication;
