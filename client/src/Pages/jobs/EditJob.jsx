import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import BreadCrumb from "../../components/BreadCrumb";
import { useParams } from "react-router-dom";
import { editJob, getSingleJob } from "../../Services/api/JobEndPoints";
import { useEffect } from "react";
import { cloudinaryImage } from "../../Utils/cloudinary";
import useToast from "../../Hooks/useToast";
import useRouter from "../../Hooks/useRouter";
import CheckBox from "../../components/CheckBox";

const EditJob = () => {
  const [job, setJob] = useState({});
  console.log("🚀 + EditJob + job:", job);
  const [imageUrl, setImageUrl] = useState("");
  console.log("🚀 + EditJob + imageUrl:", imageUrl);
  const { successToast, errorToast } = useToast();
  const { goBack } = useRouter();
  const animatedComponents = makeAnimated();

  let { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getSingleJob(id);
      setJob(response?.data?.data);
    } catch (error) {
      console.log("🚀 + fetchData + error:", error);
    }
  };

  const handleChange = (key, value) => {
    setJob((prev) => ({ ...prev, [key]: value }));
  };

  const handleChangeImage = async (e) => {
    cloudinaryImage(e, setImageUrl);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedJob = { ...job, companyLogo: imageUrl };
    setJob(updatedJob);
    const res = await editJob(id, updatedJob, successToast, errorToast, goBack);
  };

  const options = [
    { value: "React", label: "React" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "MicroSoft  Office", label: "MicroSoft  Office" },
  ];
  return (
    <div className="container max-w-screen-2xl mx-auto xl:px-24 px-4">
      <div>
        <BreadCrumb title={"Job Edit Page"} />
      </div>
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16 mt-2">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex w-full justify-between flex-wrap">
            <div className="md:w-[32em] w-full relative">
              <label className="block mb-2">Job Title</label>

              <input
                className="create-job-input"
                placeholder="Web developer"
                value={job?.jobTitle}
                onChange={(e) => handleChange("jobTitle", e.target.value)}
              />
            </div>
            <div className="md:w-[32em] w-full relative">
              <label className="block mb-2 ">Company Name</label>

              <input
                value={job?.companyName}
                className="create-job-input"
                placeholder="Ex: Microsoft"
                onChange={(e) => handleChange("companyName", e.target.value)}
              />
            </div>
          </div>
          <div className="flex w-full justify-between flex-wrap">
            <div className="md:w-[32em] w-full relative ">
              <label className="block mb-2">Minimum Salary</label>

              <input
                value={job?.minPrice}
                className="create-job-input"
                placeholder="$100,00"
                onChange={(e) => handleChange("minPrice", e.target.value)}
              />
            </div>
            <div className="md:w-[32em] w-full relative">
              <label className="block mb-2 ">Maximum Salary</label>

              <input
                value={job?.maxPrice}
                className="create-job-input"
                placeholder="$500,000"
                onChange={(e) => handleChange("maxPrice", e.target.value)}
              />
            </div>
          </div>
          <div className="flex w-full justify-between flex-wrap">
            <div className="md:w-[32em] w-full relative ">
              <label className="block mb-2">Salary Type</label>

              <select
                className="create-job-input"
                value={job?.salaryType || ""}
                onChange={(e) => handleChange("salaryType", e.target.value)}
              >
                <option value=" ">Choose salary type</option>
                <option value="Hourly">Hourly</option>
                <option value="Yearly">Yearly</option>
                <option value="Monthly">Monthly</option>
              </select>
            </div>
            <div className="md:w-[32em] w-full relative">
              <label className="block mb-2 ">Job location</label>

              <input
                value={job?.jobLocation}
                className="create-job-input"
                placeholder="Ex: New york"
                onChange={(e) => handleChange("jobLocation", e.target.value)}
              />
            </div>
          </div>
          <div className="flex w-full justify-between flex-wrap">
            <div className="md:w-[32em] w-full relative">
              <label className="block mb-2 ">Job Posting Date</label>

              <input
                value={job?.jobPostedOn}
                type="date"
                className="create-job-input"
                placeholder="Ex: 2024-04-24"
              />
            </div>
            <div className="md:w-[32em] w-full relative">
              <label className="block mb-2">Experience Level</label>
              <select
                className="create-job-input"
                value={job?.experienceLevel || ""}
                onChange={(e) =>
                  handleChange("experienceLevel", e.target.value)
                }
              >
                <option value="">Choose your experience</option>
                <option value="Internship">Internship</option>
                <option value="Any experience">Any experience</option>
                <option value="Work remotely">Work remotely</option>
              </select>
            </div>
          </div>

          <div className="">
            <label className="block mb-2 ">Required Skill Sets</label>

            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              defaultValue={[options[4], options[5]]}
              isMulti
              options={options}
            />
          </div>

          <div className="flex w-full justify-between flex-wrap">
            <div className="md:w-[32em] w-full relative">
              <label className="block mb-2">Company Logo</label>
              <div className="pb-3">
                <img
                  src={imageUrl ? imageUrl : job?.companyLogo}
                  alt="ompany-logo"
                />
              </div>

              <input
                className="create-job-input"
                id="file_input"
                type="file"
                placeholder="Paste the image url"
                onChange={(e) => handleChangeImage(e)}
              />
            </div>
            <div className="md:w-[32em] w-full relative">
              <label className="block mb-2">Job Expired</label>
              <select
                className="create-job-input"
                value={job?.expired || ""}
                onChange={(e) => handleChange("expired", e.target.value)}
              >
                <option value="true">True</option>
                <option value="false">False</option>

                {/* {job?.employmentType &&
                  !["Full Time", "Part Time", "Temporary"].includes(
                    job.employmentType
                  ) && (
                    <option value={job.employmentType}>
                      {job.employmentType}
                    </option>
                  )} */}
              </select>
            </div>
            <div className="md:w-[32em] w-full relative">
              <label className="block mb-2">Employment Type</label>
              <select
                className="create-job-input"
                value={job?.employmentType || ""}
                onChange={(e) => handleChange("employmentType", e.target.value)}
              >
                <option value="">Select job type</option>
                <option value="Full Time">Full-time</option>
                <option value="Part Time">Part-time</option>
                <option value="Temporary">Temporary</option>
                {job?.employmentType &&
                  !["Full Time", "Part Time", "Temporary"].includes(
                    job.employmentType
                  ) && (
                    <option value={job.employmentType}>
                      {job.employmentType}
                    </option>
                  )}
              </select>
            </div>
          </div>

          <div className="w-full relative">
            <label className="block mb-2 ">Job Description</label>

            <textarea
              className="w-full pl-3 py-1.5 focus:outline-none"
              rows={6}
              placeholder="Job description"
              value={job?.description}
              onChange={(e) => handleChange("description", e.target.value)}
            />
          </div>

          <div className="flex-row flex justify-end">
            <input
              type="submit"
              value="Submit"
              className=" block mt-2 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditJob;
