import { createBrowserRouter, RouterProvider } from "react-router";

import LoginPage from "../pages/LoginPage";
import BoardPage from "../pages/BoardPage";
import MainLayout from "../layouts/MainLayout";
import BoardDetailPage from "../pages/BoardDetailPage";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "board",
        element: <BoardPage />,
      },
      {
        path: "board/:boardId",
        element: <BoardDetailPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
