import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { searchByCriteria } from "../../services/userService/apiUsers";

export function useUser(userid) {
  const { userId } = useParams();

  const {
    isLoading,
    data: user,
    error,
  } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => searchByCriteria(userid || userId),
    retry: false,
  });

  return { isLoading, error, user };
}
