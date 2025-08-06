import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function MotDePasseOublie() {
  const [email, setEmail] = useState("");
  const [envoye, setEnvoye] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setEnvoye(true);
    }, 1000);
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
        }
        .container {
          max-width: 400px;
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
          color: #0a0508;
        }
        .label {
          margin-top: 1rem;
          font-weight: 600;
        }
        .input {
          padding: 0.6rem;
          margin-top: 0.3rem;
          border-radius: 6px;
          border: 1px solid #ff99cc;
          background-color: #fff0f5;
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
        .message {
          text-align: center;
          margin-top: 1rem;
          color: green;
          font-weight: bold;
        }
        .linkButton {
          margin-top: 1.5rem;
          width: 100%;
          padding: 0.75rem;
          background-color: #dc143c; /* rouge doux */
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          transition: background 0.3s ease;
        }
        .linkButton:hover {
          background-color: #c11235;
        }
      `}</style>

      <div className="container">
        <h2 className="title">Mot de passe oublié</h2>

        {envoye ? (
          <div className="message">
            📧 Un e-mail de réinitialisation a été envoyé à <br />
            <strong>{email}</strong>.<br /><br />

            {/* Bouton retour */}
            <Link to="/" className="linkButton">
              ← Retour à la connexion
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="form">
            <label htmlFor="email" className="label">
              Adresse e-mail
            </label>
            <input
              id="email"
              type="email"
              required
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exemple@domaine.com"
            />

            <button type="submit" className="button">
              Réinitialiser le mot de passe
            </button>

            {/* Bouton retour */}
            <Link to="/" className="linkButton">
               Retour à la connexion
            </Link>
          </form>
        )}
      </div>
    </div>
  );
}








