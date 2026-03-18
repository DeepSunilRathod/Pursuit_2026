import { useParams, useNavigate } from "react-router-dom";
import "../styles/workshopDetail.css";
import bgVideo from "../assets/bgpursuit.webm";

// No Icons needed

const workshopData = {
    "cloud-byte": {
        name: "Cloud Byte",
        overview: "Explore the fascinating world of Cloud Computing and open-source contributions. Learn to build, deploy, and manage scalable cloud applications.",
        time: "09:00 AM - 02:00 PM",
        date: "March 25",
        venue: "Web Tech Lab",
        schedule: "1 hr lunch",
        fee: "₹ 49",
        resourcePerson: "Mr. Amit Molke",
        coordinator: "Ashish Ingle (Chairperson)",
        color: "#00f0ff"
    },
    "mastering-latex": {
        name: "Mastering LaTeX: Type Smart, Not Hard",
        overview: "Master LaTeX for professional document preparation. A must-attend workshop for writing research papers, reports, and beautiful technical documentation.",
        time: "12:00 PM - 04:30 PM",
        date: "March 25",
        venue: "AI-ML Lab",
        schedule: "30 min break",
        fee: "Free",
        resourcePerson: "Dr. R.S. Mahamune",
        coordinator: "Shrushti Deshmukh (Chairperson)",
        color: "#ff00e5",
        isFull: true
    },
    "ai-ml-bootcamp": {
        name: "AI/ML Bootcamp",
        overview: "Kickstart your AI and ML journey. In this extended intensive bootcamp, build neural networks, train image classifiers, and learn modern ML frameworks.",
        time: "09:00 AM - 01:00 PM",
        date: "March 27 to 28",
        venue: "DBMS Lab",
        schedule: "1 hr lunch",
        fee: "₹ 100",
        resourcePerson: "Mr. Yogesh P. Murumkar",
        coordinator: "Yash Mali (Chairperson)",
        color: "#a78bfa"
    },
    "vlsi-applications": {
        name: "Introduction to VLSI and Its Applications",
        overview: "Dive into the world of VLSI design. Learn the fundamentals of digital circuits, chip manufacturing processes, and HDL programming.",
        time: "09:00 AM - 03:00 PM",
        date: "March 28",
        venue: "Cadence Lab",
        schedule: "1 hr lunch",
        fee: "₹ 60",
        resourcePerson: "Mr. Pranav Kheldar",
        coordinator: "Pranav Jadhav (Chairperson)",
        color: "#60a5fa"
    },
    "agentic-ai": {
        name: "Introduction to Agentic Ai",
        overview: "Design and deploy autonomous AI agents capable of executing complex instructions and problem-solving without human intervention.",
        time: "10:00 AM - 03:00 PM",
        date: "March 28",
        venue: "Web Tech Lab",
        schedule: "1 hr lunch",
        fee: "₹ 100",
        resourcePerson: "Mr. Nakul Deshmukh",
        coordinator: "Satyam Mishra (Chairperson)",
        color: "#22c55e"
    },
    "electric-vehicle": {
        name: "Electric Vehicle Workshop",
        overview: "Understand the core engineering of Electric Vehicles. Explore battery management systems, EV drivetrains, and modern mobility solutions.",
        time: "09:00 AM - 03:00 PM",
        date: "March 27 to 28",
        venue: "Swadhyay Kaksha",
        schedule: "1 hr lunch",
        fee: "₹ 150",
        resourcePerson: "Mr. Chetan Tajane",
        coordinator: "Tejas Pande (Chairperson)",
        color: "#f59e0b"
    },
    "cybersecurity": {
        name: "Cybersecurity Workshop",
        overview: "Protect, detect, and exploit. Learn practical ethical hacking, network defense methodologies, and vulnerability assessments.",
        time: "09:00 AM - 02:00 PM",
        date: "March 27",
        venue: "Web Tech Lab",
        schedule: "1 hr lunch",
        fee: "₹ 50",
        resourcePerson: "Miss Riya Dangra",
        coordinator: "Sanchit Dangra (Chairperson)",
        color: "#ef4444"
    },
    "web-development": {
        name: "Web Development Workshop",
        overview: "A comprehensive course on modern Web Development. Learn how to architect, develop, and deploy a responsive high-end web application.",
        time: "01:30 PM - 06:00 PM",
        date: "March 27 to 28",
        venue: "AI-ML Lab",
        schedule: "30 min break",
        fee: "₹ 100",
        resourcePerson: "Mr. Devesh Badgujar",
        coordinator: "Rutuja Deshmukh (Chairperson)",
        color: "#3b82f6"
    },
    "autodesk": {
        name: "Autodesk Workshop",
        overview: "Shape the physical world. Gain heavy hands-on experience using Autodesk Revit for architectural and mechanical engineering designs.",
        time: "08:00 AM - 01:00 PM",
        date: "March 27 to 28",
        venue: "AI-ML Lab",
        schedule: "1 hr lunch",
        fee: "₹ 100",
        resourcePerson: "Mr. Pratik Deshmukh",
        coordinator: "Shrinit Chavan (Chairperson)",
        color: "#10b981"
    },
    "esp32-raspberry-pi": {
        name: "Prototype to Product: ESP32 & Raspberry Pi",
        overview: "Learn the fundamentals of IoT using ESP32 and Raspberry Pi. Build real-world prototypes and transition them into viable products. (Open for team registrations up to 5 members!)",
        time: "09:00 AM - 02:00 PM",
        date: "March 25 to 28",
        venue: "Cadence Lab & Seminar Hall",
        schedule: "1 hr lunch",
        fee: "₹ 50 (Solo) / ₹ 250 (Team)",
        resourcePerson: "IEEE Student Chapter",
        coordinator: "Soham Bhole (Chairperson)",
        color: "#f59e0b"
    }
};

const WorkshopDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const workshop = workshopData[id];

    if (!workshop) {
        return (
            <div className="workshop-not-found">
                <h2>Workshop not found</h2>
                <button onClick={() => navigate("/workshops")} className="back-btn">Go Back</button>
            </div>
        );
    }

    const handleRegister = () => {
        navigate("/register", { state: { workshop: workshop.name } });
    };

    return (
        <div className="ws-detail-page">
            <video className="ws-bg-video" src={bgVideo} autoPlay loop muted playsInline />
            <div className="ws-overlay"></div>

            <div className="ws-content-wrapper">
                <button
                    className="ws-back-btn"
                    onClick={() => navigate("/workshops")}
                    style={{ borderColor: workshop.color, color: workshop.color }}
                >
                    &#8592; BACK TO EVENTS
                </button>

                <div className="ws-card" style={{ boxShadow: `0 0 30px ${workshop.color}40`, border: `1px solid ${workshop.color}50` }}>
                    <div className="ws-card-header">
                        <h1 className="ws-title">{workshop.name}</h1>
                    </div>

                    <div className="ws-body">
                        <div className="ws-section">
                            <h2 className="ws-section-title" style={{ color: workshop.color }}>MISSION OBJECTIVE</h2>
                            <p className="ws-section-text">{workshop.overview}</p>
                        </div>

                        <div className="ws-section">
                            <h2 className="ws-section-title" style={{ color: workshop.color }}>EVENT DETAILS</h2>

                            <div className="ws-details-grid">
                                <div className="ws-detail-item">
                                    <span className="ws-detail-label">Date:</span>
                                    <span className="ws-detail-val">{workshop.date}</span>
                                </div>
                                <div className="ws-detail-item">
                                    <span className="ws-detail-label">Time:</span>
                                    <span className="ws-detail-val">{workshop.time}</span>
                                </div>
                                <div className="ws-detail-item">
                                    <span className="ws-detail-label">Venue:</span>
                                    <span className="ws-detail-val">{workshop.venue}</span>
                                </div>
                                <div className="ws-detail-item">
                                    <span className="ws-detail-label">Fee:</span>
                                    <span className="ws-detail-val fee-highlight">{workshop.fee}</span>
                                </div>
                                <div className="ws-detail-item" style={{ gridColumn: "1 / -1" }}>
                                    <span className="ws-detail-label">Resource Person:</span>
                                    <span className="ws-detail-val">{workshop.resourcePerson}</span>
                                </div>
                            </div>

                            <div className="ws-schedule-block">
                                <div className="ws-detail-label">Schedule Summary:</div>
                                <div className="ws-detail-val">{workshop.schedule}</div>
                            </div>

                            <div className="ws-coordinator-block">
                                <span className="ws-detail-label">Coordinator:</span>
                                <span className="ws-detail-val">{workshop.coordinator}</span>
                            </div>
                        </div>
                    </div>

                    <div className="ws-footer">
                        {workshop.isFull ? (
                            <button
                                className="ws-register-btn"
                                disabled
                                style={{ background: "gray", cursor: "not-allowed", boxShadow: "none" }}
                            >
                                ENTRY FULL
                            </button>
                        ) : (
                            <button
                                className="ws-register-btn"
                                onClick={handleRegister}
                                style={{ background: workshop.color, boxShadow: `0 0 20px ${workshop.color}60` }}
                            >
                                REGISTER NOW
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkshopDetail;
