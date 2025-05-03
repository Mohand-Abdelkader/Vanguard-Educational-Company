import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addLogo } from "../../services/logoApi";
import toast from "react-hot-toast";

export function useCreateLogo() {
  const queryClint = useQueryClient();
  const {
    isLoading: isCreating,
    mutate: createLogo,
    error,
  } = useMutation({
    mutationFn: addLogo,
    onSuccess: () => {
      toast.success("new Partner Successful Created ");
      queryClint.invalidateQueries({ queryKey: ["logos"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createLogo, error };
}
