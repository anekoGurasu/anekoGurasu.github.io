import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Změna z router na useNavigate
import { useStateContext } from "../contexts/ContextProvider";
import "../../css/app.css";
import "../../css/dashboard.css";

export default function Dashboard() {
  const { token } = useStateContext();
  const navigate = useNavigate();
  
  // Stavy pro data a načítání
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [difficultyFilter, setDifficultyFilter] = useState("");

  // 1. Fetch dat z API (v čistém Reactu si o ně musíme říct)
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

  // 2. Filtrování (zůstává stejné, jen pracujeme se stavem 'scores')
  const filteredDashboard = scores.filter((hrac) => {
    if (!difficultyFilter) return true;
    const hracDiff = String(hrac.difficulty_text || "").trim();
    const filterDiff = String(difficultyFilter).trim();
    return hracDiff === filterDiff;
  });

  const topSix = filteredDashboard.slice(0, 6);

  return (
    <div className="dashboard-content-container cust-box">
      <h1>Výsledky hráčů</h1>

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
              <td colSpan="4" className="loading-message">Načítám výsledky...</td>
            </tr>
          ) : topSix.length > 0 ? (
            <>
              {topSix.map((hrac, index) => (
                <tr key={`${hrac.username}-${index}`}>
                  <td>{index + 1}.</td>
                  <td>{hrac.username}</td>
                  <td>{hrac.difficulty_text}</td>
                  <td>{hrac.points}</td>
                </tr>
              ))}
              {filteredDashboard.length > 6 && (
                <tr className="more-records-row">
                  <td colSpan="4" style={{ textAlign: "center" }}>...</td>
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