import { axiosInstance } from "./AxiosInterceptor";

// get user profile

export const getProfile = async () => {
  try {
    const data = await axiosInstance.get(`/user/get-user`);
    return data;
  } catch (error) {
    return error;
  }
};
