import { axiosInstance } from "./api/AxiosInterceptor";

export const userSignUp = async (data, successToast, errorToast) => {
  console.log("🚀 + userSignUp + data:", data);
  try {
    const response = await axiosInstance.post("/user/register", {
      data,
    });
    console.log("🚀 + userSignUp + response:", response);
    successToast(response.data.message);
    return response;
  } catch (error) {
    errorToast(error.response.data.message);
    return error;
  }
};
