import axios from "axios";
import { useEffect } from "react";

const useAxios = () => {
  useEffect(() => {
    axios.interceptors.request.use((data) => {
      console.log("This log came from interceptor request");
      return Promise.resolve(data);
    }, null);

    axios.interceptors.response.use(null, (error) => {
      console.log(error.message);
      return Promise.reject(error);
    });
  }, []);
};

export default useAxios;
