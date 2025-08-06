import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [naissance, setNaissance] = useState("");
  const [sexe, setSexe] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    // Simulation de création de compte
    alert("Compte créé avec succès !");
    navigate("/login");
  };

  return (
    <div className="page-background">
      <style>{`
        .page-background {
          min-height: 100vh;
          background-color: #ffe6f0;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
        }
        .container {
          max-width: 450px;
          width: 100%;
          padding: 2rem;
          background: #ffd1e8;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          font-family: 'Segoe UI', sans-serif;
          color: #800040;
        }
        .form {
          display: flex;
          flex-direction: column;
        }
        .title {
          text-align: center;
          margin-bottom: 1.5rem;
          color: #0a0508ff;
        }
        .label {
          margin-top: 1rem;
          font-weight: 600;
        }
        .input, .radio-group input {
          padding: 0.6rem;
          margin-top: 0.3rem;
          border-radius: 6px;
          border: 1px solid #ff99cc;
          background-color: #fff0f5;
        }
        .radio-group {
          display: flex;
          gap: 10px;
          margin-top: 0.5rem;
        }
        .radio-label {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .button {
          margin-top: 1.5rem;
          padding: 0.75rem;
          background-color: #4d68ff;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .button:hover {
          background-color: #e60073;
        }
        .error {
          color: red;
          margin-top: 1rem;
          font-weight: bold;
          text-align: center;
        }
        .btn-return {
          margin-top: 1.2rem;
          padding: 0.6rem;
          width: 100%;
          background-color: #ff4d6d;
          border: none;
          border-radius: 6px;
          color: white;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s ease;
          font-size: 1rem;
        }
        .btn-return:hover {
          background-color: #cc0040;
        }
      `}</style>

      <div className="container">
        <h2 className="title">Créer un compte</h2>

        <form onSubmit={handleSubmit} className="form">
          <label className="label">Prénom</label>
          <input
            type="text"
            className="input"
            required
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />

          <label className="label">Nom</label>
          <input
            type="text"
            className="input"
            required
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />

          <label className="label">Adresse e-mail</label>
          <input
            type="email"
            className="input"
            required
            value={email}
            placeholder="exemple@domaine.com"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="label">Numéro de téléphone</label>
          <input
            type="tel"
            className="input"
            required
            value={telephone}
            placeholder="ex: +216 12 345 678"
            onChange={(e) => setTelephone(e.target.value)}
          />

          <label className="label">Date de naissance</label>
          <input
            type="date"
            className="input"
            required
            value={naissance}
            onChange={(e) => setNaissance(e.target.value)}
          />

          <label className="label">Sexe</label>
          <div className="radio-group">
            <label className="radio-label">
              <input type="radio" name="sexe" value="Homme" onChange={(e) => setSexe(e.target.value)} /> Homme
            </label>
            <label className="radio-label">
              <input type="radio" name="sexe" value="Femme" onChange={(e) => setSexe(e.target.value)} /> Femme
            </label>
            <label className="radio-label">
              <input type="radio" name="sexe" value="Autre" onChange={(e) => setSexe(e.target.value)} /> Autre
            </label>
          </div>

          <label className="label">Mot de passe</label>
          <input
            type="password"
            className="input"
            required
            placeholder="Minimum 8 caractères"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label className="label">Confirmer le mot de passe</label>
          <input
            type="password"
            className="input"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {error && <div className="error">{error}</div>}

          <button type="submit" className="button">Créer un compte</button>
        </form>

        <button className="btn-return" onClick={() => navigate("/login")}>
          Retour à la connexion
        </button>
      </div>
    </div>
  );
}
