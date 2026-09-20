import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md text-center">
        <p className="text-7xl font-bold tracking-tight text-amber-600">404</p>

        <h1 className="mt-6 text-2xl font-bold text-gray-900">
          페이지를 찾을 수 없습니다.
        </h1>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          요청하신 페이지가 존재하지 않거나
          <br />
          잘못된 주소로 접근하셨습니다.
        </p>

        <Link
          to="/board"
          className="mt-8 inline-flex items-center rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-amber-700"
        >
          게시물로 돌아가기
        </Link>
      </div>
    </div>
  );
}
