import { Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function Dashboard() {
    const { token } = useStateContext();

    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <div>dashboard</div>
    );
}
