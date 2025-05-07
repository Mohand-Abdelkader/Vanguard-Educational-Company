import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteActivity as deleteActivityApi } from "../../services/activitiesApi";
import toast from "react-hot-toast";
export function useDeleteActivity() {
  const queryClient = useQueryClient();
  const {
    mutate: deleteActivity,
    isLoading: isDeleting,
    error,
  } = useMutation({
    mutationFn: (id) => deleteActivityApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["activities"] });
      toast.success("Activity deleted successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { deleteActivity, isDeleting, error };
}
