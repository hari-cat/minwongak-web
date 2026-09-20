import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import z from "zod";

function LoginPage() {
  const loginSchema = z.object({
    id: z.string().min(1, "아이디를 입력해주세요."),
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

  const handleLogin = (data: LoginForm) => {
    console.log(data);
    if (data.id === "test" && data.password === "894989") {
      localStorage.setItem("isLogin", "true"); // @todo 추후에 로그인 유지 방식 수정시 삭제
      navigate("/main");
    }
  };

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    if (isLogin === "true") {
      navigate("/main");
    }
  }, []); // @todo 추후에 로그인 유지 방식 수정시 삭제

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
                {...register("id")}
              />
              {errors.id && (
                <p className="mt-1 text-sm text-red-500">{errors.id.message}</p>
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

            <button
              type="submit"
              className="w-full rounded-lg bg-amber-600 py-2.5 text-sm font-medium text-white hover:bg-amber-700"
            >
              로그인
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
