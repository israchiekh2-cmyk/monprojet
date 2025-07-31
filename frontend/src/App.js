// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Composants principaux
import Home from "./components/Home";
import Login from "./components/Login";

// Composants Patient
import PatientPage from "./components/PatientPage";
import MedicalData from './components/MedicalData';

import Symptomes from "./components/Symptomes";
import Glycemie from "./components/Glycemie";
import ChatPatient from "./components/ChatPatient";
import Rendezvous from "./components/Rendezvous";
import Medicament from "./components/medicament"; // attention au nom du fichier

// Composants Médecin
import Medecien from "./components/medecien";
import ListePatients from "./components/ListePatients";
import SyndromesDangereux from "./components/SyndromesDangereux";

// Autres
import AssistantIA from "./components/AssistantIA";
import Render from "./components/Render";

function App() {
  // Test de communication avec le backend
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then(res => res.text())
      .then(data => console.log("Réponse du backend :", data))
      .catch(err => console.error("Erreur de connexion backend :", err));
  }, []);

  return (
    <Router>
      <Routes>
        {/* Authentification & Accueil */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Espace Patient */}
        <Route path="/patient" element={<PatientPage />} />
        <Route path="/dossier" element={<MedicalData />} />
        <Route path="/symptomes" element={<Symptomes />} />
        <Route path="/glycemie" element={<Glycemie />} />
        <Route path="/chat" element={<ChatPatient />} />
        <Route path="/rendezvous" element={<Rendezvous />} />
        <Route path="/medicament" element={<Medicament />} />

        {/* Espace Médecin */}
        <Route path="/medecien" element={<Medecien />} />
        <Route path="/ListePatients" element={<ListePatients />} />
        <Route path="/SyndromesDangereux" element={<SyndromesDangereux />} />

        {/* Outils & Assistant */}
        <Route path="/assistant" element={<AssistantIA />} />
        <Route path="/render" element={<Render />} />
      </Routes>
    </Router>
  );
}

export default App;



     


 