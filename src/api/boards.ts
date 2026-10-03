import { apiClient } from "../lib/axios";
import type { Board } from "../types/board";

// API 응답 형식이 페이지네이션을 사용하면 이 반환 타입과 매핑을 조정하세요.
export async function getBoards(): Promise<Board[]> {
  const { data } = await apiClient.get<Board[]>("/post");
  return data;
}
