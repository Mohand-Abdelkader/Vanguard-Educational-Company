import { useQuery } from "@tanstack/react-query";
import { getLogos } from "../../services/logoApi";

export function useLogos() {
  const { data: logos, isLoading } = useQuery({
    queryKey: ["logos"],
    queryFn: getLogos,
  });

  return { logos, isLoading };
}
