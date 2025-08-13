import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SuiviGlycemie() {
  const [glycemie, setGlycemie] = useState('');
  const [date, setDate] = useState('');
  const [entries, setEntries] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!glycemie || !date) return;

    setEntries([...entries, { glycemie, date }]);
    setGlycemie('');
    setDate('');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🩸 Suivi de la glycémie</h2>

      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Valeur de glycémie (mg/dL)"
          value={glycemie}
          onChange={(e) => setGlycemie(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Enregistrer</button>
      </form>

      <h3 style={styles.subtitle}>Historique</h3>
      {entries.length === 0 ? (
        <p style={styles.noData}>Aucune donnée enregistrée.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Valeur (mg/dL)</th>
              <th style={styles.th}>Date & Heure</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={index}>
                <td style={styles.td}>{entry.glycemie}</td>
                <td style={styles.td}>{new Date(entry.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button
        onClick={() => navigate(-1)}
        style={styles.backButton}
        aria-label="Retour"
      >
       Retour
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#ffe4ec',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  },
  title: {
    fontSize: '26px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#222'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginBottom: '30px'
  },
  input: {
    padding: '10px 14px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc'
  },
  button: {
    backgroundColor: '#4e24e4ff',
    color: 'white',
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer'
  },
  subtitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333'
  },
  noData: {
    textAlign: 'center',
    color: '#777'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: 'white',
    borderRadius: '8px',
    overflow: 'hidden'
  },
  th: {
    textAlign: 'left',
    borderBottom: '1px solid #ccc',
    padding: '8px',
    backgroundColor: '#fce3ed',
    color: '#444'
  },
  td: {
    borderBottom: '1px solid #eee',
    padding: '8px'
  },
  backButton: {
    marginTop: '30px',
    padding: '12px 20px',
    backgroundColor: '#d32f2f', // rouge vif
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    display: 'block',
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold'
  }
};

export default SuiviGlycemie;

