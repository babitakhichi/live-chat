import { config } from "@/config";
import Axios from "axios";
import Cookies from "js-cookie";
const axios = Axios.create();

axios.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem("token");

    config.headers["Authorization"] = "Bearer " + authToken;
    return config;
  },
  (error) => Promise.reject(error)
);

export const auth = async () => {
  const res = await axios.get(`${config.BACKEND_BASE_URL}/api/auth`);
  console.log("res.data aauth", res.data);
  return res.data;
};

export const signup = async (data) => {
  const res = await axios.post(`${config.BACKEND_BASE_URL}/api/signup`, data);
  return res.data;
};

export const login = async (data) => {
  const res = await axios.post(`${config.BACKEND_BASE_URL}/api/login`, data);
  Cookies.set("token", res.data.token);
  console.log("res.data", res.data.token);
  return res.data;
};

export const getAllUsers = async ({ search, size }) => {
  const res = await axios.get(
    `${config.BACKEND_BASE_URL}/api/user?search=${search || ""}&size=${
      size || 20
    }`
  );
  return res.data;
};

export const setAvatar = async ({ imgUrl }) => {
  const res = await axios.put(`${config.BACKEND_BASE_URL}/api/avatar`, {
    imgUrl,
  });
  return res.data;
};

export const deleteUser = async () => {
  const res = await axios.delete(`${config.BACKEND_BASE_URL}/api/delete`);
  return res.data;
};

export const sendMessage = async (data) => {
  const res = await axios.post(`${config.BACKEND_BASE_URL}/api/message`, data);
  return res.data;
};

export const getMessage = async ({ user, size }) => {
  if (user) {
    const res = await axios.get(
      `${config.BACKEND_BASE_URL}/api/message/${user}?size=${size || 20}`
    );
    return res.data;
  }
};

export const getUserById = async (id) => {
  const res = await axios.get(`${config.BACKEND_BASE_URL}/api/user/${id}`);
  return res.data;
};
