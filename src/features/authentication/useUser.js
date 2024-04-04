import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
}

// export function useUser() {
//   const { isLoading, data: user } = useQuery({
//     queryKey: ["user"],
//     queryFn: getCurrentUser,
//   });

//   console.log("USEUSER", isLoading, user, user?.role === "authenticated");

//   return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
// }
