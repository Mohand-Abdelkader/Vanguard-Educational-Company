import { useQuery } from "@tanstack/react-query";
import { getBlogs as getBlogsApi } from "../../services/blogsApi";
export function useBlogs() {
  const { data: blogs, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogsApi,
  });

  return { isLoading, blogs };
}
