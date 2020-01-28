import axios from "axios";

const axiosWithAuth = () => {
  // returns partial-Promise
  return axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};

export default axiosWithAuth;
