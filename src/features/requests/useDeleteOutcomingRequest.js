import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { removeOutgoingRequest } from "../../services/userService/apiRequests";

export function useDeleteOutcomingRequest() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteOutcomingRequest } = useMutation(
    {
      mutationFn: ({ requestid, currentUserId }) => {
        removeOutgoingRequest(currentUserId, requestid);
      },
      onSuccess: () => {
        // toast.success("Request successfully canceled");
        queryClient.invalidateQueries({
          queryKey: ["outrequests"],
        });
      },
      onError: (err) => toast.error(err.message),
    },
  );

  return { isDeleting, deleteOutcomingRequest };
}
