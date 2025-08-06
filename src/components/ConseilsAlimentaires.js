import React from 'react';
import { useNavigate } from 'react-router-dom';

function ConseilsAlimentaires() {
  const navigate = useNavigate();

  const conseils = [
    {
      titre: '🍎 Favoriser les aliments à index glycémique bas',
      contenu:
        'Privilégiez les aliments comme les légumineuses, les céréales complètes, les légumes verts et les fruits frais non sucrés.',
    },
    {
      titre: '🥦 Manger plus de fibres',
      contenu:
        'Les fibres aident à ralentir l’absorption du sucre. Consommez des légumes, des fruits avec peau, des graines et des céréales complètes.',
    },
    {
      titre: '🚫 Éviter les sucres rapides',
      contenu:
        'Limitez les sodas, les pâtisseries, les bonbons et les jus de fruits industriels qui provoquent des pics de glycémie.',
    },
    {
      titre: '🍽️ Répartir les repas',
      contenu:
        'Faites 3 repas équilibrés par jour avec 1 à 2 collations saines. Cela aide à maintenir une glycémie stable.',
    },
    {
      titre: '💧 Boire suffisamment d’eau',
      contenu:
        'Buvez au moins 1.5L d’eau par jour pour éviter la déshydratation et aider les reins à éliminer l’excès de sucre.',
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🍽️ Conseils Alimentaires pour le Diabète</h2>
      <div style={styles.list}>
        {conseils.map((item, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.cardTitle}>{item.titre}</h3>
            <p style={styles.cardText}>{item.contenu}</p>
          </div>
        ))}
      </div>

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
    maxWidth: '800px',
    margin: '40px auto',
    padding: '20px',
    backgroundColor: '#ffe4ef',
    borderRadius: '12px',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  title: {
    textAlign: 'center',
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#2e7d32',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '16px',
    borderRadius: '10px',
    border: '2px solid #ff69b4',
  },
  cardTitle: {
    fontSize: '18px',
    marginBottom: '8px',
    color: '#388e3c',
  },
  cardText: {
    fontSize: '16px',
    color: '#444',
    lineHeight: '1.5',
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
    fontWeight: 'bold',
  },
};

export default ConseilsAlimentaires;

