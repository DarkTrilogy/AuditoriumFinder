import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { removeOutgoingRequest } from "../../services/userService/apiRequests";
import { reportUser } from "../../services/userService/apiUsers";

export function useReportUser() {
  const queryClient = useQueryClient();

  const { isLoading: isReporting, mutate: reportStudent } = useMutation({
    mutationFn: ({ id, currentUserId, request }) => {
      console.log("REPORTING", id, currentUserId, request);
      return reportUser(currentUserId, request, id);
    },
    onSuccess: () => {
      toast.success("Student successfully reported");
      // queryClient.invalidateQueries({
      //   queryKey: ["outrequests"],
      // });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isReporting, reportStudent };
}
