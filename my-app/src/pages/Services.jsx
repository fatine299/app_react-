import React from "react";
import "./Services.css";

export default function Services() {
  const services = [
    {
      title: "Soins Préventifs",
      description: "Contrôles réguliers, détartrages, fluorures et conseils pour garder vos dents en santé.",
      icon: "🦷",
    },
    {
      title: "Soins Esthétiques",
      description: "Blanchiment, facettes, esthétique du sourire pour un sourire éclatant.",
      icon: "✨",
    },
    {
      title: "Chirurgie Dentaire",
      description: "Extraction, implants dentaires et chirurgie buccale avec sécurité et confort.",
      icon: "🔩",
    },
    {
      title: "Orthodontie",
      description: "Appareils dentaires, aligneurs invisibles pour redresser les dents efficacement.",
      icon: "🦷➡️",
    },
    {
      title: "Urgences Dentaires",
      description: "Intervention rapide pour douleurs, fractures ou infections dentaires.",
      icon: "🚑",
    },
    {
      title: "Pédiatrie Dentaire",
      description: "Soins adaptés pour enfants, prévention et éducation bucco-dentaire.",
      icon: "👶",
    },
  ];

  return (
    <div className="services-container">
      <h1>Nos Services</h1>
      
      <div className="services-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
