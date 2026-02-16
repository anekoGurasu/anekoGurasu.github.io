import { usePage } from "@inertiajs/react"; // Změna importu
import { useStateContext } from "../../contexts/ContextProvider";
import Nav from "../Nav";
import Footer from "../Footer";

export default function DefaultLayout({ children }) { // Přidán parametr { children }
  const { user, token, setUser, setToken } = useStateContext();
  
  // V Inertii získáme aktuální cestu přes usePage().url
  const { url } = usePage(); 
  
  const hideNav = url === "/game" || url.startsWith("/game");
  const hideFoot = url === "/game" || url.startsWith("/game");

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {!hideNav && <Nav />}
      {children} 
      
      {!hideFoot && <Footer />}
    </div>
  );
}