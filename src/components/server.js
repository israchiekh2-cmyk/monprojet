const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// ✅ Route de test
app.get("/", (req, res) => {
  res.send("Bienvenue sur le backend de Suivi Médical !");
});

// ✅ Route de connexion fictive
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@example.com" && password === "1234") {
    res.status(200).json({ message: "Connexion réussie", role: "medecin" });
  } else {
    res.status(401).json({ message: "Identifiants invalides" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend lancé sur http://localhost:${PORT}`);
});
