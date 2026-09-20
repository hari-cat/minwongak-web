import { createBrowserRouter, RouterProvider } from "react-router";

import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/main",
        element: <MainPage />,
      },
      {
        path: "/board",
        element: <></>,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
