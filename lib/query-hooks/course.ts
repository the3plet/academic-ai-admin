import { useMutation, useQuery } from "@tanstack/react-query";
import { addCourse, getCourses } from "../queries/course";
import { notifications } from "@mantine/notifications";

export const useCourses = () =>
  useQuery({ queryKey: ["courses"], queryFn: getCourses });

export const useAddCourse = () => {
  return useMutation({
    mutationFn: addCourse,
    onSuccess: () => {
      notifications.show({
        title: "Course Added",
        message: "Course added successfully",
        autoClose: true,
      });
    },
  });
};
