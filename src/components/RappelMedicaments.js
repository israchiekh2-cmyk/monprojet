import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RappelMedicaments() {
  const [medicaments, setMedicaments] = useState([]);
  const [nom, setNom] = useState('');
  const [heure, setHeure] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem('medicaments');
    if (data) setMedicaments(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('medicaments', JSON.stringify(medicaments));
  }, [medicaments]);

  const ajouterMedicament = () => {
    if (nom.trim() && heure) {
      setMedicaments([...medicaments, { nom: nom.trim(), heure }]);
      setNom('');
      setHeure('');
    }
  };

  const supprimerMedicament = (index) => {
    const newList = medicaments.filter((_, i) => i !== index);
    setMedicaments(newList);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>💊 Rappel des médicaments</h2>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Nom du médicament :</label>
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          placeholder="Ex : Metformine"
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Heure de prise :</label>
        <input
          type="time"
          value={heure}
          onChange={(e) => setHeure(e.target.value)}
          style={styles.input}
        />
      </div>

      <button onClick={ajouterMedicament} style={styles.button}>
        Ajouter le rappel
      </button>

      <ul style={styles.list}>
        {medicaments.length === 0 ? (
          <li style={styles.empty}>Aucun rappel pour l’instant.</li>
        ) : (
          medicaments.map((med, index) => (
            <li key={index} style={styles.listItem}>
              <span>{med.nom} à {med.heure}</span>
              <button
                onClick={() => supprimerMedicament(index)}
                style={styles.deleteButton}
              >
                Supprimer
              </button>
            </li>
          ))
        )}
      </ul>

      {/* 🔙 Bouton de retour */}
      <button onClick={() => navigate(-1)} style={styles.backButton}>
        Retour
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '40px auto',
    padding: '20px',
    backgroundColor: '#ffe4ec',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif'
  },
  title: {
    textAlign: 'center',
    color: '#dc2626',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px'
  },
  inputGroup: {
    marginBottom: '15px'
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px'
  },
  button: {
    width: '100%',
    backgroundColor: '#6e24f8ff',
    color: 'white',
    padding: '12px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '10px'
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    marginTop: '20px'
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
    borderBottom: '1px solid #eee'
  },
  deleteButton: {
    background: 'none',
    border: 'none',
    color: '#dc2626',
    cursor: 'pointer',
    fontSize: '0.9rem'
  },
  empty: {
    textAlign: 'center',
    color: '#777',
    padding: '10px 0'
  },
  backButton: {
    marginTop: '30px',
    width: '100%',
    backgroundColor: '#dc2626',
    color: 'white',
    padding: '12px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer'
  }
};
