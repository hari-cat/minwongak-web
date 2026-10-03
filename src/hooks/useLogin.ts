import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../api/auth";
import { queryKeys } from "../lib/queryKeys";

export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: queryKeys.auth.me }),
  });
}
