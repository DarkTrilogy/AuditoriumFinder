import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { banUser } from "../../services/userService/apiModerator";

export function useBanStudent() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading: isBanning, mutate: banStudent } = useMutation({
    mutationFn: ({ userid, banRequest }) => {
      banUser(userid, banRequest);
    },
    onSuccess: () => {
      toast.success("Student successfully baned");
      queryClient.invalidateQueries({
        queryKey: ["reports"],
      });

      navigate(-1);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isBanning, banStudent };
}
