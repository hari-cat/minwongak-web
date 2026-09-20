import { useNavigate } from "react-router";

function LoginPage() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/main");
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm rounded-xl border bg-white p-6 shadow-sm">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900">로그인</h1>
          <p className="mt-2 text-sm text-gray-500">
            서비스를 이용하려면 로그인해주세요.
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="empId"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              아이디
            </label>
            <input
              id="empId"
              type="text"
              placeholder="아이디를 입력하세요"
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-blue-100"
            />
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
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-amber-600 py-2.5 text-sm font-medium text-white hover:bg-amber-700"
            onClick={handleLogin}
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
