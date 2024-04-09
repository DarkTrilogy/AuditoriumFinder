import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBuilding } from "../../services/auditoriumService/apiBuildings";

export function useRequest() {
  const { requestId } = useParams();

  const {
    isLoading,
    data: request,
    error,
  } = useQuery({
    queryKey: ["request", requestId],
    queryFn: () => getBuilding(requestId),
    retry: false,
  });

  return { isLoading, error, request };
}
