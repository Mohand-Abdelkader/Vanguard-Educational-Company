import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addMember as addMemberApi } from "../../services/memberApi";
import toast from "react-hot-toast";

export function useCreateMember() {
  const queryClint = useQueryClient();
  const {
    isLoading: isCreating,
    mutate: addMember,
    error,
  } = useMutation({
    mutationFn: addMemberApi,
    onSuccess: () => {
      toast.success("New Member Successful Created ");
      queryClint.invalidateQueries({ queryKey: ["members"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, addMember, error };
}
