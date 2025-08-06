import React from "react";
import { useNavigate } from "react-router-dom";

function SyndromesDangereux() {
  const navigate = useNavigate();

  const syndromes = [
    "Hyperglycémie sévère (coma hyperosmolaire)",
    "Hypoglycémie sévère",
    "Acidocétose diabétique (DKA)",
    "Maladies cardiovasculaires",
  ];

  const styles = {
    container: {
      backgroundColor: "#fff9fe",
      minHeight: "100vh",
      padding: "30px",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      fontSize: "26px",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#dc2626",
    },
    list: {
      listStyle: "none",
      padding: 0,
    },
    listItem: {
      fontSize: "16px",
      backgroundColor: "#ffffff",
      padding: "12px 16px",
      borderRadius: "8px",
      marginBottom: "10px",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    },
    hr: {
      marginTop: "8px",
      border: "none",
      borderTop: "1px solid #eee",
    },
    buttonContainer: {
      textAlign: "center",
      marginTop: "30px",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#ef4444",
      color: "white",
      border: "none",
      borderRadius: "10px",
      fontWeight: "bold",
      fontSize: "14px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>⚠️ Syndromes Dangereux</h2>

      <ul style={styles.list}>
        {syndromes.map((item, index) => (
          <li key={index} style={styles.listItem}>
            ⚠️ {item}
            <hr style={styles.hr} />
          </li>
        ))}
      </ul>

      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => navigate(-1)}>
            Retour
        </button>
      </div>
    </div>
  );
}

export default SyndromesDangereux;

