import "../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        <Link to="/login" style={{ color: 'inherit', textDecoration: 'none', cursor: 'default' }}>©</Link> 2026 Pursuit 2026. All Rights Reserved.
      </p>
      <p>DesignedDeveloped by Team Pursuit</p>
    </footer>
  );
};

export default Footer;
