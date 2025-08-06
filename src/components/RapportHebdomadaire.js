import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RapportHebdomadaire({
  utilisateur = {
    nom: "Martha Socari",
    poste: "Infirmière référente",
  },
  semaine = { debut: "2025-07-28", fin: "2025-08-03" },
  resume = "",
  taches = [],
  pointsImportants = [],
  objectifs = [],
  remarques = "Aucune remarque spécifique."
}) {
  const navigate = useNavigate();

  return (
    <div style={styles.wrapper}>
      <header style={styles.header}>
        <h1 style={styles.title}>📊 Rapport Hebdomadaire</h1>
        <div style={styles.meta}>
          <p><strong>Nom :</strong> {utilisateur.nom}</p>
          <p><strong>Poste :</strong> {utilisateur.poste}</p>
          <p><strong>Semaine :</strong> du {semaine.debut} au {semaine.fin}</p>
        </div>
      </header>

      <main style={styles.content}>
        {resume && (
          <section style={styles.section}>
            <h2>Résumé de la semaine</h2>
            <p>{resume}</p>
          </section>
        )}

        <section style={styles.section}>
          <h2>Tâches accomplies</h2>
          <ul>
            {taches.length ? (
              taches.map((tache, i) => <li key={i}>{tache}</li>)
            ) : (
              <li>Aucune tâche renseignée.</li>
            )}
          </ul>
        </section>

        <section style={styles.section}>
          <h2>Points importants</h2>
          <ul>
            {pointsImportants.length ? (
              pointsImportants.map((point, i) => <li key={i}>{point}</li>)
            ) : (
              <li>Pas de points spécifiques.</li>
            )}
          </ul>
        </section>

        <section style={styles.section}>
          <h2>Objectifs à venir</h2>
          <ul>
            {objectifs.length ? (
              objectifs.map((objectif, i) => <li key={i}>{objectif}</li>)
            ) : (
              <li>Aucun objectif défini.</li>
            )}
          </ul>
        </section>

        <section style={styles.section}>
          <h2>Remarques</h2>
          <p>{remarques}</p>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>📅 Rapport généré le {new Date().toLocaleDateString("fr-FR")}</p>
      </footer>

      <button
        style={styles.backButton}
        onClick={() => navigate(-1)}
        aria-label="Retour"
      >
        Retour
      </button>
    </div>
  );
}

const styles = {
  wrapper: {
    maxWidth: '850px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: '#ffe4ef',
    borderRadius: '12px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.08)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    position: 'relative',
  },
  header: {
    borderBottom: '2px solid #e5e7eb',
    marginBottom: '24px',
    paddingBottom: '16px',
  },
  title: {
    fontSize: '28px',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#1f2937',
  },
  meta: {
    fontSize: '16px',
    color: '#4b5563',
  },
  content: {
    lineHeight: '1.6',
    color: '#374151',
  },
  section: {
    marginBottom: '24px',
  },
  footer: {
    marginTop: '30px',
    textAlign: 'right',
    fontSize: '0.9em',
    color: '#6b7280',
    borderTop: '1px solid #e5e7eb',
    paddingTop: '10px',
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
    fontWeight: 'bold',
    display: 'block',
    width: '100%',
    textAlign: 'center',
  },
};
