import { apiClient } from "../lib/axios";

export interface LoginCredentials {
  username: string;
  password: string;
}

export async function login(credentials: LoginCredentials): Promise<void> {
  // 세션은 서버가 Set-Cookie로 발급하며 Axios withCredentials가 이를 처리합니다.
  await apiClient.post("/auth/login", credentials);
}

export async function getCurrentUser(): Promise<unknown> {
  const { data } = await apiClient.get<unknown>("/auth/me");
  return data;
}
