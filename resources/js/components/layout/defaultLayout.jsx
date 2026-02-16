import { useLocation } from "react-router-dom"; // Změna z usePage na useLocation
import { useStateContext } from "../../contexts/ContextProvider";
import Nav from "../Nav";
import Footer from "../Footer";

export default function DefaultLayout({ children }) {
  const { user, token, setUser, setToken } = useStateContext();
  
  // React Router ekvivalent k Inertia usePage().url
  const location = useLocation(); 
  
  // Kontrolujeme, zda cesta začíná na /game
  const isGameActive = location.pathname.startsWith("/game");

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Navigaci a Footer schováme, pokud jsme ve hře */}
      {!isGameActive && <Nav />}
      
      <main style={{ flex: 1 }}>
        {children} 
      </main>
      
      {!isGameActive && <Footer />}
    </div>
  );
}