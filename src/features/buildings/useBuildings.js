import { useSearchParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllBuildings } from "../../services/auditoriumService/apiBuildings";
import { PAGE_SIZE } from "../../utils/constants";

export function useBuildings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("status");
  // const filter =
  //   !filterValue || filterValue === "all"
  //     ? null
  //     : {
  //         field: "status",
  //         value: filterValue,
  //       };

  // SEARCH
  const address = searchParams.get("search");

  // SORT
  // const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  // const [field, direction] = sortByRaw.split("-");
  // const sortBy = { field, direction };

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // QUERY
  let {
    isLoading,
    data: buildings = {},
    error,
  } = useQuery({
    queryKey: ["buildings" /* , search, filter, sortBy, */, page],
    queryFn: () => getAllBuildings(page, PAGE_SIZE),
  });

  if (address) {
    buildings = buildings.filter((building) => {
      return building.address.toLowerCase().includes(address.toLowerCase());
    });
  }

  // PRE-FETCHING
  const pageCount = Math.ceil(buildings.length / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["buildings", /* search, filter, sortBy, */ page + 1],
      queryFn: () => getAllBuildings(page + 1, PAGE_SIZE),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["buildings", /* search, filter, sortBy, */ page - 1],
      queryFn: () => getAllBuildings(page - 1, PAGE_SIZE),
    });

  console.log("USE BUILDINGS", buildings, buildings.length, isLoading, error);

  return { buildings, count: buildings.length, isLoading, error };

  // return { isLoading, error, bookings, count };
}
