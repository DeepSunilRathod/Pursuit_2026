# Pursuit 2026 Email & Form Setup Guide

To complete your registration system, you need to set up **EmailJS** for email notifications and **Google Forms** for data storage.

---

## 📧 Part 1: EmailJS Configuration (Automated Emails)

This allows your app to send "Registration Successful" emails automatically.

1.  **Create an Account**: Go to [emailjs.com](https://www.emailjs.com/) and sign up for a free account.
2.  **Add a Service**:
    *   Click **"Add New Service"** and choose your email provider (e.g., Gmail).
    *   Connect your account and copy the **Service ID** (e.g., `service_xyz123`).
3.  **Create an Email Template**:
    *   Go to **"Email Templates"** and create a new one.
    *   **Subject Line**: `Registration Confirmation: {{workshop_name}}`
    *   **Body Content**: Use the variables below to display user data:
        ```text
        Hello {{to_name}},
        
        You have successfully registered for {{workshop_name}} at Pursuit 2026.
        
        Details:
        - Transaction ID: {{transaction_id}}
        - Amount: {{amount}}
        
        We look forward to seeing you there!
        
        Best regards,
        Pursuit Team
        ```
    *   Save and copy the **Template ID** (e.g., `template_abc456`).
4.  **Get Your Public Key**:
    *   Go to your profile (top right) -> **Account** -> **API Keys**.
    *   Copy your **Public Key**.

### 📝 Where to Paste the Keys
Open `src/Pages/Register.jsx` and look for lines 129-131. Replace the placeholders:

```javascript
const EMAILJS_SERVICE_ID = "service_xyz123";  // Your Service ID
const EMAILJS_TEMPLATE_ID = "template_abc456"; // Your Template ID
const EMAILJS_PUBLIC_KEY = "user_12345678";    // Your Public Key
```

---

## 📝 Part 2: Google Forms Setup (Data Storage)

This connects your registration form to a Google Sheet.

1.  **Create a Google Form**: Create a new form with the following Short Answer questions:
    *   Full Name
    *   Email
    *   Phone
    *   Branch
    *   Year
    *   College
    *   Workshop Name
    *   UTR Number
2.  **Get the Submission URL**:
    *   Click the **Eye Icon** (Preview).
    *   Right-click the page -> **View Page Source**.
    *   Search for `<form action="`. Copy the URL ending in `/formResponse`.
    *   **Example**: `https://docs.google.com/forms/d/e/1FAIpQLSe.../formResponse`
3.  **Get Field IDs (Entry IDs)**:
    *   In the source code, search for `entry.` to find the ID for each question.
    *   Example: `entry.123456` corresponds to "Full Name".

### 📝 Where to Paste
Open `src/Pages/Register.jsx` and update the `WORKSHOP_FORMS` object (Lines 30-90) with your specific URLs and Entry IDs for each workshop.
