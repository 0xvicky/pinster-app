import axios from "axios";

const API = axios.create({baseURL: "http://localhost:5000"});

export const signUpApi = userData => API.post("/user/signUp", userData);
export const signInApi = userData => API.post("/user/signIn", userData);
