import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { removeFromFriendList } from "../../services/userService/apiFriends";
import { useNavigate } from "react-router-dom";

export function useDeleteFriend() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading: isDeleting, mutate: deleteFriend } = useMutation({
    mutationFn: ({ friendid, userid }) => {
      return removeFromFriendList(friendid, userid);
    },
    onSuccess: () => {
      // toast.success("Friend successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["friends"],
      });

      navigate("/friends");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteFriend };
}
