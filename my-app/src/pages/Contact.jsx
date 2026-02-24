import React, { useState } from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback("");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("subject", formData.subject);
      formDataToSend.append("message", formData.message);

      const res = await fetch("http://localhost/dentist-backoffice/contact_messages.php", {
        method: "POST",
        body: formDataToSend
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setFeedback(data.success);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setFeedback(data.error || "Erreur inconnue");
      }
    } catch (err) {
      setFeedback("Erreur serveur : " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Info Cards */}
      <div className="contact-info">
        <div className="info-card">
          <FaMapMarkerAlt className="info-icon" />
          <div>
            <h4>Adresse</h4>
            <p>Clinique Dentaire Rabat Bô Sourire, Agdal, Rabat</p>
          </div>
        </div>
        <div className="info-card">
          <FaPhone className="info-icon" />
          <div>
            <h4>Téléphone</h4>
            <p>+212 537 77 48 48</p>
          </div>
        </div>
        <div className="info-card">
          <FaEnvelope className="info-icon" />
          <div>
            <h4>Email</h4>
            <p>bosourire.agdal@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Map + Form */}
      <div className="contact-main">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d332.123456789!2d-6.8466118!3d34.0006747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76d83d343a789%3A0x69bef784ed41d1c!2sClinique%20Dentaire%20Rabat%20B%C3%B4%20Sourire%20agdal!5e0!3m2!1sfr!2sma!4v1700000000000!5m2!1sfr!2sma"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Cabinet Dentaire Bô Sourire"
          />
        </div>

        <div className="contact-form-wrapper">
          <h2>Contactez-nous</h2>
          <p>Remplissez le formulaire ci-dessous pour prendre rendez-vous ou poser vos questions.</p>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Sujet"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Envoi..." : "Envoyer le message"}
            </button>
          </form>
          {feedback && <p className="feedback">{feedback}</p>}
        </div>
      </div>
    </div>
  );
}
