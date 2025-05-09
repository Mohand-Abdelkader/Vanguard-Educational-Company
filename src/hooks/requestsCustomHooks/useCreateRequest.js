import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createRequest as createRequestApi } from "../../services/requestApi";
import toast from "react-hot-toast";

export function useCreateRequest() {
  const queryClint = useQueryClient();
  const { mutate: createRequest, isPending: isCreating } = useMutation({
    mutationFn: createRequestApi,
    onSuccess: () => {
      toast.success(
        "your Requested has been send, we will reach out for you! "
      );
      queryClint.invalidateQueries({ queryKey: ["requests"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createRequest, isCreating };
}
