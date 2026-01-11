import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import Nav from "../Nav";
import Footer from "../Footer"

export default function GuestLayout() {
    const {token} = useStateContext();
    const location = useLocation();

    if(token && location.pathname !== '/dashboard' && location.pathname !== '/rules'){
        return <Navigate to="/" />
    }

    return(
        <>
            <div style={{ flex: 1 }}>
                <Outlet/>
            </div>
            <Footer />
        </>
    )
}
