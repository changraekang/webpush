import axios from "axios";

export const instanceAxios = axios.create({
  baseURL: "http://52.78.170.177:8080/api/",
  //baseURL: "http://localhost:8080/api/", // 로컬
});
