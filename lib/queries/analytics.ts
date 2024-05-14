import { axiosInstance } from "../axios";

export const getAnalytics = async () =>
  axiosInstance.get("/student/analytics/").then((res) => res.data);
