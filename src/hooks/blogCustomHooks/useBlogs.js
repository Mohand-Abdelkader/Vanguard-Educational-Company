import { useQuery } from "@tanstack/react-query";
import { getBlogs as getBlogsApi } from "../../services/blogsApi";
export function useBlogs() {
  const { isLoading, data: blogs } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogsApi,
  });

  return { isLoading, blogs };
}
