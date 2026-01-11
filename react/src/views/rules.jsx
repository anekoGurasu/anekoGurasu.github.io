import { Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function Rules() {
    const { token } = useStateContext();

    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="rules">
            <h1>Pravidla</h1>
            <p>Zde jsou pravidla hry a další informace.</p>
        </div>
    );
}
