import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { supabase } from "../supabaseClient";
import "../../../resources/css/app.css";
import "../../../resources/css/dashboard.css";

export default function Dashboard() {
    const { token } = useStateContext();
    const [dashboard, setDashboard] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {
        const fetchScores = async () => {
            try {
                let { data, error } = await supabase
                    .from('DASHBOARD')          
                    .select('USERNAME, POINTS')   
                    .order('POINTS', { ascending: false })
                    .limit(5);

                if (error) throw error;

                setDashboard(data);
                setFetchError(null);
            } catch (error) {
                console.error("Chyba při stahování dat:", error.message);
                setFetchError("Nepodařilo se načíst data.");
            } finally {
                setLoading(false);
            }
        };

        fetchScores();
    }, []);

    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="dashboard-content-container">
            <h1>Výsledky hráčů</h1>

            {fetchError && (
                <div className="error-message">
                    {fetchError}
                </div>
            )}

            <table className="score-table">
                <thead>
                    <tr>
                        <th>Pořadí</th>
                        <th>Uživatelské jméno</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan="3" className="loading-message">
                                Načítám výsledky... ⏳
                            </td>
                        </tr>
                    ) : dashboard.length > 0 ? (
                        <> 
                            {dashboard.map((hrac, index) => (
                                <tr key={index}>
                                    <td>{index + 1}.</td>
                                    <td>{hrac.USERNAME}</td>
                                    <td>{hrac.POINTS}</td>
                                </tr>
                            ))}
                            <tr className="more-records-row">
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                            </tr>
                        </>
                    ) : (
                        <tr>
                            <td colSpan="3" className="no-results">
                                Zatím žádné výsledky. Buďte první!
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}