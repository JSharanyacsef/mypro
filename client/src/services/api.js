import axios from "axios";

const API = axios.create({
  baseURL: "https://mypro-qvbq.onrender.com",
});

export default {
  register: (data) => API.post("/register", data),
  login: (data) => API.post("/login", data),
  getUsers: () => API.get("/users"),
};