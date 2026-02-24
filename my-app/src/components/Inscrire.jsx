import React, { useState } from "react";
import "./Inscrire.css";

export default function Inscrire() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [robotState, setRobotState] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const url = isLogin
      ? "http://localhost/dentist-backoffice/login_user.php"
      : "http://localhost/dentist-backoffice/ajouter_patients.php";

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("username", formData.username);
      formDataToSend.append("password", formData.password);
      if (!isLogin) {
        formDataToSend.append("email", formData.email);
        formDataToSend.append("phone", formData.phone);
        formDataToSend.append("address", formData.address);
      }

      const res = await fetch(url, { method: "POST", body: formDataToSend });
      const data = await res.json();

      if (res.ok) {
        setMessage(data.success);
        setFormData({ username: "", email: "", password: "", phone: "", address: "" });
      } else {
        setMessage(data.error || "Erreur inconnue");
      }
    } catch (err) {
      setMessage("Erreur serveur : " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="robot-auth-container">
      {user && (
        <div className="welcome-box">
          ✅ Vous êtes connecté — Bienvenue {user.username}
        </div>
      )}

      <div className="robot-main-container">
        {/* IMAGE LEFT */}
        <div
          className="mascot-wrapper"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/img/inscrire.jpg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={`robot ${robotState}`}>
            <div className="antenna">
              <div className="bulb"></div>
            </div>
            <div className="head">
              <div className="face">
                <div className="eyes">
                  <div className="eye left"></div>
                  <div className="eye right"></div>
                </div>
                <div className="mouth"></div>
              </div>
            </div>
            <div className="body">
              <div className="chest-screen">
                <div className="heartbeat"></div>
              </div>
            </div>
            <div className="hands">
              <div className="hand left"></div>
              <div className="hand right"></div>
            </div>
            <div className="shadow"></div>
          </div>
        </div>

        {/* FORM RIGHT */}
        <div className="form-wrapper small-form">
          <h2>{isLogin ? "Se connecter" : "Créer un compte"}</h2>

          <form onSubmit={handleSubmit} className="signup-form">
            <input
              type="text"
              name="username"
              placeholder="Nom utilisateur"
              value={formData.username}
              onChange={handleChange}
              onFocus={() => setRobotState("waving")}
              onBlur={() => setRobotState("")}
              required
            />

            {!isLogin && (
              <>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setRobotState("reading")}
                  onBlur={() => setRobotState("")}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Numéro de téléphone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setRobotState("reading")}
                  onBlur={() => setRobotState("")}
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Adresse"
                  value={formData.address}
                  onChange={handleChange}
                  onFocus={() => setRobotState("reading")}
                  onBlur={() => setRobotState("")}
                  required
                />
              </>
            )}

            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={formData.password}
              onChange={handleChange}
              onFocus={() => setRobotState("shy")}
              onBlur={() => setRobotState("")}
              required
            />

            <button type="submit" disabled={loading} className="btn-submit">
              {loading ? "En cours..." : isLogin ? "Se connecter" : "S’inscrire"}
            </button>
          </form>

          {message && <p className="auth-msg">{message}</p>}

          <p className="toggle-text">
            {isLogin ? "Pas encore de compte ?" : "Déjà un compte ?"}{" "}
            <span className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "S’inscrire" : "Se connecter"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
