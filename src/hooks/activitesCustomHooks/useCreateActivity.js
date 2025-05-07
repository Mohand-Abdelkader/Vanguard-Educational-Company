import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addActivity } from "../../services/activitiesApi";
import toast from "react-hot-toast";

export function useCreateActivity() {
  const queryClint = useQueryClient();
  const { mutate: createActivity, isLoading: isCreating } = useMutation({
    mutationFn: addActivity,
    onSuccess: () => {
      toast.success("new Activity Successfully Created ");
      queryClint.invalidateQueries({ queryKey: ["activities"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createActivity, isCreating };
}
