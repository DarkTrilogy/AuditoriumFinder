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
    queryKey: ["booking", friendId],
    queryFn: () => getFriendList(1, friendId),
    retry: false,
  });

  console.log("friend", friend);

  return { isLoading, error, friend };
}
