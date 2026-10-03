import axios from "axios";
import { Navigate, Outlet } from "react-router";
import { useCurrentUser } from "../hooks/useCurrentUser";
import Header from "./Header";

function MainLayout() {
  const currentUserQuery = useCurrentUser();

  if (currentUserQuery.isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center text-gray-500">
        로그인 상태를 확인하는 중입니다.
      </div>
    );
  }

  if (currentUserQuery.isError) {
    if (
      axios.isAxiosError(currentUserQuery.error) &&
      currentUserQuery.error.response?.status === 401
    ) {
      return <Navigate to="/" replace />;
    }

    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-3 text-gray-600">
        <p>로그인 상태를 확인하지 못했습니다.</p>
        <button
          className="rounded border px-4 py-2"
          onClick={() => currentUserQuery.refetch()}
        >
          다시 시도
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50">
        <Header />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
