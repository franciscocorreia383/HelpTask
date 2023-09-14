import axios from "axios";
//import { getToken } from "../services/auth";

const api = axios.create({
  baseURL: "http://127.0.0.1:3333"
});

export default api;