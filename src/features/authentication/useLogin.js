import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signIn as signInApi } from "../../services/authService/apiSignIn";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { login as loginApi } from "../../services/apiAuth";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signIn, isLoading } = useMutation({
    mutationFn: ({ email, password }) => signInApi({ email, password }),
    onSuccess: (user) => {
      // console.log("USER", user.user);
      // queryClient.setQueryData(["user"], user.user);
      navigate("/", { replace: true });
    },
    onError: (err) => {
      toast.error("Provided email or password are incorrect");
    },
  });

  return { signIn, isLoading };
}

export function useLogin1() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      console.log("USER", user);
      console.log("USER.USER", user.user);
      queryClient.setQueryData(["user"], user.user);
      navigate("/", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoading };
}
