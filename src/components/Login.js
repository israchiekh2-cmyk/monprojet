import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        navigate(data.redirectTo);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Erreur de connexion :", error);
      alert("Erreur serveur");
    }
  };

  return (
    <div className="page-background">
      <style>
        {`
          .page-background {
            min-height: 100vh;
            background-color: #ffe6f0;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .container {
            width: 100%;
            max-width: 400px;
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
          .links, .footer {
            margin-top: 1rem;
            text-align: center;
          }
          .link, .createLink {
            color: #cc007a;
            text-decoration: none;
            font-weight: bold;
          }
          .link:hover, .createLink:hover {
            text-decoration: underline;
          }
        `}
      </style>

      <div className="container">
        <form onSubmit={handleSubmit} className="form">
          <h2 className="title">Connexion au portail santé</h2>

          <label htmlFor="email" className="label">Adresse e-mail</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="exemple@domaine.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input"
          />

          <label htmlFor="password" className="label">Mot de passe</label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            placeholder="Votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input"
          />

          <button type="submit" className="button">
            Se connecter
          </button>

          <div className="links">
            <Link to="/MotDePasseOublie" className="link">Mot de passe oublié ?</Link>
          </div>

          <div className="footer">
            <span>Pas encore de compte ? </span>
            <Link to="/register" className="createLink">Créer un compte</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
