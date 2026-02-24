import React from "react";
import "./Departement.css";

export default function Departments() {
  const departments = [
    {
      title: "Orthodontie",
      description: "Alignement des dents et amélioration du sourire avec expertise.",
      image: "/img/orthodo.jpg",
    },
    {
      title: "Implants Dentaires",
      description: "Remplacement durable des dents manquantes avec confort optimal.",
      image: "/img/implants.jpg",
    },
    {
      title: "Chirurgie Dentaire",
      description: "Interventions chirurgicales précises pour une santé bucco-dentaire optimale.",
      image: "/img/chirurgie.jpg",
    },
    {
      title: "Parodontologie",
      description: "Prévention et traitement des maladies des gencives.",
      image: "/img/paro.jpg",
    },
    {
      title: "Endodontie",
      description: "Soins de la pulpe dentaire pour sauver vos dents naturelles.",
      image: "/img/endodo.jpg",
    },
    {
      title: "Odontologie Pédiatrique",
      description: "Soins adaptés aux enfants pour un sourire sain et rassurant.",
      image: "/img/pedia.jpg",
    },
  ];

  return (
    <section className="departments-section">
      <div className="departments-hero">
        <h1>Nos Départements</h1>
        <p>Explorez nos spécialités dentaires, réalisées par des experts pour votre confort et votre santé bucco-dentaire.</p>
      </div>

      <div className="departments-cards">
        {departments.map((dept, idx) => (
          <div key={idx} className="department-card">
            <div className="dept-img-container">
              <img src={dept.image} alt={dept.title} className="dept-img" />
            </div>
            <h3>{dept.title}</h3>
            <p>{dept.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
