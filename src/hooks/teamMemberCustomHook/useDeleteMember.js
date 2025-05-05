import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMember as deleteMemberApi } from "../../services/memberApi";
import { toast } from "react-hot-toast";

export function useDeleteMember() {
  const queryClient = useQueryClient();
  const { mutate: deleteMember, isLoading: isDeleting } = useMutation({
    mutationFn: (memberId) => deleteMemberApi(memberId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["members"] });
      toast.success("Blog deleted successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { deleteMember, isDeleting };
}
