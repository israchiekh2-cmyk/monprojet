import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RendezVous() {
  const navigate = useNavigate();

  const [rendezVousList, setRendezVousList] = useState([
    { date: '2024-04-22', heure: '10:00', lieu: 'Centre' }
  ]);

  // Nouveaux états pour gérer formulaire et édition
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({ date: '', heure: '', lieu: '' });

  // Ouvre le formulaire en mode ajout
  const handleAjouter = () => {
    setFormData({ date: '', heure: '', lieu: '' });
    setEditIndex(null);
    setShowForm(true);
  };

  // Ouvre le formulaire en mode modification
  const handleModifier = (index) => {
    setFormData(rendezVousList[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  // Met à jour les valeurs du formulaire à la saisie
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Sauvegarde ajout ou modification
  const handleEnregistrer = () => {
    const { date, heure, lieu } = formData;
    if (!date || !heure || !lieu) {
      alert('Merci de remplir tous les champs');
      return;
    }

    if (editIndex !== null) {
      // Modification d’un RDV existant
      const updated = [...rendezVousList];
      updated[editIndex] = formData;
      setRendezVousList(updated);
    } else {
      // Ajout d’un nouveau RDV
      setRendezVousList([...rendezVousList, formData]);
    }

    setShowForm(false);
    setFormData({ date: '', heure: '', lieu: '' });
    setEditIndex(null);
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
          <h2 style={styles.title}>Mes Rendez-vous</h2>
        </div>

        {!showForm && (
          <button style={styles.ajouterBtn} onClick={handleAjouter}>
            ➕ Ajouter
          </button>
        )}

        {showForm && (
          <div style={styles.form}>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="time"
              name="heure"
              value={formData.heure}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="text"
              name="lieu"
              value={formData.lieu}
              onChange={handleChange}
              style={styles.input}
              placeholder="Lieu"
            />
            <button style={styles.enregistrerBtn} onClick={handleEnregistrer}>
              {editIndex !== null ? 'Modifier' : 'Ajouter'} Rendez-vous
            </button>
            <button
              style={styles.annulerBtn}
              onClick={() => {
                setShowForm(false);
                setEditIndex(null);
                setFormData({ date: '', heure: '', lieu: '' });
              }}
            >
              Annuler
            </button>
          </div>
        )}

        {!showForm &&
          rendezVousList.map((rdv, index) => (
            <div key={index} style={styles.rendezVousBox}>
              <div style={styles.dateText}>
                <div>
                  <span role="img" aria-label="calendar">
                    📅
                  </span>{' '}
                  {rdv.date}
                </div>
                <div>
                  <span role="img" aria-label="clock">
                    ⏰
                  </span>{' '}
                  {rdv.heure}
                </div>
                <div>
                  <span role="img" aria-label="location">
                    📍
                  </span>{' '}
                  {rdv.lieu}
                </div>
              </div>
              <button
                style={styles.modifierBtn}
                onClick={() => handleModifier(index)}
              >
                ✏️ Modifier
              </button>
            </div>
          ))}

        <button style={styles.retourBtn} onClick={() => navigate(-1)}>
          ⬅ Retour
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f9f1f6',
  },
  card: {
    backgroundColor: '#f7cce0',
    padding: '40px',
    borderRadius: '14px',
    width: '420px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
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
    fontSize: '22px',
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
  enregistrerBtn: {
    backgroundColor: '#17a2b8',
    color: 'white',
    border: 'none',
    padding: '10px 22px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '15px',
    marginBottom: '10px',
  },
  annulerBtn: {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '10px 22px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '15px',
  },
  rendezVousBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#fff9fe',
    padding: '16px',
    borderRadius: '10px',
    marginBottom: '20px',
    textAlign: 'left',
  },
  dateText: {
    fontSize: '14px',
    lineHeight: '1.6',
  },
  modifierBtn: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '8px 14px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    height: 'fit-content',
  },
  retourBtn: {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '10px 22px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '15px',
  },
};

export default RendezVous;
