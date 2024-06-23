import { useMutation, useQuery,useQueryClient } from "@tanstack/react-query";
import { addExams, getExams } from "../queries/exams";
import { AExam, TExam } from "../types/types";
import { notifications } from "@mantine/notifications";

export const useExams = () =>
  useQuery({
    queryKey: ["exams"],
    queryFn: getExams,
    select: (data) => data as TExam,
  });

  export const useAddExams = () => {
    const queryClient = useQueryClient();
    
    return useMutation({
      mutationFn: addExams,
      onSuccess: (data: any) => {
        queryClient.invalidateQueries();
        notifications.show({
          title: "Exam Added",
          message: "Exam added successfully",
          autoClose: true,
        });
      },
      onError: () => {
        notifications.show({
          title: "Failed",
          message: "Exam failed to add",
          autoClose: true,
        });
      },
    });
  };
