import React from "react";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import { Route,Routes } from "react-router-dom";
import Apropos from "./pages/Apropos";
import Services from "./pages/Services";
import Departement from "./pages/Departement";
import Medecins from "./pages/Medecins";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Horaires from "./pages/Horaires";
import RendezVous from "./pages/RendezVous";
import Mission from "./pages/Missions";
import Inscrire from "./components/Inscrire";
import Dashboard from "./pages/Dashboard";
import ScrollToTop from "./components/ScrollToTop";






function App() {
  return (
    <>
      <Navbar/>
      <ScrollToTop />
      <Routes>
        
        <Route path="/" element={<Home />} />
        
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Departement" element={<Departement />} />
        <Route path="/Medecins" element={<Medecins />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/rendezvous" element={<RendezVous />} />
        <Route path="/missions" element={<Mission />} />
        <Route path="/inscrire" element={<Inscrire />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
      </Routes>
      <Horaires/>
      <Footer/>
      
      
     
    </>
  );
}

export default App;
