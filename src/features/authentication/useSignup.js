import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { signUp as signUpApi } from "../../services/authService/apiSignUp";

export function useSignup() {
  const navigate = useNavigate();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (user, variables) => {
      console.log("fjasld;k", user, variables);
      navigate("/login", { replace: true });
      toast.success("Account successfully verified!");
    },
    onError: (err) => {
      toast.error("Something went wrong");
    },
  });

  return { signup, isLoading };
}

// Supabase option
// export function useSignup() {
//   const navigate = useNavigate();

//   const { mutate: signup, isLoading } = useMutation({
//     mutationFn: signupApi,
//     onSuccess: (user) => {
//       navigate("/dashboard", { replace: true });
//       toast.success(
//         "Account successfully created! Please verify the new account from the user's email address",
//       );
//     },
//     onError: (err) => {
//       toast.error("Something went wrong");
//     },
//   });

//   return { signup, isLoading };
// }
