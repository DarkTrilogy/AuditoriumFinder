import { useQuery } from "@tanstack/react-query";
import { getAudienceUsers } from "../../services/auditoriumService/apiAudiences";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export function useAudienceUsers() {
  const { audienceId } = useParams();

  const {
    isLoading: isGetting,
    data,
    error,
  } = useQuery({
    queryKey: ["audienceIdusers"],
    queryFn: () => getAudienceUsers(audienceId),
  });

  return { isGetting, data, error };
}
