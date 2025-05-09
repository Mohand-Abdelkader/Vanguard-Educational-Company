import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteService as deleteServiceApi } from "../../services/projectServiceApi";
import toast from "react-hot-toast";
export function useDeleteService() {
  const queryClient = useQueryClient();
  const {
    mutate: deleteService,
    isPending: isDeleting,
    error,
  } = useMutation({
    mutationFn: (id) => deleteServiceApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] });
      toast.success("Service deleted successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { deleteService, isDeleting, error };
}
