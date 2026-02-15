import { useStateContext } from "../../contexts/ContextProvider";

export default function Hard() {
    const { user, difficulty } = useStateContext();

    return (
        <div className="game-level">
            <h1>Těžké úroveň</h1>
            <p>Vítej v těžké úrovni, {user?.name}!</p>
            <p>Vybraná obtížnost: {difficulty}</p>
            {/* Placeholder for game content */}
            <p>Hra bude implementována zde.</p>
        </div>
    );
}
