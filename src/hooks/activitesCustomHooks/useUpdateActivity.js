import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateActivity as updateActivityApi } from "../../services/activitiesApi";
import toast from "react-hot-toast";
export function useUpdateActivity() {
  const queryClint = useQueryClient();
  const { mutate: updateActivity, isLoading: isUpdating } = useMutation({
    mutationFn: ({ id, newData }) => updateActivityApi(id, newData),
    onSuccess: () => {
      toast.success("Updated Successfully");
      queryClint.invalidateQueries({ queryKey: ["activities"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateActivity, isUpdating };
}
