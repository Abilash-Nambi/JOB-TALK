import { axiosInstance } from "./AxiosInterceptor";

// all job
export const getAllJob = async (currentPage) => {
  try {
    const data = await axiosInstance.get(`/job?page=${currentPage}`);
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

export const myAllJobs = async () => {
  try {
    const res = await axiosInstance.get(`/job//my-jobs`);
    return res;
  } catch (error) {
    return error;
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
