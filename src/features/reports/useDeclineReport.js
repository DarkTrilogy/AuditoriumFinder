import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { declineReport } from "../../services/userService/apiModerator";

export function useDeclineReport() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading: isDeclining, mutate: declineStudentReport } = useMutation({
    mutationFn: ({ userid, id }) => {
      return declineReport(userid, id);
    },
    onSuccess: () => {
      toast.success("Report successfully declined");
      queryClient.invalidateQueries({
        queryKey: ["reports"],
      });

      navigate(-1);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeclining, declineStudentReport };
}
