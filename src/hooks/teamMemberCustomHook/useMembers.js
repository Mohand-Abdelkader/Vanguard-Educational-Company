import { useQuery } from "@tanstack/react-query";
import { getMembers } from "../../services/memberApi";

export function useMembers() {
  const { data: teamMembers, isLoading } = useQuery({
    queryKey: ["members"],
    queryFn: getMembers,
  });
  return { teamMembers, isLoading };
}
