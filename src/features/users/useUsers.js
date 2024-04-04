import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
import { searchByCriteria } from "../../services/userService/apiUsers";

export function useUsers(userId) {
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
  console.log("search", nickname);

  // SORT
  // const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  // const [field, direction] = sortByRaw.split("-");
  // const sortBy = { field, direction };

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // QUERY
  let {
    isLoading,
    data: { data: users, count } = {},
    error,
  } = useQuery({
    queryKey: ["users" /* search, */ /* filter */ /* sortBy */, page],
    queryFn: () => searchByCriteria(userId),
  });

  // filter by nickname
  if (nickname) {
    users = users.filter((user) => {
      console.log("user", user.userNickname, nickname);
      return user.userNickname.toLowerCase().includes(nickname.toLowerCase());
    });
  }

  console.log(users);

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

  return { isLoading, error, users, count };
}
