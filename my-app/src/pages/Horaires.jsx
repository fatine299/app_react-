import React from "react";
import "./Horaires.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Horaires() {
  return (
    <section className="horaires-section">

      {/* Left: Opening Hours */}
      <div className="horaires-left">
        <h2>Horaires d'Ouverture</h2>
        <div className="horaires-card">
          <h3>Lundi - Vendredi</h3>
          <p>08:00 - 19:00</p>
        </div>
        <div className="horaires-card">
          <h3>Samedi</h3>
          <p>09:00 - 14:00</p>
        </div>
        <div className="horaires-card closed">
          <h3>Dimanche</h3>
          <p>Fermé</p>
        </div>
      </div>

      {/* Right: Contact Info */}
      <div className="horaires-right">
        <h2>Contactez-Nous</h2>
        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon"/>
          <p>Agdal, Rabat</p>
        </div>
        <div className="contact-card">
          <FaPhoneAlt className="contact-icon"/>
          <p>+212 537 77 48 48</p>
        </div>
        <div className="contact-card">
          <FaEnvelope className="contact-icon"/>
          <p>bosourire.agdal@gmail.com</p>
        </div>
      </div>

    </section>
  );
}
