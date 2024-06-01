import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { sendConfirmationCode } from "../../services/authService/apiEmailVerifier";

export function useEmailVerification() {
  const navigate = useNavigate();

  const { mutate: confirmCode, isLoading } = useMutation({
    mutationFn: ({ email, type }) => {
      console.log("Sending confirmation code to:", email, "for action:", type);
      return sendConfirmationCode(email, type);
    },
    onSuccess: (user, variables) => {
      const { type, email } = variables;
      localStorage.setItem("email", email);
      console.log("Action type in onSuccess:", type, email);

      if (type === "register") {
        navigate("/register", { replace: true });
        toast.success(
          "Account successfully created! Please verify the new account from the user's email address",
        );
      } else if (type === "password") {
        navigate("/newpassword", { replace: true });
        toast.success(
          "Password successfully changed! Please verify the new password from the user's email address",
        );
      }
    },
    onError: (err) => {
      toast.error("Invalid email");
    },
  });

  return { confirmCode, isLoading };
}
