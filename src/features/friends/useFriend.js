import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getFriendList } from "../../services/userService/apiFriends";

export function useFriend() {
  const { friendId } = useParams();

  const {
    isLoading,
    data: friend,
    error,
  } = useQuery({
    queryKey: ["friend", friendId],
    queryFn: () => getFriendList(1, friendId),
    retry: false,
  });

  return { isLoading, error, friend };
}
