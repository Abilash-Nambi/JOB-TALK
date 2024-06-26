import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { jobImageUpload, postJob } from "../../Services/api/JobEndPoints";

import BreadCrumb from "../../components/BreadCrumb";
import { cloudinaryImage } from "../../Utils/cloudinary";
import { useSelector, useDispatch } from "react-redux";
import useToast from "../../hooks/useToast";
import useRouter from "../../hooks/useRouter";

const CreateJob = () => {
  const [imageUrl, setImageUrl] = useState("");
  console.log("🚀 + CreateJob + imageUrl:", imageUrl);
  const [selectedFile, setSelectedFile] = useState(null);
  const { successToast, errorToast } = useToast();
  const { goBack, navigate } = useRouter();
  const isSubscribed = useSelector((state) => state.user);
  // console.log("🚀 + CreateJob + isSubscribed:", isSubscribed);

  const animatedComponents = makeAnimated();
  useEffect(() => {
    eligible();
  }, []);

  const eligible = () => {
    if (isSubscribed?.user?.subscribed === false) {
      alert("please Subscribe to post job");
      navigate("/pricing");
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await postJob(
      data,
      imageUrl,
      successToast,
      errorToast,
      goBack,
      navigate
    );
    // console.log("🚀 + onSubmit + response:", response);
  };

  const options = [
    { value: "React", label: "React" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "MicroSoft  Office", label: "MicroSoft  Office" },
  ];

  const handleChangeImage = async (event) => {
    const file = event.target.files[0];

    setSelectedFile(file);

    const formData = new FormData();
    formData.append("image", file);

    if (formData) {
      try {
        const res = await jobImageUpload(formData, errorToast);
        const { data } = res;
        setImageUrl(data.url);
      } catch (error) {
        console.error("Error uploading image:", error);

        // errorToast("Failed to upload image");
      }
    }
  };

  return (
    <div className="container max-w-screen-2xl mx-auto xl:px-24 px-4">
      <div>
        <BreadCrumb title={"Job Adding Page"} />
      </div>
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16 mt-2">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="flex w-full justify-between flex-wrap">
            <div className="md:w-[32em] w-full relative">
              <label className="block mb-2">Job Title</label>
              {errors.jobTitle && (
                <span className="text-red-500 text-xs absolute top-3 right-1">
                  This field is required
                </span>
              )}
              <input
                className="create-job-input"
                placeholder="Web develeper"
                {...register("jobTitle", { required: true })}
              />
            </div>
            <div className="md:w-[32em] w-full relative">
              <label className="block mb-2 ">Company Name</label>
              {errors.companyName && (
                <span className="text-red-500 text-xs  absolute top-3 right-1">
                  This field is required
                </span>
              )}
              <input
                className="create-job-input"
                placeholder="Ex: Microsoft"
                {...register("companyName", { required: true })}
              />
            </div>
          </div>
          <div className="flex w-full justify-between flex-wrap">
            <div className="md:w-[32em] w-full relative ">
              <label className="block mb-2">Minimum Salary</label>
              {errors.minPrice && (
                <span className="text-red-500 text-xs absolute top-3 right-1">
                  {errors.minPrice.message}
                </span>
              )}
              <input
                className="create-job-input"
                placeholder="$100,00"
                {...register("minPrice", {
                  required: "Minimum Price is required",
                  pattern: {
                    value: /^\d*\.?\d*$/,
                    message: "Please enter a valid number",
                  },
                })}
              />
            </div>
            <div className="md:w-[32em] w-full relative">
              <label className="block mb-2 ">Maximum Salary</label>
              {errors.maxPrice && (
                <span className="text-red-500 text-xs absolute top-3 right-1">
                  {errors.maxPrice.message}
                </span>
              )}
              <input
                className="create-job-input"
                placeholder="$500,000"
                {...register("maxPrice", {
                  required: "maxPrice is required",
                  pattern: {
                    value: /^\d*\.?\d*$/,
                    message: "Please enter a valid number",
                  },
                })}
              />
            </div>
          </div>
          <div className="flex w-full justify-between flex-wrap">
            <div className="md:w-[32em] w-full relative ">
              <label className="block mb-2">Salary Type</label>
              {errors.salaryType && (
                <span className="text-red-500 text-xs absolute top-3 right-1">
                  This field is required
                </span>
              )}
              <select
                {...register("salaryType", { required: true })}
                className="create-job-input"
              >
                <option value=" ">Choose salary type</option>
                <option value="Yearly">Hourly</option>
                <option value="Yearly">Yearly</option>
                <option value="Monthly">Monthly</option>
              </select>
            </div>
            <div className="md:w-[32em] w-full relative">
              <label className="block mb-2 ">Job location</label>
              {errors.jobLocation && (
                <span className="text-red-500 text-xs absolute top-3 right-1">
                  This field is required
                </span>
              )}
              <input
                className="create-job-input"
                placeholder="Ex: New york"
                {...register("jobLocation", { required: true })}
              />
            </div>
          </div>
          <div className="flex w-full justify-between flex-wrap">
            <div className="md:w-[32em] w-full relative">
              <label className="block mb-2 ">Job Posting Date</label>
              {errors.postingDate && (
                <span className="text-red-500 text-xs absolute top-3 right-1">
                  This field is required
                </span>
              )}
              <input
                type="date"
                className="create-job-input"
                placeholder="Ex: 2024-04-24"
                {...register("postingDate", { required: true })}
              />
            </div>
            <div className="md:w-[32em] w-full  relative">
              <label className="block mb-2">Experience Level</label>
              {errors.experienceLevel && (
                <span className="text-red-500 text-xs absolute top-3 right-1">
                  This field is required
                </span>
              )}
              <select
                {...register("experienceLevel", { required: true })}
                className="create-job-input"
              >
                <option value=" ">Choose you experience</option>
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
              {imageUrl && (
                <img src={imageUrl} alt="company logo" className="p-2" />
              )}
              <input
                className="create-job-input"
                id="file_input"
                type="file"
                placeholder="Paste the image url"
                onChange={(e) => handleChangeImage(e)}
              />
            </div>
            <div className="md:w-[32em] w-full relative">
              <label className="block mb-2 ">Employement Type</label>
              {errors.employementType && (
                <span className="text-red-500 text-xs absolute top-3 right-1">
                  This field is required
                </span>
              )}
              <select
                {...register("employmentType", { required: true })}
                className="create-job-input"
              >
                <option value=" ">Select job type</option>
                <option value="Full time">Full-time</option>
                <option value="Part time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>

          <div className="w-full relative">
            <label className="block mb-2 ">Job Description</label>
            {errors.description && (
              <span className="text-red-500 text-xs absolute top-3 right-1">
                This field is required
              </span>
            )}
            <textarea
              className="w-full pl-3 py-1.5 focus:outline-none"
              {...register("description", { required: true })}
              rows={6}
              placeholder="Job description"
            />
          </div>
          <div className="w-[32em] relative">
            <label className="block mb-2 ">
              Owner email{" "}
              <span className="text-green-500 text-sm ml-3">Optional*</span>
            </label>

            {errors.ownerEmail && (
              <span className="text-red-500 text-xs absolute top-3 right-1">
                {errors.ownerEmail.message}
              </span>
            )}
            <input
              className="create-job-input"
              type="email"
              // {...register("ownerEmail", {
              //   // required: "Email Address is required",
              //   pattern: {
              //     value: /^\S+@\S+$/i,
              //     message: "Invalid email address",
              //   },
              // })}
            />
          </div>
          <div className="flex-row flex justify-end">
            <input
              type="submit"
              value="Submit"
              className=" block mt-2 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateJob;
