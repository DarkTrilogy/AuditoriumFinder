import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
import { getFriendList } from "../../services/userService/apiFriends";

export function useFriends() {
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
  const search = searchParams.get("search");

  // // SORT
  // const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  // const [field, direction] = sortByRaw.split("-");
  // const sortBy = { field, direction };

  // // PAGINATION
  // const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // QUERY
  const {
    isLoading,
    data: { data: friends, count } = {},
    error,
  } = useQuery({
    // queryKey: ["friends", search, filter, sortBy, page],
    queryKey: ["friends", localStorage.getItem("userId")],
    queryFn: () => getFriendList(Number(localStorage.getItem("userId"))),
  });

  // TODO: связать здесь логику с пагинацией на бэке

  // PRE-FETCHING
  //   const pageCount = Math.ceil(count / PAGE_SIZE);

  //   if (page < pageCount)
  //     queryClient.prefetchQuery({
  //       queryKey: ["bookings", search, filter, sortBy, page + 1],
  //       queryFn: () => getBookings({ filter, search, sortBy, page: page + 1 }),
  //     });

  //   if (page > 1)
  //     queryClient.prefetchQuery({
  //       queryKey: ["bookings", search, filter, sortBy, page - 1],
  //       queryFn: () => getBookings({ filter, search, sortBy, page: page - 1 }),
  //     });

  return { isLoading, error, friends, count };
}
