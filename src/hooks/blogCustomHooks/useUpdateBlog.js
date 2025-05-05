import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBlog as updateBlogApi } from "../../services/blogsApi";
import toast from "react-hot-toast";
export function useUpdateBlog() {
  const queryClint = useQueryClient();
  const { mutate: updateBlog, isLoading: isUpdating } = useMutation({
    mutationFn: ({ id, newData }) => updateBlogApi(id, newData),
    onSuccess: () => {
      toast.success("Updated Successfully");
      queryClint.invalidateQueries({ queryKey: ["blogs"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateBlog, isUpdating };
}
