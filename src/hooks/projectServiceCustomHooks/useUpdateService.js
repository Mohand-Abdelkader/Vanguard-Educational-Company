import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateService as updateServiceApi } from "../../services/projectServiceApi";
import toast from "react-hot-toast";
export function useUpdateService() {
  const queryClint = useQueryClient();
  const { mutate: updateService, isPending: isUpdating } = useMutation({
    mutationFn: ({ id, newData }) => updateServiceApi(id, newData),
    onSuccess: () => {
      toast.success("Updated Successfully");
      queryClint.invalidateQueries({ queryKey: ["services"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateService, isUpdating };
}
