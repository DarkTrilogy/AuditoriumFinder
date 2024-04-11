import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getReports } from "../../services/userService/apiModerator";

export function useReports(reportId = null) {
  // const queryClient = useQueryClient();
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
  const search = searchParams.get("search");

  // SORT
  // const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  // const [field, direction] = sortByRaw.split("-");
  // const sortBy = { field, direction };

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // QUERY
  let {
    isLoading,
    data: reports = {},
    error,
  } = useQuery({
    queryKey: ["reports", search, page],
    queryFn: () => getReports(),
  });
  console.log("reports123", reports);

  if (reportId) {
    reports = reports.find((report) => report.id === reportId);
  }

  // PRE-FETCHING
  // const pageCount = Math.ceil(count / PAGE_SIZE);

  // if (page < pageCount)
  //   queryClient.prefetchQuery({
  //     queryKey: ["bookings", search, filter, sortBy, page + 1],
  //     queryFn: () => getReports({ filter, search, sortBy, page: page + 1 }),
  //   });

  // if (page > 1)
  //   queryClient.prefetchQuery({
  //     queryKey: ["bookings", search, filter, sortBy, page - 1],
  //     queryFn: () => getReports({ filter, search, sortBy, page: page - 1 }),
  //   });

  return { isLoading, error, reports, coutn: reports.length };
}
