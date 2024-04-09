import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProfileData } from "../../services/userService/apiProfile";

export function useProfile(userid) {
  const { userId } = useParams();

  const {
    isLoading,
    data: profile,
    error,
  } = useQuery({
    queryKey: ["profile", userid || userId],
    queryFn: () => {
      if (userid || userId) {
        return getProfileData(
          Number(localStorage.getItem("userId")),
          userid || userId,
        );
      }
    },
    retry: false,
  });

  return { isLoading, error, profile };
}
