import axios from "axios";

export const httpRequest = axios.create({
  baseURL: "http://116.203.140.175/api/v1/",
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});
