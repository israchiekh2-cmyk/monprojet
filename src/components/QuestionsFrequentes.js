import React, { useState } from 'react';

export default function QuestionsFrequentes() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  const questions = [
    {
      question: "Comment accéder à mon espace personnel ?",
      reponse: "Cliquez sur 'Se connecter' en haut à droite, puis entrez vos identifiants personnels fournis lors de l'inscription."
    },
    {
      question: "Puis-je modifier mes informations de profil ?",
      reponse: "Oui, dans l'onglet 'Profil', cliquez sur 'Modifier' pour mettre à jour vos données personnelles."
    },
    {
      question: "Que faire en cas d’oubli de mot de passe ?",
      reponse: "Utilisez le lien 'Mot de passe oublié' sur la page de connexion. Vous recevrez un email avec les instructions de réinitialisation."
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      reponse: "Absolument. Nous utilisons des protocoles de sécurité avancés pour assurer la confidentialité et l'intégrité de vos informations."
    }
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>❓ Foire aux Questions</h1>

      <div style={styles.accordion}>
        {questions.map((item, index) => (
          <div key={index} style={styles.item}>
            <button
              onClick={() => toggle(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-${index}`}
              style={styles.question}
            >
              {item.question}
              <span style={styles.icon}>{activeIndex === index ? '−' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div id={`faq-${index}`} style={styles.answer}>
                {item.reponse}
              </div>
            )}
          </div>
        ))}
      </div>

      <button onClick={() => window.history.back()} style={styles.backButton}>
        Retour
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: '#ffe4ef',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    fontFamily: 'Segoe UI, sans-serif',
  },
  title: {
    fontSize: '28px',
    fontWeight: '600',
    marginBottom: '30px',
    textAlign: 'center',
    color: '#1f2937',
  },
  accordion: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  item: {
    borderBottom: '1px solid #e5e7eb',
    paddingBottom: '12px',
  },
  question: {
    background: 'none',
    border: 'none',
    padding: '0',
    margin: '0',
    width: '100%',
    textAlign: 'left',
    fontSize: '18px',
    fontWeight: '500',
    color: '#111827',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
  },
  icon: {
    fontSize: '24px',
    color: '#4b5563',
  },
  answer: {
    marginTop: '12px',
    fontSize: '16px',
    color: '#374151',
    lineHeight: '1.6',
  },
  backButton: {
    marginTop: '40px',
    backgroundColor: '#d81d1dff',
    color: '#fff',
    padding: '12px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
};
