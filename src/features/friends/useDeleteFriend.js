import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { removeFromFriendList } from "../../services/userService/apiFriends";

export function useDeleteFriend() {
  const queryClient = useQueryClient();

  const { isDeleting, mutate: deleteFriend } = useMutation({
    mutationFn: removeFromFriendList,
    onSuccess: () => {
      toast.success("Friend successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["friends"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteFriend };
}
