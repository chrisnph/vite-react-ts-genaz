import axios from "axios";

const useAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

useAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

useAxios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default useAxios;
