import { useQuery } from "@tanstack/react-query";
import { getActivities } from "../../services/activitiesApi";

export function useActivities() {
  const { data: activities, isLoading } = useQuery({
    queryKey: ["activities"],
    queryFn: getActivities,
  });
  return { activities, isLoading };
}
