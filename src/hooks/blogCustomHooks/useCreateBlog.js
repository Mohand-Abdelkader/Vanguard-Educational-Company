import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addBlog as addBlogApi } from "../../services/blogsApi";
import toast from "react-hot-toast";

export function useCreateBlog() {
  const queryClint = useQueryClient();
  const {
    isLoading: isCreating,
    mutate: addBlog,
    error,
  } = useMutation({
    mutationFn: addBlogApi,
    onSuccess: () => {
      toast.success("new Blog Successful Created ");
      queryClint.invalidateQueries({ queryKey: ["blogs"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, addBlog, error };
}
