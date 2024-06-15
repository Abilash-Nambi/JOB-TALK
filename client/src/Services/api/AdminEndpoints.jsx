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
export const getAdminAllActiveJob = async (search) => {
  if (search?.length >= 1) {
    try {
      const res = await axiosInstance.get(
        `/admin/active-jobs?search=${search}`
      );
      return res;
    } catch (error) {
      return error;
    }
  } else {
    try {
      const res = await axiosInstance.get(`/admin/active-jobs`);
      return res;
    } catch (error) {
      return error;
    }
  }
};
export const getAdminInActiveJob = async (search) => {
  if (search.length >= 1) {
    try {
      const res = await axiosInstance.get(
        `/admin/in-active-jobs?search=${search}`
      );
      return res;
    } catch (error) {
      return error;
    }
  } else {
    try {
      const res = await axiosInstance.get(`/admin/in-active-jobs`);
      return res;
    } catch (error) {
      return error;
    }
  }
};

export const adminDeleteJob = async (id, successToast, errorToast) => {
  try {
    const res = await axiosInstance.delete(`/admin/remove-job/${id}`);
    successToast(res.data.message);

    return res;
  } catch (error) {
    if (error.response) {
      errorToast(error.response.data.message);
    } else return error;
  }
};

export const adminJobCount = async () => {
  try {
    const res = await axiosInstance.get(`/admin/job-count`);
    return res;
  } catch (error) {
    return error;
  }
};
