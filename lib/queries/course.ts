import { axiosInstance } from "../axios";

export const getCourses = async () =>
  axiosInstance.get("/courses/courses").then((res) => res.data);
