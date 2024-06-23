import { useMutation, useQuery } from "@tanstack/react-query";
import { getAnalytics } from "../queries/analytics";
import { TStudent } from "../types/types";

export const useAnalytics = () =>
  useQuery({
    queryKey: ["analytics"],
    queryFn: getAnalytics,
    select: (data) => data as TStudent,
  });
