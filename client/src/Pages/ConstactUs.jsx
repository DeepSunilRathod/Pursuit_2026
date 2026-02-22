import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import "../styles/contact.css";
import bgVideo from "../assets/bgpursuit.webm";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const backendApiUrl = import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL}/api/contact` : "http://localhost:5000/api/contact";

    try {
      const response = await fetch(backendApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      alert(data.message || "Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Contact form error:", err);
      alert(`Error: ${err.message}`);
    }
  };

  return (
    <section className="contact-section">
      <video
        className="gallery-bg-video"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* <div className="contact-title-card">
        <span className="contact-title-text">Get In Touch</span>
      </div> */}

      <div className="contact-container">
        {/* Left Section - Let's Connect */}
        <div className="contact-info-section">
          <h2 className="contact-info-title">Let's Connect</h2>

          <div className="contact-info-item">
            <FaEnvelope className="contact-info-icon" />
            <div className="contact-info-text">
              <a
                href="mailto:pursuit@ssgmce.ac.in"
                className="contact-info-link"
              >
                pursuit@ssgmce.ac.in
              </a>
            </div>
          </div>
          <div className="contact-info-item phone-multiple">
            <div className="phone-row">
              <FaPhone className="contact-info-icon" />
              <a href="tel:+918766417815" className="contact-info-link">
                +91 8766417815
              </a>
            </div>

            <div className="phone-row">
              <FaPhone className="contact-info-icon" />
              <a href="tel:+918208772402" className="contact-info-link">
                +91 8208772402
              </a>
            </div>
          </div>

          <div className="contact-info-item">
            <FaMapMarkerAlt className="contact-info-icon" />
            <div className="contact-info-text">
              SSGMCE, Shegaon, Maharashtra
            </div>
          </div>

          <div className="contact-social-buttons">
            <a
              href="https://www.linkedin.com/company/pursuit-ssgmce/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              <FaLinkedin className="social-button-icon" />
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/pursuit_ssgmce?igsh=MTQxbHMzb2g3YWI4Yg=="
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              <FaInstagram className="social-button-icon" />
              Instagram
            </a>
          </div>
        </div>

        {/* Right Section - Send a Message */}
        <div className="contact-form-section">
          <h2 className="contact-form-title">Send a Message</h2>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Query
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                placeholder="What is your Query ..."
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Tell about your quey in detail..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="form-submit-button">
              <FaEnvelope className="form-submit-icon" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
