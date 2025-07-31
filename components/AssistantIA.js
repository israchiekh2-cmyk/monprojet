import React from 'react';
import { useNavigate } from 'react-router-dom';

function AssistantIA() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    if (path) {
      navigate(path);
    } else {
      alert("Fonctionnalité à venir !");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Assistant IA</h2>

      <div style={styles.card}>
        <div style={styles.item} onClick={() => handleClick('/glycemie')}>
          🩸 Suivi de la glycémie
        </div>
        <div style={styles.item} onClick={() => handleClick()}>
          🥗 Conseils alimentaires
        </div>
        <div style={styles.item} onClick={() => handleClick()}>
          💊 Rappel des médicaments
        </div>
        <div style={styles.item} onClick={() => handleClick()}>
          ❓ Questions fréquentes sur le diabète
        </div>
        <div style={styles.item} onClick={() => handleClick()}>
          📈 Rapport hebdomadaire de santé
        </div>
      </div>

      <button
        style={styles.button}
        onClick={() => navigate(-1)}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#cc0000'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#e60000'}
      >
        Retour
      </button>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#fff9fe',
    minHeight: '100vh',
    padding: '40px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif'
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#111'
  },
  card: {
    width: '100%',
    maxWidth: '450px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginBottom: '40px'
  },
  item: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '16px 20px',
    fontSize: '16px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
    textAlign: 'center',
    transition: 'transform 0.2s, background-color 0.3s',
    cursor: 'pointer'
  },
  button: {
    backgroundColor: '#e60000',
    color: 'white',
    border: 'none',
    padding: '12px 32px',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'background-color 0.3s ease'
  }
};

export default AssistantIA;
