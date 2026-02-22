import {
  FaTrophy,
  FaUsers,
  FaRocket,
  FaCode,
  FaNetworkWired,
} from "react-icons/fa";
import "../styles/gallery.css";
import "../styles/about.css";
import bgVideo from "../assets/bgpursuit.webm";

const About = () => {
  const features = [
    { icon: <FaRocket />, text: "National-Level Technical Symposium" },
    {
      icon: <FaUsers />,
      text: "Distinguished Platform for Student Innovation",
    },
    { icon: <FaCode />, text: "Meticulously Curated Events & Workshops" },
    { icon: <FaRocket />, text: "Coding, Robotics & Emerging Tech Challenges" },
    { icon: <FaNetworkWired />, text: "Network with Tech Innovators" },
  ];

  return (
    <section className="gallery-section about-section">
      <video
        className="gallery-bg-video"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Title */}
      <div className="gallery-title-card">
        <span className="gallery-title-text">ABOUT PURSUIT</span>
      </div>

      {/* Content */}
      <div className="about-content">
        <div className="about-subtitle-wrapper">
          <h2 className="about-subtitle">
            FLAGSHIP EVENT OF SHRI SANT GAJANAN MAHARAJ COLLEGE OF ENGINEERING,
            SHEGAON
          </h2>
        </div>

        <div className="about-features-grid">
          {features.map((feature, index) => (
            <div key={index} className="about-feature-card">
              <div className="about-feature-icon">{feature.icon}</div>
              <p className="about-feature-text">{feature.text}</p>
            </div>
          ))}
        </div>

        <div className="about-highlight-card">
          <FaTrophy className="about-trophy-icon" />
          <div className="about-highlight-content">
            <span className="about-highlight-label">Prizes Worth</span>
            <span className="about-highlight-amount">₹65,000+</span>
            <span className="about-highlight-subtext">To Be Won</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
