import React from "react";
import "./Navbar.css";
import { NavLink,Link } from "react-router-dom";


export default function Navbar() {
  return (
    <header id="header" className="header fixed-top">
      <div className="container d-flex align-items-center justify-content-between">

        
        <a href="/" className="logo d-flex align-items-center">
          <img src="/img/logo2rm.png" alt="Logo Clinique" />
          
        </a>

        
        <nav id="navmenu" className="navmenu">
  <ul>
    <li>
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? "active" : ""}
      >
        Accueil
      </NavLink>
    </li>
    <li>
      <NavLink 
        to="/apropos" 
        className={({ isActive }) => isActive ? "active" : ""}
      >
        À propos
      </NavLink>
    </li>
    <li>
      <NavLink 
        to="/services" 
        className={({ isActive }) => isActive ? "active" : ""}
      >
        Services
      </NavLink>
    </li>
    <li>
      <NavLink 
        to="/Departement" 
        className={({ isActive }) => isActive ? "active" : ""}
      >
        Départements
      </NavLink>
    </li>
    <li>
      <NavLink 
        to="/Medecins" 
        className={({ isActive }) => isActive ? "active" : ""}
      >
        Médecins
      </NavLink>
    </li>
    <li>
      <NavLink 
        to="/contact" 
        className={({ isActive }) => isActive ? "active" : ""}
      >
        Contact
      </NavLink>
    </li>
  </ul>
</nav>

        
       <Link to="/inscrire" className="btn-getstarted">
          Se connecter
      </Link>

      </div>
    </header>
  );
}
