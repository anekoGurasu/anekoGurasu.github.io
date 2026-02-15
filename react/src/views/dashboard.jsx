import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import "../resources/css/app.css";
import "../resources/css/dashboard.css";

export default function Dashboard() {
  const { token } = useStateContext();
  const [dashboard, setDashboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [difficultyFilter, setDifficultyFilter] = useState(""); // ← nový stav filtru

  useEffect(() => {
    const fetchScores = async () => {
      try {
        setLoading(true);

        const res = await fetch("/api/dashboard");
        const text = await res.text();

        if (!res.ok) {
          throw new Error(`Fetch failed: ${res.status}\n${text}`);
        }

        const start = text.indexOf("[");
        if (start === -1) throw new Error("Nepřišlo JSON pole.");

        const data = JSON.parse(text.slice(start));

        setDashboard(Array.isArray(data) ? data : []);
        setFetchError(null);
      } catch (err) {
        console.error("Chyba při stahování dat:", err);
        setFetchError("Nepodařilo se načíst data.");
      } finally {
        setLoading(false);
      }
    };

    fetchScores();
  }, []);

  if (!token) return <Navigate to="/login" />;

  // Filtrujeme podle difficulty
  const filteredDashboard = dashboard.filter((hrac) =>
    difficultyFilter ? hrac.difficulty_text === difficultyFilter : true
  );

  return (
    <div className="dashboard-content-container cust-box">
      <h1>Výsledky hráčů</h1>

      {fetchError && <div className="error-message">{fetchError}</div>}

      {/* Nový filtr */}
      <div className="dashboard-filter">
        <label>
          Filtr obtížnosti:{" "}
          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
          >
            <option value="">Vše</option>
            <option value="Lehká">Lehká</option>
            <option value="Střední">Střední</option>
            <option value="Těžká">Těžká</option>
          </select>
        </label>
      </div>

      <table className="score-table">
        <thead>
          <tr>
            <th>Pořadí</th>
            <th>Uživatelské jméno</th>
            <th>Obtížnost</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="4" className="loading-message">
                Načítám výsledky... ⏳
              </td>
            </tr>
          ) : filteredDashboard.length > 0 ? (
            <>
              {filteredDashboard.map((hrac, index) => (
                <tr key={`${hrac.username ?? "user"}-${index}`}>
                  <td>{index + 1}.</td>
                  <td>{hrac.username}</td>
                  <td>{hrac.difficulty_text}</td>
                  <td>{hrac.points}</td>
                </tr>
              ))}
              <tr className="more-records-row">
                <td>...</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
              </tr>
            </>
          ) : (
            <tr>
              <td colSpan="4" className="no-results">
                Zatím žádné výsledky pro tuto obtížnost.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
