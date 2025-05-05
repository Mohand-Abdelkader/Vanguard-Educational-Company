import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMember as updataMemberApi } from "../../services/memberApi";
import toast from "react-hot-toast";

export function useUpdataMember() {
  const queryClint = useQueryClient();
  const { mutate: updateMember, isLoading: isUpdating } = useMutation({
    mutationFn: ({ id, newData }) => updataMemberApi(id, newData),
    onSuccess: () => {
      toast.success("Updated Successfully");
      queryClint.invalidateQueries({ queryKey: ["members"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateMember, isUpdating };
}
