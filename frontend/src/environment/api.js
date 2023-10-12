import axios from "axios";
import { getToken } from "./auth";

//adicionar nas variáveis de ambiente
//const URL = process.env.REACT_APP_DEV_URL;

const api = axios.create({
  baseURL: "http://127.0.0.1:3333"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;