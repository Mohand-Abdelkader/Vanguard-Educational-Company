import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createAdmission as createAdmissionApi,
  getAdmission,
  deleteAdmission as deleteAdmissionApi,
} from "../../services/admission";
import toast from "react-hot-toast";

export function useCreateAdmission() {
  const queryClint = useQueryClient();
  const { mutate: createAdmission, isPending } = useMutation({
    mutationFn: createAdmissionApi,
    onSuccess: () => {
      toast.success("We Received your Message and will reach out to you ");
      queryClint.invalidateQueries({ queryKey: ["admissions"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createAdmission, isPending };
}

export function useAdmission() {
  const { data: admissions, isLoading } = useQuery({
    queryKey: ["admissions"],
    queryFn: getAdmission,
  });

  return { admissions, isLoading };
}

export function useDeleteAdmission() {
  const queryClint = useQueryClient();
  const { mutate: deleteAdmission, isPending } = useMutation({
    mutationFn: (id) => deleteAdmissionApi(id),
    onSuccess: () => {
      toast.success("Admission Deleted Successfully ");
      queryClint.invalidateQueries({ queryKey: ["admissions"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { deleteAdmission, isPending };
}
