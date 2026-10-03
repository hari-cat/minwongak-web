export const queryKeys = {
  auth: {
    me: ["auth", "me"] as const,
  },
  boards: {
    all: ["boards"] as const,
    lists: () => [...queryKeys.boards.all, "list"] as const,
    list: (page: number) => [...queryKeys.boards.lists(), { page }] as const,
    details: () => [...queryKeys.boards.all, "detail"] as const,
    detail: (boardId: number) =>
      [...queryKeys.boards.details(), boardId] as const,
  },
};
