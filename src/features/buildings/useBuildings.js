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
  // const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // QUERY
  let {
    isLoading,
    data: buildings = {},
    error,
  } = useQuery({
    queryKey: ["buildings" /* , search, filter, sortBy, page */],
    queryFn: () => getAllBuildings(),
  });

  if (address) {
    buildings = buildings.filter((building) => {
      return building.address.toLowerCase().includes(address.toLowerCase());
    });
  }

  return { buildings, count: buildings.length, isLoading, error };

  // PRE-FETCHING
  // const pageCount = Math.ceil(count / PAGE_SIZE);

  // if (page < pageCount)
  //   queryClient.prefetchQuery({
  //     queryKey: ["bookings", search, filter, sortBy, page + 1],
  //     queryFn: () => getAllBuildings(),
  //   });

  // if (page > 1)
  //   queryClient.prefetchQuery({
  //     queryKey: ["bookings", search, filter, sortBy, page - 1],
  //     queryFn: () => getAllBuildings(),
  //   });
  // return { isLoading, error, bookings, count };
}
