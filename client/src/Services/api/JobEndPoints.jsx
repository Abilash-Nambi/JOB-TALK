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

export const postJob = async () => {
  try {
    const data = await axiosInstance.post(`/job/addjob`);
    return data;
  } catch (error) {
    return error;
  }
};
