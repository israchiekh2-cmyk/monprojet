import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RendezVous() {
  const navigate = useNavigate();

  // Liste des rendez-vous
  const [rendezVousList, setRendezVousList] = useState([
    { date: '22 avril 2024', heure: '10:00', lieu: 'Centre' }
  ]);

  // Ajouter un rendez-vous fictif
  const ajouterRendezVous = () => {
    const nouveau = {
      date: '30 juillet 2025',
      heure: '14:30',
      lieu: 'Clinique El Amen'
    };
    setRendezVousList([...rendezVousList, nouveau]);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* En-tête */}
        <div style={styles.header}>
          <img
            src="https://img.icons8.com/emoji/48/user-emoji.png"
            alt="Avatar"
            style={styles.avatar}
          />
          <h2 style={styles.title}>Mes Rendez-vous</h2>
        </div>

        {/* Bouton Ajouter */}
        <button style={styles.ajouterBtn} onClick={ajouterRendezVous}>
          ➕ Ajouter
        </button>

        {/* Liste des rendez-vous */}
        {rendezVousList.map((rdv, index) => (
          <div key={index} style={styles.rendezVousBox}>
            <div style={styles.dateText}>
              <div><span role="img" aria-label="calendar">📅</span> {rdv.date}</div>
              <div><span role="img" aria-label="clock">⏰</span> {rdv.heure}</div>
              <div><span role="img" aria-label="location">📍</span> {rdv.lieu}</div>
            </div>
            <button
              style={styles.modifierBtn}
              onClick={() => alert("Fonction de modification à venir")}
            >
              ✏️ Modifier
            </button>
          </div>
        ))}

        {/* Bouton Retour */}
        <button style={styles.retourBtn} onClick={() => navigate(-1)}>⬅ Retour</button>
      </div>
    </div>
  );
}

// Styles CSS en JS
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f9f1f6'
  },
  card: {
    backgroundColor: '#f7cce0',
    padding: '40px',
    borderRadius: '14px',
    width: '420px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'center'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    justifyContent: 'center',
    marginBottom: '30px'
  },
  avatar: {
    width: '40px',
    height: '40px'
  },
  title: {
    margin: 0,
    fontSize: '22px'
  },
  ajouterBtn: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '10px 22px',
    borderRadius: '6px',
    cursor: 'pointer',
    marginBottom: '25px',
    fontSize: '15px'
  },
  rendezVousBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#fff9fe',
    padding: '16px',
    borderRadius: '10px',
    marginBottom: '20px',
    textAlign: 'left'
  },
  dateText: {
    fontSize: '14px',
    lineHeight: '1.6'
  },
  modifierBtn: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '8px 14px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    height: 'fit-content'
  },
  retourBtn: {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '10px 22px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '15px'
  }
};

export default RendezVous;


