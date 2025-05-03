import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteLogo as deleteLogoApi } from "../../services/logoApi";

export function useDeleteLogo() {
  const queryClient = useQueryClient();
  const {
    mutate: deleteLogo,
    isLoading: isDeleting,
    error,
  } = useMutation({
    mutationFn: (id) => deleteLogoApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["logos"] });
      toast.success("Logo deleted successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { deleteLogo, isDeleting, error };
}
