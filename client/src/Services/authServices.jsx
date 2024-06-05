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
    const response = await axiosInstance.post("/user/sign-in", data);
    //console.log("🚀 + userSignUp + response:", response);
    successToast(response.data.message);
    return response;
  } catch (error) {
    errorToast(error.response.data.message);
    return error;
  }
};
export const userSignOut = async (e, successToast, errorToast) => {
  try {
    e.preventDefault;
    const response = await axiosInstance.post("/user/sign-out");
    successToast(response.data.message);
    return response;
  } catch (error) {
    //console.log("🚀 + userSignOut + error:", error);
    errorToast(error.response.data.message);
    return error;
  }
};

export const forgotPassword = async (email, successToast, errorToast) => {
  try {
    const response = await axiosInstance.post("/user/forgot-password", {
      email,
    });
    successToast(response.data.message);
    return response;
  } catch (error) {
    errorToast(error.response.data.message);
    return error;
  }
};
export const resetPassword = async (data, successToast, errorToast) => {
  try {
    const response = await axiosInstance.post("/user/reset-password", {
      data,
    });
    successToast(response.data.message);
    return response;
  } catch (error) {
    errorToast(error.response.data.message);
    return error;
  }
};
