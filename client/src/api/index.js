import axios from "axios";
import {useFetchUser} from "../utils/useFetchUser";

const API = axios.create({baseURL: "http://localhost:5000"});

const user = localStorage.getItem("user");
API.interceptors.request.use(req => {
  if (user) {
    req.headers.Authorization = `Bearer ${JSON.parse(user).token}`;
  }
  return req;
});

export const getAllPinsApi = () => API.get("/pins/");
export const addPinApi = pinData => API.post("/pins/addPin", pinData);

export const signUpApi = userData => API.post("/user/signUp", userData);
export const signInApi = userData => API.post("/user/signIn", userData);
