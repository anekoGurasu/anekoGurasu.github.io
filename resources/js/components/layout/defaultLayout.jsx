import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import Nav from "../Nav";
import Footer from "../Footer";

export default function DefaultLayout() {
  const { user, token, setUser, setToken } = useStateContext();
  const navigate = useNavigate();
  const location = useLocation();
  const hideNav = location.pathname === "/game" || location.pathname.startsWith("/game/");
  const hideFoot = location.pathname === "/game" || location.pathname.startsWith("/game/");

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {!hideNav && <Nav />}
      <Outlet />
      {!hideFoot && <Footer />}
    </div>
  );
}
