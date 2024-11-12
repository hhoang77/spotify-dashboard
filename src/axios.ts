import axios, { InternalAxiosRequestConfig } from "axios";
import { BASE_URL } from "./utils/constants";
import {
  setLocalStorage,
  getLocalStorage,
  clearLocalStorage,
} from "./utils/localStorage";

export const axiosConfig = axios.create({
  baseURL: BASE_URL,
});

axiosConfig.interceptors.request.use(
  function (config: InternalAxiosRequestConfig<any>) {
    const accessToken = getLocalStorage("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    console.log(error.message);
    return Promise.reject(error);
  }
);

axiosConfig.interceptors.response.use(
  (response) => {
    // Xử lý response ở đây
    return response; // Axios sẽ tự động hiểu kiểu response này là AxiosResponse<any>
  },
  async (error) => {
    // Xử lý lỗi ở đây
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = getLocalStorage("refreshToken");
        if (!refreshToken) {
          console.log("RefreshToken is missing");
          return Promise.reject(error);
        }
        const response = await axios.post(
          "http://localhost:3007/user/refresh-token",
          {
            refreshToken,
          }
        );
        const accessToken = response.data.content;
        if (!accessToken) {
          console.error("AccessToken is Missing");
          return Promise.reject(error);
        }
        setLocalStorage("accessToken", accessToken);
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return axios(originalRequest);
      } catch (error) {
        console.log(error);
        clearLocalStorage();
      }
    }
    return Promise.reject(error);
  }
);
