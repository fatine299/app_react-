import React from "react";
import { Link } from "react-router-dom";
import { FaBullseye, FaUsers, FaTooth } from "react-icons/fa";
import "./Apropos.css";

export default function Apropos() {
  return (
    <section className="apropos-section">

      {/* Hero section with professional background */}
      <div
        className="apropos-hero"
        style={{
          backgroundImage: "url('/img/apropos.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "6rem 2rem",
          textAlign: "center",
          color: "#fff",
          position: "relative",
          borderRadius: "12px",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)"
          }}
        ></div>

        <h1 style={{ position: "relative", zIndex: 2, fontSize: "3rem", fontWeight: "700" }}>
          Bienvenue au Cabinet Dentaire Bô Sourire
        </h1>
        <p style={{ position: "relative", zIndex: 2, fontSize: "1.25rem", maxWidth: "700px", margin: "1rem auto" }}>
          Offrant des soins dentaires de qualité supérieure, une équipe experte, et un accompagnement personnalisé pour chaque sourire.
        </p>
      </div>

      {/* Cards section for Mission, Team, Services */}
      <div className="apropos-cards">
        <Link to="/missions" className="apropos-card">
          <FaBullseye className="card-icon" />
          <h3>Notre Mission</h3>
          <p>Garantir une santé bucco-dentaire optimale avec expertise et bienveillance.</p>
        </Link>

        <Link to="/equipe" className="apropos-card">
          <FaUsers className="card-icon" />
          <h3>Notre Équipe</h3>
          <p>Des dentistes et assistants qualifiés, experts dans tous les domaines de la dentisterie.</p>
        </Link>

        <Link to="/services" className="apropos-card">
          <FaTooth className="card-icon" />
          <h3>Nos Services</h3>
          <p>Soins préventifs, esthétiques et chirurgicaux avec des technologies de pointe.</p>
        </Link>
      </div>
    </section>
  );
}
