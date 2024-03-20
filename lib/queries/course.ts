import { axiosInstance } from "../axios";

export const getCourses = async () =>
  axiosInstance.get("/courses/courses").then((res) =>  res.data);

  export const addCourse = async (course:any) =>   axiosInstance.post("/courses/courses",course).then((res) =>  res.data);
