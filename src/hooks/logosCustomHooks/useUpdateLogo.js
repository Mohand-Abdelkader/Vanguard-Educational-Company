import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateLogo as updataLogoApi } from "../../services/logoApi";
import toast from "react-hot-toast";
export function useUpdateLogo() {
  const queryClint = useQueryClient();
  const { mutate: updateLogo, isPending: isUpdating } = useMutation({
    mutationFn: ({ id, newData }) => updataLogoApi(id, newData),
    onSuccess: () => {
      toast.success("Updated Successfully");
      queryClint.invalidateQueries({ queryKey: ["logos"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateLogo, isUpdating };
}
