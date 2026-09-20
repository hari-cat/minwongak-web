import { useState } from "react";

interface Comment {
  id: number;
  author: string;
  content: string;
  createdAt: string;
  replies?: Comment[];
}

const comments: Comment[] = [
  {
    id: 1,
    author: "박지훈",
    content:
      "저도 어제 같은 문제를 확인했습니다. 관리사무소에서도 확인이 필요한 것 같아요.",
    createdAt: "2026.09.18",
    replies: [
      {
        id: 11,
        author: "김민수",
        content: "맞습니다. 오늘 아침에도 물이 떨어지고 있더라고요.",
        createdAt: "2026.09.18",
      },
    ],
  },
  {
    id: 2,
    author: "이서연",
    content:
      "차량에 물이 튀어서 세차를 다시 했습니다. 빠른 조치가 되었으면 좋겠네요.",
    createdAt: "2026.09.18",
    replies: [],
  },
];

const board = {
  badgestats: "시설",
  title: "지하주차장 천장에서 물이 계속 떨어집니다",
  createdAt: "2026.09.17",
  content:
    "비가 많이 온 이후부터 지하주차장 B2층 일부 구역에서 물이 계속 떨어지고 있습니다. 차량 오염이나 미끄럼 사고가 걱정되니 누수 원인을 확인하고 조치해 주세요. 특히 출입구 근처 바닥이 젖어 있어서 차량이나 보행자가 미끄러질 위험도 있어 보입니다.",
  readCount: 128,
  likeCount: 24,
};

function BoardDetailPage() {
  const [comment, setComment] = useState("");
  const [replyingTo, setReplyingTo] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto w-full max-w-2xl px-4 py-6">
        {/* 뒤로가기 */}
        {/* <button
          type="button"
          className="mb-4 text-sm text-gray-500 hover:text-gray-900"
        >
          ← 목록으로
        </button> */}

        {/* 게시물 */}
        <article className="rounded-xl p-6">
          <span className="inline-flex rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-600">
            {board.badgestats}
          </span>

          <h1 className="mt-3 text-2xl font-bold text-gray-900">
            {board.title}
          </h1>

          {/* 게시물 정보 */}
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
            <span className="font-medium text-gray-700">김민수</span>
            <span className="text-gray-300">·</span>
            <span>{board.createdAt}</span>
            <span className="text-gray-300">·</span>
            <span>조회 {board.readCount}</span>
          </div>

          {/* 본문 */}
          <div className="mt-8 min-h-50 whitespace-pre-wrap text-sm leading-7 text-gray-700">
            {board.content}
          </div>

          {/* 좋아요 */}
          <div className="mt-6 flex justify-center pt-5">
            <button
              type="button"
              className="rounded-full border px-5 py-2 text-sm text-gray-600 hover:bg-gray-50"
            >
              ♥ 좋아요 {board.likeCount}
            </button>
          </div>
        </article>

        {/* 댓글 */}
        <section className="mt-6 rounded-xl  p-6">
          <h2 className="text-lg font-semibold text-gray-900">
            댓글 {comments.length}
          </h2>

          {/* 댓글 작성 */}
          <form className="mt-5 flex gap-2">
            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="댓글을 입력하세요."
              className="min-w-0 flex-1 rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
            />

            <button
              type="submit"
              className="rounded-lg bg-amber-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-amber-700"
            >
              등록
            </button>
          </form>

          {/* 댓글 목록 */}
          <div className="mt-6 divide-y">
            {comments.map((comment) => (
              <div key={comment.id} className="py-5 first:pt-0 last:pb-0">
                {/* 댓글 */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-900">
                      {comment.author}
                    </span>

                    <span className="text-xs text-gray-400">
                      {comment.createdAt}
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-gray-700">
                    {comment.content}
                  </p>

                  <button
                    type="button"
                    onClick={() => setReplyingTo(comment.id)}
                    className="mt-2 text-xs font-medium text-gray-500 hover:text-gray-900"
                  >
                    답글
                  </button>
                </div>

                {/* 대댓글 입력 */}
                {replyingTo === comment.id && (
                  <div className="mt-3 ml-6 flex gap-2">
                    <input
                      placeholder="답글을 입력하세요."
                      className="min-w-0 flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-amber-500"
                    />

                    <button
                      type="button"
                      className="rounded-lg bg-amber-800 px-3 py-2 text-xs font-medium text-white"
                    >
                      등록
                    </button>
                  </div>
                )}

                {/* 대댓글 */}
                {comment.replies && comment.replies.length > 0 && (
                  <div className="mt-4 ml-6 space-y-4 border-l-2 border-gray-100 pl-4">
                    {comment.replies.map((reply) => (
                      <div key={reply.id}>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-gray-900">
                            {reply.author}
                          </span>

                          <span className="text-xs text-gray-400">
                            {reply.createdAt}
                          </span>
                        </div>

                        <p className="mt-1 text-sm leading-6 text-gray-600">
                          {reply.content}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default BoardDetailPage;
