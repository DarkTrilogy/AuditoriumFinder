import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { declineIncomingRequestFromUser } from "../../services/userService/apiRequests";
import { useNavigate } from "react-router-dom";

export function useDeclineRequest() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isDeclining, mutate: declineRequest } = useMutation({
    mutationFn: ({ currentUserId, id }) => {
      return declineIncomingRequestFromUser(currentUserId, id);
    },
    onSuccess: () => {
      toast.success("Request successfully declined");
      navigate("/friends");

      queryClient.invalidateQueries({
        queryKey: ["inrequests"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeclining, declineRequest };
}
