import React from "react";
import { useNavigate } from "react-router-dom";

function ListePatients() {
  const navigate = useNavigate();

  const patients = [
    { id: 1, nom: "Ali Ben Salah", age: 67, maladie: "Diabète type 2" },
    { id: 2, nom: "Sara Trabelsi", age: 52, maladie: "Hypertension" },
    { id: 3, nom: "Khaled Mejri", age: 74, maladie: "Diabète type 1" },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📁 Liste des Patients</h2>

      <div style={styles.list}>
        {patients.map((patient) => (
          <div key={patient.id} style={styles.card}>
            <div style={styles.avatar}>👤</div>
            <div>
              <p><b>Nom:</b> {patient.nom}</p>
              <p><b>Âge:</b> {patient.age} ans</p>
              <p><b>Maladie:</b> {patient.maladie}</p>
            </div>
          </div>
        ))}
      </div>

      <button style={styles.backButton} onClick={() => navigate(-1)}>
      Retour
      </button>
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    backgroundColor: "#fff9fe",
    minHeight: "100vh",
    fontFamily: "Arial",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  card: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
    padding: "15px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  avatar: {
    fontSize: "30px",
  },
  backButton: {
    marginTop: "30px",
    padding: "12px 20px",
    backgroundColor: "#d32f2f", // rouge vif
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    display: "block",
    textAlign: "center",
 
  },
};

export default ListePatients;


