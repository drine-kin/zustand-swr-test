import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";
import ToastMessage from "./ToastMessage";

const Layout = () => {
  return (
    <main className="bg-zinc-300 max-w-lg min-h-[50vh] m-auto">
      <NavBar />
      <Outlet />
      <ToastMessage />
    </main>
  );
};

export default Layout;
