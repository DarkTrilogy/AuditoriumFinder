import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signIn as signInApi } from "../../services/authService/apiSignIn";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signIn, isLoading } = useMutation({
    mutationFn: ({ email, password }) => signInApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      console.log("HUURAY");
      navigate("/", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { signIn, isLoading };
}

// Supabase solution
// export function useLogin() {
//   const queryClient = useQueryClient();
//   const navigate = useNavigate();

//   const { mutate: login, isLoading } = useMutation({
//     mutationFn: ({ email, password }) => loginApi({ email, password }),
//     onSuccess: (user) => {
//       queryClient.setQueryData(["user"], user.user);
//       navigate("/", { replace: true });
//     },
//     onError: (err) => {
//       console.log("ERROR", err);
//       toast.error("Provided email or password are incorrect");
//     },
//   });

//   return { login, isLoading };
// }
