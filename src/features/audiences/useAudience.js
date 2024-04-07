import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getAudienceInfo } from "../../services/auditoriumService/apiAudiences";

export function useAudience() {
  const { audienceId } = useParams();

  const {
    isLoading,
    data: audience,
    error,
  } = useQuery({
    queryKey: ["audience", audienceId],
    queryFn: () => getAudienceInfo(audienceId),
    retry: false,
  });

  return { isLoading, error, audience };
}
