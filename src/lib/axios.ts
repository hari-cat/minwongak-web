import axios from "axios";

export const apiClient = axios.create({
  baseURL: "/api/v1", // 기본 url 세팅
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
