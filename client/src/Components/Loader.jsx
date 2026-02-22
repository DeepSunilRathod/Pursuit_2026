import { useEffect, useState } from "react";
import PursuitName from "../assets/PursuitName.png";
import Rocket from "../assets/loder.png"; // Using loder.png as the moving element

const Loader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [loadingLog, setLoadingLog] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 800);
                    return 100;
                }

                // Append new logs based on progress - check for duplicates
                const addLog = (msg) => {
                    setLoadingLog(prevLog => {
                        if (prevLog.includes(msg)) return prevLog;
                        return [...prevLog, msg];
                    });
                };

                if (prev === 1) addLog("LOADING ASSETS...");
                if (prev === 30) addLog("CONFIGURING ENGINE...");
                if (prev === 60) addLog("ESTABLISHING CONNECTION...");
                if (prev === 85) addLog("LAUNCH SEQUENCE START...");

                return prev + 1;
            });
        }, 30);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                background: "#050510", // Deep dark background
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
                fontFamily: "'Courier New', Courier, monospace", // Terminal font
            }}
        >
            {/* Background Warp Stars */}
            <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
                {Array.from({ length: 60 }).map((_, i) => (
                    <div
                        key={i}
                        style={{
                            position: "absolute",
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`, // Start scattered
                            width: `${Math.random() * 3 + 1}px`,
                            height: "1px", // Streaks
                            background: "rgba(200, 220, 255, 0.8)",
                            boxShadow: "0 0 10px rgba(140, 130, 255, 0.8)",
                            borderRadius: "50%",
                            opacity: Math.random(),
                            animation: `warpSpeed ${Math.random() * 2 + 1}s linear infinite`,
                            animationDelay: `-${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>

            {/* 🖥️ Terminal Border Frame */}
            <div
                className="loader-border"
                style={{
                    position: "absolute",
                    inset: "20px", // 20px from edge
                    border: "1px solid rgba(143, 139, 255, 0.3)", // Thin main border
                    boxShadow: "0 0 15px rgba(143, 139, 255, 0.1), inset 0 0 15px rgba(143, 139, 255, 0.1)",
                    pointerEvents: "none",
                    zIndex: 20,
                }}
            >
                {/* Top Left Corner */}
                <div
                    className="loader-corner"
                    style={{
                        position: "absolute",
                        top: "-2px",
                        left: "-2px",
                        width: "30px",
                        height: "30px",
                        borderTop: "3px solid #8f8bff",
                        borderLeft: "3px solid #8f8bff",
                        filter: "drop-shadow(0 0 5px #8f8bff)",
                    }}
                />
                {/* Top Right Corner */}
                <div
                    className="loader-corner"
                    style={{
                        position: "absolute",
                        top: "-2px",
                        right: "-2px",
                        width: "30px",
                        height: "30px",
                        borderTop: "3px solid #8f8bff",
                        borderRight: "3px solid #8f8bff",
                        filter: "drop-shadow(0 0 5px #8f8bff)",
                    }}
                />
                {/* Bottom Left Corner */}
                <div
                    className="loader-corner"
                    style={{
                        position: "absolute",
                        bottom: "-2px",
                        left: "-2px",
                        width: "30px",
                        height: "30px",
                        borderBottom: "3px solid #8f8bff",
                        borderLeft: "3px solid #8f8bff",
                        filter: "drop-shadow(0 0 5px #8f8bff)",
                    }}
                />
                {/* Bottom Right Corner */}
                <div
                    className="loader-corner"
                    style={{
                        position: "absolute",
                        bottom: "-2px",
                        right: "-2px",
                        width: "30px",
                        height: "30px",
                        borderBottom: "3px solid #8f8bff",
                        borderRight: "3px solid #8f8bff",
                        filter: "drop-shadow(0 0 5px #8f8bff)",
                    }}
                />
            </div>

            {/* Container Frame (OPTIONAL, keeps it clean) */}
            <div style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                maxWidth: '500px',
                zIndex: 10 // Ensure content is above stars
            }}>

                {/* Main Logo */}
                <div style={{ marginBottom: "30px", animation: "glow 2s infinite alternate" }}>
                    <img
                        className="loader-logo"
                        src={PursuitName}
                        alt="Pursuit 2026"
                        style={{
                            width: "600px", // Reset to reasonable size if it was too huge or keep large if requested
                            maxWidth: "90%",
                            display: "block",
                            margin: "50px",
                            filter: "drop-shadow(0 0 10px rgba(140, 130, 255, 0.6))"
                        }}
                    />
                </div>

                {/* ... rest of content ... */
                    /* Since replace_file_content matches blocks, I'll include the rest up to style tag to be safe or just target the wrapper div opening if I can find a unique enough block, but the previous replace was huge. 
                       Let's target the wrapper div opening and insert stars before it. */
                }

                {/* Moving Rocket / Loder Image above bar */}
                <div
                    className="loader-rocket-container"
                    style={{
                        width: '300px',
                        position: 'relative',
                        height: '50px',
                        marginBottom: '10px'
                    }}
                >
                    <img
                        src={Rocket}
                        alt="Rocket"
                        style={{
                            height: '40px',
                            position: 'absolute',
                            left: `${progress}%`,
                            transform: 'translateX(-50%) rotate(90deg)',
                            transition: 'left 0.1s linear',
                            filter: "drop-shadow(0 0 8px #8f8bff)"
                        }}
                    />
                </div>

                {/* Progress Bar Container */}
                <div
                    className="loader-progress-container"
                    style={{
                        width: "400px",
                        height: "14px",
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(140, 130, 255, 0.3)",
                        borderRadius: "4px",
                        padding: "2px",
                        position: "relative",
                        boxShadow: "0 0 15px rgba(140, 130, 255, 0.2)"
                    }}
                >
                    {/* Progress Fill (Segmented Look) */}
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            gap: "2px"
                        }}
                    >
                        {/* We render segments based on progress */}
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div
                                key={i}
                                style={{
                                    flex: 1,
                                    background: (i / 20) * 100 < progress
                                        ? "linear-gradient(180deg, #8f8bff, #5f5bff)"
                                        : "transparent",
                                    opacity: (i / 20) * 100 < progress ? 1 : 0.1,
                                    borderRadius: "1px",
                                    boxShadow: (i / 20) * 100 < progress ? "0 0 5px rgba(143, 139, 255, 0.8)" : "none",
                                    transition: "all 0.2s"
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Percentage */}
                <p style={{
                    color: "#8f8bff",
                    marginTop: "15px",
                    fontWeight: "bold",
                    letterSpacing: "2px",
                    textShadow: "0 0 5px rgba(143, 139, 255, 0.8)"
                }}>
                    &lt; {Math.round(progress)}% &gt;
                </p>

                {/* Terminal Text */}
                <div
                    className="loader-text-container"
                    style={{
                        marginTop: "30px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                        alignItems: "flex-start", // Text aligns left
                        opacity: 0.9,
                        height: "100px",
                        justifyContent: "flex-end",
                        width: "100%",
                        maxWidth: "400px",
                        paddingLeft: "20px" // Add some padding for visual balance
                    }}>
                    {loadingLog.slice(-4).map((log, index) => (
                        <p key={index} style={{
                            color: "#d62976",
                            fontSize: "13px",
                            fontFamily: "monospace",
                            letterSpacing: "1px",
                            margin: 0,
                            whiteSpace: "nowrap",
                            animation: "fadeIn 0.3s ease-in"
                        }}>
                            ▶ {log}
                        </p>
                    ))}
                </div>

            </div>

            <style>
                {`
          @keyframes glow {
            from { filter: drop-shadow(0 0 5px rgba(140, 130, 255, 0.4)); }
            to { filter: drop-shadow(0 0 15px rgba(140, 130, 255, 0.8)); }
          }
          @keyframes warpSpeed {
            0% { transform: translateX(100vw) scaleX(1); opacity: 0; }
            10% { opacity: 1; }
            50% { transform: translateX(0) scaleX(3); opacity: 1; }
            100% { transform: translateX(-100vw) scaleX(5); opacity: 0; }
          }

          @media (max-width: 768px) {
            .loader-logo { width: 280px !important; }
            .loader-rocket-container { width: 250px !important; }
            .loader-progress-container { width: 250px !important; }
            .loader-text-container { width: 250px !important; }
            .loader-border { inset: 10px !important; }
            .loader-corner { width: 20px !important; height: 20px !important; }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(5px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
            </style>
        </div>
    );
};

export default Loader;
