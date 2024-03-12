import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      navigate("/dashboard", { replace: true });
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address",
      );
    },
    onError: (err) => {
      toast.error("Something went wrong");
    },
  });

  return { signup, isLoading };
}
