const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { realizarQuery } = require('./modulos/mysql');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

app.post('/login', async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const query = `SELECT * FROM Usuarios WHERE userName='${userName}' AND email='${email}' AND password='${password}'`;
    const resultado = await realizarQuery(query);
    if (resultado.length > 0) {
      res.json({ message: "¡Inicio de sesión exitoso!" });
    } else {
      res.json({ message: "Usuario o contraseña incorrectos" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al iniciar sesión" });
  }
});

app.post('/register', async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const duplicado = await realizarQuery(`SELECT * FROM Usuarios WHERE userName='${userName}'`);
    if (duplicado.length > 0) {
      return res.json({ message: "El usuario ya existe" });
    }
    await realizarQuery(`INSERT INTO Usuarios (userName, email, password) VALUES ('${userName}', '${email}', '${password}')`);
    res.json({ message: "Registro exitoso" });
  } catch (error) {
    res.status(500).json({ error: "Error al registrar" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
