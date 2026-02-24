import React from "react";
import "./Medecins.css";

export default function Medecins() {
  const doctors = [
    { name: "Dr. Amine Belkadi", specialty: "Chirurgien Dentaire", img: "/img/img6.jpg" },
    { name: "Dr. Sara El Moudni", specialty: "Orthodontiste", img: "/img/img4.jpg" },
    { name: "Dr. Youssef Fassi", specialty: "Dentiste Pédiatrique", img: "/img/img3.jpg" },
    { name: "Dr. Nadia Rifi", specialty: "Parodontiste", img: "/img/img7.jpg" },
    // Tu peux ajouter plus de médecins ici
  ];

  return (
    <div className="medecins-container">
      <div className="medecins-hero">
        <h1>Notre Équipe de Médecins</h1>
        <p>
          Découvrez nos spécialistes passionnés, qui prennent soin de votre sourire avec expertise et bienveillance.
        </p>
      </div>

      <div className="medecins-cards">
        {doctors.map((doctor, index) => (
          <div key={index} className="doctor-card">
            <div className="img-wrapper">
              <img src={doctor.img} alt={doctor.name} loading="lazy" />
              <div className="overlay">
                <h3>{doctor.name}</h3>
                <p>{doctor.specialty}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
