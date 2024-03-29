import axios, { AxiosRequestConfig } from "axios";

const Axios = axios.create({
  baseURL: "https://dummyjson.com/",
  timeout: 50000,
  headers: {
    Accept: "application/json",
  },
});

Axios.interceptors.request.use(
  // @ts-ignore
  (config: AxiosRequestConfig) => {
    // ...
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (response) => {
    //  ...
    return response;
  },
  (error) => {
    //  ...
    return Promise.reject(error);
  }
);

export class HttpClient {
  static async get<T>({ url, params }: { url: string; params?: unknown }) {
    const response = await Axios.get<T>(url, { params });
    return response.data;
  }

  static async post<T>({
    url,
    data,
    options,
  }: {
    url: string;
    data: unknown;
    options?: any;
  }) {
    const response = await Axios.post<T>(url, data, options);
    return response.data;
  }

  static async put<T>({ url, data }: { url: string; data: unknown }) {
    const response = await Axios.put<T>(url, data);
    return response.data;
  }

  static async patch<T>({ url, data }: { url: string; data?: unknown }) {
    const response = await Axios.patch<T>(url, data);
    return response.data;
  }

  static async del<T>({ url }: { url: string }) {
    const response = await Axios.delete<T>(url);

    return response.data;
  }
}
