import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
import { getFreeAudiencesInBuilding } from "../../services/auditoriumService/apiAudiences";

export function useAudiences(building) {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // FILTER
  // const filterValue = searchParams.get("status");
  // const filter =
  //   !filterValue || filterValue === "all"
  //     ? null
  //     : {
  //         field: "status",
  //         value: filterValue,
  //       };

  // SEARCH
  const audience = searchParams.get("search");

  // SORT
  // const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  // const [field, direction] = sortByRaw.split("-");
  // const sortBy = { field, direction };

  // PAGINATION
  // const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // QUERY
  let { isLoading, data, error } = useQuery({
    queryKey: ["audiences" /* search, filter, sortBy, page */],
    queryFn: () => getFreeAudiencesInBuilding(building),
    retry: false,
  });

  let currentBuilding, auditoriums;

  if (data) {
    building = data.building;
    auditoriums = data.auditoriums;
    if (audience) {
      auditoriums = auditoriums.filter((auditorium) => {
        const cabinet = "" + auditorium.corpus.name + auditorium.name;
        return cabinet.toLowerCase().includes(audience.toLowerCase());
      });
    }
  }

  // PRE-FETCHING
  // const pageCount = Math.ceil(count / PAGE_SIZE);

  // if (page < pageCount)
  //   queryClient.prefetchQuery({
  //     queryKey: ["bookings", search, filter, sortBy, page + 1],
  //     //   queryFn: () => getBookings({ filter, search, sortBy, page: page + 1 }),
  //   });

  // if (page > 1)
  //   queryClient.prefetchQuery({
  //     queryKey: ["bookings", search, filter, sortBy, page - 1],
  //     //   queryFn: () => getBookings({ filter, search, sortBy, page: page - 1 }),
  //   });

  return { isLoading, error, data: { auditoriums, currentBuilding } };
}
