import { axiosInstance } from "./AxiosInterceptor";

export const getProfile = async () => {
  try {
    const data = await axiosInstance.get(`/user/get-user`);
    return data;
  } catch (error) {
    return { status: "failed", message: error.response.data.error };
  }
};
