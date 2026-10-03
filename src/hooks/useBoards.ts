import { useQuery } from "@tanstack/react-query";
import { getBoards } from "../api/boards";
import { queryKeys } from "../lib/queryKeys";

export function useBoards() {
  return useQuery({
    queryKey: queryKeys.boards.lists(),
    queryFn: getBoards,
  });
}
