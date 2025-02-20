require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Client, Environment } = require("square");

const app = express();
app.use(cors());
app.use(express.json());

// Configurar Square Client
const client = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: process.env.SQUARE_ENVIRONMENT === "production" ? Environment.Production : Environment.Sandbox,
});

console.log("Square API Configurado Correctamente");

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
