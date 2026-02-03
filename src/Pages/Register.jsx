
import { useState, useEffect } from "react";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import emailjs from "@emailjs/browser"; // Top-level import
import "../styles/auth.css";
import "../styles/register-full.css"; // New extended styles
import bgVideo from "../assets/bgpursuit.webm";

// --- ASSET IMPORTS ---
const placeholderQr = null;
// ---------------------

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get pre-selected workshop from navigation state if available
  const selectedWorkshop = location.state?.workshop || "";

  // --- MULTI-FORM CONFIGURATION ---

  // Define configuration for EACH workshop.
  // Keys must match the values in your "Select Workshop" dropdown exactly.
  const WORKSHOP_FORMS = {
    "Junoon": {
      actionUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdgaSKSLJxDpxSz-9yQJ82VSJhMs2pBGAmsBng3n7M8mlvbDQ/formResponse",
      fee: "₹ 149",
      qrCode: placeholderQr,
      fields: {
        NAME: "entry.912035739",
        EMAIL: "entry.605828181",
        PHONE: "entry.308491493",
        BRANCH: "entry.900388843",
        YEAR: "entry.1283716368",
        COLLEGE: "entry.2055956794",
        // TYPE: "entry.xxx", // Form does not have this field
        WORKSHOP: "entry.457607281",
        // UTR: "entry.xxx" // Form does not have this field yet!
      }
    },
    "Generative AI": {
      actionUrl: "YOUR_GOOGLE_FORM_ACTION_URL_FOR_GENAI",
      fee: "₹ 199",
      qrCode: placeholderQr,
      fields: { /* IDs */ }
    },
    "AIML": {
      actionUrl: "YOUR_GOOGLE_FORM_ACTION_URL_FOR_AIML",
      fee: "₹ 149",
      qrCode: placeholderQr,
      fields: { /* IDs */ }
    },
    "Mastering LaTeX: Type Smart, Not Hard": {
      actionUrl: "YOUR_GOOGLE_FORM_ACTION_URL_FOR_LATEX",
      fee: "₹ 99",
      qrCode: placeholderQr,
      fields: { /* IDs */ }
    },
    "Video Editing": {
      actionUrl: "YOUR_GOOGLE_FORM_ACTION_URL_FOR_VIDEOEDIT",
      fee: "₹ 149",
      qrCode: placeholderQr,
      fields: { /* IDs */ }
    },
    "Cloud Byte": {
      actionUrl: "YOUR_GOOGLE_FORM_ACTION_URL_FOR_CLOUDBYTE",
      fee: "₹ 149",
      qrCode: placeholderQr,
      fields: { /* IDs */ }
    },
    "Electric Vehicle": {
      actionUrl: "YOUR_GOOGLE_FORM_ACTION_URL_FOR_EV",
      fee: "₹ 249",
      qrCode: placeholderQr,
      fields: { /* IDs */ }
    },
    "AIML Bootcamp": {
      actionUrl: "YOUR_GOOGLE_FORM_ACTION_URL_FOR_AIMLBOOTCAMP",
      fee: "₹ 499",
      qrCode: placeholderQr,
      fields: { /* IDs */ }
    },
    // Fallback/Default if needed
    "DEFAULT": {
      actionUrl: "",
      fee: "₹ 0",
      qrCode: null,
      fields: {}
    }
  };
  // ---------------------

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "",
    year: "",
    college: "",
    type: "Workshop",
    workshop: selectedWorkshop,
    utr: "",
    paymentProof: null
  });

  // Helper to get current configuration
  const currentConfig = WORKSHOP_FORMS[formData.workshop] || WORKSHOP_FORMS["DEFAULT"];
  const currentFee = currentConfig.fee;
  const currentQr = currentConfig.qrCode;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, paymentProof: e.target.files[0] }));
  };

  // --- EMAIL JS CONFIGURATION ---
  // Credentials provided by user
  const EMAILJS_SERVICE_ID = "service_8kf3w5i";
  const EMAILJS_TEMPLATE_ID = "template_m9npo5r";
  const EMAILJS_PUBLIC_KEY = "rKZy1_B1LrPbQV6Pp";

  const sendConfirmationEmail = (data) => {
    console.log("Attempting to send email to:", data.email);

    // Check if keys are configured properly
    if (!EMAILJS_SERVICE_ID || EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID") {
      console.warn("EmailJS not configured correctly.");
      return;
    }

    const templateParams = {
      email: data.email,
      to_name: data.name,
      workshop_name: data.workshop,
      transaction_id: data.utr,
      amount: WORKSHOP_FORMS[data.workshop]?.fee || "Paid",
      message: "Thank you for registering for Pursuit 2026!"
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS! Email sent.', response.status, response.text);
      }, (err) => {
        console.error('FAILED to send email...', err);
        alert("Email failed to send. Please check console for details.\nError: " + JSON.stringify(err));
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Determine which config to use based on selected workshop
    const config = WORKSHOP_FORMS[formData.workshop] || WORKSHOP_FORMS["DEFAULT"];

    let isDemoMode = false;
    let submitUrl = config?.actionUrl || "";

    // Check if configuration is missing or uses placeholders
    if (!config || !submitUrl || submitUrl.includes("YOUR_GOOGLE_FORM")) {
      const confirmDemo = window.confirm(
        `Configuration missing for ${formData.workshop}.\n\nDo you want to run a DEMO submission to test the Email & UI flow?`
      );

      if (confirmDemo) {
        isDemoMode = true;
      } else {
        return;
      }
    }

    // Google Forms Transformation/Validation Logic (Skip if Demo)
    if (!isDemoMode) {
      // Check for common mistakes
      if (submitUrl.includes("forms.gle")) {
        alert("Error: You are using a short link (forms.gle)...");
        return;
      }

      if (submitUrl.endsWith("/viewform")) {
        submitUrl = submitUrl.replace("/viewform", "/formResponse");
      }

      // Check if it ends in formResponse, if not just warn
      if (!submitUrl.endsWith("formResponse")) {
        // simple warning, continue
      }
    }

    // --- FORM SUBMISSION (Real or Mock) ---

    if (!isDemoMode) {
      // Create a hidden iframe to prevent redirection
      const iframeId = 'hidden_iframe_' + Date.now();
      const iframe = document.createElement('iframe');
      iframe.name = iframeId;
      iframe.id = iframeId;
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      const form = document.createElement('form');
      form.action = submitUrl;
      form.method = 'POST';
      form.target = iframeId;

      const addField = (name, value) => {
        if (name) {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = name;
          input.value = value;
          form.appendChild(input);
        }
      };

      // Map form data to the specific Entry IDs for this workshop
      const fids = config.fields;

      if (fids) {
        addField(fids.NAME, formData.name);
        addField(fids.EMAIL, formData.email);
        addField(fids.PHONE, formData.phone);
        addField(fids.BRANCH, formData.branch);
        addField(fids.YEAR, formData.year);
        addField(fids.COLLEGE, formData.college);
        addField(fids.TYPE, formData.type);
        addField(fids.WORKSHOP, formData.workshop);
        if (fids.UTR) addField(fids.UTR, formData.utr);
      }

      document.body.appendChild(form);
      form.submit();

      // Cleanup DOM elements after a delay
      setTimeout(() => {
        document.body.removeChild(form);
        setTimeout(() => document.body.removeChild(iframe), 2000);
      }, 500);
    }

    // Send visual feedback and email (Run for both Demo and Real)
    // We use a slight delay to simulate network or wait for iframe
    setTimeout(() => {
      // Trigger Email Sending
      sendConfirmationEmail(formData);

      alert(`Registration Submitted Successfully for ${formData.workshop}! ${isDemoMode ? '(DEMO MODE)' : ''}\n\nCheck your email for confirmation.`);
      navigate("/workshops");
    }, 1000);
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

      <button className="auth-back" type="button" onClick={() => navigate("/workshops")}>
        <FaArrowLeft /> Back
      </button>

      <div className="auth-wrapper wide">
        <div className="auth-card">
          <div className="auth-card-header" style={{ justifyContent: 'center' }}>
            <div className="auth-title-stack">
              <h2 className="auth-heading">Registration Form</h2>
              <p className="auth-subtext">Join the Tech Odyssey</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">

            {/* PERSONAL DETAILS */}
            <div className="auth-section-title">Personal Details</div>

            <div className="form-row">
              <div className="form-group">
                <label className="auth-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="auth-input"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="auth-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="auth-input"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="auth-label">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="auth-input"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="auth-label">Branch</label>
                <input
                  type="text"
                  name="branch"
                  className="auth-input"
                  placeholder="CSE/IT/ECE..."
                  value={formData.branch}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="auth-label">Year</label>
                <select
                  name="year"
                  className="auth-input auth-select"
                  value={formData.year}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Year</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                </select>
              </div>
              <div className="form-group">
                <label className="auth-label">College</label>
                <input
                  type="text"
                  name="college"
                  className="auth-input"
                  placeholder="College Name"
                  value={formData.college}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* WORKSHOP DETAILS */}
            <div className="auth-section-title">Workshop Details</div>

            <div className="form-row">
              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="auth-label">Select Workshop</label>
                <select
                  name="workshop"
                  className="auth-input auth-select"
                  value={formData.workshop}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Option</option>
                  <option value="Junoon">Junoon</option>
                  <option value="Generative AI">Generative AI</option>
                  <option value="AIML">AIML</option>
                  <option value="Mastering LaTeX: Type Smart, Not Hard">Mastering LaTeX: Type Smart, Not Hard</option>
                  <option value="Video Editing">Video Editing</option>
                  <option value="Cloud Byte">Cloud Byte</option>
                  <option value="Electric Vehicle">Electric Vehicle</option>
                  <option value="AIML Bootcamp">AIML Bootcamp</option>
                </select>
              </div>
            </div>

            {/* PAYMENT */}
            <div className="auth-section-title">Payment Details</div>

            <div className="payment-box">
              <div className="payment-fee">Fee: {currentFee}</div>
              <div className="payment-qr-container">
                {currentQr ? (
                  <img src={currentQr} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                ) : (
                  <div className="payment-qr-placeholder">QR Code Not Available</div>
                )}
              </div>
              <p style={{ color: '#c5c9ff', fontSize: '12px', marginTop: '8px' }}>Scan to Pay</p>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="auth-label">UTR Number</label>
                <input
                  type="text"
                  name="utr"
                  className="auth-input"
                  placeholder="Transaction ID"
                  value={formData.utr}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="auth-label">Payment Proof</label>
                <input
                  type="file"
                  className="auth-input auth-file-input"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
            </div>

            <label className="terms-label">
              <input type="checkbox" className="terms-checkbox" required />
              <span>I agree to the terms and conditions</span>
            </label>

            <button type="submit" className="auth-button primary">
              Complete Registration
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;

