import { axiosInstance } from "./AxiosInterceptor";

// all job
export const getAllJob = async () => {
  try {
    const data = await axiosInstance.get(`/job`);
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

export const postJob = async (
  data,
  imageUrl,
  successToast,
  errorToast,
  goBack
) => {
  try {
    const res = await axiosInstance.post(`/job/post-job`, {
      data: { ...data, companyLogo: imageUrl },
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
