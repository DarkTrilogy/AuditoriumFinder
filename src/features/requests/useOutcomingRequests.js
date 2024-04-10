import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
import { searchByCriteria } from "../../services/userService/apiUsers";
import { getOutgoingRequests } from "../../services/userService/apiRequests";

export function useOutcomingRequests() {
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
  const nickname = searchParams.get("search");

  // SORT
  // const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  // const [field, direction] = sortByRaw.split("-");
  // const sortBy = { field, direction };

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // QUERY
  let {
    isLoading,
    data = {},
    error,
  } = useQuery({
    queryKey: ["outrequests" /* search, */ /* filter */ /* sortBy */, page],
    queryFn: () => getOutgoingRequests(Number(localStorage.getItem("userId"))),
  });

  // filter by nickname
  if (nickname) {
    data = data.filter((user) => {
      return user.userNickname.toLowerCase().includes(nickname.toLowerCase());
    });
  }

  if (data && data.length > 0) {
    data = data.filter((user) => {
      return user.userid !== Number(localStorage.getItem("userId"));
    });
  }

  const count = data.length;

  // PRE-FETCHING
  // const pageCount = Math.ceil(count / PAGE_SIZE);

  // if (page < pageCount)
  //   queryClient.prefetchQuery({
  //     queryKey: ["bookings", search, filter, sortBy, page + 1],
  //     queryFn: () => getBookings({ filter, search, sortBy, page: page + 1 }),
  //   });

  // if (page > 1)
  //   queryClient.prefetchQuery({
  //     queryKey: ["bookings", search, filter, sortBy, page - 1],
  //     queryFn: () => getBookings({ filter, search, sortBy, page: page - 1 }),
  //   });

  return { isLoading, error, data, count };
}
