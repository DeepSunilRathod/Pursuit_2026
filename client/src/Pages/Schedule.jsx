import React from "react";
import "../styles/schedule.css";
import bgVideo from "../assets/bgpursuit.webm";

const Schedule = () => {
    return (
        <>
            <video className="video-bg" autoPlay loop muted playsInline>
                <source src={bgVideo} type="video/webm" />
            </video>
            <div className="schedule-container">
                <header className="schedule-header">
                    <h1 className="schedule-title">Workshop Schedule</h1>
                    <p className="schedule-subtitle">Pursuit 2026 • March 25 - 28</p>
                </header>

                {/* Day 1 */}
                <div className="day-schedule">
                    <div className="day-header">
                        <h2 className="day-title">Day 1</h2>
                        <span className="day-date">Wednesday, March 25</span>
                    </div>

                    {/* Desktop View */}
                    <table className="schedule-table desktop-view">
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Track A</th>
                                <th>Track B</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>09:00 AM - 01:00 PM</td>
                                <td className="track-cell track-a">
                                    <span className="workshop-name">AI/ML Bootcamp</span>
                                    <span className="workshop-time">DBMS Lab • 4 Hours</span>
                                </td>
                                <td className="track-cell track-b">
                                    <span className="workshop-name">Electric Vehicle</span>
                                    <span className="workshop-time">Swadhyay Kaksha • 4 Hours</span>
                                </td>
                            </tr>
                            <tr>
                                <td>02:00 PM - 03:00 PM</td>
                                <td className="track-cell track-a" rowSpan="2">
                                    <span className="workshop-name">Introduction to Agentic AI</span>
                                    <span className="workshop-time">Web Tech Lab • 4 Hours</span>
                                </td>
                                <td className="track-cell track-b">
                                    <span className="workshop-name">Electric Vehicle</span>
                                    <span className="workshop-time">Swadhyay Kaksha • 1 Hour (Contd.)</span>
                                </td>
                            </tr>
                            <tr>
                                <td>03:00 PM - 06:00 PM</td>
                                {/* Track A continues above */}
                                <td className="track-cell track-b">
                                    <span className="workshop-name">Mastering LaTeX</span>
                                    <span className="workshop-time">Swadhyay Kaksh • 3 Hours</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Mobile View */}
                    <div className="mobile-view">
                        <div className="schedule-card">
                            <div className="time-slot">09:00 AM - 01:00 PM</div>
                            <div className="track-group">
                                <div className="track-item track-a">
                                    <span className="track-label">Track A:</span>
                                    <span className="workshop-name">AI/ML Bootcamp</span>
                                    <span className="workshop-time">DBMS Lab</span>
                                </div>
                                <div className="track-item track-b">
                                    <span className="track-label">Track B:</span>
                                    <span className="workshop-name">Electric Vehicle</span>
                                    <span className="workshop-time">Swadhyay Kaksha</span>
                                </div>
                            </div>
                        </div>
                        <div className="schedule-card">
                            <div className="time-slot">02:00 PM - 03:00 PM</div>
                            <div className="track-group">
                                <div className="track-item track-a">
                                    <span className="track-label">Track A:</span>
                                    <span className="workshop-name">Intro to Agentic AI</span>
                                    <span className="workshop-time">Web Tech Lab</span>
                                </div>
                                <div className="track-item track-b">
                                    <span className="track-label">Track B:</span>
                                    <span className="workshop-name">Electric Vehicle (Contd.)</span>
                                    <span className="workshop-time">Swadhyay Kaksha</span>
                                </div>
                            </div>
                        </div>
                        <div className="schedule-card">
                            <div className="time-slot">03:00 PM - 06:00 PM</div>
                            <div className="track-group">
                                <div className="track-item track-a">
                                    <span className="track-label">Track A:</span>
                                    <span className="workshop-name">Intro to Agentic AI (Contd.)</span>
                                    <span className="workshop-time">Web Tech Lab</span>
                                </div>
                                <div className="track-item track-b">
                                    <span className="track-label">Track B:</span>
                                    <span className="workshop-name">Mastering LaTeX</span>
                                    <span className="workshop-time">Swadhyay Kaksh</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Day 2 */}
                <div className="day-schedule">
                    <div className="day-header">
                        <h2 className="day-title">Day 2</h2>
                        <span className="day-date">Thursday, March 26</span>
                    </div>

                    <table className="schedule-table desktop-view">
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Track A</th>
                                <th>Track B</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>09:00 AM - 01:00 PM</td>
                                <td className="track-cell track-a">
                                    <span className="workshop-name">AI/ML Bootcamp</span>
                                    <span className="workshop-time">DBMS Lab • 4 Hours</span>
                                </td>
                                <td className="track-cell track-b">
                                    <span className="workshop-name">Electric Vehicle</span>
                                    <span className="workshop-time">Swadhyay Kaksha • 4 Hours</span>
                                </td>
                            </tr>
                            <tr>
                                <td>02:00 PM - 03:00 PM</td>
                                <td className="track-cell track-a" rowSpan="2">
                                    <span className="workshop-name">Cybersecurity Workshop</span>
                                    <span className="workshop-time">Web Tech Lab • 4 Hours</span>
                                </td>
                                <td className="track-cell track-b">
                                    <span className="workshop-name">Electric Vehicle</span>
                                    <span className="workshop-time">Swadhyay Kaksha • 1 Hour (Contd.)</span>
                                </td>
                            </tr>
                            <tr>
                                <td>03:00 PM - 06:00 PM</td>
                                {/* Track A continues above */}
                                <td className="track-cell track-b">
                                    <span className="workshop-name">Mastering LaTeX</span>
                                    <span className="workshop-time">Swadhyay Kaksh • 3 Hours</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Mobile View */}
                    <div className="mobile-view">
                        <div className="schedule-card">
                            <div className="time-slot">09:00 AM - 01:00 PM</div>
                            <div className="track-group">
                                <div className="track-item track-a">
                                    <span className="track-label">Track A:</span>
                                    <span className="workshop-name">AI/ML Bootcamp</span>
                                    <span className="workshop-time">DBMS Lab</span>
                                </div>
                                <div className="track-item track-b">
                                    <span className="track-label">Track B:</span>
                                    <span className="workshop-name">Electric Vehicle</span>
                                    <span className="workshop-time">Swadhyay Kaksha</span>
                                </div>
                            </div>
                        </div>
                        <div className="schedule-card">
                            <div className="time-slot">02:00 PM - 03:00 PM</div>
                            <div className="track-group">
                                <div className="track-item track-a">
                                    <span className="track-label">Track A:</span>
                                    <span className="workshop-name">Cybersecurity Workshop</span>
                                    <span className="workshop-time">Web Tech Lab</span>
                                </div>
                                <div className="track-item track-b">
                                    <span className="track-label">Track B:</span>
                                    <span className="workshop-name">Electric Vehicle (Contd.)</span>
                                    <span className="workshop-time">Swadhyay Kaksha</span>
                                </div>
                            </div>
                        </div>
                        <div className="schedule-card">
                            <div className="time-slot">03:00 PM - 06:00 PM</div>
                            <div className="track-group">
                                <div className="track-item track-a">
                                    <span className="track-label">Track A:</span>
                                    <span className="workshop-name">Cybersecurity (Contd.)</span>
                                    <span className="workshop-time">Web Tech Lab</span>
                                </div>
                                <div className="track-item track-b">
                                    <span className="track-label">Track B:</span>
                                    <span className="workshop-name">Mastering LaTeX</span>
                                    <span className="workshop-time">Swadhyay Kaksh</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Day 3 */}
                <div className="day-schedule">
                    <div className="day-header">
                        <h2 className="day-title">Day 3</h2>
                        <span className="day-date">Friday, March 27</span>
                    </div>

                    <table className="schedule-table desktop-view">
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Track A</th>
                                <th>Track B</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>09:00 AM - 01:00 PM</td>
                                <td className="track-cell track-a">
                                    <span className="workshop-name">AI/ML Bootcamp</span>
                                    <span className="workshop-time">DBMS Lab • 4 Hours</span>
                                </td>
                                <td className="track-cell track-b">
                                    <span className="workshop-name">Intro to VLSI</span>
                                    <span className="workshop-time">Cadence Lab • 4 Hours</span>
                                </td>
                            </tr>
                            <tr>
                                <td>02:00 PM - 03:00 PM</td>
                                <td className="track-cell track-a" rowSpan="2">
                                    <span className="workshop-name">Cloud Byte Workshop</span>
                                    <span className="workshop-time">Web Tech Lab, I.T. Dept. • 4 Hours</span>
                                </td>
                                <td className="track-cell track-b">
                                    <span className="workshop-name">Intro to VLSI</span>
                                    <span className="workshop-time">Cadence Lab • 1 Hour (Contd.)</span>
                                </td>
                            </tr>
                            <tr>
                                <td>03:00 PM - 06:00 PM</td>
                                {/* Track A continues above */}
                                <td className="track-cell track-b">
                                    <span className="workshop-name">Web Development</span>
                                    <span className="workshop-time">DBMS Lab • 3 Hours</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Mobile View */}
                    <div className="mobile-view">
                        <div className="schedule-card">
                            <div className="time-slot">09:00 AM - 01:00 PM</div>
                            <div className="track-group">
                                <div className="track-item track-a">
                                    <span className="track-label">Track A:</span>
                                    <span className="workshop-name">AI/ML Bootcamp</span>
                                    <span className="workshop-time">DBMS Lab</span>
                                </div>
                                <div className="track-item track-b">
                                    <span className="track-label">Track B:</span>
                                    <span className="workshop-name">Intro to VLSI</span>
                                    <span className="workshop-time">Cadence Lab</span>
                                </div>
                            </div>
                        </div>
                        <div className="schedule-card">
                            <div className="time-slot">02:00 PM - 03:00 PM</div>
                            <div className="track-group">
                                <div className="track-item track-a">
                                    <span className="track-label">Track A:</span>
                                    <span className="workshop-name">Cloud Byte Workshop</span>
                                    <span className="workshop-time">Web Tech Lab, I.T. Dept.</span>
                                </div>
                                <div className="track-item track-b">
                                    <span className="track-label">Track B:</span>
                                    <span className="workshop-name">Intro to VLSI (Contd.)</span>
                                    <span className="workshop-time">Cadence Lab</span>
                                </div>
                            </div>
                        </div>
                        <div className="schedule-card">
                            <div className="time-slot">03:00 PM - 06:00 PM</div>
                            <div className="track-group">
                                <div className="track-item track-a">
                                    <span className="track-label">Track A:</span>
                                    <span className="workshop-name">Cloud Byte (Contd.)</span>
                                    <span className="workshop-time">Web Tech Lab</span>
                                </div>
                                <div className="track-item track-b">
                                    <span className="track-label">Track B:</span>
                                    <span className="workshop-name">Web Development</span>
                                    <span className="workshop-time">DBMS Lab</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Day 4 */}
                <div className="day-schedule">
                    <div className="day-header">
                        <h2 className="day-title">Day 4</h2>
                        <span className="day-date">Saturday, March 28</span>
                    </div>

                    <table className="schedule-table desktop-view">
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Track A</th>
                                <th>Track B</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>09:00 AM - 01:00 PM</td>
                                <td className="track-cell track-a">
                                    <span className="workshop-name">Autodesk Revit</span>
                                    <span className="workshop-time">Swadhyay Kaksha • 4 Hours</span>
                                </td>
                                <td className="track-cell track-b">
                                    <span className="workshop-name">Intro to VLSI</span>
                                    <span className="workshop-time">Cadence Lab • 4 Hours</span>
                                </td>
                            </tr>
                            <tr>
                                <td>02:00 PM - 03:00 PM</td>
                                <td className="track-cell track-a">
                                    <span className="workshop-name">Autodesk Revit</span>
                                    <span className="workshop-time">Swadhyay Kaksha • 1 Hour</span>
                                </td>
                                <td className="track-cell track-b">
                                    <span className="workshop-name">Intro to VLSI</span>
                                    <span className="workshop-time">Cadence Lab • 1 Hour (Contd.)</span>
                                </td>
                            </tr>
                            <tr>
                                <td>03:00 PM - 04:00 PM</td>
                                <td className="track-cell track-a">
                                    <span className="workshop-name">Autodesk Revit</span>
                                    <span className="workshop-time">Swadhyay Kaksha • 1 Hour (Final)</span>
                                </td>
                                <td className="track-cell track-b" rowSpan="2">
                                    <span className="workshop-name">Web Development</span>
                                    <span className="workshop-time">DBMS Lab • 3 Hours</span>
                                </td>
                            </tr>
                            <tr>
                                <td>04:00 PM - 06:00 PM</td>
                                <td className="track-cell track-a" style={{ opacity: 0.5, fontStyle: "italic" }}>
                                    <span>Buffer Slots / Networking</span>
                                </td>
                                {/* Track B Web Dev continues */}
                            </tr>
                        </tbody>
                    </table>

                    {/* Mobile View */}
                    <div className="mobile-view">
                        <div className="schedule-card">
                            <div className="time-slot">09:00 AM - 01:00 PM</div>
                            <div className="track-group">
                                <div className="track-item track-a">
                                    <span className="track-label">Track A:</span>
                                    <span className="workshop-name">Autodesk Revit</span>
                                    <span className="workshop-time">Swadhyay Kaksha</span>
                                </div>
                                <div className="track-item track-b">
                                    <span className="track-label">Track B:</span>
                                    <span className="workshop-name">Intro to VLSI</span>
                                    <span className="workshop-time">Cadence Lab</span>
                                </div>
                            </div>
                        </div>
                        <div className="schedule-card">
                            <div className="time-slot">02:00 PM - 03:00 PM</div>
                            <div className="track-group">
                                <div className="track-item track-a">
                                    <span className="track-label">Track A:</span>
                                    <span className="workshop-name">Autodesk Revit</span>
                                    <span className="workshop-time">Swadhyay Kaksha</span>
                                </div>
                                <div className="track-item track-b">
                                    <span className="track-label">Track B:</span>
                                    <span className="workshop-name">Intro to VLSI (Contd.)</span>
                                    <span className="workshop-time">Cadence Lab</span>
                                </div>
                            </div>
                        </div>
                        <div className="schedule-card">
                            <div className="time-slot">03:00 PM - 04:00 PM</div>
                            <div className="track-group">
                                <div className="track-item track-a">
                                    <span className="track-label">Track A:</span>
                                    <span className="workshop-name">Autodesk Revit (Final)</span>
                                    <span className="workshop-time">Swadhyay Kaksha</span>
                                </div>
                                <div className="track-item track-b">
                                    <span className="track-label">Track B:</span>
                                    <span className="workshop-name">Web Development</span>
                                    <span className="workshop-time">DBMS Lab</span>
                                </div>
                            </div>
                        </div>
                        <div className="schedule-card">
                            <div className="time-slot">04:00 PM - 06:00 PM</div>
                            <div className="track-group">
                                <div className="track-item track-a">
                                    <span className="track-label">Track A:</span>
                                    <span className="workshop-name" style={{ fontStyle: "italic", opacity: 0.8 }}>Buffer / Networking</span>
                                </div>
                                <div className="track-item track-b">
                                    <span className="track-label">Track B:</span>
                                    <span className="workshop-name">Web Development (Contd.)</span>
                                    <span className="workshop-time">DBMS Lab</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Schedule;
