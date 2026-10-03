import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Navigate } from "react-router";
import z from "zod";
import { useLogin } from "../hooks/useLogin";
import { useCurrentUser } from "../hooks/useCurrentUser";

function LoginPage() {
  const loginSchema = z.object({
    username: z.string().min(1, "아이디를 입력해주세요."),
    password: z.string().min(1, "비밀번호를 입력해주세요."),
  });

  type LoginForm = z.infer<typeof loginSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();
  const loginMutation = useLogin();
  const currentUserQuery = useCurrentUser();

  if (currentUserQuery.isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center text-gray-500">
        로그인 상태를 확인하는 중입니다.
      </div>
    );
  }

  if (currentUserQuery.isSuccess) {
    return <Navigate to="/board" replace />;
  }

  const handleLogin = (data: LoginForm) => {
    loginMutation.mutate(data, {
      onSuccess: () => navigate("/board"),
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm">
        {/* 서비스 타이틀 */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            아파트민원
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            함께 만드는 더 나은 생활 공간
          </p>
        </div>

        {/* 로그인 카드 */}
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900">로그인</h2>
            <p className="mt-2 text-sm text-gray-500">
              서비스를 이용하려면 로그인해주세요.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
            <div>
              <label
                htmlFor="id"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                아이디
              </label>

              <input
                id="id"
                type="text"
                placeholder="아이디를 입력하세요"
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-blue-100"
                {...register("username")}
              />
              {errors.username && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.username.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                비밀번호
              </label>

              <input
                id="password"
                type="password"
                placeholder="비밀번호를 입력하세요"
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-blue-100"
                {...register("password")}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {loginMutation.isError && (
              <p role="alert" className="text-sm text-red-600">
                로그인을 완료하지 못했습니다. 아이디와 비밀번호를 확인하거나
                잠시 후 다시 시도해주세요.
              </p>
            )}

            <button
              type="submit"
              disabled={loginMutation.isPending}
              className="w-full rounded-lg bg-amber-600 py-2.5 text-sm font-medium text-white hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loginMutation.isPending ? "로그인 중..." : "로그인"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
