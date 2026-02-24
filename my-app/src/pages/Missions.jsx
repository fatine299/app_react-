import React from "react";
import "./Missions.css";

export default function Mission() {
  return (
    <div className="mission-container">
      <h1>Notre Mission</h1>

      

      <div className="mission-sections">
        <div className="mission-box">
          <h3>❤️ Engagement Patient</h3>
          <p>
            Chaque patient est unique. Nous prenons le temps d’écouter,
            d’expliquer et de proposer des solutions adaptées à vos besoins
            et à votre confort.
          </p>
        </div>

        <div className="mission-box">
          <h3>🧠 Technologie & Innovation</h3>
          <p>
            Nous utilisons des équipements de dernière génération afin
            d’assurer des diagnostics précis et des soins efficaces,
            rapides et peu invasifs.
          </p>
        </div>

        <div className="mission-box">
          <h3>🌍 Qualité & Sécurité</h3>
          <p>
            Notre clinique respecte des normes strictes d’hygiène et
            de sécurité, conformes aux standards européens, pour
            garantir votre bien-être.
          </p>
        </div>
      </div>
    </div>
  );
}
