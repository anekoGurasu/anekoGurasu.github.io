import { useStateContext } from "../../contexts/ContextProvider";

export default function Easy() {
    const { user, difficulty } = useStateContext();

    return (
        <div className="game-level">
            <h1>Lehké úroveň</h1>
            <p>Vítej v lehké úrovni, {user?.name}!</p>
            <p>Vybraná obtížnost: {difficulty}</p>
            {/* Placeholder for game content */}
            <p>Hra bude implementována zde.</p>
        </div>
    );
}
