import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { makeFriendRequest } from "../../services/userService/apiRequests";

export function useAcceptRequest() {
  //   const queryClient = useQueryClient();

  const { isAccepting, mutate: acceptRequest } = useMutation({
    mutationFn: ({ currentUserId, id }) => {
      makeFriendRequest(currentUserId, id);
    },
    onSuccess: () => {
      toast.success("Request successfully accepted");

      //   queryClient.invalidateQueries({
      //     queryKey: ["bookings"],
      //   });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isAccepting, acceptRequest };
}
