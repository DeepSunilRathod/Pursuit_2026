import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import SocialBar from "../Components/SocialBar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import "../styles/layout.css";

const MainLayout = () => {
  return (
    <div className="app-shell">
      <Navbar />
      <Sidebar />
      <SocialBar />

      {/* Page content */}
      <main className="content-shell">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
