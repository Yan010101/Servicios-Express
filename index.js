const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const app = express();
const _URL = "http://www.raydelto.org/agenda.php";

app.use(bodyParser.json());

app.get("/contactos", async (req, res) => {
  try {
    const response = await axios.get(_URL);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

app.post("/contactos", async (req, res) => {
  const contacto = req.body;
  try {
    const response = await axios.post(_URL, contacto);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al agregar contacto" });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Servidor se inició en el puerto ${PORT}`));
