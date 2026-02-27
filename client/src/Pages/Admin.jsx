import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";
import bgVideo from "../assets/bgpursuit.webm";

const Admin = () => {
    const [registrations, setRegistrations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedWorkshop, setSelectedWorkshop] = useState("All");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRegistrations = async () => {
            try {
                const url = import.meta.env.VITE_API_URL
                    ? `${import.meta.env.VITE_API_URL}/api/registrations`
                    : "http://localhost:5000/api/registrations";

                const res = await fetch(url);
                if (!res.ok) throw new Error("Failed to fetch registrations");
                const data = await res.json();
                setRegistrations(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRegistrations();
    }, []);

    // Get unique workshops for filter
    const uniqueWorkshops = ["All", ...new Set(registrations.map(r => r.workshop))];

    // Filter registrations based on selected workshop
    const filteredRegistrations = selectedWorkshop === "All"
        ? registrations
        : registrations.filter(r => r.workshop === selectedWorkshop);

    return (
        <section className="gallery-section auth-section">
            <video
                className="gallery-bg-video"
                src={bgVideo}
                autoPlay
                loop
                muted
                playsInline
            />

            <button
                className="auth-back"
                type="button"
                onClick={() => navigate("/")}
            >
                <FaArrowLeft /> Home
            </button>

            <div className="auth-wrapper" style={{ maxWidth: '1200px', width: '90%', marginTop: '80px' }}>
                <div className="auth-card" style={{ maxWidth: '100%', padding: '2rem' }}>
                    <div className="auth-card-header">
                        <h2 className="auth-heading">Admin Portal</h2>
                        <p className="auth-subtext">View all your workshop registrations here</p>
                    </div>

                    {loading && <p style={{ color: 'white', textAlign: 'center' }}>Loading registrations...</p>}
                    {error && <p style={{ color: '#ff4d4d', textAlign: 'center' }}>Error: {error}</p>}

                    {!loading && !error && (
                        <>
                            <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column' }}>
                                <label className="auth-label">Filter by Workshop:</label>
                                <select
                                    className="auth-input auth-select"
                                    value={selectedWorkshop}
                                    onChange={(e) => setSelectedWorkshop(e.target.value)}
                                    style={{ maxWidth: '300px' }}
                                >
                                    {uniqueWorkshops.map(ws => (
                                        <option key={ws} value={ws}>{ws}</option>
                                    ))}
                                </select>
                            </div>

                            <div style={{ overflowX: 'auto', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', color: 'white', minWidth: '800px' }}>
                                    <thead>
                                        <tr style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Name</th>
                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Email</th>
                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Phone</th>
                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>College</th>
                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Workshop</th>
                                            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>UTR/Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredRegistrations.length > 0 ? (
                                            filteredRegistrations.map((reg, index) => (
                                                <tr key={index} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: index % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}>
                                                    <td style={{ padding: '12px' }}>{reg.name}</td>
                                                    <td style={{ padding: '12px' }}>{reg.email}</td>
                                                    <td style={{ padding: '12px' }}>{reg.phone}</td>
                                                    <td style={{ padding: '12px' }}>{reg.college} ({reg.year})</td>
                                                    <td style={{ padding: '12px' }}>{reg.workshop}</td>
                                                    <td style={{ padding: '12px' }}>
                                                        {reg.utr === "0" || !reg.utr ? <span style={{ color: '#00ff88' }}>Free</span> : <span style={{ color: '#ffd700' }}>{reg.utr}</span>}
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="6" style={{ padding: '20px', textAlign: 'center' }}>No registrations found for this workshop.</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            <div style={{ marginTop: '15px', color: 'rgba(255,255,255,0.6)', fontSize: '14px', textAlign: 'right' }}>
                                Total Records: {filteredRegistrations.length}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Admin;
