import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../queries/course";

export const useCourses = () =>
  useQuery({ queryKey: ["courses"], queryFn: getCourses });
