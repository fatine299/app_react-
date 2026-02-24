import React, { useState } from "react";
import "./RendezVous.css";

export default function RendezVous() {
  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    email: "",
    date: "",
    heure: "",
    service: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    const formDataToSend = new FormData();
    formDataToSend.append("nom", formData.nom);
    formDataToSend.append("telephone", formData.telephone);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("date_rdv", formData.date); 
    formDataToSend.append("heure", formData.heure);
    formDataToSend.append("service", formData.service);

    try {
      const response = await fetch("http://localhost/dentist-backoffice/ajouter_rendez_vous.php", {
        method: "POST",
        body: formDataToSend,
      });

      const text = await response.text();
      alert(text);

     
      setFormData({
        nom: "",
        telephone: "",
        email: "",
        date: "",
        heure: "",
        service: ""
      });
    } catch (error) {
      alert("Erreur lors de l'envoi du rendez-vous : " + error.message);
    }
  };

  return (
    <div className="rdv-container">
      
      <div className="rdv-left">
        <h1>Prendre un Rendez-vous</h1>
        <p>Remplissez le formulaire et nous vous contacterons rapidement.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nom"
            placeholder="Nom complet"
            value={formData.nom}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="telephone"
            placeholder="Téléphone"
            value={formData.telephone}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <div className="rdv-row">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />

            <input
              type="time"
              name="heure"
              value={formData.heure}
              onChange={handleChange}
              required
            />
          </div>

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Choisir un service</option>
            <option>Consultation</option>
            <option>Orthodontie</option>
            <option>Implants dentaires</option>
            <option>Blanchiment</option>
            <option>Urgence</option>
          </select>

          <button type="submit" className="rdv-btn">
            Confirmer le rendez-vous
          </button>
        </form>
      </div>

      <div className="rdv-right">
        <img src="/img/iwa.jpg" alt="Dentiste" />
      </div>
    </div>
  );
}
