const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Importer les routes
const symptomesRoutes = require("./routes/symptomes");
const medicamentsRoutes = require("./routes/medicaments");
const rendezvousRoutes = require("./routes/rendezvous");
const dossierRoutes = require("./routes/dossier");

// Routes principales
app.get("/", (req, res) => {
  res.send("✅ Backend connecté !");
});

app.use("/symptomes", symptomesRoutes);
app.use("/medicaments", medicamentsRoutes);
app.use("/rendezvous", rendezvousRoutes);
app.use("/dossier", dossierRoutes);

// Lancer le serveur
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend lancé sur http://localhost:${PORT}`);
});

