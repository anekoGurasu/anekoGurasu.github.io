import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import Nav from "../Nav";
import Footer from "../Footer"

export default function DefaultLayout() {
    const {user, token, setUser, setToken} = useStateContext()
    const navigate = useNavigate()

    return(
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    )
}

