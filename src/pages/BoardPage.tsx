import { Link } from "react-router";
import { useBoards } from "../hooks/useBoards";
import type { Board } from "../types/board";
interface ListItemProps {
  board: Board;
}

function BoardPage() {
  const { data: boards, isPending, isError, error, refetch } = useBoards();

  if (isPending) {
    return (
      <p className="p-8 text-center text-gray-500">
        게시글을 불러오는 중입니다.
      </p>
    );
  }

  if (isError) {
    return (
      <div className="p-8 text-center">
        <p className="text-red-600">게시글을 불러오지 못했습니다.</p>
        <p className="mt-2 text-sm text-gray-500">{error.message}</p>
        <button
          className="mt-4 rounded border px-4 py-2"
          onClick={() => refetch()}
        >
          다시 시도
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="m-4 space-y-4 flex flex-col items-center">
        {boards.map((board) => {
          return (
            <Link key={board.id} to={`/board/${board.id}`}>
              <ListItem board={board} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function ListItem({ board }: ListItemProps) {
  return (
    <div className="w-full max-w-xl rounded-lg border bg-white p-5 shadow-sm">
      <span className="inline-flex rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-600">
        {board.postStatus}
      </span>
      <h2 className="mt-3 text-lg font-semibold text-gray-900">
        {board.title}
      </h2>
      <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
        {`${board.content}`}
      </p>
      <div className="mt-4 flex items-center justify-between border-t pt-3">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>
            작성자{" "}
            <span className="font-medium text-gray-700">{board.author}</span>
          </span>

          <span className="text-gray-300">·</span>

          <span>{board.createdAt}</span>
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-400">
          <span>조회 {board.readCount}</span>
          <span>♥ {board.likeCount}</span>
        </div>
      </div>
    </div>
  );
}
export default BoardPage;
