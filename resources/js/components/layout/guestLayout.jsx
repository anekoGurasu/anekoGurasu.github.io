import { useLocation } from "react-router-dom"; // Místo usePage
import { useStateContext } from "../../contexts/ContextProvider";
import Footer from "../Footer";

export default function GuestLayout({ children }) {
    // V čistém SPA už navigaci/přesměrování řešíme v app.tsx přes <GuestRoute />
    // Tento layout se tedy stará už jen o vizuální obal.

    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <div style={{ flex: 1 }}>
                {/* Zde se vykreslí obsah Login stránky */}
                {children}
            </div>
            <Footer />
        </div>
    );
}