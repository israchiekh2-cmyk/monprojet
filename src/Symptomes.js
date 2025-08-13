import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Symptomes() {
  const [symptome, setSymptome] = useState('');
  const [debut, setDebut] = useState('');
  const [severite, setSeverite] = useState('');
  const navigate = useNavigate(); // 🔁 Hook pour navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `✅ Symptôme enregistré :\n\n🩺 Symptôme : ${symptome}\n📅 Début : ${debut}\n⚠️ Sévérité : ${severite}`
    );

    setSymptome('');
    setDebut('');
    setSeverite('');
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
      <title>Signaler un symptôme</title>

      <img
        src="https://img.icons8.com/emoji/48/user-emoji.png"
        alt="avatar"
        style={{ marginBottom: '10px' }}
      />

      <h2 style={{ fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
        Signalez un symptôme
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          width: '300px',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}
      >
        <label>
          Symptôme principal :
          <input
            type="text"
            value={symptome}
            onChange={(e) => setSymptome(e.target.value)}
            required
            placeholder="ex : Fièvre"
            style={inputStyle}
          />
        </label>

        <label>
          Début des symptômes :
          <input
            type="date"
            value={debut}
            onChange={(e) => setDebut(e.target.value)}
            required
            style={inputStyle}
          />
        </label>

        <label>
          Sévérité :
          <select
            value={severite}
            onChange={(e) => setSeverite(e.target.value)}
            required
            style={inputStyle}
          >
            <option value="">-- Sélectionner --</option>
            <option value="Légère">Légère</option>
            <option value="Modérée">Modérée</option>
            <option value="Sévère">Sévère</option>
          </select>
        </label>

        <button type="submit" style={submitStyle}>
          Enregistrer
        </button>
      </form>

      {/* 🔁 Bouton qui revient à la page précédente */}
      <button onClick={() => navigate(-1)} style={retourStyle}>
        ⬅ Retour
      </button>
    </div>
  );
}

// Styles partagés
const inputStyle = {
  width: '100%',
  padding: '8px',
  borderRadius: '6px',
  border: '1px solid #ccc',
};

const submitStyle = {
  backgroundColor: '#3b82f6',
  color: 'white',
  padding: '10px',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  marginTop: '10px',
};

const retourStyle = {
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: '#ef4444',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
};

export default Symptomes;






