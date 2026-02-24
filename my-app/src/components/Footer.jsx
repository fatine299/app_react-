import React from "react";
import "./Footer.css";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-slim">
      <div className="footer-content">
        {/* LEFT */}
        <div className="footer-left">
          <img src="/img/logo2rm.png" alt="Logo" className="footer-logo" />
          <p>Clinique Dentaire Rabat Bô Sourire agdal</p>
        </div>

        {/* MIDDLE - LINKS */}
        <div className="footer-middle">
          <ul className="footer-links">
            <li><Link to="/" className="footer-link">Accueil</Link></li>
            <li><Link to="/Apropos" className="footer-link">À propos</Link></li>
            <li><Link to="/Services" className="footer-link">Services</Link></li>
            <li><Link to="/Departement" className="footer-link">Département</Link></li>
            <li><Link to="/Medecins" className="footer-link">Médecins</Link></li>
            <li><Link to="/Contact" className="footer-link">Contact</Link></li>
            <li><Link to="/rendezvous" className="footer-link">Rendez-vous</Link></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <p><FaEnvelope className="icon"/> bosourire.agdal@gmail.com</p>
          <p><FaPhone className="icon"/> +212 537 77 48 48</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Cabinet Dentaire. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
