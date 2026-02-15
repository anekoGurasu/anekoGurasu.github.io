import { createBrowserRouter } from "react-router-dom";
import Login from "./views/login";
import Dashboard from "./views/dashboard";
import NotFound from "./views/notFound";
import Home from "./views/Home";
import Game from "./views/game";
import DefaultLayout from "./components/layout/defaultLayout";
import GuestLayout from "./components/layout/guestLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "dashboard", element: <Dashboard /> }, 
      { path: "game", element: <Game /> },
    ],
  },
  {
    path: "/login",
    element: <GuestLayout />,
    children: [{ index: true, element: <Login /> }],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
