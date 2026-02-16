import { useEffect } from "react";
import { router, usePage } from "@inertiajs/react"; // Inertia náhrada za router-dom
import { useStateContext } from "../../contexts/ContextProvider";
import Footer from "../Footer";

export default function GuestLayout({ children }) { // Přidán parametr { children }
    const { token } = useStateContext();
    const { url } = usePage();

    // Přesměrování řešíme přes useEffect, ne v renderu
    useEffect(() => {
        if (token && url !== '/dashboard' && url !== '/rules') {
            router.visit("/"); // Inertia náhrada za <Navigate />
        }
    }, [token, url]);

    return (
        <>
            <div style={{ flex: 1 }}>
                {/* Místo <Outlet /> dáme {children} */}
                {children}
            </div>
            <Footer />
        </>
    );
}