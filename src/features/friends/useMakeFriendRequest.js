import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { makeFriendRequest } from "../../services/userService/apiRequests";

export function useMakeFriendRequest() {
  const { isLoading, mutate: makeRequest } = useMutation({
    mutationFn: ({ id, userId }) => {
      console.log("PARAMS123", userId, id);
      return makeFriendRequest(userId, id);
    },
    onSuccess: () => {
      toast.success("Friend request successfully sent");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, makeRequest };
}
