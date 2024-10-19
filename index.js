const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const eventosRoutes = require('./routes/eventos');

dotenv.config();
const app = express();

app.use(express.json()); // Middleware para procesar JSON

// Rutas
app.use('/eventos', eventosRoutes);

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado a MongoDB');
    app.listen(process.env.PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => console.error('Error de conexión a MongoDB:', error));
