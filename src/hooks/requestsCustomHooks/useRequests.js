import { useQuery } from "@tanstack/react-query";
import { getRequests } from "../../services/requestApi";
export function useRequests() {
  const { data: requests, isLoading } = useQuery({
    queryKey: ["requests"],
    queryFn: getRequests,
  });
  return { requests, isLoading };
}
