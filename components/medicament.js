import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Medicament() {
  const navigate = useNavigate();

  const [medications, setMedications] = useState([
    { name: "Metformine", dosage: "500mg 2 à 3 fois par jour" },
    { name: "Insuline", dosage: "" },
    { name: "Sulfamides hypoglycémiants", dosage: "" }
  ]);

  const handleModify = (index) => {
    const newDosage = prompt("Modifier la posologie :", medications[index].dosage);
    if (newDosage !== null) {
      const updated = [...medications];
      updated[index].dosage = newDosage;
      setMedications(updated);
    }
  };

  const handleAdd = () => {
    const name = prompt("Nom du médicament :");
    const dosage = prompt("Posologie (ex: 500mg 2 fois/jour) :");
    if (name) {
      setMedications([...medications, { name, dosage }]);
    }
  };

  return (
    <div
      style={{
        padding: 20,
        fontFamily: "Arial",
        minHeight: "100vh",
        backgroundColor: "#fff6fa",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>💊 Mes Médicaments</h2>

      <button
        style={{
          backgroundColor: "green",
          color: "white",
          border: "none",
          padding: "8px 16px",
          borderRadius: "6px",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
        onClick={handleAdd}
      >
        Ajouter un médicament
      </button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {medications.map((med, index) => (
          <li
            key={index}
            style={{
              marginBottom: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#ffe6f0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <div>
              <strong>{med.name}</strong>{" "}
              {med.dosage && <span>– {med.dosage}</span>}
            </div>
            <button
              style={{
                backgroundColor: "#7b5cff",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: "6px",
                fontWeight: "bold",
              }}
              onClick={() => handleModify(index)}
            >
              Modifier
            </button>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            backgroundColor: "red",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "6px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Retour
        </button>
      </div>
    </div>
  );
}

export default Medicament;



 
