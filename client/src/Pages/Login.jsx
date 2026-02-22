import { FaGoogle, FaArrowLeft } from "react-icons/fa6";
// import "../styles/gallery.css";
import "../styles/auth.css";
import bgVideo from "../assets/bgpursuit.webm";
import { NavLink } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Logged in (demo)");
  };

  const handleGoogle = () => {
    alert("Login with Google (demo)");
  };

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
        onClick={() => window.history.back()}
      >
        <FaArrowLeft /> Back
      </button>
      <div className="auth-wrapper">
        <div className="auth-card">
          <div className="auth-card-header">
            <div className="auth-title-stack">
              <h2 className="auth-heading">Welcome Back</h2>
              <p className="auth-subtext">
                Enter your credentials to continue the journey.
              </p>
            </div>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label className="auth-label" htmlFor="login-email">
              Email
            </label>
            <input
              id="login-email"
              name="email"
              type="email"
              className="auth-input"
              placeholder="your.email@example.com"
              required
            />

            <label className="auth-label" htmlFor="login-password">
              Password
            </label>
            <input
              id="login-password"
              name="password"
              type="password"
              className="auth-input"
              placeholder="Enter Passwaord Here ..."
              required
            />

            <button type="submit" className="auth-button primary">
              Login
            </button>
            <button
              type="button"
              className="auth-button ghost"
              onClick={handleGoogle}
            >
              <FaGoogle /> Login with Google
            </button>
          </form>

          <p className="auth-footer-text">
            New here?{" "}
            <span className="auth-link">
              <NavLink to="/register"> Register to join Pursuit.</NavLink>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
