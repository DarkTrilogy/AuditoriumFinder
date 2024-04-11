import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  addUserToAuditorium,
  getAudienceUsers,
  getUserAudience,
  removeUserFromAuditorium,
} from "../../services/auditoriumService/apiAudiences";
import { useNavigate, useSearchParams } from "react-router-dom";

// export function useAddUserToAuditorium() {
//   const navigate = useNavigate();

//   const { isAdding, mutate: addUserToAudience } = useMutation({
//     mutationFn: (params) => {
//       const { userId, audience, silenceStatus } = params; // вынести данные переменные наверх - в начало функции и объявить их через const
//       addUserToAuditorium(userId, audience.id, silenceStatus);
//     },

//     onSuccess: () => {
//       toast.success("You're successfully added to audience");
//       localStorage.setItem("userAudienceId", audience.id);
//       navigate(-1);
//     },
//     onError: (err) => toast.error(err.message),
//   });

//   return { isAdding, addUserToAudience };
// }
export function useAddUserToAuditorium() {
  const navigate = useNavigate();

  const { isAdding, mutate: addUserToAudience } = useMutation({
    mutationFn: ({ userId, audience, silenceStatus }) => {
      addUserToAuditorium(userId, audience.id, silenceStatus);
    },

    onSuccess: (data, { userId, audience }) => {
      // Добавляем audience в onSuccess колбэк
      toast.success("You're successfully added to audience");
      localStorage.setItem(
        `userAudienceId${localStorage.getItem("userId")}`,
        audience.id,
      );
      navigate(-1);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isAdding, addUserToAudience };
}

export function useUserAudience() {
  const { isLoading, mutate: userAudience } = useMutation({
    mutationFn: (params) => {
      const userId = params;
      getUserAudience(userId);
    },

    onError: (err) => toast.error(err.message),
  });

  return { isLoading, userAudience };
}

export function useRemoveUserFromAudience() {
  const navigate = useNavigate();

  const { isRemoving, mutate: removeUserFromAudience } = useMutation({
    mutationFn: (params) => {
      const userId = params;
      removeUserFromAuditorium(userId);
    },
    onSuccess: () => {
      toast.success("You're successfully removed to audience");
      localStorage.removeItem("userAudienceId");
      navigate(-1);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isRemoving, removeUserFromAudience };
}
