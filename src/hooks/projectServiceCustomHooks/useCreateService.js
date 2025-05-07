import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addService } from "../../services/projectServiceApi";
import toast from "react-hot-toast";

export function useCreateService() {
  const queryClint = useQueryClient();
  const { mutate: createService, isLoading: isCreating } = useMutation({
    mutationFn: addService,
    onSuccess: () => {
      toast.success("new Service Successfully Created ");
      queryClint.invalidateQueries({ queryKey: ["services"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createService, isCreating };
}
