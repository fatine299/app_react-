import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";


export default function Home() {
  return (
    <>
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/img/design.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "left center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Blobs décoratifs */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      {/* Contenu principal à gauche */}
      <div className="home-left">
        <h1>Souriez avec Confiance</h1>
       

        <Link to="/rendezvous" className="btn-primary">
          Prendre un Rendez-vous
        </Link>
      </div>

      {/* Partie droite conservée mais invisible */}
      <div className="home-right"></div>
      
    </div>
    <section className="services-preview">
 

  <div className="services-cards">
    <div className="service-card">
      <img
        src="/img/test1.jpg"
        alt="Soins Préventifs"
        className="service-icon"
      />
      <h3>Soins Préventifs</h3>
      <p>
        Contrôles réguliers, détartrages, fluorures et conseils pour garder
        vos dents en santé.
      </p>
    </div>

    <div className="service-card">
      <img
        src="/img/test2.jpg"
        alt="Soins Esthétiques"
        className="service-icon"
      />
      <h3>Soins Esthétiques</h3>
      <p>
        Blanchiment, facettes, esthétique du sourire pour un sourire éclatant.
      </p>
    </div>

    <div className="service-card">
      <img
        src="/img/test3.jpg"
        alt="Chirurgie Dentaire"
        className="service-icon"
      />
      <h3>Chirurgie Dentaire</h3>
      <p>
        Extraction, implants dentaires et chirurgie buccale avec sécurité et
        confort.
      </p>
    </div>
        <Link to="/Services" className="services-link">
        Découvrir tous nos services →
        </Link>
  </div>
</section>

      </>
  );
}
