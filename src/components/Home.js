import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.container}>
    <img src="/logo.jpg" alt="Logo Suivi Médical" style={styles.logo} />
      <h1 style={styles.title}>Application de Suivi Médical</h1>

      <div style={styles.links}>
        <Link to="/Login" style={styles.link}>
          🔐 Connexion 
        </Link>
        <Link to="/patient" style={styles.link}>
          👤 Espace Patient
        </Link>
        <Link to="/medecien" style={styles.link}>
          🩺 Espace Médecien
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #f0f4f8, #e0f7fa)",
    padding: "40px",
    textAlign: "center",
    fontFamily: "Arial"
  },
  logo: {
    width: "120px",
    height: "auto",
    marginBottom: "20px"
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "40px",
    color: "#1f2937"
  },
  links: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center"
  },
  link: {
    textDecoration: "none",
    fontSize: "18px",
    padding: "10px 20px",
    backgroundColor: "#3b82f6",
    color: "white",
    borderRadius: "8px",
    width: "200px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
  }
};

export default Home;



