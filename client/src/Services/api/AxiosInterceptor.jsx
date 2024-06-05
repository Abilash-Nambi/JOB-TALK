import axios from "axios";
import { BASE_URL } from "./Api";
//import { useRouter } from "../../Hooks/useRouter";

// const { navigate } = useRouter();
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response ? error.response.status : null;
    if (status === 401) {
      // window.location.href = "/";
      console.log("unauthorized");
    } else if (status === 404) {
      // Handle not found errors
    } else {
      // Handle other errors
    }

    return Promise.reject(error);
  }
);

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const authToken = localStorage.getItem("authToken");
//     if (authToken) {
//       config.headers.Authorization = `Bearer ${authToken}`;
//     }
//     return config;
//   },
//   (error) => error
// );

axiosInstance.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    config.withCredentials = true; // Add this line to include credentials in the request
    return config;
  },
  (error) => Promise.reject(error)
);
