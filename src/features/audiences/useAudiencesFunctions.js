import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  addUserToAuditorium,
  getUserAudience,
  removeUserFromAuditorium,
} from "../../services/auditoriumService/apiAudiences";
import { useNavigate } from "react-router-dom";

export function useAddUserToAuditorium() {
  const navigate = useNavigate();

  const { isAdding, mutate: addUserToAudience } = useMutation({
    mutationFn: (params) => {
      const { userId, audience, silenceStatus } = params;
      addUserToAuditorium(userId, audience.id, silenceStatus);
    },

    onSuccess: () => {
      toast.success("You're successfully added to audience");
      navigate(-1);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isAdding, addUserToAudience };
}

export function useUserAudience() {
  const navigate = useNavigate();

  const { isLoading, mutate: userAudience } = useQuery({
    queryFn: (params) => {
      const userId = params;
      return getUserAudience(userId);
    },

    onError: (err) => toast.error(err.message),
  });

  return { isLoading, userAudience };
}

export function useRemoveUserFromAudience() {
  const navigate = useNavigate();

  const { isRemoving, mutate: removeUserFromAudience } = useMutation({
    mutationFn: (params) => {
      const { userId } = params;
      removeUserFromAuditorium(userId);
    },
    onSuccess: () => {
      toast.success("You're successfully removed to audience");
      navigate(-1);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isRemoving, removeUserFromAudience };
}
