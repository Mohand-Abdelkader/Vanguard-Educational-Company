import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteBlog as deleteBlogApi } from "../../services/blogsApi";

export function useDeleteBlog() {
  const queryClient = useQueryClient();
  const {
    mutate: deleteBlog,
    isPending: isDeleting,
    error,
  } = useMutation({
    mutationFn: (id) => deleteBlogApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      toast.success("Blog deleted successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { deleteBlog, isDeleting, error };
}
