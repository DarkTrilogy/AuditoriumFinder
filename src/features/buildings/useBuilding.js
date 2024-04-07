import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBuilding } from "../../services/auditoriumService/apiBuildings";

export function useBuilding() {
  const { buildingId } = useParams();
  console.log("useBuilding", buildingId);

  const {
    isLoading,
    data: building,
    error,
  } = useQuery({
    queryKey: ["building", buildingId],
    queryFn: () => getBuilding(buildingId),
    retry: false,
  });
  console.log("building", building);

  return { isLoading, error, building };
}
