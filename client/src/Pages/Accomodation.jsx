import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/gallery.css";
import "../styles/accommodation.css";
import bgVideo from "../assets/bgpursuit.webm";
import Rocket from "../assets/Roketpng.png";

const Accomodation = () => {
  const [isLaunching, setIsLaunching] = useState(false);
  const navigate = useNavigate();

  const handleRocketClick = () => {
    if (isLaunching) return; // Prevent double clicks

    setIsLaunching(true);

    // Navigate after animation (1s)
    setTimeout(() => {
      navigate("/register");
    }, 800);
  };

  return (
    <section className="gallery-section">
      <video
        className="gallery-bg-video"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="gallery-title-card">
        <span className="gallery-title-text">Accomodation</span>
      </div>
      <div className="accommodation-cards">
        <div className="accommodation-card">
          <h3>CHARGES</h3>
          <p>
            THE ACCOMMODATION IS FREE <br />
            FOR 2 DAYS & 2 NIGHTS AT <br />
            SSGMCE CAMPUS
          </p>
        </div>

        <div className="accommodation-card">
          <h3>LOCATION</h3>
          <p>
            STAY WILL BE PROVIDED <br />
            INSIDE SSGMCE CAMPUS
          </p>
        </div>

        <div className="accommodation-card">
          <h3>DURATION</h3>
          <p>
            ACCOMMODATION WILL BE PROVIDED <br />
            FROM FEBRUARY 27th, 06 AM UNTIL <br />
            FEBRUARY 28th, 10 PM
          </p>
        </div>
      </div>
      {/* 🚀 Rocket Animation */}
      <div
        className={`accommodation-rocket ${isLaunching ? "rocket-launch" : ""}`}
        onClick={handleRocketClick}
      >
        <img src={Rocket} alt="Rocket" />
      </div>
    </section>
  );
};

export default Accomodation;
