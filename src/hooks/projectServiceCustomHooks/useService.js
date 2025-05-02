import { useQuery } from "@tanstack/react-query";
import { getService } from "../../services/projectServiceApi";

export function useService() {
  const { data: projectService, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: getService,
  });
  return { projectService, isLoading };
}
