import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

interface Board {
  id: number;
  title: string;
  content: string;
  badgeStatus: string;
  author: string;
  createdAt: string;
  readCount: number;
  likeCount: number;
}
interface ListItemProps {
  board: Board;
}

const initBoards: Board[] = [
  {
    id: 1,
    title: "지하주차장 천장에서 물이 계속 떨어집니다",
    content:
      "비가 많이 온 이후부터 지하주차장 B2층 일부 구역에서 물이 계속 떨어지고 있습니다. 차량 오염이나 미끄럼 사고가 걱정되니 누수 원인을 확인하고 조치해 주세요.",
    badgeStatus: "시설",
    author: "김민수",
    createdAt: "2026.09.17",
    readCount: 128,
    likeCount: 24,
  },
  {
    id: 2,
    title: "출근 시간대 엘리베이터 대기 시간이 너무 깁니다",
    content:
      "평일 오전 8시 전후로 엘리베이터 이용자가 많아 대기 시간이 상당히 길어지고 있습니다. 출근 시간대 엘리베이터 운행 방법을 조정할 수 있는지 검토 부탁드립니다.",
    badgeStatus: "생활",
    author: "박지훈",
    createdAt: "2026.09.16",
    readCount: 96,
    likeCount: 18,
  },
  {
    id: 3,
    title: "분리수거장 주변 정리가 필요해 보입니다",
    content:
      "최근 분리수거장 주변에 일반 쓰레기와 재활용품이 섞여 버려지는 경우가 자주 보입니다. 분리수거 안내문을 추가하거나 관리 방법을 개선해 주시면 좋겠습니다.",
    badgeStatus: "환경",
    author: "이서연",
    createdAt: "2026.09.15",
    readCount: 74,
    likeCount: 12,
  },
  {
    id: 4,
    title: "어린이 놀이터 주변 바닥이 미끄럽습니다",
    content:
      "최근 비가 온 뒤 어린이 놀이터 주변 바닥에 물이 잘 빠지지 않아 미끄러운 상태가 오래 지속되고 있습니다. 아이들이 많이 이용하는 공간인 만큼 배수 상태를 점검하고 필요한 조치를 부탁드립니다.",
    badgeStatus: "안전",
    author: "최준호",
    createdAt: "2026.09.14",
    readCount: 61,
    likeCount: 9,
  },
];

function MainPage() {
  // const [page, setPage] = useState(0);
  const [boards, setBoards] = useState(initBoards);
  const observerTarget = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = observerTarget.current;

    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // setPage((prev) => prev + 1);
          setTimeout(() => {
            setBoards((prev) => [...prev, ...initBoards]);
          }, 500);
        }
      },
      {
        threshold: 0,
      },
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <div className="m-4 space-y-4 flex flex-col items-center">
        {boards.map((board, idx) => {
          return (
            <Link to={`/board/${board.id}`}>
              <ListItem key={`boards-${idx}`} board={board} />
            </Link>
          );
        })}
      </div>
      <div
        ref={observerTarget}
        className="h-20 flex items-center justify-center"
      >
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-200 border-t-gray-600" />
      </div>
    </div>
  );
}

function ListItem({ board }: ListItemProps) {
  return (
    <div className="w-full max-w-xl rounded-lg border bg-white p-5 shadow-sm">
      <span className="inline-flex rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-600">
        {board.badgeStatus}
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
export default MainPage;
