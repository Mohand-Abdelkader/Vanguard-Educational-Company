import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteRequest as deleteRequestApi } from "../../services/requestApi";
import toast from "react-hot-toast";
export function useDeleteRequest() {
  const queryClient = useQueryClient();
  const {
    mutate: deleteRequest,
    isPending: isDeleting,
    error,
  } = useMutation({
    mutationFn: (id) => deleteRequestApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["requests"] });
      toast.success("request deleted successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { deleteRequest, isDeleting, error };
}
