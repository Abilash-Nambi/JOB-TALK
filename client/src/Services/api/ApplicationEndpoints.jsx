import CustomLoader from "../../components/CustomLoader";
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
