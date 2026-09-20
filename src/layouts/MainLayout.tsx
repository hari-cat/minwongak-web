import { Outlet } from "react-router";
import Header from "./Header";

function MainLayout() {
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
