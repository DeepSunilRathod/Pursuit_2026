import "../styles/hero.css";
import PursuitName from "../assets/PursuitName.png";
import Blackhole from "../assets/Blackhole.png";

const Home = () => {
  return (
    <section className="hero">
      {/* Background Video */}
      {/* Background Video Removed (Global in App.jsx) */}

      {/* Center Content */}
      <div className="hero-center">
        {/* Blackhole background */}
        <img src={Blackhole} alt="Blackhole" className="blackhole-bg" />

        <p className="hero-subtitle">
          <b>SSGMCE &nbsp;&nbsp;Presents</b>
        </p>

        <img src={PursuitName} alt="Pursuit 2026" className="pursuit-name" />
      </div>

      <h2 className="hero-tagline">NATIONAL-LEVEL TECHNICAL SYMPOSIUM</h2>
    </section>
  );
};

export default Home;
