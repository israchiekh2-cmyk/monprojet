import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Composants principaux
import Home from "./components/Home";
import Login from "./components/Login";
import MotDePasseOublie from "./components/MotDePasseOublie";
import Register from "./components/Register";

// Composants Patient
import PatientPage from "./components/PatientPage";
import MedicalData from "./components/MedicalData";
import Symptomes from "./components/Symptomes";
import Glycemie from "./components/Glycemie";
import ChatPatient from "./components/ChatPatient";
import Rendezvous from "./components/Rendezvous";
import Medicament from "./components/medicament"; // attention à la casse du fichier

// Composants Médecin
import Medecien from "./components/medecien";
import ListePatients from "./components/ListePatients";
import SyndromesDangereux from "./components/SyndromesDangereux";

// Autres
import AssistantIA from "./components/AssistantIA";
import SuiviGlycemie from './components/SuiviGlycemie';
import ConseilsAlimentaires from './components/ConseilsAlimentaires';
import RappelMedicaments from './components/RappelMedicaments';
import QuestionsFrequentes from "./components/QuestionsFrequentes";
import RapportHebdomadaire from "./components/RapportHebdomadaire";
import Render from "./components/Render";

function App() {
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.text())
      .then((data) => console.log("Réponse du backend :", data))
      .catch((err) => console.error("Erreur de connexion backend :", err));
  }, []);

  return (
    <Router>
      <Routes>
        {/* Authentification & Accueil */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/motdepasseoublie" element={<MotDePasseOublie />} />
        <Route path="/register" element={<Register />} />

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
        <Route path="/listepatients" element={<ListePatients />} />
        <Route path="/syndromesdangereux" element={<SyndromesDangereux />} />

        {/* Outils & Assistant */}
        <Route path="/assistant" element={<AssistantIA />} />
               <Route path="/suiviglycemie" element={<SuiviGlycemie />} />
        <Route path="/conseilsalimentaires" element={<ConseilsAlimentaires />} />
        <Route path="/rappelmedicaments" element={<RappelMedicaments />} />
        <Route path="/questionsfrequentes" element={<QuestionsFrequentes />} />
        <Route path="/rapporthebdomadaire" element={<RapportHebdomadaire />} />

        <Route path="/render" element={<Render />} />
      </Routes>
    </Router>
  );
}

export default App;







 