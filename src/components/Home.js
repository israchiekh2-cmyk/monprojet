import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"; // adapte selon ton chemin

function Home() {
  return (
    <div style={styles.container}>
      <img src={logo} alt="Logo Suivi Médical" style={styles.logo} />
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
    background: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",
    padding: "60px 20px",
    textAlign: "center",
    fontFamily:
      "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
  },
  logo: {
    width: "140px",
    height: "auto",
    borderRadius: "16px",
    boxShadow: "0 8px 16px rgba(59, 130, 246, 0.3)",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  },
  title: {
    fontSize: "36px",
    fontWeight: "700",
    margin: "0",
    color: "#1e293b",
    textShadow: "1px 1px 3px rgba(0,0,0,0.1)",
  },
  links: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    width: "100%",
    maxWidth: "320px",
  },
  link: {
    textDecoration: "none",
    fontSize: "18px",
    padding: "14px 24px",
    backgroundColor: "#3b82f6",
    color: "white",
    borderRadius: "12px",
    boxShadow: "0 6px 12px rgba(59, 130, 246, 0.25)",
    fontWeight: "600",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
    textAlign: "center",
    userSelect: "none",
  },
};

// Ajouter un effet hover via un petit trick inline (pas recommandé en prod,
// mais ici pour garder tout dans le même fichier)

const addHoverEffect = () => {
  const links = document.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("mouseenter", () => {
      link.style.backgroundColor = "#2563eb";
      link.style.boxShadow = "0 8px 16px rgba(37, 99, 235, 0.4)";
    });
    link.addEventListener("mouseleave", () => {
      link.style.backgroundColor = "#3b82f6";
      link.style.boxShadow = "0 6px 12px rgba(59, 130, 246, 0.25)";
    });
  });
};

setTimeout(addHoverEffect, 500);

export default Home;




