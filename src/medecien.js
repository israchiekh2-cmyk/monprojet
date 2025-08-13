import React from "react";
import { useNavigate } from "react-router-dom";

function Medecien() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <h1 style={styles.header}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/387/387561.png"
          alt="Docteur"
          width="30"
        />{" "}
        Bonjour, <b>Docteur</b>
      </h1>
      <p style={styles.subtitle}>Voici votre espace professionnel</p>

      {/* ✅ Liste des Patients */}
      <div style={styles.box}>
        <div>
          <b>📁 Liste des Patients</b>
          <p style={styles.smallText}>Voir tous vos patients enregistrés</p>
        </div>
        <button
          style={{ ...styles.button, backgroundColor: "#2563eb" }}
          onClick={() => navigate("/ListePatients")}
        >
          Consulter
        </button>
      </div>

      {/* ✅ Syndromes Dangereux */}
      <div style={styles.box}>
        <div>
          <b>⚠️ Syndromes Dangereux</b>
          <p style={styles.smallText}>Identifier les cas à risque élevé</p>
        </div>
        <button
          style={{ ...styles.button, backgroundColor: "#059669" }}
          onClick={() => navigate("/SyndromesDangereux")}
        >
          Afficher
        </button>
      </div>

      {/* ✅ Rendez-vous */}
      <div style={styles.box}>
        <div>
          <b>📅 Mes Rendez-vous</b>
          <p style={styles.smallText}>Consulter les rendez-vous à venir</p>
        </div>
        <button
          style={{ ...styles.button, backgroundColor: "#7c3aed" }}
          onClick={() => navigate("/render")}
        >
          Voir
        </button>
      </div>

      {/* ✅ Chat */}
      <div style={styles.box}>
        <div>
          <b>💬 Chat avec un patient</b>
          <p style={styles.smallText}>Communiquer rapidement avec vos patients</p>
        </div>
        <button
          style={{ ...styles.button, backgroundColor: "#6366f1" }}
          onClick={() => navigate("/chat")}
        >
          Envoyer message
        </button>
      </div>

      {/* ✅ Déconnexion */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button style={styles.logoutBtn} onClick={() => navigate("/login")}>
          Se déconnecter
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#fff1f6",
    minHeight: "100vh",
    padding: "30px",
    fontFamily: "Arial"
  },
  header: {
    fontSize: "28px"
  },
  subtitle: {
    color: "gray",
    marginTop: "-10px"
  },
  box: {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "15px",
    margin: "15px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
  },
  smallText: {
    fontSize: "12px",
    color: "gray"
  },
  button: {
    padding: "8px 16px",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer"
  },
  logoutBtn: {
    padding: "10px 20px",
    backgroundColor: "#f25f5c",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer"
  }
};

export default Medecien;

