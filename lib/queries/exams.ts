import { axiosInstance } from "../axios";

export const getExams = async () =>
  axiosInstance.get("/courses/exams").then((res) => res.data);
export const addExams = async (exam: any) =>
  axiosInstance.post("/courses/exams", exam).then((res) => res.data);
