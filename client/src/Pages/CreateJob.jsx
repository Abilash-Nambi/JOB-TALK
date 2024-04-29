import React from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const CreateJob = () => {
  const animatedComponents = makeAnimated();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const options = [
    { value: "React", label: "React" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "MicroSoft  Office", label: "MicroSoft  Office" },
  ];
  return (
    <div className="container max-w-screen-2xl mx-auto xl:px-24 px-4">
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16 ">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="flex w-full justify-between flex-wrap">
            <div className="md:w-[32em] w-full ">
              <label className="block mb-2">Job Title</label>
              <input
                className="create-job-input"
                placeholder="Web develeper"
                {...register("jobTitle", { required: true })}
              />
              {errors.jobTitle && <span>This field is required</span>}
            </div>
            <div className="md:w-[32em] w-full ">
              <label className="block mb-2 ">Company Name</label>
              <input
                className="create-job-input"
                placeholder="Ex: Microsoft"
                {...register("companyName", { required: true })}
              />
            </div>
          </div>
          <div className="flex w-full justify-between flex-wrap">
            <div className="md:w-[32em] w-full  ">
              <label className="block mb-2">Minimum Salary</label>
              <input
                className="create-job-input"
                placeholder="$100,00"
                {...register("minimumSalary")}
              />
            </div>
            <div className="md:w-[32em] w-full ">
              <label className="block mb-2 ">Maximum Salary</label>
              <input
                className="create-job-input"
                placeholder="$500,000"
                {...register("maximumSalary", { required: true })}
              />
            </div>
          </div>
          <div className="flex w-full justify-between flex-wrap">
            <div className="md:w-[32em] w-full  ">
              <label className="block mb-2">Salary Type</label>
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
            <div className="md:w-[32em] w-full ">
              <label className="block mb-2 ">Job location</label>
              <input
                className="create-job-input"
                placeholder="Ex: New york"
                {...register("jobLocation", { required: true })}
              />
            </div>
          </div>
          <div className="flex w-full justify-between flex-wrap">
            <div className="md:w-[32em] w-full ">
              <label className="block mb-2 ">Job Posting Date</label>
              <input
                type="date"
                className="create-job-input"
                placeholder="Ex: 2024-04-24"
                {...register("jobPostingDate", { required: true })}
              />
            </div>
            <div className="md:w-[32em] w-full  ">
              <label className="block mb-2">Experience Level</label>
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

          {errors.experienceLevel && <span>This field is required</span>}

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
            <div className="md:w-[32em] w-full ">
              <label className="block mb-2">Company Logo</label>
              <input
                type="url"
                className="create-job-input"
                placeholder="Paste the image url"
                {...register("example")}
              />
            </div>
            <div className="md:w-[32em] w-full ">
              <label className="block mb-2 ">Employement Type</label>
              <select
                {...register("employementType", { required: true })}
                className="create-job-input"
              >
                <option value=" ">Select job type</option>
                <option value="Yearly">Full-time</option>
                <option value="Yearly">Part-time</option>
                <option value="Monthly">Temporary</option>
              </select>
            </div>
          </div>

          <div className="w-full">
            <label className="block mb-2 ">Job Description</label>
            <textarea
              className="w-full pl-3 py-1.5 focus:outline-none"
              {...register("jobDescription", {})}
              rows={6}
              placeholder="Job description"
            />
          </div>

          <input
            type="submit"
            value="Submit"
            className=" block mt-2 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateJob;
