import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { Cookies } from "react-cookie";
import { IApi } from "./types/api.types";
import { API_URL } from "@/constant/api-url.data";
import { ToastType } from "@/components/UI/Toast";

const cookie = new Cookies();

// Create a toast service for use outside React components
class ToastService {
  private static listeners: Array<(message: string, type: ToastType) => void> =
    [];

  static subscribe(callback: (message: string, type: ToastType) => void) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(
        (listener) => listener !== callback
      );
    };
  }

  static notify(message: string, type: ToastType) {
    this.listeners.forEach((listener) => listener(message, type));
  }

  static success(message: string) {
    this.notify(message, "success");
  }

  static error(message: string) {
    this.notify(message, "error");
  }

  static warning(message: string) {
    this.notify(message, "warning");
  }

  static info(message: string) {
    this.notify(message, "info");
  }
}

// Export toast service for use in the app
export const toast = ToastService;

class Api implements IApi {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly axios: AxiosInstance) {}
  get<T>(
    url: string,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T, any>> {
    return this.axios.get<T>(url, config);
  }
  post<T>(
    url: string,
    body: unknown,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T, any>> {
    return this.axios.post<T>(url, body, config);
  }
  delete<T>(
    url: string,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T, any>> {
    return this.axios.delete<T>(url, config);
  }
  put<T>(
    url: string,
    body: unknown,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T, any>> {
    return this.axios.put<T>(url, body, config);
  }
  patch<T>(
    url: string,
    body: unknown,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T, any>> {
    return this.axios.patch<T>(url, body, config);
  }

  defaults = this.axios.defaults;
}

export const createAxiosInstance = (baseUrl: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseUrl,
  });

  instance.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${cookie.get("TOKEN")}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    async (response: AxiosResponse) => {
      return response;
    },
    async (err) => {
      console.error(err);
      const originalConfig = err.config;

      if (err.message === "Network Error") {
        toast.error("لطفا اتصال به اینترنت را چک بفرمایید.");
      }
      if (err.response?.status !== 401 && err.response?.data.detail.message) {
        toast.error(err.response?.data.detail.message);
      } else if (
        err.response?.status !== 401 &&
        err.response?.data.detail.Message
      ) {
        toast.error(err.response?.data.detail.Message);
      } else if (err.response?.status !== 401) {
        toast.error("خطا در ثبت اطلاعات");
      }
      if (originalConfig.url !== "/auth/send-otp" && err.response) {
        // Access Token was expired
        if (err.response?.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;
          const REFRESH = cookie.get("REFRESH") || "";
          try {
            const res = await axios.post(
              "https://api-asato.mihaninsurance.com/auth/refresh-token",
              {},
              {
                headers: { Authorization: `Bearer ${REFRESH}` },
              }
            );
            cookie.set("TOKEN", res.data.data.access_token, {
              path: "/",
            });
            cookie.set("REFRESH", res.data.data.refresh_token, {
              path: "/",
            });
            // cookie.set("TOKEN", "");
            // cookie.set("REFRESH", "");
            // cookie.set("REFRESH", res.data.data.refresh_token);
            // cookie.set("TOKEN", res.data.data.access_token);
            // Set the new token in the header
            instance.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${res.data.data.access_token}`;
            return instance(originalConfig);
          } catch (_error) {
            // Delete the expired token
            cookie.remove("TOKEN", { path: "/" });
            cookie.remove("REFRESH", { path: "/" });
            cookie.remove("userInfo", { path: "/" });
            toast.error("نشست شما غیر فعال شده است، لطفا مجددا وارد شوید.");
            // Redirecting the user to the landing page
            window.location.href = window.location.origin;
            return Promise.reject(_error);
          }
        }
      }
      return Promise.reject(err);
    }
  );
  return instance;
};

const apiClient = new Api(createAxiosInstance(API_URL));

export default apiClient;
