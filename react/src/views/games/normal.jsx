import { useStateContext } from "../../contexts/ContextProvider";

export default function Normal() {
    const { user, difficulty } = useStateContext();

    return (
        <div className="game-level">
            <h1>Střední úroveň</h1>
            <p>Vítej ve střední úrovni, {user?.name}!</p>
            <p>Vybraná obtížnost: {difficulty}</p>
            {/* Placeholder for game content */}
            <p>Hra bude implementována zde.</p>
        </div>
    );
}
