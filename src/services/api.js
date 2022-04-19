import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.request.use(
  (res) => {
    return res;
  },
  (error) => {
   
    return error;
  }
);
instance.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      return error;
    }
  );
  

export default instance;