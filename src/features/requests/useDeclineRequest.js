import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { declineIncomingRequestFromUser } from "../../services/userService/apiRequests";

export function useDeclineRequest() {
  //   const queryClient = useQueryClient();

  const { isDeclining, mutate: declineRequest } = useMutation({
    mutationFn: ({ currentUserId, id }) =>
      declineIncomingRequestFromUser(currentUserId, id),
    onSuccess: () => {
      toast.success("Request successfully declined");

      //   queryClient.invalidateQueries({
      //     queryKey: ["bookings"],
      //   });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeclining, declineRequest };
}
