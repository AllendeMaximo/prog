const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001
const modelo = require('./src/modelo')


mongoose
  .connect('mongodb+srv://tbbecchi:contraseña@clusterchatgpt.lwicrq6.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.get('/api/data', async (req, res) => {
  try {
    const datos = await modelo.find({});
    res.json({ message: datos });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});