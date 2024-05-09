import { axiosInstance } from "./api/AxiosInterceptor";

export const userSignUp = async (data, successToast, errorToast) => {
  try {
    const response = await axiosInstance.post("/user/register", data);
    //console.log("🚀 + userSignUp + response:", response);
    successToast(response.data.message);
    return response;
  } catch (error) {
    errorToast(error.response.data.message);
    return error;
  }
};

export const userSignIn = async (data, successToast, errorToast) => {
  try {
    const response = await axiosInstance.post("/user/sign-in", data, {
      withCredentials: true,
    });
    //console.log("🚀 + userSignUp + response:", response);
    successToast(response.data.message);
    return response;
  } catch (error) {
    errorToast(error.response.data.message);
    return error;
  }
};
