import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Render() {
  const navigate = useNavigate();
  const [rendezVous, setRendezVous] = useState([
    { date: '22 avril 2024', heure: '10:00', lieu: 'Centre' }
  ]);
  const [showForm, setShowForm] = useState(false);
  const [newRDV, setNewRDV] = useState({ date: '', heure: '', lieu: '' });

  // Gestion saisie formulaire
  const handleChange = (e) => {
    setNewRDV({ ...newRDV, [e.target.name]: e.target.value });
  };

  // Ajouter un nouveau RDV
  const handleAdd = () => {
    if (newRDV.date && newRDV.heure && newRDV.lieu) {
      setRendezVous([...rendezVous, newRDV]);
      setNewRDV({ date: '', heure: '', lieu: '' });
      setShowForm(false);
    } else {
      alert("Merci de remplir tous les champs");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <img
            src="https://img.icons8.com/emoji/48/user-emoji.png"
            alt="Avatar"
            style={styles.avatar}
          />
          <h2 style={styles.title}>Mes Rendez-Vous</h2>
        </div>

        {/* Bouton Ajouter */}
        <button
          style={styles.ajouterBtn}
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Annuler' : 'Ajouter'}
        </button>

        {/* Formulaire ajout */}
        {showForm && (
          <div style={styles.form}>
            <input
              type="date"
              name="date"
              value={newRDV.date}
              onChange={handleChange}
              style={styles.input}
              placeholder="Date"
            />
            <input
              type="time"
              name="heure"
              value={newRDV.heure}
              onChange={handleChange}
              style={styles.input}
              placeholder="Heure"
            />
            <input
              type="text"
              name="lieu"
              value={newRDV.lieu}
              onChange={handleChange}
              style={styles.input}
              placeholder="Lieu"
            />
            <button style={styles.ajouterBtn} onClick={handleAdd}>
              Ajouter Rendez-vous
            </button>
          </div>
        )}

        {/* Liste des rendez-vous */}
        {rendezVous.map((rdv, index) => (
          <div key={index} style={styles.rendezVousBox}>
            <div style={styles.dateText}>
              <span role="img" aria-label="calendar">
                📅
              </span>{' '}
              {rdv.date} <br />
              {rdv.heure} - {rdv.lieu}
            </div>
            {/* Bouton Modifier à implémenter si besoin */}
            <button style={styles.modifierBtn} disabled>
              Modifier
            </button>
          </div>
        ))}

        <button style={styles.retourBtn} onClick={() => navigate(-1)}>
          Retour
        </button>
      </div>
    </div>
  );
}

// Styles inline
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f9f1f6',
  },
  card: {
    backgroundColor: '#f7cce0',
    padding: '40px',
    borderRadius: '12px',
    width: '400px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    justifyContent: 'center',
    marginBottom: '30px',
  },
  avatar: {
    width: '40px',
    height: '40px',
  },
  title: {
    margin: 0,
  },
  ajouterBtn: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '10px 22px',
    borderRadius: '6px',
    cursor: 'pointer',
    marginBottom: '25px',
    fontSize: '15px',
  },
  form: {
    marginBottom: '25px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '8px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  rendezVousBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff9fe',
    padding: '12px 16px',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  dateText: {
    textAlign: 'left',
    fontSize: '14px',
  },
  modifierBtn: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '7px 14px',
    borderRadius: '6px',
    cursor: 'not-allowed', // bouton désactivé pour l'instant
    fontSize: '14px',
  },
  retourBtn: {
    marginTop: '30px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '10px 22px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '15px',
  },
};

export default Render;
