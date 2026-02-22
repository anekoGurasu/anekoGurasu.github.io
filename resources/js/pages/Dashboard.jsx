import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import "../../css/app.css";
import "../../css/dashboard.css";

export default function Dashboard() {
  const { token } = useStateContext();
  const navigate = useNavigate();
  
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [difficultyFilter, setDifficultyFilter] = useState("Lehká");

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await fetch("/api/dashboard");
        if (response.ok) {
          const data = await response.json();
          setScores(data);
        }
      } catch (error) {
        console.error("Chyba při načítání dat:", error);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchScores();
    }
  }, [token]);

  const filteredDashboard = scores.filter((hrac) => {
    if (!difficultyFilter) return true;
    const hracDiff = String(hrac.difficulty_text || "").trim();
    const filterDiff = String(difficultyFilter).trim();
    return hracDiff === filterDiff;
  });

  const top = filteredDashboard.slice(0, 5);

  return (
    <div className="content-container cust-box">
      <div className="dashboard-header">
        <h1>Výsledky hráčů</h1>

        <div className="dashboard-filter">
          <label>
            Filtr obtížnosti:
            <div className="select-custom-wrapper">
            <select
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value)}
            >
              <option value="">Vše</option>
              <option value="Lehká">Lehká</option>
              <option value="Střední">Střední</option>
              <option value="Těžká">Těžká</option>
            </select>
            </div>
          </label>
        </div>
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
              <td colSpan="4" className="loading-message">Načítám výsledky...</td>
            </tr>
          ) : top.length > 0 ? (
            <>
              {top.map((hrac, index) => {
                const rank = index + 1;
                const rowClass = rank <= 3 ? `top-rank rank-${rank}` : "";
                
                return (
                  <tr key={`${hrac.username}-${index}`} className={rowClass}>
                    <td data-label="Pořadí">{rank}.</td>
                    <td data-label="Hráč" className="username-cell">{hrac.username}</td>
                    <td data-label="Obtížnost">
                      <span className={`badge diff-${hrac.difficulty_text?.toLowerCase()}`}>
                        {hrac.difficulty_text}
                      </span>
                    </td>
                    <td data-label="Body" className="points-cell">{hrac.points}</td>
                  </tr>
                );
              })}
              {filteredDashboard.length > 5 && (
                <tr className="more-records-row">
                  <td style={{ textAlign: "center", opacity: 0.5 }}>
                    ...
                  </td>
                  <td style={{ textAlign: "left", opacity: 0.5 }}>
                    ...
                  </td>
                  <td style={{ textAlign: "center", opacity: 0.5 }}>
                    ...
                  </td>
                  <td style={{ textAlign: "center", opacity: 0.5 }}>
                    ...
                  </td>
                </tr>
              )}
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