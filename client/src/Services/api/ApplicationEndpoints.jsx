import { axiosInstance } from "./AxiosInterceptor";

export const postApplication = async (
  formData,
  successToast,
  errorToast,
  goBack
) => {
  //console.log("🚀 + formData:", formData);
  try {
    const res = await axiosInstance.post(
      `/application/post-application`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    //console.log(res);
    successToast(res.data.message);
    goBack();
    return res;
  } catch (error) {
    console.log("🚀 + postApplication + error:", error.response.data.message);
    errorToast(error.response.data.message);
    return error;
  }
};
export const jobSeekerGetApplication = async () => {
  try {
    const res = await axiosInstance.get("/application/jobseeker/getall");
    return res;
  } catch (error) {
    console.log("🚀 + postApplication + error:", error.response.data.message);
  }
};
export const employerGetApplication = async () => {
  try {
    const res = await axiosInstance.get("/application/employer/getall");
    return res;
  } catch (error) {
    console.log("🚀 + postApplication + error:", error.response.data.message);
  }
};
export const deleteApplication = async (id, successToast, errorToast) => {
  try {
    const res = await axiosInstance.delete(
      `/application/jobseeker/remove/${id}`
    );
    successToast(res.data.message);

    return res;
  } catch (error) {
    console.log("🚀 + postApplication + error:", error.response.data.message);
    errorToast(error.response.data.message);
  }
};
