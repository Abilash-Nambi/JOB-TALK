import axios from "axios";
import { BASE_URL } from "./Api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response ? error.response.status : null;
    if (status === 401) {
    } else if (status === 404) {
      // Handle not found errors
    } else {
      // Handle other errors
    }

    return Promise.reject(error);
  }
);
