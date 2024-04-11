import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { makeFriendRequest } from "../../services/userService/apiRequests";
import { useNavigate } from "react-router-dom";

export function useAcceptRequest() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isAccepting, mutate: acceptRequest } = useMutation({
    mutationFn: ({ currentUserId, id }) => {
      return makeFriendRequest(currentUserId, id);
    },
    onSuccess: () => {
      toast.success("Request successfully accepted");
      navigate("/friends");

      queryClient.invalidateQueries({
        queryKey: ["inrequests"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isAccepting, acceptRequest };
}
