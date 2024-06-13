import axios from "axios";
import { axiosInstance } from "./AxiosInterceptor";

// all job
export const getAllJob = async (
  currentPage,
  employment,
  experience,
  salary,
  datePosted
) => {
  try {
    let url = `/job?page=${currentPage}`;
    let params = [];

    if (employment && employment.trim() !== "") {
      params.push(`employment=${employment}`);
    }
    if (experience && experience.trim() !== "") {
      params.push(`experience=${experience}`);
    }
    if (salary && salary.trim() !== "") {
      params.push(`salary=${salary}`);
    }
    if (datePosted && datePosted.trim() !== "") {
      params.push(`datePosted=${datePosted}`);
    }
    if (params.length > 0) {
      url += `&${params.join("&")}`;
    }

    const data = await axiosInstance.get(url);
    return data;
  } catch (error) {
    return error;
  }
};

export const getSingleJob = async (id) => {
  try {
    const data = await axiosInstance.get(`/job/single-job/${id}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const myAllJobs = async (search) => {
  if (search.length >= 1) {
    try {
      const res = await axiosInstance.get(`/job/my-jobs?search=${search}`);
      return res;
    } catch (error) {
      return error;
    }
  } else {
    try {
      const res = await axiosInstance.get(`/job/my-jobs`);
      return res;
    } catch (error) {
      return error;
    }
  }
};
export const postJob = async (
  data,
  imageUrl,
  successToast,
  errorToast,
  goBack,
  navigate
) => {
  try {
    const res = await axiosInstance.post(`/job/post-job`, {
      data: { ...data, companyLogo: imageUrl },
    });
    successToast(res.data.message);
    navigate("/all-jobs");
    //goBack();
    return res;
  } catch (error) {
    if (error.response) {
      errorToast(error.response.data.message);
    } else return error;
  }
};
export const deleteJob = async (id, successToast, errorToast) => {
  try {
    const res = await axiosInstance.delete(`/job/remove-job/${id}`);
    successToast(res.data.message);

    return res;
  } catch (error) {
    if (error.response) {
      errorToast(error.response.data.message);
    } else return error;
  }
};

export const editJob = async (id, job, successToast, errorToast, goBack) => {
  try {
    const res = await axiosInstance.put(`job/update-job/${id}`, {
      updatedData: job,
    });
    successToast(res.data.message);
    goBack();
    return res;
  } catch (error) {
    if (error.response) {
      errorToast(error.response.data.message);
    } else return error;
  }
};

export const searchJob = async (querry) => {
  console.log("🚀 + searchJob + querry:", querry);
  if (querry.length >= 1) {
    try {
      const res = await axiosInstance.get(`job/search?search=${querry}`);
      //console.log("🚀 + searchJob + res:", res.data);
      return res.data.data;
    } catch (error) {
      console.log("🚀 + searchJob + error:", error.response.data.message);
    }
  }
};

export const jobImageUpload = async (formData, errorToast) => {
  // console.log("🚀 + jobImageUpload + formData:", formData);
  try {
    const res = await axiosInstance.post(`job/image/upload`, formData);
    //console.log("🚀 + jobImageUpload + res:", res.data);
    return res;
  } catch (error) {
    errorToast(error.response.data.message);
    console.log("🚀 + jobImageUpload + error:", error.response.data.message);
  }
};
