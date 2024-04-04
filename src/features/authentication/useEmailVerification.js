import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { sendConfirmationCode } from "../../services/authService/apiEmailVerifier";

export function useEmailVerification() {
  const navigate = useNavigate();

  const { mutate: confirmCode, isLoading } = useMutation({
    mutationFn: sendConfirmationCode,
    onSuccess: (user) => {
      navigate("/register", { replace: true });
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address",
      );
    },
    onError: (err) => {
      toast.error("Invalid email");
    },
  });

  return { confirmCode, isLoading };
}
