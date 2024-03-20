import { useMutation, useQuery } from "@tanstack/react-query";
import { addCourse, getCourses } from "../queries/course";

export const useCourses = () =>
  useQuery({ queryKey: ["courses"], queryFn: getCourses });


  export const useAddCourse = ()=>useMutation({mutationFn:addCourse})