import React from "react";
import { useNavigate } from "react-router-dom";

function PatientPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.header}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
          alt="Patient"
          width="30"
        />{" "}
        Bonjour, <b>Patient</b>
      </h1>
      <p style={styles.subtitle}>Voici votre espace santé personnel</p>

      <div style={styles.box}>
        <div>
          <b>🗃️ Mes données médicales</b>
          <p style={styles.smallText}>Consulter vos constantes</p>
        </div>
        <button style={styles.button} onClick={() => navigate("/dossier")}>
          Voir Dossier
        </button>
      </div>

      <div style={styles.box}>
        <div>📋 Symptômes</div>
        <button
          style={{ ...styles.button, backgroundColor: "#c42828ff" }}
          onClick={() => navigate("/symptomes")}
        >
          +ajouter
        </button>
      </div>

      <div style={styles.box}>
        <div>💊 Médicaments</div>
        <button
          style={{ ...styles.button, backgroundColor: "#7bed9f" }}
          onClick={() => navigate("/medicament")}
        >
          Gérer
        </button>
      </div>

      <div style={styles.box}>
        <div>📅 Rendez-vous</div>
        <button
          style={{ ...styles.button, backgroundColor: "#cdb4f5" }}
          onClick={() => navigate("/rendezvous")}
        >
          Réserver
        </button>
      </div>

      <div style={styles.box}>
        <div>🤖 Assistant IA</div>
        <button
          style={{ ...styles.button, backgroundColor: "#d5b4f3" }}
          onClick={() => navigate("/assistant")}
        >
          Lancer
        </button>
      </div>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button style={styles.logoutBtn} onClick={handleLogout}>
          🚪 Se déconnecter
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
    fontFamily: "Arial",
  },
  header: {
    fontSize: "28px",
  },
  subtitle: {
    color: "gray",
    marginTop: "-10px",
  },
  box: {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "15px",
    margin: "15px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
  },
  smallText: {
    fontSize: "12px",
    color: "gray",
  },
  button: {
    padding: "8px 16px",
    backgroundColor: "#e2e8f0",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  logoutBtn: {
    padding: "10px 20px",
    backgroundColor: "#f25f5c",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default PatientPage;


