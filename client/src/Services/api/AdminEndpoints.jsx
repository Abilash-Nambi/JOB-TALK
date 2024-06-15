import { axiosInstance } from "./AxiosInterceptor";

// get user profile

export const getAdminProfile = async () => {
  try {
    const data = await axiosInstance.get(`/admin/get-admin`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getAdminAllJob = async (search) => {
  if (search.length >= 1) {
    try {
      const res = await axiosInstance.get(`/admin/all-jobs?search=${search}`);
      return res;
    } catch (error) {
      return error;
    }
  } else {
    try {
      const res = await axiosInstance.get(`/admin/all-jobs`);
      return res;
    } catch (error) {
      return error;
    }
  }
};
