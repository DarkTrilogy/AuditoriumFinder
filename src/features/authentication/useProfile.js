import { useQuery } from "@tanstack/react-query";
import { getProfileData } from "../../services/userService/apiProfile";

export function useProfile() {
  const userId = localStorage.getItem("userId");

  const {
    isLoading,
    data: user,
    error,
  } = useQuery({
    queryKey: ["profile", userId],
    queryFn: () => getProfileData(userId, userId),
    retry: false,
  });

  return { isLoading, error, user };
}
