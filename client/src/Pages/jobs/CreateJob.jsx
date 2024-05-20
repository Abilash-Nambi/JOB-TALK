import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { postJob } from "../../Services/api/JobEndPoints";
import useToast from "../../Hooks/useToast";
import useRouter from "../../Hooks/useRouter";
import BreadCrumb from "../../components/BreadCrumb";
import { cloudinaryImage } from "../../Utils/cloudinary";

const CreateJob = () => {
  const [imageUrl, setImageUrl] = useState("");
  const { successToast, errorToast } = useToast();
  const { goBack } = useRouter();

  const animatedComponents = makeAnimated();

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
      goBack
    );
    // console.log("🚀 + onSubmit + response:", response);
  };

  const options = [
    { value: "React", label: "React" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "MicroSoft  Office", label: "MicroSoft  Office" },
  ];

  const handleChangeImage = (e) => {
    cloudinaryImage(e, setImageUrl);
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
