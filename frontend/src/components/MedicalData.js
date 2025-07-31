import React from 'react';
import { useNavigate } from 'react-router-dom';

function MedicalData() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulaire soumis !');
  };

  return (
    <div
      style={{
        backgroundColor: '#fff6fa',
        minHeight: '100vh',
        padding: '30px',
        fontFamily: 'Arial',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <img
        src="https://img.icons8.com/emoji/48/user-emoji.png"
        alt="avatar"
        style={{ marginBottom: '10px' }}
      />
      <h2 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Mes données médicales</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          width: '300px',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}
      >
        <label htmlFor="dossier" style={{ display: 'flex', flexDirection: 'column' }}>
          Dossier médical:
          <input
            id="dossier"
            rows="5"
            required
            style={{
              width: '100%',
              padding: '6px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              marginTop: '5px',
            }}
          />
        </label>

        <label htmlFor="nom" style={{ display: 'flex', flexDirection: 'column' }}>
          Nom:
          <input
            id="nom"
            type="text"
            required
            style={{
              width: '100%',
              padding: '6px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              marginTop: '5px',
            }}
          />
        </label>

        <label htmlFor="prenom" style={{ display: 'flex', flexDirection: 'column' }}>
          Prénom:
          <input
            id="prenom"
            type="text"
            required
            style={{
              width: '100%',
              padding: '6px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              marginTop: '5px',
            }}
          />
        </label>

        <button
          type="submit"
          style={{
            backgroundColor: '#c2185b',
            color: 'white',
            padding: '10px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Enregistrer
        </button>
      </form>

      <button
        onClick={() => navigate(-1)}
        style={{
          marginTop: '20px',
          backgroundColor: '#e21515ff',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        Retour
      </button>
    </div>
  );
}

export default MedicalData;




